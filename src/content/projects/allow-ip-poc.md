---
title: Allow IP PoC
description: A PoC script to automatically manage the GitHub IP Allow List.
startDate: 2023-07-05
status: Maintenance
img: /assets/img/GitHub-Logo-White.svg
img_alt: The GitHub logo.
repo: https://github.com/4lch4/Allow-IP-PoC
tags:
  - GitHub
  - CICD
  - JavaScript
---

While I was working at [Liatrio][0] one of our clients requested a solution to automatically add the IP addresses used by GitHub to their GitHub Organizations IP Allow List. This was because the organization required an IP allow list to prevent unauthorized access to their repositories and services but still required GitHub Actions to be able to run without any issues.

The solution I came up with was a simple Node.js script that would get the latest batch of IP addresses used by GitHub [via their API][1] and then use the API again to add those IPs to the organizations allow list. The script would then be run as a scheduled GitHub Action Workflow to ensure that the allow list was always up to date.

The script was a success and the client was happy with the solution. The script was then added to the client's GitHub repository and has been running without any issues since then. The script is now open-source and available for anyone to use and modify as they see fit.

[0]: https://liatrio.com
[1]: https://docs.github.com/en/rest/meta/meta?apiVersion=2022-11-28#get-github-meta-information
