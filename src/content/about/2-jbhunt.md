---
title: J.B. Hunt
index: 2
---

After working at SAPIEN for a few years I moved back to Arkansas to be closer to family and started a job at [J.B. Hunt][0]. It's no exaggeration to say I learned the most about everything involved with software development at an enterprise level while I worked there.

<br />

I started as a contractor who worked the night shift (18:00 - 06:00) on Wednesday - Friday/Saturday as a **NOC Engineer**. Because of how my shift was scheduled I was the NOC Engineer on duty when we did our monthly release cycle. This meant I was interfacing with all of our development teams on a regular basis to help improve their deployment processes.

<br />

Because of my experience with [PowerShell][1], and the fact our [Jenkins][2] server lived off custom built PowerShell scripts, I became the de facto Jenkins admin for any issues it had. This was a great opportunity for me to learn more about Jenkins, [Groovy][3], and automation at scale in general. While working overnight I would work directly with our overseas development team to help with any issues they faced when deploying via Jenkins.

<br />

After being hired on full-time I was moved to a more standard day shift schedule, working Monday - Friday (09:00 - 17:00) where I began to do more and more DevOps related tasks. I was responsible for working with our CICD team to maintain Jenkins, write new pipelines, and help with any issues that arose. I also worked with our development teams to help them write better tests, improve their deployment processes, and automate anything that could be automated.

<br />

To sum up, I ended my time at J.B. Hunt as a **Sr. Operations Engineer** and it was the greatest learning experience I've ever had. I'm beyond grateful for all of the things I was able to worked on and the people I was able to work with while I was there. The following provides some more highlights of my time there:

<br />

- Maintaining the infrastructure for our installations of Dynatrace and [ExtraHop][4].
  - Dynatrace was hosted on a cluster of primary servers with numerous extra servers for various services.
  - ExtraHop was hosted on a special beast of a machine that connected to a lot of "sensor" servers.
- Working with the CICD team:
  - Build pipelines in [Azure DevOps][5], as well as write custom scripts that would be used by all of the development teams during their deployment process.
  - Helped maintain our installation of Jenkins, wrote new scripts for deploying to new systems.
  - Maintained old scripts responsible for deploying legacy applications to legacy systems.
- Working with the SRE team to create a custom scorecard system for all of the applications and services across the enterprise.
  - This was a collection of batch/cron jobs that would gather metrics and display them using PowerBI.
  - I built it alongside a new member of the SRE team and then when it was complete I handed it off to them to maintain.
  - I worked with that SRE team member for a couple months to ensure things transitioned smoothly before moving on to other tasks.

[0]: https://www.jbhunt.com
[1]: https://github.com/PowerShell/PowerShell
[2]: https://jenkins.io
[3]: https://groovy-lang.org
[4]: http://extrahop.com
[5]: https://dev.azure.com
