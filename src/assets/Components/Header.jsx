import urlLogo from "../Elements/png/URL.png";

const Header = ({ isMorning }) => {
  return (
    <div className={`header ${isMorning ? "" : "Night"}`}>
      <img src={urlLogo} alt="Logo" className="logo" />
    </div>
  );
};

export default Header;
