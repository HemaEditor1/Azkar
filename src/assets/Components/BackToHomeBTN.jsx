import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const BackToHomeBTN = () => {
  return (
    <div>
      <Link to="/" className="backHome">
        <a href="#">
          العودة للرئيسية <RiArrowLeftSLine className="backIcon" />
        </a>
      </Link>
    </div>
  );
};

export default BackToHomeBTN;
