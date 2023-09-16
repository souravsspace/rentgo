import CarData from "../../Data/CarData.json";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import formatCurrency from "../../Utilities/FormatCurrency";
import { Typography } from "@material-tailwind/react";
import Items from "./Items";

export function TheCard() {
  const [width, setwidth] = useState(0);
  const cardParent = useRef<any>();

  useEffect(() => {
    setwidth(cardParent.current?.scrollWidth - cardParent.current?.offsetWidth);
  }, []);

  return (
    <main className="pt-32 bg-blue-gray-50/50">
      <Typography variant="h1" className="text-center md:mb-[5rem]">
        Get Our Rental Cars
      </Typography>
      <div className="py-2 md:py-6 px-2 md:px-8 lg:px-[3rem] xl:px-[8rem] h-full">
        {CarData.map((carDetails, index) => {
          return (
            <div key={index} className="grid mb-20 gap-8">
              <div className="flex gap-2 items-center">
                <Typography variant="h3">{carDetails.title}</Typography>
                <Typography>
                  ( Starts at {formatCurrency(carDetails.priceStarts)}/Day)
                </Typography>
              </div>
              <div className=" overflow-x-hidden ">
                <motion.div
                  ref={cardParent}
                  whileTap={{ cursor: "grabbing" }}
                  className="flex items-center gap-5 my-2 mx-auto"
                >
                  <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex gap-x-5"
                  >
                    {carDetails.carData.map((car) => (
                      <Items key={car.id} {...car} />
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
