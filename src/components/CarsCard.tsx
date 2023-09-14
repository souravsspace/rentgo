import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarData from "../Data/CarData.json";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faDoorOpen,
  faGasPump,
} from "@fortawesome/free-solid-svg-icons";

import Images from "../assets/Images";

import formatCurrency from "../Utilities/FormatCurrency";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CarsCard() {
  const [width, setwidth] = useState(0);
  const cardParent = useRef<any>();

  useEffect(() => {
    setwidth(cardParent.current.scrollWidth - cardParent.current.offsetWidth);
  }, []);

  return (
    <main className="pt-32 bg-blue-gray-50/50">
      <Typography variant="h1" className="text-center">
        Get Our Rental Cars
      </Typography>
      <div className="py-2 md:py-6 px-2 md:px-8 lg:px-[3rem] xl:px-[8rem] h-full">
        {CarData.map((carDetail, index) => {
          return (
            <div key={index} className="grid mb-20 gap-8">
              <div className="flex gap-2 items-center">
                <Typography variant="h3">{carDetail.title}</Typography>
                <Typography>
                  ( Starts at {formatCurrency(carDetail.priceStarts)}/Day)
                </Typography>
              </div>
              <motion.div
                className=" overflow-x-hidden "
                ref={cardParent}
                whileTap={{ cursor: "grabbing" }}
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  className="flex items-center gap-5 my-2 mx-auto"
                >
                  {carDetail.carData.map((car, index) => {
                    return (
                      <div key={index}>
                        <Card className="overflow-hidden mx-auto min-w-[23.5rem]">
                          <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 rounded-none"
                          >
                            {Images.map(
                              (img) =>
                                img.id - 1 === index && (
                                  <img
                                    key={img.id - 1}
                                    src={img.src}
                                    alt={car.name}
                                  />
                                )
                            )}
                          </CardHeader>
                          <CardBody>
                            <Typography variant="h4">{car.name}</Typography>
                            <Typography>{car.year}</Typography>
                            <Typography>
                              <span className="text-green-500">
                                Free cancellation
                              </span>{" "}
                              <span className="text-sm">
                                up to 48h before pick-up time
                              </span>
                            </Typography>
                            <div className="flex justify-between items-center">
                              <div className="flex gap-1 items-center justify-center">
                                <Typography className="text-xl">
                                  <FontAwesomeIcon icon={faUserCircle} />
                                </Typography>
                                <Typography className="text-xl">
                                  {car.seats}
                                </Typography>
                              </div>
                              <div className="flex gap-1 items-center justify-center">
                                <Typography className="text-xl">
                                  <FontAwesomeIcon icon={faDoorOpen} />
                                </Typography>
                                <Typography className="text-xl">
                                  {car.doors}
                                </Typography>
                              </div>
                              <div className="flex gap-1 items-center justify-center">
                                <Typography className="text-xl">
                                  <FontAwesomeIcon icon={faBriefcase} />
                                </Typography>
                                <Typography className="text-xl">
                                  {car.luggage}
                                </Typography>
                              </div>
                              <div className="flex gap-1 items-center justify-center">
                                <Typography className="text-xl">
                                  <FontAwesomeIcon icon={faGasPump} />
                                </Typography>
                                <Typography className="text-xl">
                                  {car.mileage}
                                </Typography>
                              </div>
                            </div>
                          </CardBody>
                          <CardFooter className="flex items-center justify-between">
                            <Typography variant="h5">
                              {formatCurrency(car.rentPrice)}/Day
                            </Typography>
                            <Button type="button">Rent Now</Button>
                          </CardFooter>
                        </Card>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
