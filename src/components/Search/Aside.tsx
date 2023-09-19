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
  const { formSubmit, closeDrawer } = useRentContext()

  const [dateFirst, setDateFirst] = useState<string>()
  const [dateSecond, setDateSecond] = useState<string>()

  console.log(dateFirst, dateSecond)

  return (
    <main>
      <div className="flex flex-col gap-6">
        <section>
          <Card className="mx-auto w-full max-w-[24rem] flex-row pb-8 pt-6 lg:mx-0 lg:max-w-[30rem]">
            <CardBody className="mx-auto grid gap-7">
              <div className="flex justify-between items-center">
                <Typography variant="h3" color="blue-gray" className="md:mb-2">
                  Quick Search
                </Typography>
                <Typography variant="h4" onClick={closeDrawer} className="md:hidden block cursor-pointer">&#10005;</Typography>
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
        <section className="rounded-lg bg-white text-black">
          <AsideBody />
        </section>
      </div>
    </main>
  )
}
