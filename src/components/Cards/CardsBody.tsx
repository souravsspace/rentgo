import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faCheck,
  faDoorOpen,
  faGasPump,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons"
import { CardBody, Typography } from "@material-tailwind/react"

type CardsBodyProps = {
  year: number
  seats: number
  doors: number
  luggage: number
  mileage: string
  name: string
}

export default function CardsBody(item: CardsBodyProps) {
  const { year, doors, luggage, seats, mileage, name } = item

  const carDetailsItems = [
    { icon: faUserCircle, text: seats },
    { icon: faDoorOpen, text: doors },
    { icon: faBriefcase, text: luggage },
    { icon: faGasPump, text: mileage },
  ]

  return (
    <CardBody>
      <Typography variant="h4">{name}</Typography>
      <Typography>{year}</Typography>
      <Typography>
        <span className="text-green-500">
          <FontAwesomeIcon icon={faCheck} /> Free cancellation
        </span>{" "}
        <span className="text-xs">up to 48h before pick-up time</span>
      </Typography>
      <div className="flex items-center justify-between">
        {carDetailsItems.map((item, index) => (
          <div key={index} className="flex items-center justify-center gap-1">
            <Typography className="text-xl">
              <FontAwesomeIcon icon={item.icon} />
            </Typography>
            <Typography className="text-xl">{item.text}</Typography>
          </div>
        ))}
      </div>
    </CardBody>
  )
}
