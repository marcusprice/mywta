CREATE TABLE urls (
  index serial PRIMARY KEY,
  url varchar(1000) NOT NULL
)

CREATE TABLE hikes (
  index serial PRIMARY KEY,
  url varchar(1000),
  latitude decimal,
  longitude decimal,
  name varchar(1000),
  region varchar(1000),
  length double,
  trailType varchar(100),
  rating decimal,
  info text,
  drivingDirections text,
  imgURL varchar(1000),
  elevationGain numeric,
  elevation numeric,
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
