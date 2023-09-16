import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import formatCurrency from "../../Utilities/FormatCurrency";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCheck,
  faDoorOpen,
  faGasPump,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useRentContext } from "../../Context/RentContext";

type carDataProps = {
  id: number;
  rent: number;
  name: string;
  year: number;
  seats: number;
  doors: number;
  luggage: number;
  mileage: string;
  img: string;
};

export default function Items({
  id,
  img,
  name,
  rent,
  year,
  seats,
  doors,
  luggage,
  mileage,
}: carDataProps) {
  const { getCarDetails } = useRentContext();
  return (
    <div className="flex">
      <Card className="mx-auto min-w-[23.5rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img src={img} alt={name} />
        </CardHeader>
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
        <CardFooter className="flex items-center justify-between">
          <Typography variant="h5">{formatCurrency(rent)}/Day</Typography>
          <Button onClick={() => getCarDetails(id)} type="button">
            Rent Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
