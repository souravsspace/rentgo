import { Typography } from "@material-tailwind/react"
import carDataRaw from "../../Data/carDataRaw.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons"
import DetailsFooter from "./DetailsFooter"
import MajorDetails from "./MajorDetails"
import MinorDetails from "./MinorDetails"
import { Link } from "react-router-dom"
import DetailsInsurance from "./DetailsInsurance"
import DetailsInfo from "./DetailsInfo"

type DetailsOverviewProps = {
  id: number
}

export default function DetailsOverview({ id }: DetailsOverviewProps) {
  const items = carDataRaw.find((item) => item.id === id)
  if (items == null) return null

  return (
    <main className="rounded-lg bg-white">
      <div className="p-10">
        <header className="flex flex-col justify-between md:flex-row">
          <Typography className="flex cursor-pointer items-center  gap-1 text-gray-500 hover:text-red-500">
            <FontAwesomeIcon icon={faArrowLeft} />
            <Link to="/search-result">Back to Search Results</Link>
          </Typography>
          <div className="flex gap-5">
            <DetailsInfo />
            <DetailsInsurance />
          </div>
        </header>
        <main>
          <MajorDetails {...items} />
          <MinorDetails {...items} />
        </main>
        <footer>
          <DetailsFooter />
        </footer>
      </div>
    </main>
  )
}
