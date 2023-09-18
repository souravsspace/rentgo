import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react"
import { useRentContext } from "../../Context/RentContext"
import { useState } from "react"
import SelectOptions from "./SelectOptions"

export default function Header() {
  const { formSubmit } = useRentContext()

  const [dateFirst, setDateFirst] = useState<string>()
  const [dateSecond, setDateSecond] = useState<string>()

  console.log(dateFirst, dateSecond)
  return (
    <header
      header-bg="true"
      className="h-screen bg-cover bg-center text-white "
    >
      <div className="flex h-full w-full items-center justify-between space-y-16 px-2 py-2 md:px-8 md:py-6 lg:space-y-32 lg:px-[3rem] xl:px-[8rem]">
        <Card className="mx-auto w-full max-w-[27rem] flex-row lg:mx-0">
          <CardBody className="mx-auto grid gap-7">
            <div>
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                Quick Search
              </Typography>
              <Typography variant="h2" color="blue-gray" className="mb-2">
                Find & Book <br /> a Great Deal Today
              </Typography>
            </div>

            <form onSubmit={(e) => formSubmit(e)} className="grid gap-y-5">
              <Input
                label="From"
                type="date"
                placeholder="insert date"
                crossOrigin={undefined}
                onChange={(e) => setDateFirst(e.target.value)}
              />
              <Input
                label="To"
                type="date"
                placeholder="insert date"
                crossOrigin={undefined}
                onChange={(e) => setDateSecond(e.target.value)}
              />
              <SelectOptions />
              <Button type="submit" fullWidth>
                Search
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </header>
  )
}
