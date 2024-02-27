# THIS OR THAT | Portfolio Project 5 | Advanced Front End | Code Institute. 

## Site Description :


'This Or That' is an online website that compares celebrity fashion outfits, It is designed to bring fashion inspiration for the user & to keep up with the latest fashion releases. 
It allows users to create user profiles, and interact with other fashion enthusiast users. 
It's a catelogue of style,' which one is your taste?'.
The user is able to follow other users, search on a filterd search & it gives the users space to comment their opinion on each post.
I took inspiration for this as I have a huge interest in fashion and with current trends on social media "ootd" [ outfit of the day ] circulating I wanted to express where I think there's a gap in the market in the current climate. 
The problem statement ?..' How can we take what's happening on social media on media instagram and tiktok and build it all on one place?'.  

Enhanced user features:

If a profile is created you are then able to follow, like, comment, post yourself and save posts.
You then can interact with the community, without a profile you're browsing from a distance. 

Frontend Experience:

Thisorthat's frontend is built using the React framework, ensuring a modern and responsive user interface. The frontend seamlessly connects and interacts with the backend API through efficient HTTP requests, providing a smooth and enjoyable user experience.

The project has been split into 2 parts- the front end built with react and the back end API powered by Django rest frame work.


# Full Links to Project:

Link to live site - https://thisorthatpp5-9e3adcfaf8e9.herokuapp.com/

The link to the backend readme can be found here - https://github.com/sammaxfleet/THISORTHATAPI/blob/main/README.md

Link to the live API - https://thisorthatapi-56bb400a2b0e.herokuapp.com/

Link to the back end repository - https://github.com/sammaxfleet/THISORTHATAPI


# AM I RSPONSIVE IMAGE.

<img width="1047" alt="Screenshot 2024-01-02 at 15 16 27" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/4939a604-e1b1-498d-9377-e48cc37cbf9c">



# TABLE OF CONTENTS - 

- [THIS OR THAT | Portfolio Project 5 | Advanced Front End | Code Institute.](#this-or-that---portfolio-project-5---advanced-front-end---code-institute)
  * [Site Description :](#site-description--)
- [Full Links to Project:](#full-links-to-project-)
- [AM I RSPONSIVE IMAGE.](#am-i-rsponsive-image)
  * [Wireframes](#wireframes)
  * [PROJECT  OBJECTIVE -](#project--objective--)
  * [SITE USER GOAL-](#site-user-goal-)
  * [SITE OWNER GOAL -](#site-owner-goal--)
  * [TARGET AUDIENCE -](#target-audience--)
- [PROJECT MANAGEMENT -](#project-management--)
  * [AGILE METHODOLOGY](#agile-methodology)
  * [User Stories](#user-stories)
  * [Logged Out Site User](#logged-out-site-user)
    + [Logged In Site User](#logged-in-site-user)
- [MANUAL TESTING](#manual-testing)
- [EPICS/ MILESTONES & USER STORIES](#epics--milestones---user-stories)
  * [User Stories Breakdown:](#user-stories-breakdown-)
- [Site Structure](#site-structure)
  * [Key Features:](#key-features-)
  * [CRUD Functionality](#crud-functionality)
  * [Colour Scheme](#colour-scheme)
  * [Typography -](#typography--)
  * [Navigation](#navigation)
  * [Homepage -](#homepage--)
  * [Mobile View:](#mobile-view-)
  * [Search Bar](#search-bar)
  * [Posts](#posts)
  * [Following a User](#following-a-user)
  * [Following And unfollowing a User](#following-and-unfollowing-a-user)
- [Edit Profile](#edit-profile)
  * [Edit Username](#edit-username)
  * [Change Password](#change-password)
  * [Change Username](#change-username)
  * [Add Post](#add-post)
- [post liked - with notification](#post-liked---with-notification)
- [Post Unliked with Notification](#post-unliked-with-notification)
- [Add Comment](#add-comment)
  * [Editing Comments by User logged in](#editing-comments-by-user-logged-in)
  * [Edit Delete/ Commment](#edit-delete--commment)
  * [Edit Comment](#edit-comment)
  * [Delete comment](#delete-comment)
- [Save Post](#save-post)
- [Validation Testing](#validation-testing)
  * [Light House Performance](#light-house-performance)
  * [Fixing Bugs](#fixing-bugs)
- [Deployment -](#deployment--)
  * [Fork this Project Repository](#fork-this-project-repository)
  * [Running the project locally](#running-the-project-locally)
  * [Deployment to Heroku](#deployment-to-heroku)
- [Frame works and libraries used](#frame-works-and-libraries-used)
- [Credits & Acknowledgements -](#credits---acknowledgements--)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>




## Wireframes

The foundation of the front end is to build a visual representation before working on the site. 

Wire Frames - [THISORTHAT WIREFRAMES.pdf](https://github.com/sammaxfleet/thisorthatpp5/files/13717176/THISORTHAT.WIREFRAMES.pdf)

## PROJECT  OBJECTIVE - 

To provide a stable, interactive platform for fashion enthusiasts.
For the user to find fashion inspiration & be able to like, Comment, Follow & save posts on their favourites Users/posts. 
For the site to give the user the ability to interact with other Users, create a Profile & also Upload Posts of their own.
The objective is to see different outfits and latest trends, celebrities have access to the lastest fashion drops. 
This allows the user to keep up with trends & decide where they take the inspiration for their own expression, events, birthday's, social media etc. 
So much fashion inspiration is spread over different platforms this essentially creates a site that brings all the interaction into one place. 

## SITE USER GOAL- 

Breaking down the site into a few main goals:

1 - Fashion Inspiration
2-  Network and interact with other community members
3 - Fashion Research
4-  Celebrity Styling 
5 - To be able to create a Profile and upload your inspiration | Sharing. 
6 - Mobile View & tablet view to be fully responsive. 
7 - Search through the site with Filters
8 - Save Posts you like & follow. 


## SITE OWNER GOAL - 

To provide a stable and enjoyable user experience that encourages continued user interaction and participation. 
The platform should be engaging and welcoming to new users, it should be easy to sign up!
Content should be well structured and of high quality, navigation and site functionality should be intuitive and accessible. 

1. - Tasks filtering by keyword search.
2. - Responsiveness to allow pleasant usage of the app across a range of devices with varying display sizes.
3. - CRUD functionality for comments, uploads & to alter their profile.
4. - User Authentication
5. - The site to be simple and use intuitive navigation across all pages.
6. - Be able to 'like' and 'Comment', 'Follow' & 'Save'.
  
   

## TARGET AUDIENCE -

The target audience is aimed at the fashion community. 
Age wise it's suitable for teenagers upto 40's/ 50's. 
The fashion community has been building online now with 'OOTD' hash tags and people loving to show their fits for an occasion wether it’s a birthday or your favourite night out.
Users could be male or female, there is an equal spread of fashion content on there. 
It is also aimed at people wanting to develop and find their own expression with their clothing. 
Another target audience could be bloggers, where they can take the latest inspiration & blog/ vlog aout it. 




# PROJECT MANAGEMENT - 

An agile methodology approach was used to plan and develop the 'This or That' project.
All the main features of the application were recorded as 'Epics' and then refined into smaller 'User Stories'.
The 'User Stories' were created and stored as GitHub issues and then mapped into iterations to help to plan the project and allocate the workload. 

You can find the link to these below. 

Link to user stories; https://github.com/users/sammaxfleet/projects/6

<img width="1437" alt="Screenshot 2023-12-18 at 10 46 04" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/3dd788ac-8934-4685-a9a4-7921ae5a12c5">

## AGILE METHODOLOGY

By using AGILE methodology in this project I was able to deliver a site which had all required functionality and some more. 
Due to the time limit on this project I was not able to incorporate all initial listed features, but this is where an AGILE approach is great for app design where you can edit and adjust when needed. 


I’ve used the MoSCoW prioritisation technique for the user stories.

Must Have:
Should Have:
Could Have:
Won’t Have:

Milestones which are listed below are big user stories which are then but into smaller ones. 



## Logged Out Site User features


- Ability to Sign Up
- See All Posts that have been shared
- Search keywords
- View a Single Post 
- Can View Popular Profiles
- Can Navigate through Pages smoothly 
- Can filter by Celebrity
- Can View comments to see what people think



### Logged In Site User features

All of the above and additionally..

- Ability to log in
- Log out 
- Can Like/ unlike Posts
- Can Save/unsave Posts
- Can follow/ unfollow other Users
- Can Edit Profile & posts 
- Can Make my own posts
- Can delete/ edit own posts.

# MANUAL TESTING




## User Stories 

Below I have listed the main user stories for a user who is not logged in, or has no account and then for a logged in user. 
The user stories were then tested and confirmed in the Testing section.


## EPICS/ MILESTONES & USER STORIES

I used the following Milestones as Epics when creating the project. 

1. Installation Back End API
2. Installation Front End
3. Design
4. CRUD User Account
5. Sign Up/ Log In Functionality
6. Testing/ Site functionality.

   
## User Stories Breakdown:

* EPIC 1

Milestone - Installation Back End 

User stories -

1. Get Api working linking with front end - MUST HAVE
2. Deploy to heroku - MUST HAVE
3. Turn debug to FALSE - MUST HAVE
4. Secret Key  - MUST HAVE


* EPIC 2

MileStone - Installation | User Stories - Install Django & Bootstrap

User Stories -

1. Install Django smoothly, & any plug ins needed.- MUST HAVE
2. Connect to Heroku - MUST HAVE
3. Connect ESLindt & Prettier - SHOULD HAVE
4. Connect Bootstrap - MUST HAVE


* EPIC 3 

MileStone - Design | User Stories - Wireframes

User Stories -

1. As the developer I can create wireframes to make the website easier to build, for time management sticking to the agile approach. MUST HAVE

* EPIC 4

Milestone -  Design

1. Use colours that have continuity and capture the feeling of the site -  SHOULD HAVE
2. Get inspo from fashion blogs for the layout - SHOULD HAVE
3. Images on the site - MUST HAVE
4. Different fonts - SHOULD HAVE
5. Describe what the site is - SHOULD HAVE
6. TITLE - SHOULD HAVe
7. Back ground colour - SHOULD HAVE
8. Several different pages - WON'T HAVE
9. Favicon - SHOULD HAVE



* EPIC 5 

Milestone - Home page DESIGN

User Stories: 
1. Find a Logo - MUST HAVE
2. Nav Bar - MUST HAVE 
3. Choose Colour Scheme - MUST HAVE 
4. Create 4 pages on the nav bar - MUST HAVE 
5. Retrieve images from Google for comparison - MUST HAVE
6. - Add like tab, comment, follow ,save. - MUST HAVE
7. Be able to Sign in/out - MUST HAVE
8. Be able to log in/out. - MUST HAVE


 * EPIC 6 

MileStone - SIGN UP/ LOG IN

USER STORIES - SIGN UP/ LOG IN

1. Have a secure sign up page - MUST HAVE 
2. Have a secure seperate log inpage - MUST HAVE
3. Password confirmation - MUST HAVE
4. Password and username restrictions - MUST HAVE
5. Notification when signed in & Navbar changes - MUST HAVE
6. notifcations when logged out & NavBar changes - MUST HAVE


* EPIC 7

Milestone - CRUD PROFILE

USER STORIES - PROFILES


  1. Edit my own profile Page - MUST HAVE
  2. I can edit my username - MUST HAVE
  3. Change Photo - MUST HAVE
  4. Can change name and password for log in details if want to make more secure. - MUST HAVE
     

USER STORIES -  DIRECT MESSAGING
   1.  - Can view messages On my profile page and see what others have sent me  - WON'T HAVE
   2. - Can message another user and discuss opinions - COULD HAVE
     
      

* EPIC 8

Milestone - Design when logged in 

User Stories - Likes 

1.  The user can like a Post - MUST HAVE
2.  The User can see the amount of Likes - SHOULD HAVE
3.  Can Unlike - SHOULD HAVE


User stories - Following  
  
1. Can follow another User - SHOULD HAVE 
2. Can unfollow a User - SHOULD HAVE
3. Can't follow when no profile exists - SHOULD HAVE 
4. Can follow most popular users at the top of page - SHOULD HAVE 

User Stories - Comments 
    
1. Edit own Comments - SHOULD HAVE 
2. Can Delete a comment - SHOULD HAVE 
3. Can view other poeples comments ( when not logged in) - MUST HAVE 
4. Can't make a comment if not logged in - MUST HAVE


User Stories - Saved 

1. Can Save a post - SHOULD HAVE
2. Can unsave a post - SHOULD HAVE

User Stories - Posts

1. User be able to make post adding IMAGE, DESCRIPTION & FASHION INSPIRATION FILTER - MUST HAVE
2. Be able to edit post - MUST HAVE 
3. be able to delete Post. - MUST HAVE

     

# Site Structure 

'This or That' depending on login status different page states are available for the user.
 When the user is logged out the pages: Home, and Sign In or Up are available from the Navigation Bar menu. 
 When the user is logged in Comments, Signout and Profile Page also become available.

 The Site has 3 main pages when User 'LOGGED OUT' pages: 

 1. HOME
 2. SIGN IN
 3. SIGN UP


 When User 'LOGGED IN' : 
 
  1. PROFILE
  2. ADD POST 
  3. Edit Post 
  4. EDIT/ DELETE post
  5. Edit Profile/ Delete
  6. SIGN OUT -[BUTTON] Not a page.
  





User Experience

Error Handling - Manual Testing


Signing Up: 

1. The Password set has to have a balance between numbers and letters for it to be a recognised safe password for the sites standards. There is no maximum number for characters but there is a minimum.

<img width="405" alt="Screenshot 2024-02-26 at 09 57 46" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/8f286a1b-f605-4182-8b32-ef334c88e059">

2. If You just select a letters that are too short it'll give you this notification.
   
<img width="400" alt="Screenshot 2024-02-26 at 10 01 09" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/83374606-d8ab-48c6-babc-f2b235daff8f">


3. Successful Log in
   
<img width="323" alt="Screenshot 2024-02-26 at 10 03 55" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/be98b355-3468-4a5d-b23c-ea63f4cb896a">

4. Successful Log Out

<img width="390" alt="Screenshot 2024-02-26 at 10 04 46" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/aea033be-9492-40dc-9a14-f82cab1b4232">

5. Testing for if the password field is left blank or the username is duplicated (Already used) this notifcation is placed. 
   
<img width="334" alt="Screenshot 2024-02-26 at 12 06 56" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/ad2e6554-3f21-4a89-96ee-71acce684194">

6. <img width="401" alt="Screenshot 2024-02-26 at 10 11 34" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/980e5ffb-3a68-4a41-a97e-7f947d10b1b9">

   If the log in isn't correct this pop up will show.


Signing in: 


1. <img width="305" alt="Screenshot 2024-02-26 at 10 09 42" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/b28045a1-e3d3-4109-acd6-b1dedc6372eb">

   Succesful Sign in, when details are correct. 

2. <img width="312" alt="Screenshot 2024-02-26 at 10 10 15" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/1f342f6e-00b3-45a1-951f-5f99ee764d6e">

   The display of the Nav Bar then asjusts as the User logs in for full site functionality.
   

Home Page | Search Bar :

1. Searching for the User or for the celebrity feature works even with a limited account it's the only feature available without signing up.

<img width="1033" alt="Screenshot 2024-02-26 at 10 16 02" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/1eee88c3-ea41-46de-b3a9-3c828255fdc4">

2. Searching for something invalid will be left blank.
    
<img width="1034" alt="Screenshot 2024-02-26 at 10 17 07" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/49e28b74-3c9f-4493-aed9-c6cdfc3c863e">


Comments 

1. If not logged a user cannot comment and is notified. 
   
 <img width="396" alt="Screenshot 2024-02-26 at 10 35 34" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/4563ba16-90c8-4f60-b721-9969486871bd">
 
1. Comment Notification for Comment published

 <img width="467" alt="Screenshot 2024-02-27 at 14 12 39" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/071bd3b3-ea7c-4cf4-acf7-e0fb31e77d55">

2. Once the comment is clicked on it the opens up in a new tab with the post 

<img width="720" alt="Screenshot 2024-02-26 at 10 34 59" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/db83b47a-6d83-4993-b345-8a0beeff72ba">


4. Testing Comment Edited
   
<img width="307" alt="Screenshot 2024-02-26 at 11 57 31" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/fb6141ea-b92b-4414-9da7-c73a84a5c8d5">

6. Testing Comment Deleted
   
<img width="325" alt="Screenshot 2024-02-26 at 11 57 42" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/aa2ac72c-a602-434f-9b9c-610a6a5e1446">


Likes : 

1. The Like button works, & alerts when used logged in.
   
  <img width="303" alt="Screenshot 2024-02-26 at 10 40 18" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/91b4de5c-fbff-4b57-8431-96928e5fa54c">
  
2.  The Unlike Button works when user logged in 
   <img width="312" alt="Screenshot 2024-02-26 at 10 41 06" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/6e608438-df40-4e94-87f6-9cb229ded833">

3. When not logged in it is not possible and this notification alerts. 
   
   <img width="320" alt="Screenshot 2024-02-26 at 10 42 14" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/0ed101b2-ceed-4758-b3ec-aa7c088ad393">
   
4. If a post is already liked and you log out(  it doesn't update )

Saved : 

1. Notification to the user that they can't save
   
<img width="329" alt="Screenshot 2024-02-26 at 10 43 17" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/67a7d0c3-fa57-4e9b-b963-a35de94243a4">

2. A notification that the post is saved
   
   <img width="324" alt="Screenshot 2024-02-26 at 10 43 41" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/e9f045c7-cb15-4c46-af70-b65bce93a34d">




Edit Profile:

1. Edit Bio, Notifiction.
   
   <img width="328" alt="Screenshot 2024-02-27 at 14 52 05" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/82f83617-b824-4906-b64a-c66d7682d4f5">


2. Change Image.
   
 <img width="367" alt="Screenshot 2024-02-27 at 14 52 57" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/b81a68eb-cb4b-4d4d-a3ab-694b66f3dbde">

   
3. <img width="463" alt="Screenshot 2024-02-26 at 10 46 49" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/b4eca122-1cf8-4d84-93f5-62020cc2eb85">
   One button clicked to update.

   
4. Change Password  <img width="340" alt="Screenshot 2024-02-26 at 10 49 08" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/08656533-0b13-45c4-8fe1-18b61bc511c0"> If the passwords don't match it'll let you know.

5. Username Change
   
<img width="318" alt="Screenshot 2024-02-27 at 14 57 53" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/83d54b1e-4c47-46a5-808b-7af9b0fdf9f9">


6. If you try and enter with a space in the 'Username' this django error alert comes up. 
<img width="306" alt="Screenshot 2024-02-27 at 14 56 33" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/9b98e515-ca8c-41b2-a5fb-ee938d1ec9ba">






Editing Posts after edit : 

<img width="493" alt="Screenshot 2024-02-26 at 10 53 27" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/db70ddbd-ee80-4291-99a5-282990f3deb6">

Remove from saved

<img width="390" alt="Screenshot 2024-02-26 at 10 04 46" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/f2515094-1b00-447e-95f6-7abfbf49a5cd">



Following a User

<img width="399" alt="Screenshot 2024-02-26 at 11 00 38" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/ab05131e-c577-4740-be15-9911f972bdfe">


Button colour changes for the user experience

<img width="127" alt="Screenshot 2024-02-26 at 11 01 02" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/7977023a-f3e3-4152-a0dc-95eb837937e6">


<img width="122" alt="Screenshot 2024-02-26 at 11 04 41" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/a46abd7a-ac53-4619-ad4e-8a179b08d9c7">



Adding a Post


Create a Post (not working) took a while for the update to come. 

<img width="314" alt="Screenshot 2024-02-26 at 11 06 50" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/f9c506b7-12fd-40ee-b1d1-de8a22c1cddd">

If image size is too big you will know


<img width="459" alt="Screenshot 2024-02-26 at 11 07 31" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/c5116e1c-3fbe-4a09-a82f-42eb335b236b">

Updating post - <img width="296" alt="Screenshot 2024-02-26 at 12 00 37" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/0436549a-775d-4204-8299-3a876b400ac5">

Deleting Post - <img width="329" alt="Screenshot 2024-02-26 at 12 00 57" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/ef6a56e7-77fb-450c-9776-668df232e6ee">





## Key Features:

The "Key Features" section highlights the main features or functionalities that make the Autotrader marketplace unique and appealing to users.

1. Search by celebrity name to filter down your search.
  
2.  User Profiles: Explain how users can create profiles and manage their information, including personal details, saved searches, and editing posts. 

3. Viewing All Posts, a timelane of all posts is there so you can view everything.

4. Saved Favorites: Emphasize the feature that enables users to save their favorite outfit and easily access them later for quick reference.

5. Interaction: Follow users, comment, like or even follow their page to stay updated.
   

## CRUD Functionality 

CRUD Functionality
Tick It handles data with full CRUD Functionality:

Create - Users can create, an account, profile, tasks, comments, likes, posts. 
Read - Users can view the tasks, comments, posts of other users and also the profiles of these users.
Update - Users can update their profile, password & username. & update taks, comments, posts, following accounts. 
Delete - Users can delete tasks, comments, likes, follows. 

   
##  Colour Scheme 

I took inspiration from fashion blogs, and stores like Zara & Arte. Which are sleek, simple & focus on clothing.
The site has a white background as full focus goes on the images. The user is then drawn to the content, Two contrasting colours are used to navigate through the website. 

https://www.zara.com/
https://arte-antwerp.com/

<img width="1435" alt="Screenshot 2023-10-08 at 13 12 50" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/5946cf27-8d7f-470b-a27c-d3c4a124223b">


## Typography - 

Kalnia font is used. 
I wanted to add a bit of an edgy font, with it being a fashion/ creative site. I thought the font was cool and took inspiration from the Zara website. 

<img width="272" alt="Screenshot 2023-12-27 at 14 04 15" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/4bb1d7f9-da4a-44d5-bb98-73f22a556e58">


 Font Used: 
<img width="279" alt="Screenshot 2023-12-27 at 14 02 57" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/02086305-4156-4eed-b10d-6a63bacf9937">

Design on site: 

<img width="1057" alt="Screenshot 2023-12-27 at 14 01 23" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/eed80da1-b42e-4803-88e8-be62844b7bb5">


## Navigation 


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


Orange Highlight over NavBar

This highlight comes when you hover over the page, to give the colour continiuty on the site from the logo. 

<img width="99" alt="Screenshot 2023-12-27 at 14 07 44" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/aeb13f46-5fa1-4c93-82e2-2357e3db8e90">

Mobile view the Nav Bar folds in. 


## Homepage - 

The Home page has 4 main React Components

- Popular Users
- Search Keyword
- Fashion Posts
- Like, Comment, Follow & Saved. 

<img width="1097" alt="Screenshot 2023-12-27 at 14 11 41" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/c1ef5a0f-6e91-423d-b9dc-91887df60a1a">

The popular profiles component is a permanent feature across the entire site. It appears at the top of all pages.
it's good feature to have to encourage the user to interact with others once signed up. 
If the user isn't logged in they can't follow the profiles. 

## Mobile View: 

The mobile view, makes everything more compact the nav bar goes into a small tab & the popular user feature disappears for larger screens.
The same functions still work just the initial 'POPULAR USER PROFILES' doesn't come up on mobile view. 

<img width="218" alt="Screenshot 2024-01-03 at 16 17 11" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/62293830-9412-41be-ba28-1fdc65cf6050">



## Search Bar

Here I have searched the keyword 'Bakayo' this has allowed me to search a keyword from a post and showed the post. 

The search bar allows the website to be filtered, you can search for celebrity name/ user/ or a word of inspiration. 

<img width="989" alt="Screenshot 2023-12-27 at 14 15 13" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/15822d22-c3be-4d8d-aa9f-caa8900db7a2">

## Posts

How a post is displayed by a User, it focuses on the main feature which is.

1. Image.
2. A title 
3. Description of the outfit
4. Fashion Inspiration
5. Likes & Comments, Saved. 


This layout is simple, and really focuses on the image being the main feature, beneath the photo is the interactive buttons. 


<img width="818" alt="Screenshot 2023-12-27 at 14 16 37" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/cce69670-650b-4746-90c0-5628fd9441bf">


## Following a User 

Once clicked on a User's profile we get lead to this 'Follow Page'. 
Here we can see the Users posts & see their follow count & their following count. 


<img width="863" alt="Screenshot 2023-12-27 at 14 19 04" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/199938a1-4cce-4df2-b136-1165e25ff769">

## Following And unfollowing a User

The button changes colour to red for unfollow and is blue for the follow button. 
This page is made so you can follow a users posts, see their engagement and activity. 


<img width="1367" alt="Screenshot 2023-12-27 at 14 42 26" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/517ec225-0111-48d3-9879-7897d13c7180">


# Edit Profile 

Here is where we can edit our profile, update your latest profile photo, username & Password. 

This is such a big feature, as updating your profile is so neccesary and the foundation to interact with others. 

<img width="952" alt="Screenshot 2023-12-27 at 14 33 27" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/2f84bc26-560f-4d09-b09a-29586a579b9a">

## Edit Username

<img width="643" alt="Screenshot 2023-12-27 at 14 33 57" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/91c8891d-1100-44f4-b291-3abea4723187">

## Change Password


<img width="1252" alt="Screenshot 2023-12-27 at 14 34 20" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/045e64f2-41f2-4f95-8684-75709f1f7f11">

## Change Username


<img width="548" alt="Screenshot 2023-12-27 at 14 34 48" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/e2087dd9-46dd-4030-8efd-d1c6e626a02e">

## Add Post

The essential page for the site. Here is how you add a post,

I've filtered it so it goes:


{ Image }

{ Celebrity Name }

{ Description }

{ Fashion Inspiration }

The create button means it gets posted to the Home page.
If you want to edit post you can from profile or from there. 


<img width="1080" alt="Screenshot 2023-12-27 at 14 36 34" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/2084dfd1-0957-45aa-9e67-dec4962fb2f7">

Tap to upload image

<img width="1264" alt="Screenshot 2023-12-27 at 14 43 05" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/8b176809-f777-41d9-b902-a5d6d20ecb09">


# post liked - with notification 

To like a post means being able to give it a thumbs up, and support. 
This is a very popular feature on social media, & will gain attraction. 
This feature is important and tells us as the website users how many posts a like has.
A user can also unlike posts, but if not logged in this feature isn't available. 

<img width="1342" alt="Screenshot 2023-12-27 at 14 36 53" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/f1342561-7e82-43ee-a382-3e971fb9e136">

# Post Unliked with Notification 

Post Unliked is able to be used with functionality. 

<img width="1335" alt="Screenshot 2023-12-27 at 14 37 17" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/69af35c7-3f2f-4922-abcc-561b735a092d">

# Add Comment

Adding Comment allows the user to share their opinion.
One of the goals of the site is to allow people to interact more expressing their opinions & being able to edit their views. 
After the first pop up in the centre of the screen, you then can see the comment sbelow the photos. 

<img width="505" alt="Screenshot 2023-12-27 at 14 37 42" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/6d77361e-440d-462d-91fd-59839ceb6bc0">

##  Editing Comments by User logged in 

Here is where a User can edit their Comment. 

<img width="1222" alt="Screenshot 2023-12-27 at 14 38 21" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/0585d8b7-3054-448e-adda-45d36556ab6c">

## Edit Delete/ Commment 

<img width="228" alt="Screenshot 2023-12-27 at 14 38 48" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/7b8ab3cf-06bc-45d1-a423-e26b34978938">

## Edit Comment 

<img width="1183" alt="Screenshot 2023-12-27 at 14 39 12" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/68055f23-ef5f-4e3e-bdb9-c61d58665296">

## Delete comment 

The comment is now deleted and can't be seen by any User. 

<img width="1362" alt="Screenshot 2023-12-27 at 14 40 20" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/63f3c6c7-2b7b-4ed3-8b5d-d6248b7d8e93">

# Save Post

<img width="418" alt="Screenshot 2023-12-31 at 17 09 36" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/d01e3412-22c6-43a0-ae0f-9376b0d7439f">

On the 'profile' page you can edit your 'Saved Post'.
It also shows on other User profiles the post they've saved. 

<img width="434" alt="Screenshot 2023-12-31 at 17 10 15" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/e51f1ac0-8818-423d-9069-20c04786ef1a">

& Remove it if you wish

<img width="385" alt="Screenshot 2023-12-31 at 17 10 44" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/f61bbf43-79b7-4cbf-809f-3ffc4fb1abe6">


# Validation Testing


## Light House Performance 


EsLindt Validator has been used to detect any problems in the workspace through all pages. 

Any functions not being used I deleted on the JS files, there are no problems currently in the workspace.

Example of a validated page with ESLINDT & Prettier extension

<img width="769" alt="Screenshot 2024-01-03 at 14 48 39" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/892eea9a-a7f9-4f2a-9c59-63b767c558ba">

There are NO current problems in the workspace:

<img width="436" alt="Screenshot 2024-01-03 at 14 45 24" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/86ca7cdc-269c-4ece-8cb8-b86a66f1317f">



Home Page:

<img width="360" alt="Screenshot 2024-01-02 at 18 53 56" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/37fce6b0-670e-4edd-8ada-a3c8eb3209cf">

Profile:

<img width="357" alt="Screenshot 2024-01-02 at 18 55 31" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/e4e33c01-7c88-4196-970c-6b84b11f9fbd">

Sign In Page: 

<img width="366" alt="Screenshot 2024-01-02 at 18 57 35" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/cb69962a-32b4-4e73-8f0c-4f4ae5377374">


Sign Up Page: 

<img width="364" alt="Screenshot 2024-01-02 at 18 58 37" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/e4291dd7-d4a6-4157-917a-73f3dad414b0">

Comments page: 

<img width="361" alt="Screenshot 2024-01-02 at 19 00 08" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/a6b1ff48-74f6-4488-a587-c8f560761aa6">


JSX:

Throughout the development process, the JSX code underwent meticulous validation and underwent a continuous refinement process. 
This rigorous approach aimed to guarantee the impeccable quality of the code as the project progressed. 
By subjecting the JSX code to thorough validation, potential errors and issues were diligently identified and addressed. 
Additionally, through the continuous refinement process, the code was regularly reviewed, optimized, and improved to enhance its performance, readability, and adherence to coding standards. 
This commitment to ensuring the excellence of the JSX code resulted in a high-quality user interface and minimized the occurrence of bugs or inconsistencies, ultimately enhancing the overall user experience.


ALL CSS files pass through the Jigsaw validator with no issues found:

<img width="1397" alt="Screenshot 2024-01-03 at 15 37 24" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/64ba3376-0455-4aae-a194-80c5ecfd2c51">



## Fixing Bugs

As you can see here I had some bugs to fix, the main thing to fix was to delete functions I'd changed and was no longer using.
Particularly on the 3 pages of

- Posctard.js
- Postcard comments.js
- NavBar.js
  
<img width="604" alt="Screenshot 2024-01-02 at 21 01 03" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/6949f690-40a3-4499-be26-f774830426ba">


# Deployment - 

## Fork this Project Repository

It is possible to make an independent copy of a GitHub Repository by forking the GitHub account. The copy can then be viewed and it is also possible to make changes in the copy without affecting the original repository. To fork the repository, follow these steps:

1. After logging in to GitHub, locate the repository. On the top right side of the page there is a 'Fork' button. Click on the button to create a copy of the original repository.

2. Clone this Project Repository
A Git clone creates a linked copy of the project that will continue to synchronize with the original repository. In order to create a clone, you can click on the 'Code' button inside the selected repository and then select the 'Clone' option from the dropdown list.<img width="671" alt="Screenshot 2023-10-08 at 15 35 58" src="https://github.com/sammaxfleet/thisorthatpp5/assets/114914739/69df2408-741b-45e4-8df8-24ec95f39e37">


## Running the project locally

Go to the project repository.
Click on the "Code" button.
Choose one of the three options (HTTPS, SSH, or GitHub CLI), and click copy.
Open your IDE program and launch the terminal.
Type git clone and paste the copied URL from step 3.
Press Enter, and the local clone of the project will be created.

Alternatively, you can use Gitpod:

Go to the project repository.
Click the green button that says "Gitpod" to open the project in Gitpod.

## Deployment to Heroku

- In your heroku account, select Create New App, and give it a unique name related to your project.
- Select a region corresponding to where you live and click 'Create App'.
- Head into the 'Deploy' tab select GitHub as the 'deployment method', find your project repository and click 'Connect'.
- Click 'Deploy branch' to trigger Heroku to start building the application.
- Once you see the message saying 'build succeeded' you can click 'Open App' to see your application in the browser.

- Connecting the React front end and back end
- Once you have set up the workspace and done a basic deploy to Heroku, you can connect the react workspace to your API, in order to send data to the API

  
  1. In the Heroku dashboard, go into the API application settings
  2. In 'Settings' add a new Config Var called 'CLIENT_ORIGIN' and set that to the URL for your deployed React application. In my case, this would be https://happening-react.herokuapp.com.
  3. Then add another Config Var called 'CLIENT_ORIGIN_DEV' and enter the URL of your Gitpod preview link, remembering to remove the trailing slash at the end. Gitpod occasionally changes this URL so keep an eye on it. 
  4. Go back into your frontend Gitpod workspace, and install the Axios library using the command 'npm install axios'.
  5. Create a folder called 'API' and inside it create a file called 'axiosDefaults'.
  6.import axios at the top of the file
  7.Define your baseURL which is the unique URL of your deployed API project.
  8. Set the content-type header to multi-part/form-data as the API will need to deal with images as well as text in it's requests.
  9. In order to avoid any CORS issues, set withCredentials to True.
  10. Import this file into App.js to be used across all pages




# Frameworks and Libraries Used

- **Redux Toolkit / RTK Query**: Redux Toolkit simplifies Redux development by providing utilities like `configureStore`, while RTK Query optimizes data fetching and caching in Redux applications, enhancing state management efficiency.

- **Heroku**: Chosen for project deployment due to its ease of use, scalability, and support for various programming languages and frameworks.

- **Font Awesome**: Utilized for site icons as it offers a vast library of scalable vector icons that can be easily customized and integrated into web projects.

- **React Bootstrap**: Selected for site styling because it combines the flexibility of React with the responsive design and pre-built components of Bootstrap, facilitating rapid development and ensuring consistent UI across devices.

- **Cloudinary**: Opted for storing user images as it provides a reliable cloud-based solution for image and video management, offering features like automatic optimization, transformation, and CDN delivery.

- **Google Fonts**: Used for site design to access a wide range of high-quality fonts for free, enhancing typography choices and overall visual appeal.

- **React.js**: Employed as the core JavaScript library for building user interfaces due to its component-based architecture, efficient rendering, and strong community support.

- **Google Images**: Utilized for sourcing any required images on the site, leveraging the vast database of high-quality images available through Google's search engine.

- **Logo from DRIBBLE.COM**: Selected for the project's logo from DRIBBLE.COM, a popular platform for designers to showcase their work, ensuring a professionally designed and visually appealing logo for the site.


# Reading Material

- Info about data fields https://www.geeksforgeeks.org/django-model-data-types-and-fields-list/
- More info on react components I read this https://itnext.io/controlled-vs-uncontrolled-components-in-react-5cd13b2075f9
- JSX further understanding I read this https://legacy.reactjs.org/docs/jsx-in-depth.html
- Components for react I read this https://articles.wesionary.team/react-functional-components-vs-class-components-86a2d2821a22?gi=d5f536d998bc 
- https://realfavicongenerator.net/ for my favicon
- Zara.com and various fashion blogs. 


# Credits & Acknowledgements - 

This fictional site was created for Portfolio Project #5 (Advanced Front End Specialisation) - Diploma in Full Stack Software Development at the Code Institute. 
Thank you to all the tutors at code institute & everyone on slack for the constant support. 

Especially thanks to my Mentor Antonio Rodriguez for the continual guidance & support at Code Institute.


  


