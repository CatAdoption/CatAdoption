import React from 'react';
import "./style.css"
import cat from"./cat.jpg"
class About extends React.Component {
state = {}
render(){
    return (
        <div className="wrapper row2">
            {HeaderForEvery('ABOUT US')}
        <div id="container" className="clear">
          <div id="about-us" className="clear">
            <section id="about-intro" className="clear">
              <h2>About Us</h2>
              <img src={cat} alt="" />
              <p>Welcome to Cat Adoption.com. Thanks for stopping by! Cat Adoption.com is largest non-profit Cat adoption website. We help ofer a cat data for over than 2000 cats form all Breeds, Cat rescue groups, and Cat adoption agencies advertise their homeless Cay to millions of adopters a month, for free. We're all about getting homeless Cats into homes.</p>
            </section>
            <section id="team">
              <h2>Our Team</h2>
              <ul className="clear">
                <li className="one_third first">
                  <figure> <img src={'https://ca.slack-edge.com/TTW205AAU-U011P6C81V3-c00694c1e699-512'}  alt="" />
                    <figcaption>
                      <p className="team_name">Eman Abu Waked</p>
                      <p className="team_title">Website Backend Developer</p>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third">
                  <figure><img src={'https://ca.slack-edge.com/TTW205AAU-U011P69LJ85-cbc45f08b5ce-512'}  alt="" />
                    <figcaption>
                      <p className="team_name">AbdulRahmaan Hussien</p>
                      <p className="team_title">Website Manager</p>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third">
                  <figure><img src={'https://ca.slack-edge.com/TTW205AAU-U011P6C7U2Z-33cb31e82b63-512'}  alt="" />
                    <figcaption>
                      <p className="team_name">Ahmed ELsaikaly</p>
                      <p className="team_title">Website Frontend Developer</p>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third first">
                  <figure><img src={'https://scontent.fgza1-1.fna.fbcdn.net/v/t1.0-9/80713703_2854829057901489_6247168053885272064_n.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=OeI7uPIxPC0AX9cb8Zs&_nc_ht=scontent.fgza1-1.fna&oh=5b05bcdf97b938b6d29b20c3e8e47926&oe=5F378545'}  alt="" />
                    <figcaption>
                      <p className="team_name">Ayman ELmanasrah</p>
                      <p className="team_title">Website Backend Developer </p>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    )
}
}

export default About