import HeaderMoreZekr from "../assets/Components/HeaderMoreZekr";
import FooterMoreZekr from "../assets/Components/FooterMoreZekr";
import { quates } from "../assets/Data/quates";
import BackToHomeDownPageBTN from "../assets/Components/BackToHomeDownPageBTN";
import MoreAzkarDaily from "../assets/Components/MoreAzkarDaily";
const Daily = () => {
  return (
    <>
      <HeaderMoreZekr />
      {/* ========================QUATE============= */}
      <div className="quate moreAzkar">
        <h5>{quates.daily.title}</h5>
        <h4 className={`quate ${quates.daily.isQuran ? "Quran" : ""}`}>
          "{quates.daily.text}"
        </h4>
      </div>
      {/* ========================QUATE============= */}

      <MoreAzkarDaily />

      <div className="textBFooter">
        <h4>اعاننا الله واياكم على ذكره وشكره وحسن عبادته</h4>
      </div>

      <BackToHomeDownPageBTN />
      <FooterMoreZekr />
    </>
  );
};
export default Daily;
