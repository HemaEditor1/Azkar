import HeaderMoreZekr from "../assets/Components/HeaderMoreZekr";
import FooterMoreZekr from "../assets/Components/FooterMoreZekr";
import { quates } from "../assets/Data/quates";
import BackToHomeDownPageBTN from "../assets/Components/BackToHomeDownPageBTN";
import MoreAzkarHouse from "../assets/Components/MoreAzkarHouse";
const House = () => {
  return (
    <>
      <HeaderMoreZekr />
      {/* ========================QUATE============= */}
      <div className="quate moreAzkar">
        <h5>{quates.house.title}</h5>
        <h4 className={`quate ${quates.house.isQuran ? "Quran" : ""}`}>
          "{quates.house.text}"
        </h4>
      </div>
      {/* ========================QUATE============= */}

      <MoreAzkarHouse />

      <div className="textBFooter">
        <h4>اعاننا الله واياكم على ذكره وشكره وحسن عبادته</h4>
      </div>

      <BackToHomeDownPageBTN />
      <FooterMoreZekr />
    </>
  );
};
export default House;
