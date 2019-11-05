# Web Skill Assessment

Welcome to the code challenge for web software engineering at Disney Streaming. This repo is actually a small web application, a video player written in React, and your job is to implement some improvements and features.

There are several tasks listed below as **Required**, which are the baseline for completing a successful application. There are more tasks listed as **Extra**, which are either extra credit or which you may be asked by a hiring manager to complete.

Feel free to reach out to your point of contact at Disney Streaming with any questions.

# General Setup and Submission Process

1) Fork this repo to your personal GitHub account.

2) Clone the forked repo to your computer and install its dependences with npm.

3) Create a branch with your name (e.g.: *jane-dough*) in your fork.

4) Complete the **Required** tasks (see below).

5) Complete any **Extra** tasks that you can within the given time.

6) Make a PR against the master branch from your name branch. **Do not PR across forks. PR against your branch's master!**

7) Alert your recruiter that you've submitted a PR. They _may_ ask you to add collaborators.

# Required Coding Tasks

1) Implement these layouts for mobile and desktop. Use Styled Components for the CSS.

Mobile

<img alt="mobile design" src="https://fed-dss-challenge-qa.s3.amazonaws.com/assets/img/mobile-design.png" width="300">

Desktop

<img alt="desktop design" src="https://fed-dss-challenge-qa.s3.amazonaws.com/assets/img/desktop-design.png" width="300">
<hr>

2) Right now the app shows 3 videos, but there are more in video-data.json. Load these videos as well and implement scrolling in the VideoList component.

3) Sort the videos so they display alphabetically by title.

4) This is not a design challenge, but use your best judgement to make the site look nice.

5) Make the selected video autoplay when a tile in the list is clicked.

6) If you are applying for a **senior** role, refactor the app to use Redux instead of hooks for managing global state. Make sure to enable Redux Dev Tools, too. Consider this an Extra Task if you aren't applying for a senior role.

# Extra Tasks (Complete any you can in the given time.)

1) Write tests using the tool of your choice.

2) Implement lazy loading, loading 5 videos at a time on scroll down in VideoList.

3) Add deep linking support so that a user can link directly to a video and so that clicking on a thumbnail not only plays the video but also reflects the title in the browser url bar. Consider a library like React Router.

4) Convert the app to TypeScript.

5) Write your own Express server that serves the app.
