<?php 
namespace { 
  
     if (!defined('PASSWORD_BCRYPT')) { 
         define('PASSWORD_BCRYPT', 1); 
         define('PASSWORD_DEFAULT', PASSWORD_BCRYPT); 
         define('PASSWORD_BCRYPT_DEFAULT_COST', 10); 
     } 
  
     if (!function_exists('password_hash')) { 
         function password_hash($password, $algo, array $options = array()) { 
             if (!function_exists('crypt')) { 
                 trigger_error("Crypt must be loaded for password_hash to function", E_USER_WARNING); 
                 return null; 
             } 
             if (is_null($password) || is_int($password)) { 
                 $password = (string) $password; 
             } 
             if (!is_string($password)) { 
                 trigger_error("password_hash(): Password must be a string", E_USER_WARNING); 
                 return null; 
             } 
             if (!is_int($algo)) { 
                 trigger_error("password_hash() expects parameter 2 to be long, " . gettype($algo) . " given", E_USER_WARNING); 
                 return null; 
             } 
             $resultLength = 0; 
             switch ($algo) { 
                 case PASSWORD_BCRYPT: 
                     $cost = PASSWORD_BCRYPT_DEFAULT_COST; 
                     if (isset($options['cost'])) { 
                         $cost = (int) $options['cost']; 
                         if ($cost < 4 || $cost > 31) { 
                             trigger_error(sprintf("password_hash(): Invalid bcrypt cost parameter specified: %d", $cost), E_USER_WARNING); 
                             return null; 
                         } 
                     } 
                     $raw_salt_len = 16; 
                     $required_salt_len = 22; 
                     $hash_format = sprintf("$2y$%02d$", $cost); 
                     $resultLength = 60; 
                     break; 
                 default: 
                     trigger_error(sprintf("password_hash(): Unknown password hashing algorithm: %s", $algo), E_USER_WARNING); 
                     return null; 
             } 
             $salt_req_encoding = false; 
             if (isset($options['salt'])) { 
                 switch (gettype($options['salt'])) { 
                     case 'NULL': 
                     case 'boolean': 
                     case 'integer': 
                     case 'double': 
                     case 'string': 
                         $salt = (string) $options['salt']; 
                         break; 
                     case 'object': 
                         if (method_exists($options['salt'], '__tostring')) { 
                             $salt = (string) $options['salt']; 
                             break; 
                         } 
                     case 'array': 
                     case 'resource': 
                     default: 
                         trigger_error('password_hash(): Non-string salt parameter supplied', E_USER_WARNING); 
                         return null; 
                 } 
                 if (PasswordCompat\binary\_strlen($salt) < $required_salt_len) { 
                     trigger_error(sprintf("password_hash(): Provided salt is too short: %d expecting %d", PasswordCompat\binary\_strlen($salt), $required_salt_len), E_USER_WARNING); 
                     return null; 
                 } elseif (0 == preg_match('#^[a-zA-Z0-9./]+$#D', $salt)) { 
                     $salt_req_encoding = true; 
                 } 
             } else { 
                 $buffer = ''; 
                 $buffer_valid = false; 
                 if (function_exists('mcrypt_create_iv') && !defined('PHALANGER')) { 
                     $buffer = mcrypt_create_iv($raw_salt_len, MCRYPT_DEV_URANDOM); 
                     if ($buffer) { 
                         $buffer_valid = true; 
                     } 
                 } 
                 if (!$buffer_valid && function_exists('openssl_random_pseudo_bytes')) { 
                     $strong = false; 
                     $buffer = openssl_random_pseudo_bytes($raw_salt_len, $strong); 
                     if ($buffer && $strong) { 
                         $buffer_valid = true; 
                     } 
                 } 
                 if (!$buffer_valid && @is_readable('/dev/urandom')) { 
                     $file = fopen('/dev/urandom', 'r'); 
                     $read = 0; 
                     $local_buffer = ''; 
                     while ($read < $raw_salt_len) { 
                         $local_buffer .= fread($file, $raw_salt_len - $read); 
                         $read = PasswordCompat\binary\_strlen($local_buffer); 
                     } 
                     fclose($file); 
                     if ($read >= $raw_salt_len) { 
                         $buffer_valid = true; 
                     } 
                     $buffer = str_pad($buffer, $raw_salt_len, "\0") ^ str_pad($local_buffer, $raw_salt_len, "\0"); 
                 } 
                 if (!$buffer_valid || PasswordCompat\binary\_strlen($buffer) < $raw_salt_len) { 
                     $buffer_length = PasswordCompat\binary\_strlen($buffer); 
                     for ($i = 0; $i < $raw_salt_len; $i++) { 
                         if ($i < $buffer_length) { 
                             $buffer[$i] = $buffer[$i] ^ chr(mt_rand(0, 255)); 
                         } else { 
                             $buffer .= chr(mt_rand(0, 255)); 
                         } 
                     } 
                 } 
                 $salt = $buffer; 
                 $salt_req_encoding = true; 
             } 
             if ($salt_req_encoding) { 
                 $base64_digits = 
                     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; 
                 $bcrypt64_digits = 
                     './ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
  
                 $base64_string = base64_encode($salt); 
                 $salt = strtr(rtrim($base64_string, '='), $base64_digits, $bcrypt64_digits); 
             } 
             $salt = PasswordCompat\binary\_substr($salt, 0, $required_salt_len); 
  
             $hash = $hash_format . $salt; 
  
             $ret = crypt($password, $hash); 
  
             if (!is_string($ret) || PasswordCompat\binary\_strlen($ret) != $resultLength) { 
                 return false; 
             } 
  
             return $ret; 
         } 
         function password_get_info($hash) { 
             $return = array( 
                 'algo' => 0, 
                 'algoName' => 'unknown', 
                 'options' => array(), 
             ); 
             if (PasswordCompat\binary\_substr($hash, 0, 4) == '$2y$' && PasswordCompat\binary\_strlen($hash) == 60) { 
                 $return['algo'] = PASSWORD_BCRYPT; 
                 $return['algoName'] = 'bcrypt'; 
                 list($cost) = sscanf($hash, "$2y$%d$"); 
                 $return['options']['cost'] = $cost; 
             } 
             return $return; 
         } 
         function password_needs_rehash($hash, $algo, array $options = array()) { 
             $info = password_get_info($hash); 
             if ($info['algo'] !== (int) $algo) { 
                 return true; 
             } 
             switch ($algo) { 
                 case PASSWORD_BCRYPT: 
                     $cost = isset($options['cost']) ? (int) $options['cost'] : PASSWORD_BCRYPT_DEFAULT_COST; 
                     if ($cost !== $info['options']['cost']) { 
                         return true; 
                     } 
                     break; 
             } 
             return false; 
         } 
         function password_verify($password, $hash) { 
             if (!function_exists('crypt')) { 
                 trigger_error("Crypt must be loaded for password_verify to function", E_USER_WARNING); 
                 return false; 
             } 
             $ret = crypt($password, $hash); 
             if (!is_string($ret) || PasswordCompat\binary\_strlen($ret) != PasswordCompat\binary\_strlen($hash) || PasswordCompat\binary\_strlen($ret) <= 13) { 
                 return false; 
             } 
  
             $status = 0; 
             for ($i = 0; $i < PasswordCompat\binary\_strlen($ret); $i++) { 
                 $status |= (ord($ret[$i]) ^ ord($hash[$i])); 
             } 
  
             return $status === 0; 
         } 
     } 
  
 } 
  
 namespace PasswordCompat\binary { 
  
     if (!function_exists('PasswordCompat\\binary\\_strlen')) { 
         function _strlen($binary_string) { 
             if (function_exists('mb_strlen')) { 
                 return mb_strlen($binary_string, '8bit'); 
             } 
             return strlen($binary_string); 
         } 
         function _substr($binary_string, $start, $length) { 
             if (function_exists('mb_substr')) { 
                 return mb_substr($binary_string, $start, $length, '8bit'); 
             } 
             return substr($binary_string, $start, $length); 
         } 
         function check() { 
             static $pass = NULL; 
  
             if (is_null($pass)) { 
                 if (function_exists('crypt')) { 
                     $hash = '$2y$04$usesomesillystringfore7hnbRJHxXVLeakoG8K30oukPsA.ztMG'; 
                     $test = crypt("password", $hash); 
                     $pass = $test == $hash; 
                 } else { 
                     $pass = false; 
                 } 
             } 
             return $pass; 
         } 
  
     } 
 } 

?>