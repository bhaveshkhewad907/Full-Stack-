import { BadgeCheck, UserShield, SquareCheckBig } from "lucide-react";

type cardProps = {
  userName: string;
  img: string;
};
const Card = (props: cardProps) => {
  return (
    <div className="card">
      <div className="top">
        {" "}
        <img src={props.img} alt="image" />
      </div>
      <div className="center">
        <div className="name">
          <h3>{props.userName}</h3>
          <BadgeCheck />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="bottom">
        <div className="numbers">
          <div className="firstNum">
            <UserShield />
            <p>312</p>
          </div>

          <div className="secondNum">
            <SquareCheckBig />
            <p>48</p>
          </div>
        </div>

        <button className="followButton">
          Follow <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
