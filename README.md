<h1 align="center">Gamer Guild</h1>

[Gamer Guild](https://gamer-guild.herokuapp.com/) has been developed for anyone interested in gaming, allowing users to connect over their geeky passion. The web app includes the following functionality:
- Create, read and update profiles
- Create, read, update and delete posts
- Like and unlike posts
- Create, read, update and delete comments on posts
- Create, read, update and delete events
- Attend and unattend events
- Follow and unfollow users

<h2 align="center"><img src="docs/readme/images/features/gamer_guild_overview.png"></h2>

## __User Experience (UX)__

### ***User Stories***

- The User Stories for this project were created with [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects), and can be found [here](https://github.com/users/AlexaH88/projects/5).

- The User Stories were organised by must haves, should haves, and could haves, and allocated to appropriate weekly sprints, covering a period of 5 weeks total. Any features to be implemented in the future were ultimately allocated the wont have label. 
![User Stories Sprint Chart](./docs/readme/images/ux/user_stories_sprints.png)

- Included in the labels were the in-app location of the desired functionality, as well as any required back-end API functionality.  

-   #### Sprint 1 (Must Have)
    ![User Stories Sprint 1](./docs/readme/images/ux/user_stories_sprint_1.png)

-   #### Sprint 2 (Must Have)
    ![User Stories Sprint 2](./docs/readme/images/ux/user_stories_sprint_2.png)

-   #### Sprint 3 (Should Have)
    ![User Stories Sprint 3](./docs/readme/images/ux/user_stories_sprint_3.png)

-   #### Sprint 4 (Should Have)
    ![User Stories Sprint 4](./docs/readme/images/ux/user_stories_sprint_4.png)

-   #### Sprint 5 (Could Have)
    ![User Stories Sprint 5](./docs/readme/images/ux/user_stories_sprint_5.png)

### ***Entity Relationship Diagram***

- The following Entity Relationship Diagram was created to show the models used. The in-built Django User model was used for this project, and the following custom models were created:
  - Profile
  - Follower
  - Post
  - Like
  - Comment
  - Event
  - Reply
  - Poll (this model could ultimately not be implemented on the front-end)

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

- #### Navigation Bar

    ![Nav Bar](docs/readme/images/features/gamer_guild_navbar.png)

    - The navigation bar includes various clickable links, allowing the user to easily access the pages on the app. The links change according to whether the user is signed in or out, giving them access to more content once signed in for example.    
    
  - The links on the navbar are:
    - Gamer Guild logo
    - Home
    - Events
    - Profile (displayed as logged in username)
    - Sign Up
    - Sign In
    - Sign Out

  - In order to make navigation easier for the user, the navigation bar is in a fixed position, meaning that it remains at the top of the page as the user scrolls down.

  - The navigation bar appears in the same format on all pages - this allows for consistency throughout the app.

  - A hover effect of the icons being changing to a turquoise colour, and the cursor becoming a pointer on both the text and icons is included, allowing the user to understand that the link is clickable.

  - The navigation bar was created using React Bootstrap and is fully responsive across devices.

- #### Homepage

  ![Homepage](docs/readme/images/features/gamer_guild_homepage.png)

  - The homepage is the user's first port of call and consists of user posts on video games, immediately making the type of community clear. 

  - The posts show the user's username, and profile image, when it was posted, the title, content and video posted, as well as any user interaction in the form of likes and comments counts. 

  - The features here are:
    - A search bar, allowing the user to easily search the existing posts by username, title and content.
    - An Add Post button allowing the user to easily create a post of their own.
    - A Popular Profiles component, allowing users to quickly see other users on the app and giving them the possibility to follow and unfollow users or visit their profiles.

- #### Post Page

  ![Post](docs/readme/images/features/gamer_guild_post.png)

  - The post page gives further detail on the post in question, and in addition to the homepage version of the post the comments section is shown. 

  - The features here are:
    - Ability to create a comment if logged in.
    - Ability to edit or delete post if you are the owner of the post.

- #### Events Page

![Events](docs/readme/images/features/gamer_guild_events.png)

  - The events page consists of events created by users. 

  - The events show the user's username, and profile image, when it was created, the title, content and image created, as well as event details and organiser details, and any user interaction in the form of attendance replies. 

  - The features here are:
    - A search bar, allowing the user to easily search the existing events by username, title and content.
    - An Add Event button allowing the user to easily create an event of their own.
    - A Popular Profiles component, allowing users to quickly see other users on the app and giving them the possibility to follow and unfollow users or visit their profiles.

- #### Event Page

  ![Event](docs/readme/images/features/gamer_guild_event.png)

  - The event page gives further detail on the event in question. 

  - The features here are:
    - Ability to edit or delete event if you are the owner of the event.

- #### Profile Page

![Profile](docs/readme/images/features/gamer_guild_profile.png)

  - The profile page consists conists of the selected user's profile - either your own via the navbar, or other users via clicking on their profile images. 

  - The profiles show the user's username, profile image, bio, any social media links included, user stats regarding followers, posts and events, as well as any posts or events created by the user in question.

  - The features here are:
    - Follow/unfollow button when the user is not the profile owner.
    - Add Post and Add Event buttons when the user is the profile owner.
    - Dropdown to edit profile, change username, or change password if the user is the profile owner.

- #### Sign Up Page

  ![Sign Up Page](docs/readme/images/features/gamer_guild_signup.png)

  - The sign up page is only accessible if the user is logged out. This page consists of a form to be completed in order to sign up and create an account, and a link to the sign in page if the user already has an account.

  - An inviting hero image is included, alluding to the gaming theme with a retro Insert Coin message. 

- #### Sign In Page

  ![Sign In Page](docs/readme/images/features/gamer_guild_signin.png)

  - The sign in page is only accessible if the user is logged out. This page consists of a form to be completed in order to sign in, and a link to the sign up page if the user does not yet have an account.

  - An inviting hero image is included, alluding to the gaming theme with a retro Game On message.

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

#### Default Image Bug
- When creating an event there is an error on the front-end regarding the default image. When a user tries to create an event but doesn't upload an image, the default image specified on the back-end should apply. However, the form throws an error:
    ![Default Image Bug Front End](/docs/readme/images/testing/bug_default_image_front_end.png)

- However, this error doesn't occur on the back-end and the default image is applied without issue:
    ![Default Image Bug Back End](/docs/readme/images/testing/bug_default_image_back_end.png)

- Despite using the identical code as on the Moments Walkthrough on posts, checking that Cloudinary was connected up properly, searching on Google and Slack, and asking tutor support, no solution was found.

- The workaround was to include an image required info text on the form to ensure users would always select an image.

#### Poll and Discussion Bug
- A poll and discussion model were created on the back-end to be used with events. Though the back-end functionality exists and doesn't cause any issues, the front-end functionality was impossible to implement. My assumption was that the choice fields on polls was causing an issue and that my front-end code was not correct. However, when implementing the discussion on events, which is identical to comments on posts, the same error appeared and nothing could be done about it.

- Recurring front-end TypeError:
    ![Poll Bug Error](/docs/readme/images/testing/bug_poll_error.png)

- Front-end displaying data correctly when created in the back-end:
    ![Poll Bug Back End Data](/docs/readme/images/testing/bug_poll_back_end_data.png)

- Ability to create the data in the back-end: 
    ![Poll Bug Back End Functionality](/docs/readme/images/testing/bug_poll_back_end_functionality.png)

- Ultimately the poll and discussion functionality was therefore removed.

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

- The hero images, upload and no results images were created by the app creator [Alexa Hendry](https://github.com/AlexaH88) using [Canva:](https://www.canva.com/).

- Credits to [Font Awesome](https://fontawesome.com/) for the ghost icon and the events icon on the default images.

- Credits to [Trendify](https://www.canva.com/p/trendify/) for the retro upload and alien used on the Upload and No Results images.

    - Hero Images:
        - Sign Up Hero: ![Sign Up Hero](./docs/readme/images/ux/hero_insert_coin.png)
        - Sign In Hero: ![Sign In Hero](./docs/readme/images/ux/hero_game_on.png)
    
    - Upload Image:
        - Upload: \
            ![Upload](./docs/readme/images/ux/upload.png)
    
    - No Results Images:
        - No Results (white background): \
            ![No Results](./docs/readme/images/ux/no_results.png)
        - No Results Pages (pale blue background): \
            ![No Results Pages](./docs/readme/images/ux/no_results_pages.png)

    - Default Image (taken from the Moments Walkthrough):
        - Default Event: \
            ![Default Event](./docs/readme/images/ux/default_event.jpg)

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