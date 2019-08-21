import React from 'react';
import './About.css';

const AboutMe = () => {
  return(
    <div id="aboutMe">
      <div class="content-box-lg">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div id="about-left">
              <div class="vertical-heading">
                <h5>Who I Am</h5>
                <h2><strong>Story</strong><br/> About Me</h2>
              </div>
            </div>
          </div>


          <div class="col-md-8">
            <div id="about-right">
              <p>Prior to becoming a Full Stack Developer, my work experience has been primarily in the Communications and Non-profit Education fields. I was fortunate to be able to work in various roles within these fields from being a communications lead, program manager, field placement specialist to being a teaching associate at SFSU. In these roles, I was able to sharpen my skills in project management, strategic planning, training and teaching others, and how to work collaboratively with a team to reach our goals.</p>
              <p>My interest in becoming a developer began at my previous job when working with a software engineer to create an app for students to use to keep track of their scholastic progress. I was so curious about her code and how everything fit together that I signed up to take a basic HTML and CSS course at my local community college. After that, I started hearing about all of these amazing apps being built which propelled me into finishing some JavaScript courses on freeCodeCamp. This is when I really began getting really excited about coding. Soon after that, I was able to obtain a coding scholarship and fellowship and then decided to take the plunge and enroll at the Flatiron School.
              </p>
              <p>Now that I’m graduated, I’m really looking forward to expanding my knowledge base, putting my education to use, and striving to write efficient and elegant code. Currently, I’m learning about react hooks and incorporating that into my react app that I built called <a target="_blank" rel="noopener noreferrer"href="http://nyt-bookmark.herokuapp.com/">BookMark</a>.
              </p>
            </div>
          </div>


          <div class="row">
            <div class="col-md-12">
              <div id="about-bottom">

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    </div>
  )
}
export default AboutMe;
