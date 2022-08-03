# Personal site (old)

* old site [here](https://imjustlooking.github.io/portfolio/)

Visit [site](http://www.gabrielu.xyz).
This is where I store the code for my personal site for now.

Initially I had hosted it using herokuapp with a node.js framework, thinking to add routing. However, herokuapp limits your app active time and only wakes it up when the url is visited in a 30 minute window. Read more about heroku's policies for free hosting [here](https://www.heroku.com/free).

As of Dec 29, ```"When it idles (automatically, after 30 minutes of inactivity), or when you scale it down, your app will stop consuming dyno hours."``` What this means, is that after at least 30 minutes, your site becomes inactive, and requires a long initial load time, in my experience. That's not something your visitors would like; Github pages are pretty fast on the other hand.

I used [namecheap.com](http://www.namecheap.com) to purchase the domain, and that is also where I made adjustments to the advanced DNS settings.

If you are keen to find out how to use a custom domain for your github page hosting, I have added some pictures below to show you my current configuration.

* Disclaimer: There may be more updated and official resources out there such as [this](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages) documenting how to host between your domain site and github. It's best to do your own homework and follow those instead :)

Namecheap settings
======
Let's log in to your namecheap account, then locate your domain under Domain List. Click Manage beside it >> Advanced DNS.

You will need to change the settings under Host Records.

- Type 'A record' with Host '@' and Value '192.30.252.153'
- Type 'A record' with Host '@' and Value '192.30.252.154'
- Type 'CNAME record' with Host 'www' and Value 'username.github.io'.
- Remember TTL is set to Automatic. It means Time To Live, though I'm not sure how it really affects the uptime.

![Namecheap settings](/pics/namecheap_settings.png "Github pages settings")

Github settings
======

This part's easy.
Navigate to your github repository >> Settings >> Scroll down to Github Pages >> adjust custom domain to 'yourdomainname.com'. Once you have done so, this automatically creates a corresponding CNAME file in your root directory of the git repo.

I also assume you have already hosted the project on github pages. If you have not, adjust source to master branch >> Save.

![Github pages settings](/pics/github_settings.png "Github pages settings")


Tip
======
It takes a while for the settings to take effect. In my experience with Namecheap, they had a live helpdesk which you can consult with. One of their representatives shared this hot tip with me - use [Kproxy](https://kproxy.com/).

If your website is still not accessible via domainname.com, enter that into Kproxy, and it will show up the website display as if propagation has taken place ONLY IF you have set this up correctly. The CSS seems to be messed up when visiting through this proxy, but at least it gave me peace of mind to not wait in vain.
