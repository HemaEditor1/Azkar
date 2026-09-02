import ZekrBoxDay from "./ZekrBoxDay";
import { azkarDayData } from "../Data/azkarDayData";

const AzkarDay = ({ resetCounters }) => {
  return (
    <div>
      {azkarDayData.map((zekr) => (
        <ZekrBoxDay
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

export default AzkarDay;
