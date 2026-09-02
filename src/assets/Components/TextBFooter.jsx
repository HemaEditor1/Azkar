import { Link } from "react-router-dom";
import { linksBtns } from "../Data/linksBtns";

const TextBFooter = () => {
  const randomLink = linksBtns[Math.floor(Math.random() * linksBtns.length)];

  return (
    <div className="textBFooter">
      <div>
        <h4>تقبل الله منا ومنكم صالح الأعمال</h4>
      </div>

      <div>
        <h4 className="bFooterLink">
          هل تعرف <Link to={`/${randomLink.path}`}>{randomLink.title}</Link> ؟
        </h4>
      </div>
    </div>
  );
};

export default TextBFooter;
