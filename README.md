<h1 align="center">Gamer Guild</h1>

[Gamer Guild](https://gamer-guild.herokuapp.com/) has been developed for anyone interested in gaming, allowing users to connect over their geeky passion. The web app includes the following functionality:
- Create, read and update profiles
- Create, read, update and delete posts
- Create, read, update and delete events
- Like and unlike posts and events
- Create, read, update and delete comments on posts and events
- Attend and unattend events
- Follow and unfollow users
- Chat with followed users, and see who is online

<!-- <h2 align="center"><img src="docs/readme/images/features/anthemology-homepage.png"></h2> -->

## __User Experience (UX)__

### ***User stories***

<!-- -   #### First Time Visitor Goals

    1. As a First Tiem Visitor I can use a search bar on the homepage so that I can easily find the song I'm looking for.

-   #### Returning Visitor Goals

    1. As a Returning Visitor I can sign up for an account so that I can create, edit and delete lyrics.
    2. As a Returning Visitor I can login to an account so that I can access my songs as a returning user.
    3. As a Returning Visitor I can logout of an account so that I remove access to anyone else using the computer

-   #### Frequent User Goals

    1. As a Frequent User (Site User / Site Admin) I can create song lyrics so that other users can find the lyrics to their favourite songs.
    2. As a Frequent User (Site User / Site Admin) I can edit song lyrics that I've created so that I can modify the content if needed.
    3. As a Frequent User (Site User / Site Admin) I can delete song lyrics that I've created so that I can remove my contribution if needed. -->

### ***Design***
    
-   #### Colour Palette

    - The colour palette is made up of four colours: 
        - Dark Blue #104B87
        - Light Blue #C1DFFF
        - Black #000000
        - White #FFFFFF

    - The Dark Blue #104B87 was chosen for its visual appeal to most users, and as a contrast with the rest of the app.
    
    - The Light Blue #C1DFFF is used on the general background of the web app and for any hover elements on the navbar - distinguishing from the White #FFFFFF but remaining visible nonetheless.

    - The White #FFFFFF is uses as a neutral tone throughout and in particular for the navbar text, and background color to all components.
    
    - The Black #000000 is used as a neutral tone throughout and in particular for the text on the light blue background, and for any hover effects on the dark blue icons and text items. 
    
    - Compatibility with each other, and accessibility, were taken into account for all four colours.

-   #### Typography

    - The 'Bungee Inline' and 'Audiowide' fonts were used on all pages throughout the project. [Bungee Inline](https://fonts.google.com/specimen/Bungee+Inline?query=bungee) for the headings and [Audiowide](https://fonts.google.com/specimen/Audiowide?query=audio) is used for the remaining text.

    - The fonts were chosen for their playful and retro feel, and the similarity to old video game text, all the while taking into account the general feel of the site. 
    
-   #### Imagery

    <!-- - There are two hero images throughout the site:

        - The homepage image of a collection of vinyls strewn across a surface covers the entire body of the site and is used to get the users attention when landing on the homepage. As the remaining content on this page is not text-heavy, consisting of the search function, the hero image doesn't distract from the content.

        - The remaining pages use the same hero image of half of a single vinyl seemingly dropping from the top of the page. As these pages contain a considerable amount of text and content, this was done in order not to distact from the information on the page. 

        - Both hero images are predominantly black and white and were deliberately chosen as such to give a neutral feel and allow for pops of colour elsewhere on the site.  -->

### ***Wireframes and Mock-Ups***

- Wireframes and mock-ups were created for the homepage, events, chat, and profile pages. These were adapted and improved upon throughout the development process. 

    -   Homepage Wireframe:
        ![Homepage Wireframe](./docs/readme/images/ux/wireframe_home.png)

    -   Events Wireframe:
        ![Events Wireframe](./docs/readme/images/ux/wireframe_events.png)
    
    -   Chat Wireframe:
        ![Chat Wireframe](./docs/readme/images/ux/wireframe_chat.png)
    
    -   Profile Wireframe:
        ![Profile Wireframe](./docs/readme/images/ux/wireframe_profile.png)

    -   Homepage Mock-Up:
        ![Homepage Mock-Up](./docs/readme/images/ux/mockup_home.png)
      
    -   Events Mock-Up:
        ![Events Mock-Up](./docs/readme/images/ux/mockup_events_.png)
    
    -   Chat Mock-Up:
        ![Chat Mock-Up](./docs/readme/images/ux/mockup_chat.png)
    
    -   Profile Mock-Up:
        ![Profile Mock-Up](./docs/readme/images/ux/mockup_profile.png)

## __Features__

### ***Existing Features***

<!-- - #### Navigation Bar -->

  <!-- - The navigation bar includes various clickable links, allowing the user to easily access the pages on the site. Access is distinct between admin superusers and standard users, with restricted access to standard users. There is also signup, login and logout functionality which changes according to the status of the user.   
    - Sign up / login view:
    ![Nav Bar Sign Up Login](docs/readme/images/features/anthemology-nav-login.png)
    - Standard User Login:
    ![Nav Bar Standard User](docs/readme/images/features/anthemology-nav-logout-standard-user.png)
    - Superuser Login:
    ![Nav Bar Superuser](docs/readme/images/features/anthemology-nav-logout-superuser.png)

  - The main pages on the app are:
    - Homepage
    - Search
    - Songs
    - About
    - My Songs (for standard users)
    - Admin (for admin superusers)
    - Forms (signup, login, add song, edit song, delete song)

  - In order to make navigation easier for the user, the navigation bar is in a fixed position, meaning that it remains at the top of the page as the user scrolls down.

  - The navigation bar follows the same style as the footer, and appears in the same format on all pages - this allows for consistency throughout the site.

  - A hover effect of the text being underlined in white or buttons turning white, and the cursor becoming a pointer is included, allowing the user to understand that the link is clickable.

  - The navigation bar was created with HTML and CSS  and is fully responsive across devices.
    ![Responsive Nav Bar](docs/readme/images/features/anthemology-nav-responsive.png)

- #### Homepage

  ![Homepage](docs/readme/images/features/anthemology-homepage.png)

  - The homepage is the user's first port of call and consists of a captive hero image of vinyls strewn across a surface, immediately introducing the musical theme of the app. 

  - The feaature here is the search bar, allowing the user to easily search the database of songs. This page was deliberately kept minimalist so as not to overwhelm the user upon arrival. 

- #### Search Page

  ![Search Page](docs/readme/images/features/anthemology-search.png)

  - The Search page gives the user all the songs that match their searched keyword, whether it be in the title, artist or album name of the song. 

  - The page also has a hero image of half a vinyl that appears to drops down from the top of the screen. This hero image features on all pages other than the homepage and the song detail page.

- #### Songs Page

  ![Songs Page](docs/readme/images/features/anthemology-songs.png)

  - The Songs page allows the user to view all the songs that have been uploaded into the database, by both admin and regular users. 

  - The page consists of a table showing alphabetically sorted entried by Title, by Artist and by Album.

- #### Signup Page

  ![Signup Page](docs/readme/images/features/anthemology-signup.png)

  - The Signup page is only accessible is logged out. This page consists of a form to be completed in order to sign up and create an account.

  - The form includes warning and error messages on input, ensuring the user is always informed about required or incorrect input.

  - Once a user has signed up, they are informed via a message alert at the top of the page, which they can close at their convenience.

- #### Signin Page

  ![Signin Page](docs/readme/images/features/anthemology-login.png)

  - The Signin page is only accessible is logged out. This page consists of a form to be completed in order to login to an existing account.

  - The form includes warning and error messages on input, ensuring the user is always informed about required or incorrect input.

  - Once a user has logged in, they are informed via a message alert at the top of the page, which they can close at their convenience. 

- #### Footer

  ![Footer](docs/readme/images/features/anthemology-footer.png)

  - The footer follows the same style as the navigation bar, and appears in the same format on all pages - this allows for consistency throughout the site.

  - The footer contains three elements:
    - The copyrighted site name on the left hand side. 
    - Information about the site and how it was created. 
    - Social media links, allowing the user to visit the site creator's LinkedIn and GitHub pages. Hovering over the link icons turns them purple to signal to the user that there is an interaction possible. All links are opened in separate tabs so that the user remains on the site. 

  - The footer was created with HTML and CSS only and is fully responsive across devices.

    ![Responsive Footer](docs/readme/images/features/anthemology-footer-responsive.png) -->

### ***Future Implementations***

<!-- - #### General -->

## __Technologies Used__

### ***Languages Used***

- [HTML5](https://en.wikipedia.org/wiki/HTML5)

- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### ***Frameworks, Libraries & Programs Used***

1. [React:](https://legacy.reactjs.org/docs/getting-started.html)
    - React was used to create this web app.

1. [React Bootstrap:](https://react-bootstrap.github.io/getting-started/introduction)
    - React Bootstrap was used to create this web app and to make it fully responsive. 

1. [Git:](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.

1. [Heroku:](https://heroku.com/)
    - Heroku was used for the deployed application.

1. [Chrome DevTools:](https://developer.chrome.com/docs/devtools/)
    - Chrome DevTools was used to consistently check the site in terms of responsivity, performance, accessibility, best practice and SEO.

1. [React Developer Tools:](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
    - The React Developer Tools plugin was used on Chrome DevTools to consistently check the web app for any React errors in the console.

1. [Google Fonts:](https://fonts.google.com/)
    - Google Fonts was used to import the fonts for this web app.

1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.

1. [Font Awesome Favicon Generator:](https://gauger.io/fonticon/)
    - Font Awesome Favicon Generator was used to reproduce a favicon version of the [Font Awesome Headset Icon](https://fontawesome.com/icons/headset?f=classic&s=solid) used in the header app name.

1. [Canva:](https://www.canva.com/)
    - Canva was used to create the wireframes and mock-ups during the design process. 

<!-- 1. [Pexels](https://www.pexels.com/) and [Unsplash:](https://unsplash.com/)
    - Pexels and Unsplash wre used to find the hero images. -->

## __Testing__

### ***HTML, CSS , JavaScript and React Testing***

<!-- - [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) was used to validate every page of the project to ensure there were no HTML syntax errors in the project.

  - All test results:
  ![Homepage HTML](docs/readme/images/testing/validator-html-homepage.png)
  ![Song Search HTML](docs/readme/images/testing/validator-html-song-search-page.png)
  ![Signup HTML](docs/readme/images/testing/validator-html-sign-up-page.png)
  ![Login HTML](docs/readme/images/testing/validator-html-login-page.png)
  ![About HTML](docs/readme/images/testing/validator-html-about-page.png)
  ![Songs HTML](docs/readme/images/testing/validator-html-songs-page.png)
  ![Song Lyrics HTML](docs/readme/images/testing/validator-html-song-lyrics-page.png)
  ![Admin HTML](docs/readme/images/testing/validator-html-add-song-page.png)
  ![Add Song HTML](docs/readme/images/testing/validator-html-admin-page.png)
  ![Edit Song HTML](docs/readme/images/testing/validator-html-edit-song-page.png)
  ![Delete Song HTML](docs/readme/images/testing/validator-html-delete-song-page.png)

-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) was used to validate every page of the project to ensure there were no CSS syntax errors in the project.
    ![Results CSS](docs/readme/images/testing/validator-css-errors.png)
    ![Results CSS](docs/readme/images/testing/validator-css-warnings.png)

-   [JS Hint](https://jshint.com/) was used to validate the very minimal JavaScript in this project.
    ![Results JavaScript](docs/readme/images/testing/validator-js.png) -->

### ***Manual Testing***

<!-- - Manual testing was performed app-wide to ensure a smooth and positive user experience. 

- Consistent testing was carried out to ensure there was a logical flow when using the app, and that user's expectations for where links would take them, and what would follow user actions were respected.

- Alert messages are displayed when a user has completed an action, to explain why they are not seeing any data, or if input is incorrect or required:
  ![Signup Success Message](docs/readme/images/testing/messages-sign-up-successful.png)
  ![Signup Error Message](docs/readme/images/testing/messages-signup-passwords-not-matching.png)
  ![Login Success Message](docs/readme/images/testing/messages-login-successful.png)
  ![Login Error Message](docs/readme/images/testing/messages-login-passwords-not-matching.png)
  ![Logout Success Message](docs/readme/images/testing/messages-sign-up-successful.png)
  ![Input Required Song Search Message](docs/readme/images/testing/messages-input-required-song-search.png)
  ![Input Required Song Search Message](docs/readme/images/testing/messages-input-required-add-song.png)
  ![Add Song Success Message](docs/readme/images/testing/messages-song-add-successful.png)
  ![Edit Song Success Message](docs/readme/images/testing/messages-song-edit-successful.png)
  ![Delete Song Success Message](docs/readme/images/testing/messages-song-edit-successful.png)
  ![Same Title Error Message](docs/readme/images/testing/messages-same-title-error.png) -->

### ***Performance, Accessibility, Best Practices, and SEO Testing***

  <!-- - [Chrome DevTools Lighthouse](https://developers.google.com/web/tools/lighthouse) was used to test Performance, Accessibility, Best Practices and SEO. All tests performed in the 90-100 green score, except for in the Performance category that came just below in the yellow range.  -->

- #### Desktop Testing with [Chrome DevTools Lighthouse](https://developers.google.com/web/tools/lighthouse)

  <!-- ![Homepage](docs/readme/images/testing/lighthouse-homepage-desktop.png)
  ![Search](docs/readme/images/testing/lighthouse-search-desktop.png)
  ![Songs](docs/readme/images/testing/lighthouse-songs-desktop.png)
  ![About](docs/readme/images/testing/lighthouse-about-desktop.png)
  ![My Songs](docs/readme/images/testing/lighthouse-my-songs-desktop.png)
  ![Admin](docs/readme/images/testing/lighthouse-admin-desktop.png)
  ![Signup](docs/readme/images/testing/lighthouse-signup-desktop.png)
  ![Login](docs/readme/images/testing/lighthouse-login-desktop.png)
  ![Add Song](docs/readme/images/testing/lighthouse-add-song-desktop.png)
  ![Edit Song](docs/readme/images/testing/lighthouse-edit-song-desktop.png)
  ![Delete Song](docs/readme/images/testing/lighthouse-delete-song-desktop.png) -->

- #### Mobile Testing with [Chrome DevTools Lighthouse](https://developers.google.com/web/tools/lighthouse)
    
  <!-- ![Homepage](docs/readme/images/testing/lighthouse-homepage-mobile.png)
  ![Search](docs/readme/images/testing/lighthouse-search-mobile.png)
  ![Songs](docs/readme/images/testing/lighthouse-songs-mobile.png)
  ![About](docs/readme/images/testing/lighthouse-about-mobile.png)
  ![My Songs](docs/readme/images/testing/lighthouse-my-songs-mobile.png)
  ![Admin](docs/readme/images/testing/lighthouse-admin-mobile.png)
  ![Signup](docs/readme/images/testing/lighthouse-signup-mobile.png)
  ![Login](docs/readme/images/testing/lighthouse-login-mobile.png)
  ![Add Song](docs/readme/images/testing/lighthouse-add-song-mobile.png)
  ![Edit Song](docs/readme/images/testing/lighthouse-edit-song-mobile.png)
  ![Delete Song](docs/readme/images/testing/lighthouse-delete-song-mobile.png) -->

- #### Further Accessibility Testing

- [EightShapes Contrast Grid](http://eightshapes.com/) was used to test the colour palette of the site for any accessibility issues. Only AAA and AA rating options were used on the site. 
  ![Colour Palette Contrast Grid](./docs/readme/images/testing/eightshapes_contrast_grid.png)
  
- Any icons on the site that are for decorative purposes only use the aria-hidden="true" attribute to accommodate for accessibility, as recommended by [Font Awesome's Accessiblity Page](https://fontawesome.com/v5/docs/web/other-topics/accessibility)

### ***Responsive Testing***

<!-- - [Chrome DevTools](https://developer.chrome.com/docs/devtools/) was used to regularly check for any responsive design issues. The media queries are the same as the DevTools breakpoints. 

- The site is responsive down to 320px viewport widths.   -->

### ***Further Testing***

- The web app was tested on Google Chrome, Firefox, and Microsoft Edge browsers.

- The web app was viewed on a variety of devices such as Desktop up to 28 inch screen with 4k resolution, Laptop, Pixel 3a, Pixel 4, Samsung Galaxy Tab S5e, iPhone 11.

- A large amount of testing was done to ensure that all pages were linking correctly.

- Friends and family members were asked to review the web app and documentation to point out any bugs and/or user experience issues.

### ***Fixed Bugs***

<!-- - There was an issue on touchscreen devices regarding the hero images. When scrolling the image appeared to jump or zoom, creating a visually unappealing experience for the user. After trying various fixes, a solution was found on [Stack Overflow](https://stackoverflow.com/questions/20443574/fixed-background-image-with-ios7). The `background-attachment` on the hero image containers was set to scroll instead of fixed for mobile devices. The fixed `background-attachment` is not supported for mobile, which was causing this issue.

- After having implemented the `slugify` function on the `song.title` in the `Song` model an error would appear in development but not in the deployed app:
    - If a user tried to create a song with the same title, but not the same letter case, an error was thrown as the slug already existed, as it is always lowercase.
    - The workaround was to add auto capitalization on the form on the CSS side, and `.title()` on a `save()` function within the Song model.
    - An error message was also added to ensure the user receiving the appropriate feedback regarding an already existing title. 

- The Delete Song form initially re-used the same template as the Edit Song page, meaning that although the requested song could indeed be deleted, there was also the possibility to users inputting new content into the pre-populated fields. This was fixed by implementing a non-editable form instead, by merely showing the song info, and keeping the delete button functionality.

- When editing and deleting songs as a superuser, the exisitng edit and delete views, causing a somewhat illogical flow for the user as it rendered the My Songs page, having been on the Admin page. Conditional statements were included in these views to establish whether the user was a superuser or not and act accordingly. The My Songs page was also dropped for the superuser, to avoid the display of similar information and potentially causing confusion or overkill for the user.   -->

### ***Known Bugs***

<!-- - Not a bug per se but something that decreases UX on the app is the mobile version of large data list of the songs. This is mentioned in future implementations and is to be improved upon.  -->

[//]: <> (Deployment section taken from Dave Horrocks, and credited in the Content section of the Credits)

## __Deployment__

### ***Heroku***

1. Navigate to your [Heroku dashboard](https://dashboard.heroku.com/apps)
2. Click "New" and select "Create new app".  
  ![New heroku](./docs/readme/images/deployment/heroku-new.png)
3. Input a meaningful name for your app and choose the region best suited to
  your location.  
  ![Create new app](./docs/readme/images/deployment/heroku-create.png)
4. Select "Settings" from the tabs.  
  ![Settings tab](./docs/readme/images/deployment/heroku-settings.png)
5. Click "Reveal Config Vars".  
 ![Config vars button](./docs/readme/images/deployment/heroku-config-vars.png)
6. Input all key-value pairs as necessary from the `.env` file. **Ensure DEBUG
   and DEVELOPMENT are not included**.
   ![Config vars](./docs/readme/images/deployment/heroku-config-var.png)
7. Click "Add buildpack".  
 ![Add buildpack](./docs/readme/images/deployment/heroku-add-buildpacks.png)
8. Add "python" from the list or search if necessary, remember to
 click save.  
 ![Select buildpacks](./docs/readme/images/deployment/heroku-select-buildpacks.png)
9. Select "Deploy" from the tabs.  
![Settings tab](./docs/readme/images/deployment/heroku-deploy-tab.png)
10. Select "GitHub - Connect to GitHub" from deployment methods.  
 ![Select GitHub](./docs/readme/images/deployment/heroku-select-github.png)
11. Click "Connect to GitHub" in the created section.  
 ![Connect to GitHub](./docs/readme/images/deployment/heroku-connect-github.png)
12. Search for the GitHub repository by name.  
13. Click to connect to the relevant repo.
14. Either click `Enable Automatic Deploys` for automatic deploys or `Deploy
 Branch` to deploy manually. Manually deployed branches will need
 re-deploying each time the repo is updated.  
 ![Heroku deploy branch](./docs/readme/images/deployment/heroku-deploy-branch.png)
15. Click `View` to view the deployed site.  
    ![Heroku view](./docs/readme/images/deployment/heroku-view.png)
16. The live site can also be accessed from your repo in GitHub from the
    environments section of the repo.

The site is now live and operational

## __Credits__

### ***Code***

- The following were used as references to help with writing the HTML, CSS, JavaScript and Python code:
  - [Code Institute LMS](https://learn.codeinstitute.net/ci_program/diplomainsoftwaredevelopmentadvancedfrontend), in particular the [Moments Walkthrough](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/953cd4e5015f483bb05263db3e740e19/)
  - [W3Schools](https://www.w3schools.com/) 
  - [Stack Overflow](https://stackoverflow.com/)
  - [MDN Web Docs](https://developer.mozilla.org/en-US/)
  - [React Documentation](https://legacy.reactjs.org/docs/getting-started.html)
  - [React Bootstrap Documentation](https://react-bootstrap.github.io/getting-started/introduction)

### ***Content***

- All text content was written by the site creator [Alexa Hendry](https://github.com/AlexaH88). 

- The Deployment section in the README was taken from the masterful [Dave Horrocks](https://github.com/DaveyJH), who put it so much better than I could! 

### ***Media***

<!-- - The two hero images were taken from [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/) respectively and are credited as follows:

- [Homepage Hero Image](https://unsplash.com/photos/iRjOMSpZaEE) by [Miriana Dorobanțu](https://unsplash.com/@mirianaa_)

- [Main Hero Image](https://www.pexels.com/photo/black-record-vinyl-167092/) by [Miguel Á. Padriñán](https://www.pexels.com/@padrinan/)

- The [vinyl graphic](https://www.canva.com/icons/MAFM8W9r2EI-retro-disc-vinyl-sticker/) on the Song Lyrics page was taken from graphic designer [Deadframe Works Images](https://www.canva.com/p/deadframes/) via [Canva](https://www.canva.com/). -->

### ***Acknowledgements***

Massive thanks to: 

- My mentor, [Lauren-Nicole Popich](https://github.com/CluelessBiker), for guiding me and giving me helpful feedback and advice - and for giving me confidence when I didn't believe in myself!

- My fellow Code Institute students and friends for their help, generous feedback, and incredible knowledge:
  
  - [Abi Harrison](https://github.com/Abibubble)
  - [Dave Horrocks](https://github.com/DaveyJH)
  - [Emanuel Silva](https://github.com/manni8436)
  - [Kera Cudmore](https://github.com/kera-cudmore)
  - [Megan Vella](https://github.com/Medusas71)
  - [Monika Hrda](https://github.com/monika-hrda)
  - [Natalie Alexander](https://github.com/natalie-kate)
  - [Sandra Atino](https://github.com/Atinos31)
  - [Suzy Bennett](https://github.com/suzybee1987)

- Tutor Support, Student Care and the Slack Community at [Code Institute](https://codeinstitute.net/global/) for their support.

- And last but not least, my fiancé [Antoine Masson](https://www.linkedin.com/in/antoine-masson-55b65094/) for helping me through the stressful moments and for supporting us financially while I make this big career change. 