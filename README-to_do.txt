GETTING STARTED
1.  Enter the command "sh server.sh".
2.  Open your web browser to the appropriate URL to view your app locally.
3.  In a second terminal tab, use the join.sh command to join the Docker container or Vagrant box where you are running this app.  Go to this app's root directory, and use this window for entering commands.
4.  Start a Git repository for your new app, and push your new app into that repository.  (NOTE: I prefer GitHub, because it works with Dependabot.)
5.  Deploy this app.  Instructions on doing this are at https://docusaurus.io/docs/en/publishing.  (NOTE: The Netlify way is easier.)
6.  Update the website/package.json file.  More details are provided later in the section below.
7.  Add a continuous integration badge for the build.  (NOTE: I prefer Semaphore CI, located at https://semaphoreci.com/.)
8.  Remove the sidebar on the right hand side of the first documentation page.  In the website/siteConfig.js file, delete the line "onPageNav: 'separate'" (and the comment above).
9.  Log into Dependabot (https://dependabot.com/), and track this app.  Dependabot submits updates of the npm packages as pull requests.
10.  Enable the search engine in this app.  More details are provided at https://docusaurus.io/docs/en/search.html.
11.  Customize the README.md file and everything else in this app.  View, test, update, and deploy it frequently.

UPDATING PACKAGE.JSON
1.  Start a third terminal tab, join the Docker container or Vagrant box, and go to the "website" directory in this app.  
2.  Enter the command "npm init", and enter your answers to the questions asked.  This updates the website/package.json file.
3.  In the website/package.json file, add a test entry to the scripts section.  Add a comma after the last entry.  After this comma, add the line '"test": "npm run-script build"'.
4.  In addition, you may wish to make other changes, such as the "keywords" parameter.
5.  After you are finished, enter the command "exit" to close this third terminal tab.
6.  In the second terminal tab, enter the command "sh git_check.sh".  After you see that all tests pass, commit the changes. 
