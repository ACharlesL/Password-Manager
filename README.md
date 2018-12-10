## Introduction

A brief Introduction and summary of the App.
Password manager is a single page application that allows a user to store a passport which contains credential to an application or website a user uses.
In the future the application should provide the users security info regarding the website or application.

## Instructions
1. User should sign-up for an account.
2. User should sign-in if they have an account.
3. The application allows a credentialed user to create a passport which is a resource to the user.
4. A User may have multiple passports.
5. In order to add an passport click the "create passport" button.
6. After creating the passport user will see a "passport created" feedback.
7. The user can click the "get passport" button to see all passports.
8. A user can sign-out or change password for authentication purposes.
9. A user can edit, delete, or show a passport which adjusts accordingly on the front and back end.

## Links

  - [Client](https://acharlesl.github.io/Password-Manager-app/)

  - [API](https://passportman-api.herokuapp.com/)

  - [API Repo](https://github.com/ACharlesL/Password-Manager-api)

## Requirements

This application requires the following:
  - A user must signup with a unique email address to setup a player account.
  - A user must sign-in to utilize the application.

## Technologies used

* HTML
* CSS
* AJAX
* Sass
* jQuery
* HandelBars
* Grunt
* Node
* Git

## Structure

Authentication:

| Request | Routes | Schema |
|:-------:|:-------:|:------:|
|  POST | /sign-up  | Requires=> email: String, password: String, password_confirmation: String |
|  POST |  /sign-in | Requires=> email: String, password: String |
|  PATCH |  /change-password | Requires=> old_password: String, new_password: String, token: String |
|  DELETE |  /sign-out | Requires=> token: String |

Passports:

| Request | Routes | Schema |
|:-------:|:-------:|:------:|
|  GET | /Passports  | Requires=> token: String |
|  GET |  /Passports/:id | Requires=> token: String |
|  POST |  /Passports | Requires=> title: text, email: text, credential: String, notes: text, contact: text, url: text |
|  PATCH |  /Passports/:id | Requires=> title: text, email: text, credential: String, notes: text, contact: text, url: text |
|  DELETE | /Passports/:id | Requires=> token: String |

## Plan and Development process
  Day 1
   - Completed most of the basis Docs.
   - Setup my environment for client and server development
   - Created User stories
   - Create Wire Frames
   - Created ERD
   - Create passport manager(client) using provided template for browser template
   - Created passport manager(api) with ruby and rails provided template
   - Create Repo for both client and api and updated readme’s
   - Work on deployment

  Day 2-4
   - Working on Rails api.
   - Rails server setup.
   - auth curl works (api)
     CREATE
     READ
     UPDATE
     DELETE
   - Build rails api
   - able to crud a resource of passport

  Day 5
   - build front end
   - work on sign up form
   - Signup works
   - work on crud front end resource
   - workin on crud in front end index/GET, show/GET, create/POST, update/PATCH, destroy/DELETE


## Unsolved Problems
  - Build client using react framework
  - some UI improvements needed including form behaviors.
  - Implement better algorithm to encrypt and store password.
  - Provide some analytics of the application the user is saving credentials for.

## Images
![Alt text](/assets/image/snapshot1.jpg "App snapshot")
![Alt text](/assets/image/snapshot2.jpg "App snapshot")
![Alt text](/assets/image/snapshot3.jpg "App snapshot")
![Alt text](/assets/image/snapshot4.jpg "App snapshot")

## Wireframe
  - [Sign up](https://i.imgur.com/BaG8QYp.jpg)
  - [sign in](https://i.imgur.com/490lLU6.jpg)
  - [Create passport](https://i.imgur.com/F7pJGK9.jpg)
  - [Show passports](https://i.imgur.com/wxIjQWW.jpg)

## User Stories.
* As a non credential user I should be able to sign up with and email address and password.
* As credential user should be able to sign-in.
* As a credential user I should be able change my password once logged in.
* As a credential user I should be able to create a passport
* As a credentialed user I should be able to edit a passport
* As a credentialed user should be able delete a passport I created
