import { useState } from "react";
import OverviewCarData from "../../Data/OverviewCarData.json";
import carDataRaw from "../../Data/carDataRaw.json";
import formatCurrency from "../../Utilities/FormatCurrency";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Checkbox,
  Input,
} from "@material-tailwind/react";

type AsideOverviewProps = {
  id: number;
};

export default function AsideOverview({ id }: AsideOverviewProps) {
  const items = carDataRaw.find((item) => item.id === id);
  const [day, setdays] = useState<number | string>();

  if (items == null) return null;
  return (
    <div className="sticky">
      <Card
        color="gray"
        variant="gradient"
        className="w-full max-w-[24rem] px-[3rem] py-8"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            {items.title} - {items.name}
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>
            {items.rent} <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <div>
            <Input
              color="white"
              label="How many day?"
              crossOrigin={undefined}
              value={day}
              onChange={(e)=> setdays(e.target.value)}
            />
          </div>
          <ul className="flex flex-col">
            {OverviewCarData.map((item, index) => (
              <li key={index}>
                <Checkbox
                  color="red"
                  label={
                    <Typography className="flex font-normal text-white">
                      {item.name} {"  "}
                      {formatCurrency(item.price)}
                    </Typography>
                  }
                  crossOrigin={undefined}
                />
              </li>
            ))}
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="white"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Rent Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
