# mywta
WA state hiking guide & trail finder

[Live Example](https://mywta.glitch.me)

## About
mywta is an application for finding hikes and trails in Washington state with a map and geolocation being a core feature of the UI. Hike data is regularly scraped from the [Washington Trails Association](https://www.wta.org) (WTA) website to ensure the best accuracy for hike information. Scraping the WTA website is the only option since the WTA has no API available for obtaining hike data.

There is also an API available for developers wanting to obtain the hike data used for this application. For more information see the API section below in this document.

## Dependencies 

### Backend 
* Cheerio
* dotenv
* express
* got
* pg

### Frontend (beyond CRA bootstrap)
* @google/markerclustererplus
* dompurify
* react-div-100vh
* react-image
* react-loader-spinner

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

### 2. Setting up the Database

Next you will need to set up the database. The database used for mywta is [PostgreSQL](https://www.postgresql.org/). If PostgreSQL isn't already installed on your machine you will need to install it and create a database name of your choosing (or simply "mywta").

Once you have your database created, you will need to grab the [schema file](https://github.com/marcusprice/mywta/blob/master/models/schema.sql) from the models directory. This sql file sets up all the necessary db tables for the app to run.

Depending on your db management system, you can either import the sql file into the mywta database directly or copy and paste the code into a sql command input.

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
Open a terminal and navigate to the root directory of the project and run the following command:

```
npm run get-hike-urls
```

#### Scraping all hike data
After the get-hike-urls utility has ran you can get all the data for the by running the get-hike-data-initial command:

```
npm run get-hike-data-initial
```

This command takes a lot of time to run.

## Starting the app

