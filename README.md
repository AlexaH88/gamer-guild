<h1 align="center">Gamer Guild</h1>

[Gamer Guild](https://gamer-guild.herokuapp.com/) has been developed for anyone interested in gaming, allowing users to connect over their geeky passion. The web app includes the following functionality:
- Create, read and update profiles
- Create, read, update and delete posts
- Like and unlike posts
- Create, read, update and delete comments on posts
- Create, read, update and delete events
- Attend and unattend events
- Create, read, and delete poll responses on posts
- Follow and unfollow users

<h2 align="center"><img src="docs/readme/images/features/gamer_guild_overview.png"></h2>

## __User Experience (UX)__

### ***User Stories***

- The User Stories for this project were created with [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects), and can be found [here](https://github.com/users/AlexaH88/projects/5).

- The User Stories were organised by must haves, should haves, and could haves, and allocated to appropriate weekly sprints, covering a period of 5 weeks total.
![User Stories Sprint Chart](./docs/readme/images/ux/user_stories_sprints.png)

- Included in the labels were the in-app location of the desired functionality, as well as any required back-end API functionality.  

-   #### Sprint 1 (Must Have)
    ![User Stories Sprint 1](./docs/readme/images/ux/user_stories_sprint_1.png)

    <!-- - Navigation:
        - As a user I can view a navbar from every page so that I can navigate easily between pages -->

-   #### Sprint 2 (Must Have)
    ![User Stories Sprint 2](./docs/readme/images/ux/user_stories_sprint_2.png)

    <!-- - Navigation:
        - As a user I can view a navbar from every page so that I can navigate easily between pages -->

-   #### Sprint 3 (Should Have)
    ![User Stories Sprint 3](./docs/readme/images/ux/user_stories_sprint_3.png)

    <!-- - Navigation:
        - As a user I can view a navbar from every page so that I can navigate easily between pages -->

-   #### Sprint 4 (Should Have)
    ![User Stories Sprint 4](./docs/readme/images/ux/user_stories_sprint_4.png)

    <!-- - Navigation:
        - As a user I can view a navbar from every page so that I can navigate easily between pages -->

-   #### Sprint 5 (Could Have)
    ![User Stories Sprint 5](./docs/readme/images/ux/user_stories_sprint_5.png)

    <!-- - Navigation:
        - As a user I can view a navbar from every page so that I can navigate easily between pages -->

### ***Entity Relationship Diagram***

- The following Entity Relationship Diagram was created to show the models used. The in-built Django User model was used for this project, and the following custom models were created:
  - Profile
  - Follower
  - Post
  - Like
  - Comment
  - Event
  - Reply
  - Poll

-   Entity Relationship Diagram:
    ![Entity Relationship Diagram](./docs/readme/images/ux/entity_relationship_diagram.png)

### ***Design***
    
-   #### Colour Palette

    - The colour palette is made up of five colours: 
        - Dark Blue #104B87
        - Turquoise #54D9FF
        - Light Blue #C1DFFF
        - Black #000000
        - White #FFFFFF

    - The Dark Blue #104B87 was chosen for its neutral and visual appeal to most users, and as a contrast with the rest of the app. It is used for headings and icons on the components to make these stand out.

    - The Turquoise #54D9FF adds a pop of colour, and is used on icons and buttons throughout, indicating hovered or selected actions. It also creates a nice contrast to the dark blue. 
    
    - The Light Blue #C1DFFF is used on the general background of the web app, making the white components stand out, through contrast. 

    - The White #FFFFFF is uses as a neutral tone throughout and in particular for the navbar text, and background color to all components.
    
    - The Black #000000 is used as a neutral tone throughout and in particular for the text on white background, and to indicate when no clickable action is possible when hovering on the dark blue icons.
    
    - Compatibility with each other, and accessibility, were taken into account for all four colours.

-   #### Typography

    - The 'Bungee' and 'Gugi' fonts were used throughout the project. [Bungee](https://fonts.google.com/specimen/Bungee) for the navbar and headings on the pages, and [Gugi](https://fonts.google.com/specimen/Gugi) was used for the remaining text.

    - The fonts were chosen for their playful and retro feel, and the similarity to old video game text, all the while taking into account the general feel of the site. 
    
-   #### Imagery

    - All images were created by the app creator so as to allow for uniformity with the app's colour scheme and to have the content fit with the gaming theme.

        - There are two hero images throughout the site, found on the sign up and sign in pages, next to the forms. The number of hero images is deliberately kept to a minimum so as not to distract from the image-heavy content from users.

        - There are three default images on the app - applied when creating profiles, posts and events. 

        - There are two custom icons, shown when there are no search results, and when creating new content to indicate the possibility of uploading an image.

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

- #### Posts:
    - Being able to see who has liked a post, allowing the users to better understand who has interacted with posts, and find like-minded individuals. 

- #### Events:
    - Being able to see who is attending an event, allowing the users to better understand who has interacted with events, and connect with users before the event. 

- #### Chat:
    - A chat functionality, allowing users to send each other messages, and thus to create stronger connections between like-minded people. 
    - Seeing which users are online including links to the chat page, enabling users to have real-time conversations.

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

1. [GitHub Projects:](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
    - GitHub Projects was used to create the User Stories.

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
    - Canva was used to create the wireframes and mock-ups during the design process, as well as hero images and assets throughout the web app.

1. [Am I Responsive:](https://ui.dev/amiresponsive)
    - Am I Responsive was used to check for responsivity and to create the app overview image at the beginning of this README. 

## __Components__

- A variety of components are included in this project which allow for reuse across the app. Along with the components taken from the Code Institute [Moments Walkthrough](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/953cd4e5015f483bb05263db3e740e19/), several custom components were created:

### ***AddContentButton***

- The AddContentButton component was created to allow for the creation of posts and events, and is present on the following pages, allowing the user to quickly and easily create content - no matter where they find themselves:
    - PostsPage
    - PostPage
    - EventsPage
    - EventPage
    - ProfilePage

### ***FillerImage***

- The FillerImage component was created to allow for the reuse of a hero image on the SignUp and SignIn forms. 

### ***InfoContainer***

- The InfoContainer component was created to allow for the reuse of info text on the SignUp and SignIn forms, redirecting to the SignUp or SignIn pages directly as required by the user.

### ***YouTubeEmbed***

- The YouTubeEmbed component was created to allow for the embedding of YouTube videos on posts, including previews on the respective forms, and is present on:
    - PostsPage
    - PostPage
    - PostCreateForm
    - PostEditForm

## __Testing__

### ***Manual Testing***

- Manual testing was performed consistently app-wide to ensure a smooth and positive user experience. 

#### Links:
- All links were checked, ensuring they opened in new tabs if external, and corresponded to the button or link name in question.

- Example - sign in link displays the sign in form as expected, and the sign in icon is highlighted turquoise to show it's active
![Manual Testing Links](./docs/readme/images/testing/manual_testing_links.png)

#### Forms:
- All forms were checked, ensuring that users were given accurate feedback regarding inputs, that the inputted data submitted was correct on the back-end, and that the data was again displayed correctly when editing content.

- Example - users receive feedback for required input fields
![Manual Testing Forms](./docs/readme/images/testing/manual_testing_forms.png)

#### Redirect:
- Users are swiftly redirected from any urls they should not have access to, such as comment creation when they are not logged in, or editing and deleting content when they are not the owner of these - when these urls are entered into the browser. 

#### Authentication:
- Sign up, sign in and sign out functionality was tested, ensuring users are able to access the app as desired, and distinguishing between content available to logged in and logged out users.

- Example - logged out users can't follow or unfollow other users
![Manual Testing Authentication](./docs/readme/images/testing/manual_testing_authentication.png)

#### Ownership:
- Dropdown edit and delete functionality only displays on content for the owner of these, as is expected.

- Example - dropdown menu appears on owner's event
![Manual Testing Ownership](./docs/readme/images/testing/manual_testing_ownership.png)

#### Toggles:
- Liking posts, following users and attending events function as expected, with owners not being able to do this on their own content or profile, and users being given on click color change feedback on the icons as well as the count changing where appropriate.

- Example - owners can't like their own posts
![Manual Testing Toggles](./docs/readme/images/testing/manual_testing_toggles.png)

#### CRUD:
- All CRUD functionality was tested and is accurately replicated on the front-end, and represents what was created in the back-end.

- Example - users can read and update their profiles but cannot delete them
![Manual Testing CRUD](./docs/readme/images/testing/manual_testing_crud.png)

- #### Accessibility Testing

    - [EightShapes Contrast Grid](http://eightshapes.com/) was used to test the colour palette of the site for any accessibility issues. Only AAA and AA rating options were used on the site. 
    ![Colour Palette Contrast Grid](./docs/readme/images/testing/eightshapes_contrast_grid.png)
    
    - Any icons on the site that are for decorative purposes only use the aria-hidden="true" attribute to accommodate for accessibility, as recommended by [Font Awesome's Accessiblity Page](https://fontawesome.com/v5/docs/web/other-topics/accessibility)

### ***Responsive Testing***

- [React Bootstrap:](https://react-bootstrap.github.io/getting-started/introduction) was used to ensure the app is responsive throughout. 

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) and [Am I Responsive:](https://ui.dev/amiresponsive) were used to regularly check for any responsive design issues. 

### ***Further Testing***

- The web app was tested on Google Chrome, Firefox, and Microsoft Edge browsers.

- The web app was viewed on a variety of devices such as Desktop up to 28 inch screen with 4k resolution, Laptop, Pixel 3a, Pixel 4, Samsung Galaxy Tab S5e, iPhone 11.

- A large amount of testing was done to ensure that all pages were linking correctly.

- Friends and family members were asked to review the web app and documentation to point out any bugs and/or user experience issues.

### ***Fixed Bugs***

#### Event Date Bug:
- When editing an event on the EventEditForm the date field was not populated with the existing date previously created by the user via the EventCreateForm. 

- On further inspection in the console, this error was caused by the date format not being the same as the form required, as I had applied a DATE_FORMAT in the back-end API settings to make the date more human-friendly and readable e.g. 01/05/2023. 
![Event Dates Bug](./docs/readme/images/testing/bug_date_events.png)

- As [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) states, this format comes from the browser and can not be changed. 

- In order to avoid this issue, the date format was reverted to the required `yyyy-MM-dd` format. As a future implementation, a workaround could be to convert the format from one to the other with JavaScript as required.

#### Token Refresh Bug:
- Due to re-ocurring database errors on the back-end API - [see API README](https://gamer-guild-api.herokuapp.com/) - and having to delete all the data in my database, I encountered a very time-consuming issue on the front-end.

- While in development mode on the front-end, and having just cleared my database of all data, I was getting a "User does not exist" error - despite the database being clean i.e. without a single user, and only trying to access the homepage. 

- Thanks to tutor support, it became clear that I was still logged in with a previously existing user - before the data deletion - which any amount of refreshing the page couldn't fix. Simply deleting all cookies and data in the browser solved the issue immediately. 

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

  - The handling internal links on `addPostButton` and `addEventButton` functionality was taken from [Where Is The Mouse](https://whereisthemouse.com/how-to-use-button-as-link-in-react) and adapted to suit the needs of this project.

  - The `YouTubeEmbed` component was created with a combination of these two tutorials by [DEV](https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2) and [A Designer Who Codes](https://www.youtube.com/watch?v=xNRJwmlRBNU) and adapted to suit the needs of this project.

### ***Content***

- All text content was written by the site creator [Alexa Hendry](https://github.com/AlexaH88). 

- The Deployment section in the README was taken from the masterful [Dave Horrocks](https://github.com/DaveyJH), who put it so much better than I could! 

### ***Media***

- The hero images, default images, upload and no results images were created by the app creator [Alexa Hendry](https://github.com/AlexaH88) using [Canva:](https://www.canva.com/).

- Credits to [Font Awesome](https://fontawesome.com/) for the ghost icon and the events icon on the default images.

- Credits to [Trendify](https://www.canva.com/p/trendify/) for the retro upload and alien used on the Upload and No Results images.

    - Hero Images:
        - Sign Up Hero: ![Sign Up Hero](./docs/readme/images/ux/hero_insert_coin.png)
        - Sign In Hero: ![Sign In Hero](./docs/readme/images/ux/hero_game_on.png)
    
    - Default Images:
        - Default Profile: \
            ![Default Profile](./docs/readme/images/ux/default_profile.png)
        - Default Event: \
            ![Default Event](./docs/readme/images/ux/default_event.png)
    
    - Upload Image:
        - Upload: \
            ![Upload](./docs/readme/images/ux/upload.png)
    
    - No Results Images:
        - No Results (white background): \
            ![No Results](./docs/readme/images/ux/no_results.png)
        - No Results Pages (pale blue background): \
            ![No Results Pages](./docs/readme/images/ux/no_results_pages.png)

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

- And last but not least, my husband [Antoine Masson](https://www.linkedin.com/in/antoine-masson-55b65094/) for helping me through the stressful moments and for supporting us financially while I make this big career change. 