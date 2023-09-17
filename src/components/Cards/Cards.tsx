import CarData from "../../Data/CarData.json"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import formatCurrency from "../../Utilities/FormatCurrency"
import { Typography } from "@material-tailwind/react"
import Items from "./Items"

export function Cards() {
  const [width, setwidth] = useState(0)
  const cardParent = useRef<any>()

  useEffect(() => {
    setwidth(cardParent.current?.scrollWidth - cardParent.current?.offsetWidth)
  }, [])

  return (
    <main className="bg-blue-gray-50/50 pt-32">
      <Typography variant="h1" className="text-center md:mb-[5rem]">
        Get Our Rental Cars
      </Typography>
      <div className="h-full px-2 py-2 md:px-8 md:py-6 lg:px-[3rem] xl:px-[8rem]">
        {CarData.map((carDetails, index) => {
          return (
            <div key={index} className="mb-20 grid gap-8">
              <div className="flex items-center gap-2">
                <Typography variant="h3">{carDetails.title}</Typography>
                <Typography>
                  ( Starts at {formatCurrency(carDetails.priceStarts)}/Day)
                </Typography>
              </div>
              <div className=" overflow-x-hidden ">
                <motion.div
                  ref={cardParent}
                  whileTap={{ cursor: "grabbing" }}
                  className="mx-auto my-2 flex items-center gap-5"
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
          )
        })}
      </div>
    </main>
  )
}
