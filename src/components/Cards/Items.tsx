import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import formatCurrency from "../../Utilities/FormatCurrency";
import { useRentContext } from "../../Context/RentContext";
import CardsBody from "./CardsBody";

type carDataProps = {
  id: number;
  name: string;
  img: string;
  rent: number;
  year: number;
  seats: number;
  doors: number;
  luggage: number;
  mileage: string;
};

export default function Items(item: carDataProps) {
  const { id, img, name, rent } = item;
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
        <CardsBody {...item} />
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
