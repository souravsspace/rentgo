import { Slider, Typography } from "@material-tailwind/react"
import { useState } from "react"

export default function AsideSlider() {
  const [priceRange, setPriceRange] = useState<number | string>(40)
  const [ecRange, setEcRange] = useState<number | string>(3.5)

  return (
    <main className="pb-4">
      <div className="grid gap-2">
        <section className="grid gap-1">
          <Typography variant="h5">Price Range</Typography>
          <Typography>
            From <span className="font-semibold">{Math.floor(priceRange as number)}</span> -{" "}
            <span className="font-semibold">100</span>{" "}
          </Typography>
          <div className="w-96">
            <Slider
              defaultValue={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="text-red-500"
              barClassName="rounded-none bg-red-500"
              thumbClassName="[&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
              trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-none !bg-red-500/10 border border-red-500/20"
            />
          </div>
        </section>
        <hr className="my-8 h-px w-full bg-gray-50" />
        <section className="grid gap-1">
          <Typography variant="h5">Engine Capacity</Typography>
          <Typography>
            From <span className="font-semibold">{Math.floor(ecRange as number) / 10}</span> -{" "}
            <span className="font-semibold">10.0</span>{" "}
          </Typography>
          <div className="w-96">
            <Slider
              defaultValue={ecRange}
              onChange={(e) => setEcRange(e.target.value)}
              className="text-red-500"
              barClassName="rounded-none bg-red-500"
              thumbClassName="[&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
              trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-none !bg-red-500/10 border border-red-500/20"
            />
          </div>
        </section>
      </div>
    </main>
  )
}
