import { Checkbox, Typography } from "@material-tailwind/react"
import SearchData from "../../Data/SearchData.json"
import AsideSlider from "./AsideSlider"

export default function AsideBody() {
  return (
    <main className="px-6 py-8">
      <div>
        <section>
          {SearchData.map(({ title, items }, index) => (
            <div key={index}>
              <Typography variant="h5">{title}</Typography>
              <ul className="grid grid-cols-2">
                {items.map((item, index) => (
                  <li key={index}>
                    <Checkbox
                      color="red"
                      label={
                        <Typography className="flex text-lg font-normal">
                          {item}
                        </Typography>
                      }
                      crossOrigin={undefined}
                    />
                  </li>
                ))}
              </ul>
              <hr className="my-4 h-px w-full bg-gray-50" />
            </div>
          ))}
        </section>
        <section className="hidden lg:block">
          <AsideSlider />
        </section>
      </div>
    </main>
  )
}
