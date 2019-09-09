# DSS Code Challenge

Welcome to the code challenge for web software engineering at Disney Streaming. This repo is actually a small web application, a video player written in React, and your job is to implement some improvements and features.

There are several tasks listed below as **Required**, which are the baseline for completing a successful application. There are more tasks listed as **Extra**, which are either extra credit or which you may be asked by a hiring manager to complete.

Feel free to reach out to your point of contact at Disney Streaming with any questions.

# Steps to Completion

1) Clone this repo and install its dependencies with npm.

2) Create a branch with your name (e.g.: jane-dough).

3) Complete the required baseline tasks.

4) Complete any extra tasks you would like to or that have been requested of you.

5) Make a PR against the master branch from your branch.

6) Alert the hiring manager or recruiter that you've made the PR.

# Required Tasks

1) Implement these layouts for mobile and desktop. Use Styled Components for the CSS.

Mobile

<img alt="mobile design" src="https://fed-dss-challenge-qa.s3.amazonaws.com/assets/img/mobile-design.png" width="300">

Desktop

<img alt="desktop design" src="https://fed-dss-challenge-qa.s3.amazonaws.com/assets/img/desktop-design.png" width="300">
<hr>

2) Right now the app shows 3 videos, but there are more in video-data.json. Load these videos as well and implement scrolling in the VideoList component.

3) Sort the videos so they display alphabetically by title.

4) This is not a design challenge, but use your best judgement to make the site look nice.

# Extra Tasks

1) Refactor the app to use Redux instead of hooks for managing global state. Make sure to enable Redux Dev Tools, too.

2) Implement lazy loading, loading 5 videos at a time on scroll down in VideoList.

3) Add deep linking support so that a user can link directly to a video and so that clicking on a thumbnail not only plays the video but also reflects the title in the browser url bar. Consider a library like React Router.
