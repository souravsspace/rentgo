import { Typography } from "@material-tailwind/react"
import carData from "../../Data/CarData.json"
import DeatilsBody from "./DeatilsBody"
import CarDataRow from "../../Data/CarDataRaw.json"

export default function Details() {
  
  return (
    <main>
      <div className="grid gap-8">
        <section className="grid gap-1">
          <Typography variant="h3" className="mb-4">Search Results</Typography>
          <div className="grid grid-cols-4 gap-2">
            {carData.map((car, index) => (
              <div
                key={index}
                className="flex cursor-pointer flex-col items-center justify-center bg-white px-2 pb-3"
              >
                {car.carData.slice(3, 4).map((item, index) => (
                  <img key={index} src={item.img} alt={car.title} />
                ))}
                <Typography>{car.title}</Typography>
              </div>
            ))}
          </div>
        </section>
        <section className="grid gap-3">
          {CarDataRow.map((car) => (
            <DeatilsBody key={car.id} {...car} />
          ))}
        </section>
      </div>
    </main>
  )
}
