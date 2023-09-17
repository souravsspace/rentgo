import {
  Button,
  CardBody,
  CardFooter,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react"
import OverviewCarData from "../../Data/OverviewCarData.json"
import formatCurrency from "../../Utilities/FormatCurrency"
import { useState } from "react"
import { useRentContext } from "../../Context/RentContext"

type AsideCardBodyProps = {
  rent: number
}

export default function AsideCardBody({ rent }: AsideCardBodyProps) {
  const { HandleChecked, isChecked, thePrice } = useRentContext()
  const [day, setdays] = useState(0)

  return (
    <>
      <CardBody className="p-0">
        <div className="py-4 grid gap-2 md:w-[20rem]">
          <Input 
            color="white"
            label="Starting Date"
            type="date"
            crossOrigin={undefined}
          />
          <Input
            color="white"
            label="How many day?"
            crossOrigin={undefined}
            value={day}
            onChange={(e) => setdays(Number(e.target.value))}
          />
        </div>
        <ul className="grid grid-cols-2 gap-1">
          {OverviewCarData.map((item, index) => (
            <li key={index}>
              <Checkbox
                color="red"
                value={isChecked}
                onChange={(e) => HandleChecked(e, item.price)}
                label={
                  <Typography className="flex font-normal text-white text-[13px]">
                    {item.name} {"  "}
                    {formatCurrency(item.price)}
                  </Typography>
                }
                crossOrigin={undefined}
              />
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Rent Now {formatCurrency((rent + (thePrice + 1)) * day)}
        </Button>
      </CardFooter>
    </>
  )
}
