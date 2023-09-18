import {
  faBriefcase,
  faCheck,
  faDoorOpen,
  faGasPump,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Typography } from "@material-tailwind/react"
import { useRentContext } from "../../Context/RentContext"

type DeatilsBodyProps = {
  year: number
  seats: number
  doors: number
  luggage: number
  mileage: string
  name: string
  img: string
  id: number
}

export default function DeatilsBody(item: DeatilsBodyProps) {
  const { year, doors, luggage, seats, mileage, name, img, id } = item

  const { getCarDetails } = useRentContext()

  const followingdata = [
    { name: "Free cancellation" },
    { name: "No credit card fees" },
    { name: "CDW" },
    { name: "Tolls" },
  ]

  const carDetailsItems = [
    { icon: faUserCircle, text: seats },
    { icon: faDoorOpen, text: doors },
    { icon: faBriefcase, text: luggage },
    { icon: faGasPump, text: mileage },
  ]

  return (
    <main className="bg-white px-4 py-6">
      <div className="flex items-center justify-between gap-3">
        <section>
          <img
            onClick={() => getCarDetails(id)}
            className="w-full max-w-[200px] cursor-pointer"
            src={img}
            alt={name}
          />
        </section>
        <section className="flex flex-col justify-between gap-2">
          <div>
            <Typography variant="h5">{name}</Typography>
            <Typography>{year}</Typography>
          </div>
          <div className="flex justify-between gap-4 text-gray-600">
            {carDetailsItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-1"
              >
                <Typography className="text-base">
                  <FontAwesomeIcon icon={item.icon} />
                </Typography>
                <Typography className="text-base">{item.text}</Typography>
              </div>
            ))}
          </div>
          <Typography>This offer includes :</Typography>
          <div className="grid grid-cols-2 gap-2">
            {followingdata.map((item, index) => (
              <Typography
                key={index}
                className="flex items-center gap-1 text-sm text-green-600"
              >
                <FontAwesomeIcon icon={faCheck} />
                <Typography className="text-sm">{item.name}</Typography>
              </Typography>
            ))}
          </div>
        </section>
        <hr className="h-24 w-px bg-gray-300" />
        <section className="flex flex-col items-center justify-between">
          <Button onClick={() => getCarDetails(id)} type="button">
            Rent Now
          </Button>
        </section>
      </div>
    </main>
  )
}
