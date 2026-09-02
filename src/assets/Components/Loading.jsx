import Logo from "../Elements/Background/Azkar-Icon.png";
import { RiLoader4Line } from "react-icons/ri";

export const Loading = () => {
  return (
    <div className="loadingPage">
      <img src={Logo} alt="Azkar Logo" className="logoIcon" />
      <RiLoader4Line className="spinner" />
    </div>
  );
};
