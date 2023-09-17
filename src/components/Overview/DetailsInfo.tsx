import { faCircleExclamation, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react"
import { useState } from "react"

export default function DetailsInfo() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  return (
    <>
      <Typography
        onClick={handleOpen}
        className="flex cursor-pointer items-center justify-center gap-1 hover:text-red-500"
      >
        <FontAwesomeIcon icon={faCircleExclamation} />
        <Typography>Important Information</Typography>
      </Typography>
      <Dialog
        open={open}
        handler={handleOpen}
        className="overflow-auto max-h-[90vh]"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="flex">
          <Typography className="flex-1" variant="h5">
            Important Information
          </Typography>
          <FontAwesomeIcon
            className="cursor-pointer rounded-full bg-black px-[6px] py-[4px] text-white hover:bg-red-500"
            size="xs"
            icon={faX}
            onClick={handleOpen}
          />
        </DialogHeader>
        <DialogBody divider className="flex">
          <Typography variant="h6" className="flex-1">
            Franchise
          </Typography>
          <Typography className="flex-1">
            An incident deductible is AUD 3000.00 including tax. Car Theft
            Franchise is AUD 3000.00 including tax.
          </Typography>
        </DialogBody>
        <DialogBody divider className="flex">
          <Typography variant="h6" className="flex-1">
            Collateral at the front desk
          </Typography>
          <Typography className="flex-1">
            A car rental company is required to provide a deposit of AUD 3000.00
            upon receipt of the car. The mortgage will be returned after the end
            of the lease, if all conditions are fulfilled.
          </Typography>
        </DialogBody>
        <DialogBody divider className="flex">
          <Typography variant="h6" className="flex-1">
            Mileage / Kilometers
          </Typography>
          <Typography className="flex-1">
            Your rental includes an unlimited number of free miles.
          </Typography>
        </DialogBody>
        <DialogBody divider className="flex">
          <Typography variant="h6" className="flex-1">
            Age requirements
          </Typography>
          <Typography className="flex-1">
            The minimum rental age for this car is 18 years.
          </Typography>
        </DialogBody>
        <DialogBody divider className="flex">
          <Typography variant="h6" className="flex-1">
            Getting a car
          </Typography>
          <Typography className="flex-1">
            Passport or ID is required. An international driver's license is
            required if the national driver’s license is not printed in English.
          </Typography>
        </DialogBody>
        <DialogBody divider className="flex">
          <Typography variant="h6" className="flex-1">
            Payment methods
          </Typography>
          <div className="flex-1">
            <Typography>
              The primary driver must have a credit card in his / her name when
              picking up the car. The card must have sufficient funds available
              to cover the amount of the deductible / down payment (which will
              be blocked on the card during the rental).
            </Typography>
            <br />
            <Typography>
              The following credit cards are accepted: American Express,
              MasterCard, Visa.
            </Typography>
          </div>
        </DialogBody>
      </Dialog>
    </>
  )
}
