import { Typography } from "@material-tailwind/react";
import carDataRaw from "../../Data/carDataRaw.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCircleExclamation,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";
import DetailsFooter from "./DetailsFooter";
import MajorDetails from "./MajorDetails";
import MinorDetails from "./MinorDetails";

type DetailsOverviewProps = {
  id: number;
};

export default function DetailsOverview({ id }: DetailsOverviewProps) {
  const items = carDataRaw.find((item) => item.id === id);
  if (items == null) return null;

  return (
    <main className="rounded-lg bg-white">
      <div className="p-10">
        <header className="flex justify-between">
          <Typography className="flex cursor-pointer items-center justify-center gap-1 text-gray-500 hover:text-red-500">
            <FontAwesomeIcon icon={faArrowLeft} />
            <p>Back to Search Results</p>
          </Typography>
          <div className="flex justify-between gap-5">
            <Typography className="flex cursor-pointer items-center justify-center gap-1 hover:text-red-500">
              <FontAwesomeIcon icon={faCircleExclamation} />
              <p>Important Information</p>
            </Typography>
            <Typography className="flex cursor-pointer items-center justify-center gap-1 hover:text-red-500">
              <FontAwesomeIcon icon={faShieldHeart} />
              <p>Insurance</p>
            </Typography>
          </div>
        </header>
        <main>
          <MajorDetails {...items} />
          <MinorDetails {...items} />
        </main>
        <footer>
          <DetailsFooter />
        </footer>
      </div>
    </main>
  );
}
