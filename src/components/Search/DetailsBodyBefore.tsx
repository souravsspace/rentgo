import DeatilsBody from "./DeatilsBody"
import CarDataRow from "../../Data/CarDataRaw.json"
import DetailsPagination from "./DetailsPagination"
import { useRentContext } from "../../Context/RentContext"

export default function DetailsBodyBefore() {
  const { carId, carIdLast } = useRentContext()
  return (
    <div>
      <div>
        {CarDataRow.slice(carId, carIdLast).map((car) => (
          <DeatilsBody key={car.id} {...car} />
        ))}
      </div>
      <div className="my-2 flex items-center justify-center bg-white py-2">
        <DetailsPagination />
      </div>
    </div>
  )
}
