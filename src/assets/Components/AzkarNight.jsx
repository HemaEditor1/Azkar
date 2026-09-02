import ZekrBoxNight from "./ZekrBoxNight.jsx";
import { azkarNightData } from "../Data/azkarNightData.js";

const AzkarNight = ({ resetCounters }) => {
  return (
    <div>
      {azkarNightData.map((zekr) => (
        <ZekrBoxNight
          resetCounters={resetCounters}
          key={zekr.id}
          id={zekr.id}
          title={zekr.title}
          text={zekr.text}
          target={zekr.target}
          value={zekr.value}
          source={zekr.source}
          isQuran={zekr.isQuran}
        />
      ))}
    </div>
  );
};

export default AzkarNight;
