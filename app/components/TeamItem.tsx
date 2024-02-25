import React from 'react';

interface TeamItemProps { item: { src: string; name: string; designation: string }; }
const TeamItem: React.FC<TeamItemProps> = (props) => {
  return (

    <div className="-item">
      <div className="-thumb"> 
      <img src={props.item.src} alt={props.item.name} />
       </div> 
       <div className="team-content">
       <h2 className="title">{props.item.name}</h2>
      <span>{props.item.designation}</span>
      <ul className="team-social">
        <li>
          <a href="/">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default TeamItem;