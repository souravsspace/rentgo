import DeatilsBody from "./DeatilsBody"
import CarDataRow from "../../Data/CarDataRaw.json"
import DetailsPagination from "./DetailsPagination"
import { useRentContext } from "../../Context/RentContext"
import carRowData from "../../Data/CarDataRaw.json"

export default function DetailsBodyBefore() {
  const { carId, carIdLast, forSearch, vehicle, location } = useRentContext()

  const filteredVal = carRowData.filter((car) => {
    if (
      car.title.toLowerCase().includes(vehicle.toLowerCase()) &&
      car.location.toLowerCase().includes(location.toLowerCase())
    ) {
      return car
    }
    return null
  })

  return (
    <div>
      {forSearch ? (
        <div>
          {filteredVal.slice(carId, carIdLast).map((car) => (
            <DeatilsBody key={car.id} {...car} />
          ))}
        </div>
      ) : (
        <div>
          {CarDataRow.slice(carId, carIdLast).map((car) => (
            <DeatilsBody key={car.id} {...car} />
          ))}
        </div>
      )}
      <div className="my-2 flex items-center justify-center bg-white py-2">
        <DetailsPagination />
      </div>
    </div>
  )
}
