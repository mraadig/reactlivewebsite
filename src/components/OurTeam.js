
import { AboutImg } from '../utils/constants';

const OurTeam=()=>{
   return( <>
    <h2 style={{textAlign:"center"}}>Our Team</h2>
    <div className="row">
      <TeamMember
        img="/w3images/team1.jpg"
        name="Jane Doe"
        title="CEO & Founder"
        description="Some text that describes me lorem ipsum ipsum lorem."
        email="jane@example.com"
      />
      <TeamMember
      img="/w3images/team2.jpg"
        name="Mike Ross"
        title="Art Director"
        description="Some text that describes me lorem ipsum ipsum lorem."
        email="mike@example.com"
      />
      <TeamMember
        img="/w3images/team3.jpg"
        name="John Doe"
        title="Designer"
        description="Some text that describes me lorem ipsum ipsum lorem."
        email="john@example.com"
      />
    
  </div>
  </>
);
};

const TeamMember = ({ img ,name, title, description, email }) => {
return (
  <div className="column">
    <div className="card">
      <img src= {AboutImg+ img} alt={name} style={{ width: '100%' }} />
      <div className="container">
        <h2>{name}</h2>
        <p className="title">{title}</p>
        <p>{description}</p>
        <p>{email}</p>
        <button className="button">Contact</button>
      </div>
    </div>
  </div>
)
}

export default OurTeam;