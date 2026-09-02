import { Link } from "react-router-dom";
import urlLogo from "../Elements/png/URLTwo.png";
import BackToHomeBTN from "./BackToHomeBTN";

const HeaderMoreZekr = () => {
  return (
    <div className="header moreZekr">
      <Link to="/" className="moreZekrLogo">
        <img src={urlLogo} alt="Logo moreZekr" className="logo moreZekr" />
      </Link>

      <BackToHomeBTN />
    </div>
  );
};

export default HeaderMoreZekr;
