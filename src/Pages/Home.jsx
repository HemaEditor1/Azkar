import { useEffect, useState } from "react";
import AzkarSection from "../assets/Components/AzkarSection";
import DayAndNightBtn from "../assets/Components/DayAndNightBtn";
import Header from "../assets/Components/Header";
import MoreLinks from "../assets/Components/MoreLinks";
import Quate from "../assets/Components/Quate";
import { getPrayerTimes } from "../assets/API/prayerTime";
import { Loading } from "../assets/Components/Loading";
import Footer from "../assets/Components/Footer";
import TextBFooter from "../assets/Components/TextBFooter";

const Home = () => {
  const [isMorning, setIsMorning] = useState(true);

  const [resetCounters, setResetCounters] = useState(0);

  const [prayerTimes, setPrayerTimes] = useState(null);

  useEffect(() => {
    async function loadPrayerTimes() {
      const timings = await getPrayerTimes();

      setPrayerTimes(timings);
    }

    loadPrayerTimes();
  }, []);

  useEffect(() => {
    if (!prayerTimes) return;

    const fajrTime = Number(prayerTimes.Fajr.replace(":", "").padStart(4, "0"));
    const asrTime = Number(prayerTimes.Asr.replace(":", "").padStart(4, "0"));

    const now = new Date();

    const currentDate = now.getDate();
    const savedDate = Number(localStorage.getItem("DateNow"));

    const currentTime = Number(
      `${now.getHours()}${now.getMinutes()}`.padStart(4, "0"),
    );

    if (currentTime < fajrTime || currentTime >= asrTime) {
      setIsMorning(false);

      console.log("It's Night Time");
    } else {
      setIsMorning(true);

      console.log("It's Morning Time");
    }

    // First Time Join To Azkar Site
    if (!savedDate) {
      localStorage.setItem("DateNow", currentDate);
      return;
    }
    // -----------------------------

    if (currentDate !== savedDate && currentTime >= fajrTime) {
      console.log("Reset Counters");

      setResetCounters((prev) => prev + 1);
      localStorage.setItem("DateNow", currentDate);
    }
  }, [prayerTimes]);

  if (!prayerTimes) {
    return <Loading />;
  }

  return (
    <>
      <Header isMorning={isMorning} />
      <MoreLinks isMorning={isMorning} />
      <Quate />
      <DayAndNightBtn isMorning={isMorning} setIsMorning={setIsMorning} />
      <AzkarSection isMorning={isMorning} resetCounters={resetCounters} />
      <TextBFooter />
      <Footer isMorning={isMorning} />
    </>
  );
};

export default Home;
