import {
  Button,
  Card,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react"
import { useRentContext } from "../../Context/RentContext"
import SelectOptions from "../Header/SelectOptions"
import AsideBody from "./AsideBody"

export default function Aside() {
  const {
    formSubmit,
    closeDrawer,
    vehicle,
    location,
    dateFirst,
    dateSecond,
    dateFormatSecond,
    dateFormatFrist,
    handleSearch,
  } = useRentContext()

  return (
    <main>
      <div className="flex flex-col gap-6">
        <section>
          <Card className="mx-auto w-full max-w-[24rem] flex-row pb-8 pt-6 lg:mx-0 lg:max-w-[30rem]">
            <CardBody className="mx-auto grid gap-7">
              <div className="flex items-center justify-between">
                <Typography variant="h3" color="blue-gray" className="md:mb-2">
                  Quick Search
                </Typography>
                <Typography
                  variant="h4"
                  onClick={closeDrawer}
                  className="block cursor-pointer md:hidden"
                >
                  &#10005;
                </Typography>
              </div>

              <form onSubmit={(e) => formSubmit(e)} className="grid gap-y-5">
                <div className="grid gap-3">
                  <Input
                    label="From"
                    type="date"
                    placeholder="insert date"
                    crossOrigin={undefined}
                    value={dateFirst}
                    onChange={(e) => dateFormatFrist(new Date(e.target.value))}
                  />
                  <Input
                    label="To"
                    type="date"
                    placeholder="insert date"
                    crossOrigin={undefined}
                    value={dateSecond}
                    onChange={(e) => dateFormatSecond(new Date(e.target.value))}
                  />
                </div>
                <SelectOptions vehicle={vehicle} location={location} />
                <Button type="submit" fullWidth onClick={handleSearch}>
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
