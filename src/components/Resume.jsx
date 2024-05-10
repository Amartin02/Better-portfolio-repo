function Resume() {
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="full-name">
            <span className="first-name">Anthony</span>
            <span className="last-name"> Martin</span>
          </div>
          <div className="contact-info">
            <span className="email">Email: </span>
            <span className="email-val">anthonymartin65441@gmail.com</span>
            <span className="separator"></span>
            <span className="phone">Phone: </span>
            <span className="phone-val">720-626-1688</span>
          </div>
          <div>
            <a href="https://docs.google.com/document/d/1y6oWtgZG-J81JcH7uBfqYoGGPO90SJ7sQBnht0lc538/edit?usp=sharing">
              <button className="resumeButton">Download Resume</button>
            </a>
          </div>
          <div className="about">
            <span className="position">Front and Back-End Developer </span>
            <p className="desc">
              I am a beginner front and back-end developer that just graduated a
              3 month course to get me to a jr dev level. In the className they
              had us write HTML, CSS, and JavaScript, as well as learning
              React.js, Vite, Express, and much more. I'm motivated to start my
              career in this field and see what it's like. I work well in a team
              and would prefer a remote job.
            </p>
          </div>
        </div>
        <div className="details">
          <div className="section">
            <div className="section__title">Experience</div>
            <div className="section__list">
              <div className="section__list-item"></div>
              <div className="section__list-item">
                <div className="left">
                  <div className="name">Edx Coding Boot Camp</div>
                  <div className="addr">Denver, Colorado</div>
                  <div className="duration">Feb 13 2024-May 13 2024</div>
                </div>
                <div className="right">
                  <div className="name">Ben Machok</div>
                  <div className="desc">My Instructor</div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Education</div>
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  <div className="name">Edx Coding Boot Camp</div>
                  <div className="addr">Denver, Colorado</div>
                  <div className="duration">Feb 13 2024-May 13 2024</div>
                </div>
                <div className="right">
                  <div className="name">Ben Machok</div>
                  <div className="desc">My Instructor</div>
                </div>
              </div>
              <div className="section__list-item"></div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Projects</div>
            <div className="section__list">
              <div className="section__list-item">
                <div className="name">Spin-Me-Round</div>
                <p className="text">
                  This project was built in order to provide a marketplace for a
                  user to explore albums, artists, and songs; and create a
                  personalized collection of music. For successful completion,
                  the className was randomly split into two teams. The goal for
                  each team was to design a project which would incorporate all
                  of the tools and elements we have learned thus far in this
                  className. We were tasked with creating a real-world front and
                  back-end application that utilizes API's and the process of
                  creating databases, that are both responsive and interactive.
                  To accomplish these goals our group combined use of
                  HTML/Bootstrap, JavaScript, CSS, Node.js, Express.js,
                  PostgreSQL, Sequelize, server-side APIs, and databases. It was
                  also required that we use local storage and have an intuitive
                  UI experience with the user's story in mind. Through this
                  process we incorporated some of the key processes learned
                  throughout the className. This included not only integral
                  coding tools but also adopting a collaborative approach to our
                  remote repository, Github. The final product provides an
                  interactive experience that includes, first and foremost,
                  bringing the user to our homepage. Here, several options are
                  presented: one may perform a search of his/her favorite album,
                  artist, or song; visualize album covers; select any of the
                  album covers to link to a bio of the artist; or utilize a
                  drop-in menu with options to take the user to various pages of
                  the website. This drop-in menu includes options to navigate to
                  the homepage, the users personal collection of favorites, an
                  opportunity to login/logout of the site, and links to add an
                  artist or album to their collection.
                </p>
                <div className="section__list-item">
                  <div className="name">Recipe-Sifting-Repo</div>
                  <p className="text">
                    Everyone loves a delicious meal and cocktail to have on any
                    occasion. From a stressful Thursday evening of work to a
                    relaxing Sunday brunch, we hope to make your cooking and
                    mixing experience as easy and tasty as possible. When you
                    visit Perfect Pair you can expect to find the perfect
                    perusing experience. Our thoughtful layout allows one to
                    search for meals or drinks by ingredient type showing a
                    plethora of thoughtfully curated recipes to take your dining
                    experience to the next level. Perfect Pair also allows for
                    you to add favorites and save the most enticing recipes,
                    making it easier to revisit an old favorite or something you
                    want to make in the future. For this product we used
                    JavaScript, CSS and HTML as our backbone. We also leveraged
                    bootstrap, jQuery, and jQuery UI as libraries to assist with
                    the functionality and style of the product. Everything is
                    hosted and deployed in Github for easy access to future
                    contributors of the project. We chose bootstrap for some out
                    of the box design elements and its ease of use. We leveraged
                    jQuery to make it the code cleaner with how much DOM
                    manipulation we needed to achieve. We leveraged the mealdb
                    and cocktaildb APIs because of the robust information the
                    provided. Some of the Challenges we faced were deciding on a
                    UI that functioned seamlessly with our APIs, Creating a
                    design that would allow the user to see the recipes from the
                    main page without overwhelming their experience, and
                    deciding how best to leverage the APIs
                  </p>
                </div>
                <div className="section__list-item">
                  <div className="name">Code-Blooded</div>
                  <div className="text">N/A</div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Interests</div>
            <div className="section__list">
              <footer className="section__list-item">
                Wrestling, programming, Video games, Piano, and Anime
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resume;
