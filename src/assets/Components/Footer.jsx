let dateNow = new Date();

const Footer = ({ isMorning }) => {
  return (
    <div className={`footer ${isMorning ? "" : "Night"}`}>
      <h2>
        Website by:{" "}
        <a href="https://hemaeditor1.github.io/Portfolio/" target="_blank">
          Ibrahem Magdy
        </a>
      </h2>
      <h3>Copyright © {dateNow.getFullYear()}</h3>
    </div>
  );
};

export default Footer;
