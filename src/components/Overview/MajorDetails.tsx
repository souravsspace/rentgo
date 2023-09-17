import {
  faBriefcase,
  faDoorOpen,
  faGasPump,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-tailwind/react";

type MajorDetailsProps = {
  img: string;
  name: string;
  year: number;
  doors: number;
  seats: number;
  mileage: string;
  luggage: number;
};

export default function MajorDetails(items: MajorDetailsProps) {
  const { img, name, year, doors, seats, mileage, luggage } = items;

  return (
    <div className="flex justify-around flex-col lg:flex-row">
      <div className="flex justify-center items-center">
        <img src={img} alt={name} className="max-w-[400px] w-full" />
      </div>
      <div className="flex flex-col gap-2 justify-around">
        <section>
          <Typography variant="h3">{name}</Typography>
          <Typography>{year}</Typography>
        </section>
        <section className="grid gap-2 grid-cols-2">
              <div className="flex items-center gap-2">
                <Typography className="text-4xl text-gray-500">
                  <FontAwesomeIcon icon={faUserCircle} />
                </Typography>
                <div>
                  <Typography className="text-sm">Passengers​</Typography>
                  <Typography className="text-sm">{seats}</Typography>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Typography className="text-4xl text-gray-500">
                  <FontAwesomeIcon icon={faDoorOpen} />
                </Typography>
                <div>
                  <Typography className="text-sm">Door</Typography>
                  <Typography className="text-sm">{doors}</Typography>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Typography className="text-4xl text-gray-500">
                  <FontAwesomeIcon icon={faBriefcase} />
                </Typography>
                <div>
                  <Typography className="text-sm">Large bag</Typography>
                  <Typography className="text-sm">{luggage}</Typography>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Typography className="text-4xl text-gray-500">
                  <FontAwesomeIcon icon={faGasPump} />
                </Typography>
                <div>
                  <Typography className="text-sm">Сonsumption​</Typography>
                  <Typography className="text-sm">{mileage}</Typography>
                </div>
              </div>
        </section>
      </div>
    </div>
  );
}
