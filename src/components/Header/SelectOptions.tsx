import { useRentContext } from "../../Context/RentContext"
import locationOption from "../../Data/locationOp.json"

type SelectOptionsProps = {
  vehicle?: string
  location?: string
}

export default function SelectOptions({
  vehicle,
  location,
}: SelectOptionsProps) {
  const { setVehicle, setLocation } = useRentContext()

  const vehicleClassOption = [
    { id: 1, option: "Economy" },
    { id: 2, option: "Standard" },
    { id: 3, option: "Premium" },
    { id: 4, option: "Luxury" },
  ]

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="rounded-md border-[1px] border-[#B0BEC5] py-[2px] shadow-inner">
        <select
          className="w-full rounded-md border-r-[14px] border-transparent bg-white px-4 py-2 text-sm "
          onChange={(e) => setVehicle(e.target.value)}
        >
          <option disabled selected hidden>
            {vehicle ? vehicle : "Vehicle variant"}
          </option>
          {vehicleClassOption.map((option) => (
            <option key={option.id}>{option.option}</option>
          ))}
        </select>
      </div>
      <div className="rounded-md border-[1px] border-[#B0BEC5] py-[2px] shadow-inner">
        <select
          className="w-full rounded-md border-r-[14px] border-transparent bg-white px-4 py-2 text-sm "
          onChange={(e) => setLocation(e.target.value)}
        >
          <option disabled selected hidden>
            {location ? location : "Location"}
          </option>
          {locationOption.map((option) => (
            <option key={option.id}>{option.option}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
