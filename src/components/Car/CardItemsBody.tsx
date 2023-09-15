import {
  faBriefcase,
  faCheck,
  faDoorOpen,
  faGasPump,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardBody, Typography } from "@material-tailwind/react";

type carProps = {
  name: string;
  year: number;
  seats: number;
  doors: number;
  luggage: number;
  mileage: string;
};

export default function CardItemsBody({
  name,
  year,
  seats,
  doors,
  luggage,
  mileage,
}: carProps) {
  return (
    <CardBody>
      <Typography variant="h4">{name}</Typography>
      <Typography>{year}</Typography>
      <Typography>
        <span className="text-green-500">
          <FontAwesomeIcon icon={faCheck} /> Free cancellation
        </span>{" "}
        <span className="text-xs">up to 48h before pick-up time</span>
      </Typography>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center justify-center">
          <Typography className="text-xl">
            <FontAwesomeIcon icon={faUserCircle} />
          </Typography>
          <Typography className="text-xl">{seats}</Typography>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <Typography className="text-xl">
            <FontAwesomeIcon icon={faDoorOpen} />
          </Typography>
          <Typography className="text-xl">{doors}</Typography>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <Typography className="text-xl">
            <FontAwesomeIcon icon={faBriefcase} />
          </Typography>
          <Typography className="text-xl">{luggage}</Typography>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <Typography className="text-xl">
            <FontAwesomeIcon icon={faGasPump} />
          </Typography>
          <Typography className="text-xl">{mileage}</Typography>
        </div>
      </div>
    </CardBody>
  );
}
