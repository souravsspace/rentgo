import {
  faBriefcase,
  faCheck,
  faDoorOpen,
  faGasPump,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CardBody,
  Typography,
} from "@material-tailwind/react";

type carProps = {
  name: string;
  year: number;
  seats: number;
  doors: number;
  luggage: number;
  mileage: string;
  rentPrice: number;
};

export default function CarBody(car: carProps) {
  return (
      <CardBody>
        <Typography variant="h4">{car.name}</Typography>
        <Typography>{car.year}</Typography>
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
            <Typography className="text-xl">{car.seats}</Typography>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <Typography className="text-xl">
              <FontAwesomeIcon icon={faDoorOpen} />
            </Typography>
            <Typography className="text-xl">{car.doors}</Typography>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <Typography className="text-xl">
              <FontAwesomeIcon icon={faBriefcase} />
            </Typography>
            <Typography className="text-xl">{car.luggage}</Typography>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <Typography className="text-xl">
              <FontAwesomeIcon icon={faGasPump} />
            </Typography>
            <Typography className="text-xl">{car.mileage}</Typography>
          </div>
        </div>
      </CardBody>
  );
}
