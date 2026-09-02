import AzkarDay from "./AzkarDay";
import AzkarNight from "./AzkarNight";

const AzkarSection = ({ isMorning, resetCounters }) => {
  return (
    <div className="azkarDayNight">
      {isMorning ? (
        <AzkarDay resetCounters={resetCounters} />
      ) : (
        <AzkarNight resetCounters={resetCounters} />
      )}
    </div>
  );
};

export default AzkarSection;
