import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCheck,
  faDoorOpen,
  faGasPump,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { CardBody, Typography } from "@material-tailwind/react";

type CardsBodyProps = {
  year: number;
  seats: number;
  doors: number;
  luggage: number;
  mileage: string;
  name: string;
};

export default function CardsBody(item: CardsBodyProps) {
  const { year, doors, luggage, seats, mileage, name } = item;

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
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-1">
          <Typography className="text-xl">
            <FontAwesomeIcon icon={faUserCircle} />
          </Typography>
          <Typography className="text-xl">{seats}</Typography>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Typography className="text-xl">
            <FontAwesomeIcon icon={faDoorOpen} />
          </Typography>
          <Typography className="text-xl">{doors}</Typography>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Typography className="text-xl">
            <FontAwesomeIcon icon={faBriefcase} />
          </Typography>
          <Typography className="text-xl">{luggage}</Typography>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Typography className="text-xl">
            <FontAwesomeIcon icon={faGasPump} />
          </Typography>
          <Typography className="text-xl">{mileage}</Typography>
        </div>
      </div>
    </CardBody>
  );
}
