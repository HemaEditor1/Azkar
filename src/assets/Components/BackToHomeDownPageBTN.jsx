import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const BackToHomeDownPageBTN = () => {
  return (
    <div className="btnDownPage">
      <Link to="/" className="backHome downPage">
        <a href="#">
          العودة للرئيسية <RiArrowLeftSLine className="backIcon" />
        </a>
      </Link>
    </div>
  );
};

export default BackToHomeDownPageBTN;
