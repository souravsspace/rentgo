import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Select,
  Option,
  Input,
} from "@material-tailwind/react";
import carCardImg from "../assets/car_card.png";
import { Country } from "country-state-city";

export default function Header() {
  const country = Country.getAllCountries();

  return (
    <header header-bg="true" className="h-screen text-white bg-cover bg-center ">
      <div className="space-y-16 w-full flex justify-between items-center lg:space-y-32 py-2 md:py-6 px-2 md:px-8 lg:px-[3rem] xl:px-[8rem] h-full">
        <Card className="w-full max-w-[40rem] flex-row mx-auto lg:mx-0">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none hidden sm:block"
          >
            <img
              src={carCardImg}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody className="mx-auto">
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              Quick Search
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Find & Book a Great Deal Today
            </Typography>
            <div className="grid gap-y-3">
              <Select label="Location">
                {country.map((country) => (
                  <Option key={country.isoCode}>{country.name}</Option>
                ))}
              </Select>
              <Select label="Vehicle Class">
                <Option>Economy</Option>
                <Option>Standard</Option>
                <Option>Premium</Option>
                <Option>Luxury</Option>
              </Select>
              <div className="grid gap-2">
                <Input label="From" type="date" placeholder="insert date" crossOrigin={undefined} />
                <Input label="To" type="date" placeholder="insert date" crossOrigin={undefined} />
              </div>
              <Button type="submit" fullWidth>
                Search
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </header>
  );
}
