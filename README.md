
# achieve mpls Coach Experience Application

The Coach Experience Application for achieve mpls is a full stack application that digitizes the process of delivering, filling out, collecting, and analyzing feedback forms for the achieve mpls coaching program.  The application features an desktop oriented admin view that allows the administrator to manage users, create and assign forms, and set up the new school year.  There is also a mobile-first coach view that allows the coaches to complete forms that are assigned to them.  This application helps ease the strain on administrators for form delivery and collection, makes it more likely that the coaches will fill out and return the forms, and gives the administrators a way to interact with the completed forms.

---

In order to generate and send emails from within the app, the following variables will need to have replacements that are proprietary to the organization:

## in mail.js
lines 11-14:
var transporter = nodeMailer.createTransport({
    service: 'MAILSERVICE',
    auth: {
        user: 'EMAILADDRESS',
        pass: 'PASSWORD'
    }
});

and
lines 49-54:
var mailOptions = {
   from: '"achieve mpls" EMAILADDRESS',
   to: mailer.email,
   subject: 'Welcome to Achieve Mpls!',
   text: 'Thank you for volunteering for AchieveMpls, ' + mailer.fname + '! To activate your account, please click here: ' + 'HOSTING PLATFORM'
};


## Demo
### Sessions and Forms
<p align="center">
  <img src="walkthrough/part1.gif" alt="first walkthrough gif"/>
</p>

### Events and Users
<p align="center">
  <img src="walkthrough/part2.gif" alt="second walkthrough gif"/>
</p>

### Submit and Access Feedback
<p align="center">
  <img src="walkthrough/part3.gif" alt="third walkthrough gif"/>
</p>

## Built With:
Javascript
Node
Node Mailer
Express
Grunt
Angular
Angular Routes
Angular Material
PostgresSQL
Postico
Heroku


## Version:
1.0.0
1.1.0
  * ability to work with multiple years added
  * search function on home page and users page added
  * ability to assign forms to events from the ticket template view added
  * made the amount of questions per form variable instead of fixed
1.1.1
  * fixed bug that prevented adding a new admin
1.1.2
  * Added forgot PW functionality
  * user login is no longer case sensitive
1.1.3
  * fixed bug on assign ticket to event
  * added register all coaches feature
  * changed register to reset pw on the manage users screen
1.1.4
  * fixed bug where incomplete tickets didn't show up
  * fixed order of questions on the coach, form and home template screens
  * Provided dropdown for question 1 (the 1-10 question)
1.1.5
  * added user status (registered, new user, pw sent) to user table
  * added ability to delete questions on forms
  



## Authors:
Kevin Dahlberg, Emily Hoang, Teigen Leonard and Y Paul Sussman


## Acknowledgments:
Our instructors at Prime Digital Academy: Scott Bromander, Chris Black and Luke Schlangen

## Inspiration:
Amy Shapiro and the staff at achieve mpls!
