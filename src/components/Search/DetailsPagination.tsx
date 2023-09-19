import { Button, IconButton } from "@material-tailwind/react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function DetailsPagination() {
  const [active, setActive] = useState(1)
  const getItemProps = (index: number) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    }) as object

  const next = () => {
    if (active === 2) return
    setActive(active + 1)
  }

  const prev = () => {
    if (active === 1) return
    setActive(active - 1)
  }

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
        Previous
      </Button>
      <div className="flex items-center gap-2">
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === 5}
      >
        Next
        <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
      </Button>
    </div>
  )
}
