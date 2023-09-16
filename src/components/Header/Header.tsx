import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { useRentContext } from "../../Context/RentContext";
import locationOption from "../../Data/locationOp.json";
import { useState } from "react";

export default function Header() {
  const { formSubmit } = useRentContext();

  const [dateFirst, setDateFirst] = useState<string>();
  const [dateSecond, setDateSecond] = useState<string>();

  console.log(dateFirst, dateSecond);
  
  const [vehicle, setVehicle] = useState<string>();
  const [location, setLocation] = useState<string>();

  const vehicleClassOption = [
    { id: 1, option: "Economy" },
    { id: 2, option: "Standard" },
    { id: 3, option: "Premium" },
    { id: 4, option: "Luxury" },
  ];

  return (
    <header
      header-bg="true"
      className="h-screen text-white bg-cover bg-center "
    >
      <div className="space-y-16 w-full flex justify-between items-center lg:space-y-32 py-2 md:py-6 px-2 md:px-8 lg:px-[3rem] xl:px-[8rem] h-full">
        <Card className="w-full max-w-[27rem] flex-row mx-auto lg:mx-0">
          <CardBody className="mx-auto grid gap-7">
            <div>
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                Quick Search
              </Typography>
              <Typography variant="h2" color="blue-gray" className="mb-2">
                Find & Book <br /> a Great Deal Today
              </Typography>
            </div>

            <form onSubmit={(e) => formSubmit(e)} className="grid gap-y-5">
              <Input
                label="From"
                type="date"
                placeholder="insert date"
                crossOrigin={undefined}
                onChange={(e) => setDateFirst(e.target.value)}
              />
              <Input
                label="To"
                type="date"
                placeholder="insert date"
                crossOrigin={undefined}
                onChange={(e) => setDateSecond(e.target.value)}
              />
              <div className="border-[1px] py-[2px] border-[#B0BEC5] shadow-inner rounded-md">
                <select
                  className="bg-white w-full border-r-[14px] border-transparent py-2 px-4 text-sm rounded-md "
                  onChange={(e) => setVehicle(e.target.value)}
                >
                  <option disabled selected hidden>
                    Vehicle variant
                  </option>
                  <br />
                  {vehicleClassOption.map((option) => (
                    <option value={vehicle} key={option.id}>
                      {option.option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="border-[1px] py-[2px] border-[#B0BEC5] shadow-inner rounded-md">
                <select
                  className="bg-white w-full border-r-[14px] border-transparent py-2 px-4 text-sm rounded-md "
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option disabled selected hidden>
                    Location
                  </option>
                  {locationOption.map((option) => (
                    <option value={location} key={option.id}>
                      {option.option}
                    </option>
                  ))}
                </select>
              </div>

              <Button type="submit" fullWidth>
                Search
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </header>
  );
}
