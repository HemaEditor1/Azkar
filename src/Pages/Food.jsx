import HeaderMoreZekr from "../assets/Components/HeaderMoreZekr";
import FooterMoreZekr from "../assets/Components/FooterMoreZekr";
import { quates } from "../assets/Data/quates";
import MoreAzkarFood from "../assets/Components/MoreAzkarFood";
import BackToHomeDownPageBTN from "../assets/Components/BackToHomeDownPageBTN";

const Food = () => {
  return (
    <>
      <HeaderMoreZekr />
      {/* ========================QUATE============= */}
      <div className="quate moreAzkar">
        <h5>{quates.eat.title}</h5>
        <h4 className={`quate ${quates.eat.isQuran ? "Quran" : ""}`}>
          "{quates.eat.text}"
        </h4>
      </div>
      {/* ========================QUATE============= */}

      <MoreAzkarFood />

      <div className="textBFooter">
        <h4>اعاننا الله واياكم على ذكره وشكره وحسن عبادته</h4>
      </div>

      <BackToHomeDownPageBTN />
      <FooterMoreZekr />
    </>
  );
};

export default Food;
