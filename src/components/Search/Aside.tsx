import {
  Button,
  Card,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react"
import { useRentContext } from "../../Context/RentContext"
import { useState } from "react"
import SelectOptions from "../Header/SelectOptions"
import AsideBody from "./AsideBody"

export default function Aside() {
  const { formSubmit } = useRentContext()

  const [dateFirst, setDateFirst] = useState<string>()
  const [dateSecond, setDateSecond] = useState<string>()

  console.log(dateFirst, dateSecond)

  return (
    <main>
      <div className="grid gap-6">
        <section>
          <Card className="mx-auto pt-6 pb-8 w-full max-w-[30rem] flex-row lg:mx-0">
            <CardBody className="mx-auto grid gap-7">
              <div>
                <Typography variant="h3" color="blue-gray" className="mb-2">
                  Quick Search
                </Typography>
              </div>

              <form onSubmit={(e) => formSubmit(e)} className="grid gap-y-5">
                <div className="grid gap-3">
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
                </div>
                <SelectOptions />
                <Button type="submit" fullWidth>
                  Search
                </Button>
              </form>
            </CardBody>
          </Card>
        </section>
        <section className="bg-white text-black rounded-lg">
          <AsideBody />
        </section>
      </div>
    </main>
  )
}
