import { faFilter } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Drawer,
  Typography,
} from "@material-tailwind/react"
import Aside from "./Aside"
import { useRentContext } from "../../Context/RentContext"

export default function MobileFilter() {
  const { openDrawer, closeDrawer, open } = useRentContext()
  return (
    <>
      <div className="mb-3 inline-block cursor-pointer">
        <div
          onClick={openDrawer}
          className="flex items-center justify-center gap-2 rounded-lg border-2 border-gray-500 px-3 py-px"
        >
          <FontAwesomeIcon icon={faFilter} />
          <Typography>Filter</Typography>
        </div>
      </div>
      <Drawer
        size={350}
        open={open}
        onClose={closeDrawer}
        className="overflow-scroll p-4"
      >
        <Aside />
      </Drawer>
    </>
  )
}
