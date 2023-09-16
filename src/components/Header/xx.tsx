import {
  Card,
  CardBody,
  Typography,
  Button,
  Select,
  Option,
  Input,
} from "@material-tailwind/react";
import { useRentContext } from "../../Context/RentContext";
import locationOption from "../../Data/locationOp.json";
import { ChangeEvent, useState } from "react";

export default function Header() {
  const { formSubmit } = useRentContext();

  const [dateFirst, setDateFirst] = useState<string | null>(null);
  const [dateSecond, setDateSecond] = useState<string | null>(null);
  const [vehicle, setVehicle] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);

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
              <Select
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                label="Vehicle Class"
                value={vehicle || " "}
                selected={(element) => {
                  if (element) {
                    const selectedValue = element.props.name
                    console.log("Selected Value:", selectedValue);
                    setVehicle(element.props.name);
                    return selectedValue;
                  }
                }}
              >
                {vehicleClassOption.map((option) => (
                  <Option  key={option.id}>{option.option}</Option>
                ))}
              </Select>

              {/* <Select
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                label="Vehicle Class"
                value={vehicle || " "}
                onChange={(event) => setVehicle(event.currentTarget.value)}
              >
                {vehicleClassOption.map((option) => (
                  <Option key={option.id}>{option.option}</Option>
                ))}
              </Select> */}
              <Select
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                label="Location"
              >
                {locationOption.map((option) => (
                  <Option key={option.id}>{option.option}</Option>
                ))}
              </Select>

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
