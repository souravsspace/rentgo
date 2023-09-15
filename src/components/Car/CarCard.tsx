import CarData from "../../Data/CarData.json";
import { Card, CardHeader, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CarBody from "./CarBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import formatCurrency from "../../Utilities/FormatCurrency";

export function CarsCard() {
  const [width, setwidth] = useState(0);
  const cardParent = useRef<any>();
  const cardChild = useRef<any>();

  useEffect(() => {
    setwidth(cardParent.current?.scrollWidth - cardParent.current?.offsetWidth);
  }, []);

  return (
    <main className="pt-32 bg-blue-gray-50/50">
      <Typography variant="h1" className="text-center">
        Get Our Rental Cars
      </Typography>
      <div className="py-2 md:py-6 px-2 md:px-8 lg:px-[3rem] xl:px-[8rem] h-full">
        {CarData.map((carDetails, index) => {
          return (
            <div key={index} className="grid mb-20 gap-8">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Typography variant="h3">{carDetails.title}</Typography>
                  <Typography>
                    ( Starts at {formatCurrency(carDetails.priceStarts)}/Day)
                  </Typography>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="bg-gray-200 hover:bg-black hover:text-white text-gray-600 cursor-pointer px-2 py-1 rounded">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </div>
                  <div className="bg-gray-200 hover:bg-black hover:text-white text-gray-600 cursor-pointer px-2 py-1 rounded">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                </div>
              </div>
              <div className=" overflow-x-hidden ">
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  ref={cardParent}
                  whileTap={{ cursor: "grabbing" }}
                  className="flex items-center gap-5 my-2 mx-auto"
                >
                  {carDetails.carData.map((car, index) => {
                    return (
                      <div key={index} ref={cardChild}>
                        <Card className="overflow-hidden mx-auto min-w-[23.5rem]">
                          <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 rounded-none"
                          > 
                            <img
                              src={car.img}
                              alt={car.name}
                              className="w-full"
                            />
                          </CardHeader>
                          <CarBody {...car} />
                        </Card>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
