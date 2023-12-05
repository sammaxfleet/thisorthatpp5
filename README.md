# THIS OR THAT 


'This Or That' is an online website that compares celbrity fashion outfits. It allows users to create user profiles & compare likes. 
The user gets to prefer which outfit a celbrity is wearing. 
It's a battle of style, which one is your taste?... Which then gives the users space to comment their opinion and connect with the 'This Or That' Community. 


This project was built as the final portfolio submission for the @codeinstitute higher national diploma full stack software development.
The project has been split into 2 parts- the front end built with react and the back end API powered by Django rest frame work.


# Linkt to Project

More info on the back end readme can be found here - https://github.com/sammaxfleet/THISORTHATAPI/blob/main/README.md


Link to live site - https://thisorthatpp5-9e3adcfaf8e9.herokuapp.com/


Link to the live API - https://thisorthatapi-56bb400a2b0e.herokuapp.com/


Link to the back end repository - https://github.com/sammaxfleet/THISORTHATAPI


# AM I RSPONSIVE IMAGE.

Wire Frames - [THIS OR THAT WIREFRAMES 2.pdf](https://github.com/sammaxfleet/thisorthatpp5/files/12831129/THIS.OR.THAT.WIREFRAMES.2.pdf)


TABLE OF CONTENTS - 

- [THIS OR THAT](#this-or-that)
  * [PROJECT  OBJECTIVE -](#project--objective--)
  * [SITE USER GOAL-](#site-user-goal-)
  * [SITE OWNER GOAL -](#site-owner-goal--)
  * [TARGET AUDIENCE -](#target-audience--)
  * [PROJECT MANAGEMENT -](#project-management--)
  * [User Stories Link Front end](#user-stories-link-front-end)
  * [Logged Out Site User](#logged-out-site-user)
    + [Logging In Site User](#logging-in-site-user)
    + [Likes](#likes)
    + [Follow](#follow)
    + [Comments](#comments)
    + [Profiles](#profiles)
- [Direct messaging](#direct-messaging)
- [SITE CREATION USER STORIES](#site-creation-user-stories)
- [Sit Structure -](#sit-structure--)



## PROJECT  OBJECTIVE - 

To provide a stable, interactive platform for fashion enthusiasts.
For the user to find fashion inspiration & be able to like & comment on their favourites. 
For the site to give the user the ability to interact with other users, create a profile & also Upload. 


## SITE USER GOAL- 

Breaking down the sit into a few main goals:

1 - Fashion Inspiration
2-  Network and interact with other community members
3 - Fashion research
4-  Celebrity styling 
5 - To be able to create a Profile and upload your inspiration.  
6 - Mobile View & tablet view to be fully responsive. 


## SITE OWNER GOAL - 

To provide a stable and enjoyable user experience that encourages continued user interaction and participation. 
The platform should be engaging and welcoming to new users, it should be easy to sign up!
Content should be well structured and of high quality, navigation and site functionality should be intuitive and accessible. 

1. - Tasks filtering by keyword search.
2. - Responsiveness to allow pleasant usage of the app across a range of devices with varying display sizes.
3. - CRUD functionality for comments, uploads & to alter their profile.
4. - User Authentication
5. - The site to be simple and use intuitive navigation across all pages.
6. - Be able to 'like' and 'Comment'.
  
   

## TARGET AUDIENCE -

The target audience is aimed at the fashion community. 
Age wise it's suitable for teenagers upto 40's. 
The fashion community has been building online now with 'OOTD' hash tags and people loving to show their fits for an occasion wether it’s a birthday or your favourite night out.
Users could be male or female, there is an equal spread of fashion content on there. 


## PROJECT MANAGEMENT - 

An agile methodology was used to plan and develop the This or That project.
All the main features of the application were recorded as epics and then refined into user stories.
These user stories were created and stored as GitHub issues and then mapped into iterations to help to plan the project and allocate the workload. 


# AGILE METHODOLOGY

by using AGILE methodology in this project I was able to deliver a site which had all required functionality and some more. 
Due to the time limit on this project I was not able to incorporate all initial listed features, but this is where an AGILE approach is great for app design. 
The project displays this by having User stories in the Done section and the ones which were decided to be left for future, put in the future implementations section of the readme.

I’ve used the MoSCoW prioritisation technique for the user stories.

Must Have:
Should Have:
Could Have:
Won’t Have:


# User Stories

Below I have listed the main user stories for a user who is not logged in, or has no account and then for a logged in user. 
The user stories were then tested and confirmed in the Testing section.


## Logged Out Site User

- Ability to log in
- Abolity to Sign Up
- See All Posts that have been shared
- View a single Post
- Can view the highest liked or commented posts
- Can View Popular Profiles
- Can Navigate through Pages
- Can filter by Celebrity
- Can filter by UserName, Popularity, Date, Title, Content or Category.
- Can View comments to see what people think
- Can Like Posts


### Logged In Site User 

All of the above and..

- Ability to Log in smoothly
- Log out smoothly
- Can Make my own posts
- Can delete/ edit own posts.
- Can follow other users. 

# EPICS/ MILESTONES & USER STORIES

I used the following Milestones as Epics when creating the project. 
You can fine here..... in a Kanban board display.

1. Installation Back End API
2. Installation Front End
3. Design
4. CRUD User Account
5. Sign Up/ Log In Functionality
6. Testing/ Site functionality.
   
## User Stories Breakdown:



EPIC 1

MileStone - Design | User Stories - Wireframes

User Stories -

1. As the developer I can create wireframes to make the website easier to build, for time management sticking to the agile approach. MUST HAVE


Epic 2 -

MileStone - Installation | User Stories - Install Django

User Stories -

1. Install Django smoothly, & any plug ins needed. MUST HAVE
2. Connect to Heroku MUST HAVE
3. Connect Pep8 & prettier SHOULD HAVE


Epic 3 - 

Milestone - Installation Back End 

User stories -

1. Get Api working - MUST HAVE
2. Deploy to heroku - MUST HAVE
3. Turn debug to FALSE - MUST HAVE
4. Secret Key  - MUST HAVE


Epic 4 - 

Milestone - Design 

User Stories - Likes when logged in or out is the same outcome. 

1.  The user can like a Post - MUST HAVE
2.  The User can see the amount of Likes - SHOULD HAVE
3.  Can Unlike - SHOULD HAVE


User stories - Following only when logged in. 
  
1. Can follow another User - SHOULD HAVE 
2. Can unfollow a User - SHOULD HAVE
3. Can't follow when no profile exists - SHOULD HAVE 
4. Can follow most popular users at the top of page - SHOULD HAVE 

User Stories - Comments
    
1. Edit own Comments - SHOULD HAVE 
2. Can Delete a comment - SHOULD HAVE 
3. Can view other poeples comments ( when not logged in) - SHOULD HAVE 
4. Can't make a comment if not logged in - SHOULD HAVE



EPIC 5 - 

Milestone - CRUD PROFILES

USER STORIES - PROFILES

  1. I can view most popular profile - SHOULD HAVE
  2. View a specific profile page - SHOULD HAVE 
  3. Edit my own profile Page - MUST HAVE 
  4. Can change name and password for log in details if want to make more secure. - MUST HAVE

USER STORIES -  DIRECT MESSAGING
   1.  - Can view messages On my profile page and see what others have sent me  -COULD HAVE 
   2. - Can message another user and discuss opinions - COULD HAVE
     


EPIC 6 - 

MileStone - SIGN UP/ LOG IN

USER STORIES - SIGN UP/ LOG IN

1. Have a sign up page
2. Have a seperate log inpage


EPIC 7 -  Design


Milestone -  Design

1. Use colours that have continuity and capture the feeling of the site SHOULD HAVE
2. Get inspo from fashion blogs for the layout SHOULD HAVE
3. Images on the -site MUST HAVE
4. Different fonts COULD HAVE
5. Describe what the site is -SHOULD HAVE
6. Back ground colour - SHOULD HAVE
7. Several different pages - WON'T HAVE



EPIC 8 - DESIGN

   MILESTONE - Home page design

User Stories: 
1. Find a Logo - MUST HAVE
2. Nav Bar - MUST HAVE 
3. Choose Colour Scheme - MUST HAVE 
4. Create 3 pages for the site 0 MUST HAVE 
5. Retrieve images from Google for comparison - MUST HAVE
Choose which celebrities it will feature
There are 20 celebrities to compare style.
6. - Add like tab, comment and follow. - MUST HAVE
7. Be able to Sign in/out - MUST HAVE
8. Be able to log in/out. - MUST HAVE

# CRUD Functionality 

CRUD Functionality
Tick It handles data with full CRUD Functionality:

Create - Users can create, an account, profile, tasks, comments, packs, contact messages and watch objects.
Read - Users can view the tasks, comments, packs of other users and also the profiles of these users.
Update - Users can update their profile, password, posted tasks, packs and watch status of tasks via the interactive forms and buttons on the site.
Delete - Users can delete tasks, comments, packs and watch objects via the interactive buttons on the site.



# Site Structure - 

'This or That' depending on login status different page states are available for the user.
 When the user is logged out the pages: Home, and Sign In or Up are available from the Navigation Bar menu. 
 When the user is logged in Comments, Signout and Profile Page also become available.

 The Site has 3 pages

 HOME
 SIGN IN
 SIGN UP


# Colour Scheme - 

I took inspiration from fashion blogs, and stores like Zara & Arte. Which are sleek, simple & focus on the photo. 
Where this is a white background as full focus goes on the image, the user is then drawn to the content. Two contrasting colours are used to naviagte through the website. 

<img width="1435" alt="Screenshot 2023-10-08 at 13 12 50" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/5946cf27-8d7f-470b-a27c-d3c4a124223b">

# Typography - 
<img width="322" alt="Screenshot 2023-10-08 at 13 16 55" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/98edf466-cdff-4e17-b594-f661721751fc">

Didot font, is slick, edgy & sharp on the eyte for any text. 


#Navigation - 

The Navigation Bar is very clean and straight forward. Depending on wether you're signed in or not a different option on the menu appears.
On accessing the site for the first time, the user is logged out and the following menu items are visible:


# Authentication - 

Users who are new to the site, or haven't previously created an account can click on the Signup Menu option on the Navigation Bar to create a user account. I have used the standard dj-rest/auth/registration user account signup process for this.

# Homepage - 



# TESTING


# Deployment - 

- Deployment to Heroku

- In your heroku account, select Create New App, and give it a unique name related to your project.
- Select a region corresponding to where you live and click 'Create App'.
- Head into the 'Deploy' tab select GitHub as the 'deployment method', find your project repository and click 'Connect'.
- Click 'Deploy branch' to trigger Heroku to start building the application.
- Once you see the message saying 'build succeeded' you can click 'Open App' to see your application in the browser.

- Connecting the React front end and back end
- Once you have set up the workspace and done a basic deploy to Heroku, you can connect the react workspace to your API, in order to send data to the API

  
  1. In the Heroku dashboard, go into the API application settings
  2. In 'Settings' add a new Config Var called 'CLIENT_ORIGIN' and set that to the URL for your deployed React application. In my case, this would be https://happening-react.herokuapp.com.
  3. Then add another Config Var called 'CLIENT_ORIGIN_DEV' and enter the URL of your Gitpod preview link, remembering to remove the trailing slash at the end. Gitpod occasionally changes this URL so keep    an eye on it, as you are working on your project.
  4. Go back into your frontend Gitpod workspace, and install the Axios library using the command 'npm install axios'.
  5. Create a folder called 'API' and inside it create a file called 'axiosDefaults'.
  6.import axios at the top of the file
  7.Define your baseURL which is the unique URL of your deployed API project.
  8. Set the content-type header to multi-part/form-data as the API will need to deal with images as well as text in it's requests.
  9. In order to avoid any CORS issues, set withCredentials to True.
  10. Import this file into App.js to be used across all pages

Fork this Project Repository
It is possible to make an independent copy of a GitHub Repository by forking the GitHub account. The copy can then be viewed and it is also possible to make changes in the copy without affecting the original repository. To fork the repository, follow these steps:

1. After logging in to GitHub, locate the repository. On the top right side of the page there is a 'Fork' button. Click on the button to create a copy of the original repository.

2. Clone this Project Repository
A Git clone creates a linked copy of the project that will continue to synchronize with the original repository. In order to create a clone, you can click on the 'Code' button inside the selected repository and then select the 'Clone' option from the dropdown list.<img width="671" alt="Screenshot 2023-10-08 at 15 35 58" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/69df2408-741b-45e4-8df8-24ec95f39e37">





# Credits - 

- Balsamiq
- Heroku
- Font Awesome
- React Bootstrap
- W3Schools
- Cloudinary
- Lucidchart
- Google Fonts
- React Documentation
- Pexels
- Sooraj MV on Dribbble
- Favicon generator
- Google Images for any images on the site
- lOGO - DRIBBLE.COM
- Tutor support for various questions on building both repositories. @CodeInstitute particularly help with building the API.
- Info about data fields https://www.geeksforgeeks.org/django-model-data-types-and-fields-list/
- More info on react components I read this https://itnext.io/controlled-vs-uncontrolled-components-in-react-5cd13b2075f9
- For variables I read this https://reactgo.com/react-get-current-date/ for variables
- Ways to bind event handlers I read this https://docs.google.com/document/d/1r7C6VtLiVtE54obMbhLU4z4fyzGPrCzxiLrcaqG4jT4/edit?pli=1#heading=h.b59w8b2mnfd5
- JSX further understanding I read this https://legacy.reactjs.org/docs/jsx-in-depth.html
- Components for react i read this https://articles.wesionary.team/react-functional-components-vs-class-components-86a2d2821a22?gi=d5f536d998bc 
- https://realfavicongenerator.net/ for my favicon
- https://www.postman.com/ testing 
















Acknowledgements - 

This fictional site was created for Portfolio Project #5 (Advanced Front End Specialisation) - Diploma in Full Stack Software Development at the Code Institute. 
Thank you to all the tutors, my mentor & everyone on slack for the constant support. 
  


