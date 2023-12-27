# THIS OR THAT | Portfolio Project 5 | advanced front end | Code Institute. 

## Site Description 


'This Or That' is an online website that compares celebrity fashion outfits. 
It gives the users fashion inspiration for if they were to go to an event themselves, a party and just keeps them upto date with the latest trends. 
It allows users to create user profiles, and interact with other fashion enthusiasts. 
It's a catelogue of style, which one is your taste?...
The user is able to follow other users, search on filterd searches & it gives the users space to comment their opinion on each post.
I took inspiration from this as I have a huge interest in fashion and with current trends on social media "ootd" [ outfit of the day ]
I wanted to incorperate something where I think there's a gap in the market in the current climate. 

The project has been split into 2 parts- the front end built with react and the back end API powered by Django rest frame work.


# Full Links to Project:

More info on the back end readme can be found here - https://github.com/sammaxfleet/THISORTHATAPI/blob/main/README.md


Link to live site - https://thisorthatpp5-9e3adcfaf8e9.herokuapp.com/


Link to the live API - https://thisorthatapi-56bb400a2b0e.herokuapp.com/


Link to the back end repository - https://github.com/sammaxfleet/THISORTHATAPI


# AM I RSPONSIVE IMAGE.




Wire Frames - [THISORTHAT WIREFRAMES.pdf](https://github.com/sammaxfleet/thisorthatpp5/files/13717176/THISORTHAT.WIREFRAMES.pdf)


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
For the user to find fashion inspiration & be able to like, Comment & Follow on their favourites Users & their posts. 
For the site to give the user the ability to interact with other users, create a profile & also Upload posts.
The objective is to see different outfits and latest trends, celebrities have access to the lastest fashion drops. 
This allows the user to keep up with trends & decide where they take the inspiration for their own expression, events, birthday's, social media etc. 

## SITE USER GOAL- 

Breaking down the site into a few main goals:

1 - Fashion Inspiration
2-  Network and interact with other community members
3 - Fashion Research
4-  Celebrity Styling 
5 - To be able to create a Profile and upload your inspiration | Sharing. 
6 - Mobile View & tablet view to be fully responsive. 
7 - Search through the site with Filters


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
Age wise it's suitable for teenagers upto 40's/ 50's. 
The fashion community has been building online now with 'OOTD' hash tags and people loving to show their fits for an occasion wether it’s a birthday or your favourite night out.
Users could be male or female, there is an equal spread of fashion content on there. 
It is also aimed at people wanting to develop and find their own expression with their clothing. 

## PROJECT MANAGEMENT - 

An agile methodology approach was used to plan and develop the 'This or That' project.
All the main features of the application were recorded as 'Epics' and then refined into smaller 'User Stories'.
The 'User Stories' were created and stored as GitHub issues and then mapped into iterations to help to plan the project and allocate the workload. 

You can find the link to these below. 

Link to user stories; https://github.com/users/sammaxfleet/projects/6

<img width="1437" alt="Screenshot 2023-12-18 at 10 46 04" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/3dd788ac-8934-4685-a9a4-7921ae5a12c5">

# AGILE METHODOLOGY

By using AGILE methodology in this project I was able to deliver a site which had all required functionality and some more. 
Due to the time limit on this project I was not able to incorporate all initial listed features, but this is where an AGILE approach is great for app design where you can edit and adjust when needed. 


I’ve used the MoSCoW prioritisation technique for the user stories.

Must Have:
Should Have:
Could Have:
Won’t Have:

Aswell as Milestones which are listed below. 

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
4. Can't make a comment if not logged in - MUST HAVE


EPIC 5 - 

Milestone - CRUD PROFILE

USER STORIES - PROFILES

  1. I can view most popular profile - SHOULD HAVE
  2. View a specific profile page - SHOULD HAVE 
  3. Edit my own profile Page - MUST HAVE 
  4. Can change name and password for log in details if want to make more secure. - MUST HAVE
  5. 

USER STORIES -  DIRECT MESSAGING
   1.  - Can view messages On my profile page and see what others have sent me  - WON'T HAVE
   2. - Can message another user and discuss opinions - COULD HAVE 
     


EPIC 6 - 

MileStone - SIGN UP/ LOG IN

USER STORIES - SIGN UP/ LOG IN

1. Have a secure sign up page - MUST HAVE 
2. Have a secure seperate log inpage - MUST HAVE


EPIC 7 -  Design


Milestone -  Design

1. Use colours that have continuity and capture the feeling of the site -  SHOULD HAVE
2. Get inspo from fashion blogs for the layout - SHOULD HAVE
3. Images on the site - MUST HAVE
4. Different fonts - SHOULD HAVE
5. Describe what the site is - SHOULD HAVE
6. TITLE -SHOULD HAVe
7. Back ground colour - SHOULD HAVE
8. Several different pages - WON'T HAVE



EPIC 8 - DESIGN

   MILESTONE - Home page design

User Stories: 
1. Find a Logo - MUST HAVE
2. Nav Bar - MUST HAVE 
3. Choose Colour Scheme - MUST HAVE 
4. Create 3 pages for the site - MUST HAVE 
5. Retrieve images from Google for comparison - MUST HAVE
6. - Add like tab, comment and follow. - MUST HAVE
7. Be able to Sign in/out - MUST HAVE
8. Be able to log in/out. - MUST HAVE

# CRUD Functionality 

CRUD Functionality
Tick It handles data with full CRUD Functionality:

Create - Users can create, an account, profile, tasks, comments, likes, posts. 
Read - Users can view the tasks, comments, posts of other users and also the profiles of these users.
Update - Users can update their profile, password & username. & update taks, comments, posts, following accounts. 
Delete - Users can delete tasks, comments, likes, follows. 



# Site Structure - 

'This or That' depending on login status different page states are available for the user.
 When the user is logged out the pages: Home, and Sign In or Up are available from the Navigation Bar menu. 
 When the user is logged in Comments, Signout and Profile Page also become available.

 The Site has 3 main pages when User 'LOGGED OUT' pages

 1. HOME
 2. SIGN IN
 3. SIGN UP


 when User 'LOGGED IN' : 
 
  1. PROFILE
  2. ADD POST 
  3. Edit Post 
  4. EDIT/ DELETE post
  5. Edit Profile/ Delete
  


# Colour Scheme - 

I took inspiration from fashion blogs, and stores like Zara & Arte. Which are sleek, simple & focus on the photo. 
Where this is a white background as full focus goes on the image, the user is then drawn to the content. Two contrasting colours are used to naviagte through the website. 

<img width="1435" alt="Screenshot 2023-10-08 at 13 12 50" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/5946cf27-8d7f-470b-a27c-d3c4a124223b">

# Typography - 

Kalnia font is used: I wanted to add a bit of an edgy font to this, with it being a fashion/ creative site. I thought the font was cool and took inspiration from the Zara website. 

<img width="272" alt="Screenshot 2023-12-27 at 14 04 15" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/4bb1d7f9-da4a-44d5-bb98-73f22a556e58">


Font Used: 
<img width="279" alt="Screenshot 2023-12-27 at 14 02 57" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/02086305-4156-4eed-b10d-6a63bacf9937">

Design on site: 

<img width="1057" alt="Screenshot 2023-12-27 at 14 01 23" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/eed80da1-b42e-4803-88e8-be62844b7bb5">





# Navigation 


<img width="350" alt="Screenshot 2023-12-27 at 14 06 29" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/3c57acf3-afe8-4ec0-857f-8d87705524b9">



The Navigation Bar is slick and simple. 
Depending on wether you're signed in or not a different option on the menu appears.
On accessing the site for the first time, the user is logged out and the following menu items are visible:

1. - HOME
2. - SIGN IN
3. - SIGN UP 

Once Signed in: 

<img width="406" alt="Screenshot 2023-12-27 at 14 05 26" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/7d29c708-259f-4c65-94ed-a2ec6be2ca14">

1. - HOME
2. - LOGOUT
3. - PROFILE
4. - ADD POST


Orange Highliught over Nav Bar

This highlight comes when you hover over the page, to give the colour continiuty on the site from the logo. 

<img width="99" alt="Screenshot 2023-12-27 at 14 07 44" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/aeb13f46-5fa1-4c93-82e2-2357e3db8e90">

Mobile view the Nav Bar folds in. 

   

# Homepage - 

The Home page has 4 main React Components

- Popular Users
- Search Keyword
- Fashion Posts
- Like, Comment & Follow

<img width="1097" alt="Screenshot 2023-12-27 at 14 11 41" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/c1ef5a0f-6e91-423d-b9dc-91887df60a1a">

The popular profiles component is a permanent feature across the entire site. It appears at the top of all pages.
This component uses a filter to order all site users by followers count from highest to lowest
The users with the highest follower count are determined to be the most popular profiles and the top six are displayed within the popular profiles component.

If the user isn't logged in they can't follow.
The username at the top 6 most popular profiles, and if the user is logged in, they will also see a button enabling them to follow or unfollow the profile.


Mobile View: 

<img width="511" alt="Screenshot 2023-12-27 at 14 10 10" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/9b69584e-6f8a-43f3-837f-7fc033246415">


# Search Bar

Here I have searched the keyword 'Bakayo' this has allowed me to search a keyword from a post and showed the post. 

<img width="989" alt="Screenshot 2023-12-27 at 14 15 13" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/15822d22-c3be-4d8d-aa9f-caa8900db7a2">

# Posts

How a post is displayed by a User, it focuses on the main feature which is the Image.
A title 
Description of the outfit
Likes & Comments 

<img width="818" alt="Screenshot 2023-12-27 at 14 16 37" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/cce69670-650b-4746-90c0-5628fd9441bf">


# Following a  User 

Once clicked on a User's profile we get lead to this 'Follow Page' 
Here we can see the Users posts
See their follow count & their following count. 



<img width="863" alt="Screenshot 2023-12-27 at 14 19 04" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/199938a1-4cce-4df2-b136-1165e25ff769">


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


#frame works and libraries

- Redux toolkit : state management libraary
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
  


