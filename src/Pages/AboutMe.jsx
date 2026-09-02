import FooterMoreZekr from "../assets/Components/FooterMoreZekr";
import HeaderMoreZekr from "../assets/Components/HeaderMoreZekr";
import urlLogo from "../assets/Elements/Background/Cover.png";
import {
  RiLinksLine,
  RiWhatsappLine,
  RiMailFill,
  RiFacebookCircleFill,
  RiTelegramFill,
  RiInstagramLine,
} from "react-icons/ri";

const AboutMe = () => {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.origin);
  };
  return (
    <>
      <HeaderMoreZekr />
      <div className="contentAboutMe">
        <img src={urlLogo} alt="Azkar Logo" className="infoImg" />
        <div className="captionText">
          <h1>موقع أذكار</h1>
          <h2>
            هو عباره عن موقع يذكرك بالأذكار اليومية الصحيحة الثابتة عن النبيﷺ
          </h2>
          <h2>بفضل الله تم انشاء الموقع بواسطة ابراهيم مجدي</h2>
          <h2>
            وهو غير مخصص للربح اطلاقاً فقط للتذكير بصحيح الاحاديث ومواقيتها
          </h2>
          <h2>اسأل الله ان يجعله نافعاً لنا وان ينفع بنا ويوفقنا الى كل خير</h2>
          <h2>شارك الرابط مع اصدقائك وشاركهم في الاجر</h2>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              copyLink();
            }}
            className="copyLink"
          >
            <RiLinksLine />
          </a>
        </div>

        <div className="contactWithMe">
          <h2>تواصل معي:</h2>
          <div className="icons">
            <a
              href="https://www.instagram.com/_ibrahem_magdy_/"
              target="_blank"
            >
              <RiInstagramLine />
            </a>
            <a href="https://t.me/Hemaeditor1" target="_blank">
              <RiTelegramFill />
            </a>
            <a
              href="https://www.facebook.com/ibrahem.magde.5872"
              target="_blank"
            >
              <RiFacebookCircleFill />
            </a>
            <a href="mailto:ibrahimma729@gmail.com" target="_blank">
              <RiMailFill />
            </a>
            <a href="https://wa.me/201149524782" target="_blank">
              <RiWhatsappLine />
            </a>
          </div>
        </div>
      </div>
      <FooterMoreZekr />
    </>
  );
};

export default AboutMe;
