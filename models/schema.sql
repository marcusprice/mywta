/*SQL table schema for DB*/

CREATE TABLE urls (
  index serial PRIMARY KEY,
  url varchar(1000) NOT NULL
)

CREATE TABLE hikes (
  index serial PRIMARY KEY,
  url varchar(1000),
  latitude double precision,
  longitude double precision,
  name varchar(1000),
  region varchar(1000),
  length double precision,
  trailType varchar(100),
  rating double precision,
  info text,
  drivingDirections text,
  imgURL varchar(1000),
  elevationGain integer,
  elevation integer,
  coast boolean,
  rivers boolean,
  lakes boolean,
  waterfalls boolean,
  oldGrowth boolean,
  fallFoliage boolean,
  wildflowersMeadows boolean,
  mountainViews boolean,
  summits boolean,
  wildlife boolean,
  ridgesPasses boolean,
  establishedCampsites boolean,
  kids boolean,
  dogs boolean,
  passRequired varchar(100)
)
