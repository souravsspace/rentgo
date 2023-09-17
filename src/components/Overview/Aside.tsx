import carDataRaw from "../../Data/carDataRaw.json"

import { Card, CardHeader, Typography } from "@material-tailwind/react"
import AsideCardBody from "./AsideCardBody"

type AsideOverviewProps = {
  id: number
}

export default function AsideOverview({ id }: AsideOverviewProps) {
  const items = carDataRaw.find((item) => item.id === id)
  if (items == null) return null
  return (
    <div>
      <Card
        color="gray"
        variant="gradient"
        className="w-full max-w-[25rem] px-[3rem] py-8"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-4 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            {items.title}
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>
            {items.rent} <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>
        <AsideCardBody {...items} />
      </Card>
    </div>
  )
}
