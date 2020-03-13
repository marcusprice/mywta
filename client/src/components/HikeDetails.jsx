import React from 'react';
import HikeRating from './HikeRating';

const HikeDetails = () => {


  return(
    <div className="content-section">
      <h2>Oyster Dome</h2>
      <HikeRating rating={4.25} />

      <span className="region">Puget Sound And Islands</span>
      <span className="coordinates">48.6096, -122.4264</span>

      <h3>Basic Info</h3>
      <span className="length">Total Length 5 Miles</span>

      <h3>Elevation</h3>
      <span>1050 ft Elevation Gain</span>
      <span>Highest Point 2025 ft</span>

      <h3>Pass Requirements</h3>
      <span>Discover Pass</span>

      <h3>About</h3>
      <p>
      Oyster fishing and logging were the dominant industries in the Chuckanut area from the late nineteenth to early twentieth centuries. The forest lands of Blanchard Mountain became state trust lands in the 1920s and 1930s, giving the forest a needed respite. Much of the forest on Blanchard is second-growth; logging artifacts can be seen on the trail, and giant stumps inspire imagination about the towering cathedral forests that blanketed the mountain prior to logging.
      <br /><br />
      Access to Oyster Dome is best from the Samish Overlook parking area on Blanchard Mountain. It's a bit of a rough road to get there, but the views from the beginning and end of the hike are well worth it.
      <br /><br />
      From the trailhead, head northwest on a section of the Pacific Northwest Trail, entering the second-growth forest of Blanchard Mountain. In 0.4 miles, descend 190 feet to the junction with the Samish Bay Connector and turn right.
      <br /><br />
      You ascend as the trail switchbacks steeply through second-growth alder, Western redcedar, and Douglas fir forest. Logging artifacts can be seen on the trail, and giant stumps inspire imagination what grew on Blanchard prior to logging. The elevation gain briefly becomes gentler as you cross several small creeks. This area receives substantial rainfall, and the Washington Conservation Corps has built turnpikes to reduce the numbers of waterspots and mudholes.
      <br /><br />
      After another one-half mile, the grade steepens, and switchbacks fortified by rock walls lift you past giant boulders. Here, formerly rooty and slippery sections have been bypassed or rehabilitated by WTA volunteers in 2014, 2015, and 2016. 1.9 miles from the Samish Overlook, you will come to a junction with the trail to Lily and Lizard Lakes. A turn to the right takes you to the lakes; but you'll continue to the left on the trail to Oyster Dome, which is now one-quarter mile away. The trail climbs steeply, crosses a creek, and heads left. Here it becomes a bit fainter and harder to tell where the true trail is. Refer to your map to determine which is the best route.
      <br /><br />
      One-tenth of a mile past the creek crossing, emerge from the forest onto the rocky promontory called Oyster Dome. Arrayed before you are the Skagit River flats and Anacortes to the left. Lummi Island and Orcas Island are in the foreground and background, respectively, to the right. Samish Bay is below you, and in the distance are Vancouver Island and the Olympic Mountains. Birds of prey, including bald eagles, may circle above you. A word of caution: be careful near the edge of the promontory, as the dropoff is unforgiving; keep children and pets away from the edge.
      <br /><br />
      NOTE: There is another way to access Oyster Dome, found along Chuckanut Drive (Highway 11). This access point includes more switchbacks and elevation gain, but lacks any facilities, and requires crossing a highway to get to the trailhead.
      <br /><br />
      If you choose to start here, park carefully. It is a state highway, so parked cars must be completely clear of the way of travel. Any vehicles on or near the white lines delineating the shoulder of the road will be towed.
      </p>

      <h3>Directions</h3>
      <p>
      The Department of Natural Resources requests that visitors access Oyster Dome from the Samish Overlook parking area, not from the unofficial trail on Chuckanut Drive.
      <br /><br />
      From I-5, take exit 240 (Alger) and head west on Lake Samish Road. Take the first left onto Barrel Springs Road and travel 0.6 mile, to where there is a sign reading “Blanchard Forest Block”. Turn right on the dirt road and travel another 1.7 miles to a sign for “Samish Overlook”. Turn left and pass through the yellow gate (open one hour before sunrise to one hour past sunset) and continue 2.2 miles to the Samish Overlook Day Use Area.
      <br /><br />
      There is parking for 20 vehicles (day use only.) There are vault toilets, picnic tables and benches. A Discover Pass is required.
      </p>
    </div>
  );
}

export default HikeDetails;
