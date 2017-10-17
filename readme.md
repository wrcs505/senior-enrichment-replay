# Overview
We are building an application for the senior review! This application theme will be to design a website for the aircraft fanatics. We will go over back end libraries including express, multiple types of middleware, sequelize, and more. 

# Models
We will have two models to focus on in this application. "Country" and "Aircraft". Although countries may have many aircraft, aircraft can only be a part of one country. An aircraft should also keep track of an aircraft that it succeeds via a reference called 'succeeded'.

## Country Model
The Country model will be composed of:
1. name (string) - name of country
2. GFI (float) - global firepower index - between 0 and 10 (the closer the number is to 0 the better, by the way).

## Aircraft Model
The aircraft model will be composed of:
1. Company Make (string) - ex. Lockeed Martin
2. Model Number (string)
3. Release Year (integer) - must be above 1903 ;)
4. Unit Cost (integer) - stored in millions.

# Routes
We should establish CRUD routes for both Country and Aircraft. Getting aircraft should also include the country name.

# React
We want two major views in our application.  
1. Home - view all of the different airplanes along with their information. We should also be able to sort airplanes by country. 
2. Update - we should be able to create new countries / aircrafts by providing the proper information and be redirected to our home view.