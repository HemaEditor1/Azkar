import { moreAzkar } from "../Data/moreAzkar";
import MoreZekrBox from "./MoreZekrBox";
const MoreAzkarHouse = () => {
  return (
    <div className="moreAzkar">
      {moreAzkar.House.map((zekr) => (
        <MoreZekrBox
          key={zekr.id}
          id={zekr.id}
          title={zekr.title}
          text={zekr.text}
          value={zekr.value}
          source={zekr.source}
          isQuran={zekr.isQuran}
        />
      ))}
    </div>
  );
};

export default MoreAzkarHouse;
