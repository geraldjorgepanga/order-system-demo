# OrderSystemDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.17.


## Sample Account for Tesdting
ADMIN 
username: johndoe
password john123

USER
username: juandelacruz
password: juan123


## Modules used

NGRX

## Assesment Test for Offshorli
Project: Create a simple Ordering System using Angular

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Requirements:

1. Login page

    url: /login

    users:

	- admin

	  username: admin

	  password: admin

	- user

	  username: user

	  password: user



2. User page

    url: /

    - displays a list of created orders

    - user can create order in this page

    - user can edit and remove created orders in the list

    - when editing reuse the create order form

    - if the user tries to access this page without logging in it should redirect back to 'Login page'



 Example User page ui:

    logout



    order form

    order item textbox

    order button



    order list table

    item       status       action

    order 1  pending    edit button remove button

    order 2  approved  

    order 3  rejected   



3. Admin page

   url: /admin

   - display list of orders created by the user

   - can approve/reject orders

   - if the user tries to access this page without logging in it should redirect back to 'Login page'

   - if a non admin user tries to access this page it should redirect back to 'User page'

   - if admin user tries to access user page url '/' it should redirect back to ‘Admin page’



 



Example Admin page ui:

 logout



 order list table

 item       status      action

 order 1  pending   approve button reject button

 order 2  approved 

 order 3  rejected  



4. Admin page simple unit test

   - check if the page has approve and reject button	



5. Logout

    - should logout any user and redirect back to login page  



NOTE:

    - You can use ngrx or a service for managing user and order state

    - For restricting and redirection of user you can use angular guards


