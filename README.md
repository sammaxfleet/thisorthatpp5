# THIS OR THAT 


'This Or That' is an online website that compares celbrity fashion outfits. It allows users to create user profiles & compare likes. 
The user gets to prefer which outfit a celbrity is wearing. 
It's a battle of style, which one is your taste?... Which then gives the users space to comment their opinion and connect with the 'This Or That' Community. 



This project was built as the final portfolio submission for the @codeinstitute higher national diploma full stack software development.
The project has been split into 2 parts- the front end built with react and the back end API powered by Django rest frame work.

More info on the back end readme can be found here - 


Link to live site -



Link to the live API - 


Link to the back end repository - https://github.com/sammaxfleet/THISORTHATAPI


AM I RSPONSIVE IMAGE.

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

 To provide a stable platform for the fashion enthusiasts, to be able to find interest for inspiration & be able to
interact with the platform choosing which outfit they like plus being able to comment on the style. 


## SITE USER GOAL- 

The site user goal
Breaks down into a few things

Fashion Inspiration
Network and interact with other community members
Fashion research
 Comment their views  and voice their opinion on fashion 
Check out their favourite celebrities style. 



## SITE OWNER GOAL - 

To provide a stable and enjoyable user experience that encourages continued user interaction and participation. The platform should be engaging and welcoming to new users. Content should be well structured and of high quality, navigation and site functionality should be intuitive and accessible. 



## TARGET AUDIENCE -
Target audience is anyone who has an interest in fashion. The fashion community has been building online now with OOTD hash tags and people loving to show their outfits for an occasion wether it’s a birthday or your favourite night out . 
This can bring a lot of inspiration into the space. 
Users could be male or female, there is an equal spread of fashion content on there. 

## PROJECT MANAGEMENT - 

An agile methodology was used to plan and develop the This or That project.
All the main features of the application were recorded as epics and then refined into user stories.
These user stories were created and stored as GitHub issues and then mapped into iterations to help to plan the project and allocate the workload. 




## User Stories Link Front end 

Here I have listed the main user stories for a user who is not logged in, or has no account and a logged in user. These user stories were then tested and confirmed in the Testing section.

## Logged Out Site User

- Ability to log in
- Abolity to Sign Up
- See All Posts that have been shared
- View a single Post
- Can view the highest liked or commented posts
- Can View Popular Profiles
- Can Navigate through Pages
- Can filter by Celebrity and Fashion Brand
- Can search posts by Date & Profile
- Can View comments to see what people think
- Can Like Posts


### Logging In Site User 


- Ability to Log in smoothly
- Log out smoothly
- Can Make my own post

### Likes
- can like a Post 
- can csee amount of  likes


### Follow
  
- Can follow another User
- Can unfollow a User

### Comments
    
- Edit own Comments
- Can Delete a comment
- Can view other peples comments
- 

### Profiles

  - I can view most popular profile
  - View a specific profile page
  - Edit my own profile Page
  - Can change name and password for log in details if want to make more secure.

# Direct messaging
    - Can view messages n my profile page and see what others have sent me
    - Can message another used and discuss opinions 


# SITE CREATION USER STORIES 

- Find a Logo

- Nav Bar

- Choose Colour scheme

- Create CRUD for User Account

- Create 3 pages for the site

- Retrieve images from Google for comparison 
Choose which celebrities it will feature
There are 20 celebrities to compare style. 

- Add like tab

- Be able to Sign in

-  Be able to Sign up

- Be able to log out


# Site Structure - 

ThisorThat is split up in two parts: Either when the user is logged out or when the user is logged in.
Depending on login status different page states are available for the user.
When the user is logged out the pages: Home, and Sign In or Up are available from the Navigation Bar menu. When the user is logged in Commentss, Signout and Profile Page also become available.


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
  


