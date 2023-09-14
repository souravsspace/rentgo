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
import logo from "../assets/logo.svg";
import carCardImg from "../assets/car_card.png";
import { Country } from "country-state-city";
import { useState } from "react";

export default function Header() {
  const country = Country.getAllCountries();
  // const [country, setCountry] = useState(countries);

  return (
    <header className="h-screen bg-bg-image text-white bg-cover bg-center ">
      <div className="space-y-32 backdrop-blur-md py-2 md:py-6 px-2 md:px-12 lg:px-[8rem] h-full">
        <div className="flex justify-center">
          <img src={logo} />
        </div>
        <div className="w-full flex justify-between items-center">
          <Typography variant="h1" className="font-bold ">
            Do you need a car
            <br /> <span className="text-6xl">for rent ?</span>
          </Typography>
          <Card className="w-full max-w-[40rem] flex-row">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src={carCardImg}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
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
                  <Option>Standard</Option>
                  <Option>Premium</Option>
                  <Option>Luxury</Option>
                </Select>
                <div className="grid gap-2">
                  <Input label="From" type="date" crossOrigin={undefined} />
                  <Input label="To" type="date" crossOrigin={undefined} />
                </div>
                <Button type="submit" fullWidth>
                  Search
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </header>
  );
}
