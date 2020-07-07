# mywta
WA state hiking guide & trail finder

[Live Example](https://mywta.glitch.me)

## Overview
mywta is an application for finding hiking trails in Washington state with a map and geolocation being the core feature of the UI. Hike data is regularly scraped from the [Washington Trails Association](https://www.wta.org) (WTA) website to ensure the best accuracy for hike information. Scraping the WTA website is the only option since the WTA has no API available for obtaining trail data.

There will soon be an API available for developers wanting to obtain the hike data used for this application. For more information see the API section below in this document.

## Dependencies 
mywta is built on a PERN stack (PostgreSQL, Express, React, Node js). The client is bootstrapped with [Create React App](https://create-react-app.dev/). Here is a brief overview of the dependencies: 

### Backend Dependencies
* Cheerio
* Nodemon
* dotenv
* express
* got
* pg

### Frontend (beyond the Create React App bootstrap)
* @google/markerclustererplus
* dompurify
* react-div-100vh
* react-image
* react-loader-spinner

There is also a non-npm module library for separating map markers that overlay on each other. More details on this in the client readme in the client directory.

## Installation

There are 4 steps for installing the development environment for mywta:

1. Cloning the project & installing dependencies
2. Setting up the database
3. Setting environment variables
4. Scraping trail data from the WTA site

This section walks you though each of these steps.

### 1. Cloning the project & installing dependencies

Setting up the project is pretty easy. Open a terminal, navigate to your desired repo directory and run the following commands:

```
git clone https://github.com/marcusprice/mywta.git
cd mywta && touch .env && npm i
cd client && touch .env && npm i
```

### 2. Setting up the database

Next you will need to set up the database. The database used for mywta is [PostgreSQL](https://www.postgresql.org/). If PostgreSQL isn't already installed on your machine you will need to install it and create a database name of your choosing (or simply "mywta").

Once you have your database created, you will need to grab the [schema file](https://github.com/marcusprice/mywta/blob/master/models/schema.sql) from the models directory. This  file provides the sql to create the db tables for the app to run.

### 3. Setting environment variables

Next you need to open the .env file in the app's root directory and add the following environment variables for the backend:

```
PGUSER={replace with db username}
PGHOST={replace with db host address}
PGPASSWORD={replace with password for username}
PGDATABASE={replace with database name}
PGPORT={replace with port (default is normally 5432)}
```

You will also need to add the [google maps api key](https://developers.google.com/maps/documentation/javascript/get-api-key) to the .env file int the client directory

```
REACT_APP_GOOGLE_MAPS_API_KEY={replace with google maps API key}
```
### 4. Scraping trail data from the WTA site

Now that the dependencies and database are set up, you are ready to scrape the hike data from the WTA website. This operation is done in 2 steps with 2 utilities.

#### Scraping all hike URLs
To scrape the hike URLS run the following commands from the app's root directory:

```
npm run get-hike-urls
```

#### Scraping all hike data
After the get-hike-urls utility has ran you can get all the data for the by running the get-hike-data-initial command:

```
npm run get-hike-data-initial
```

This command takes a lot of time to run.

TODO: create a utility to handle most of installation in 1 command.

## Starting the development environment
Now that the installation is complete, you are ready to start the development environment. The development environment is ran on 2 ports: port 5000 for the backend environment and port 3000 for the frontend environment (via CRA). It's important that the backend environment is started before the frontend, as the API calls from the frontend are proxied to the backend.

Open a terminal and from the root directory of the app run the following command:

```
nodemon app
```

This starts the backend server, and restarts it each time a file in the poject is changed. Then, open a new terminal (or a new tab in the current terminal) and run the following commands to start the frontend env:

```
cd client
npm run start
```

TODO: create a utility that starts the environments in one command.

## App arcitecture 
mywta follows somewhat of an MVC architecture: 

* logic related to db transactions is found in the models directory
* logic related to processing the api requests is found in the controllers directory
* request routes are found in the routes directory
* the root route points to the build directory in the client

The frontend/client is bootstrapped with [Create React App](https://create-react-app.dev/) and can be found in the client directory. API requests from the frontend development environment are proxied to the backend server. More details on the frontend development environment can be found in the readme in the client directory.

## Deployment
Deploying the app is pretty simple - aside from the normal steps you take to set up the server, simply run the `npm run build` command from the client directory to build the current version of the frontend. The root route (/) points to the build directory in the client, so as soon as you build the frontend the app will serve it. If you miss this step, you will get the "cannot get" response from the server.

## Contributions
If anyone is interested, I would love to collaborate on this project and add more features to it. In addition to that, any help with discovering and fixing bugs is totally welcomed. I don't have any detailed protocol in place for contributing/collaborating since this is a relitively low-key project at the moment. 

For bugs I would ask that a new issue be created and we can go from there. Same for feature requests. For anyone interested in collaborating, please send me an email at [marcusprice88@gmail.com](mailto:marcusprice88@gmail.com) and we can work out a protocol that keeps things simple & organized.

## Wants
Here are some potential features that might be cool to add in future releases in no particular order:

* A way for users to share specific hikes on social media or with friends (probably requires react router and some open graph logic so it share's nicely)
* Simple user accounts where they can save their favorite hikes or something like a to-hike list
* SEO improvements?
* Add the ability for user comments on hikes (could be hard to manage without moderation of some sort)
* Weather data for the hikes? 

## API
There is a REST API available for mywta's trail data, and a GraphQL API coming soon as well. You can learn about the mywta REST API by reviewing it's [wiki page](https://github.com/marcusprice/mywta/wiki/mywta-REST-API)