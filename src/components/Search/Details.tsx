import { Typography } from "@material-tailwind/react"
import carData from "../../Data/CarData.json"
import DetailsBodyBefore from "./DetailsBodyBefore"
import { useRentContext } from "../../Context/RentContext"

export default function Details() {
  const { showResult } = useRentContext()
  return (
    <main>
      <div className="grid gap-8">
        <section className="grid gap-1">
          <Typography variant="h3" className="mb-4">
            Search Results
          </Typography>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {carData.map((car, index) => (
              <div
                key={index}
                onClick={() => showResult(car.id)}
                className="flex cursor-pointer flex-col items-center justify-center bg-white px-2 pb-3"
              >
                {car.carData.slice(3, 4).map((item, index) => (
                  <img
                    key={index}
                    className="w-full max-w-[200px] md:max-w-[300px]"
                    src={item.img}
                    alt={car.title}
                  />
                ))}
                <Typography>{car.title}</Typography>
              </div>
            ))}
          </div>
        </section>
        <section className="grid gap-3">
          <DetailsBodyBefore />
        </section>
      </div>
    </main>
  )
}
