import React from 'react';
import checkmark from '../../assets/icons/checkmark.svg';

const About = () => {
  return(
    <>
      <h2>About mywta</h2>
      <p>Designed to be user-friendly and lightweight, mywta is a web application
      to make finding hiking trails in Washington State as easy as possible. It is by
      no means a replacement for the <a href="https://www.wta.org/" target="_blank"rel="noopener noreferrer" >
      Washington Trails Association Website</a>, but more of
      an aid to be used in conjunction with it. All hike data is courtesy of the
      WTA website and the data is regularly pulled to ensure accuracy.</p>

      <h3>How To Use</h3>
      <p>If you allow it to, the app can use your location to find hikes within a specified
      range of your location. This is enabled by hitting "allow" when prompted for permission
      for your location. Once the app has loaded it's as simple as:
      </p>
      <ul>
        <li><img className="checkmark-icon" src={checkmark} alt="checkmark icon" />Hitting the "Search" icon (bottom left corner)</li>
        <li><img className="checkmark-icon" src={checkmark} alt="checkmark icon" />Filling out the search form to meet your desired hiking attributes &amp; requirements, then pressing "Search Hikes"</li>
        <li><img className="checkmark-icon" src={checkmark} alt="checkmark icon" />Picking a hike on the map to learn more about (the hike name appears on top-most bar)</li>
        <li><img className="checkmark-icon" src={checkmark} alt="checkmark icon" />Pressing the "Hike Details" icon or "Information" icon in the top right corner</li>
        <li><img className="checkmark-icon" src={checkmark} alt="checkmark icon" />Study the hike (read the details on mywta &amp; WTA)</li>
        <li><img className="checkmark-icon" src={checkmark} alt="checkmark icon" />Go hike</li>
      </ul>
      <p>
      It's <strong>highly recommended</strong> that you visit the <strong>WTA Link</strong> before pursuing any hike,
      as there may be more info there that the mywta app doesn't have, such as user-comments about the trail conditions
      or last minute hike/road closure information. And as always be smart, cautious &amp; restpectful of nature &amp; fellow
      hikers when on the trail. <strong>mywta assumes no liability for injury or property damage incurred as a result
      of any of the information on the mywta app or WTA website.</strong>
      </p>

      <h3>API</h3>

      <p>If you are a developer, you can access the raw hike data via the mywta API. For
      more information visit the <a href="https://github.com/marcusprice/mywta" target="_blank" rel="noopener noreferrer">
      mywta github repository.</a></p>

      <h3>Donate &amp; Join WTA</h3>

      <p className="bottom-paragraph">The Washington Trails Association is an invaluable resource to both Washintonians &amp;
      tourists visiting the PNW. WTA is a non-profit organization that advocates protection of
      hiking trails and wilderness, conducts trail maintenance, and promotes hiking in
      Washington State. Support the work being done to ensure we have trails for everyone by
      becoming a member of the WTA. Join by
      visiting <a href="https://www.wta.org/get-involved/join" target="_blank" rel="noopener noreferrer">
      https://www.wta.org/get-involved/join</a>
      </p>
    </>
  )
}

export default About;
