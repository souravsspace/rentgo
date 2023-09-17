import { faShieldHeart, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react"
import { useState } from "react"

export default function DetailsInsurance() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  return (
    <>
      <Typography
        onClick={handleOpen}
        className="flex cursor-pointer items-center justify-center gap-1 hover:text-red-500"
      >
        <FontAwesomeIcon icon={faShieldHeart} />
        <Typography>Insurance</Typography>
      </Typography>
      <Dialog
        open={open}
        handler={handleOpen}
        size="lg"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="flex">
          <Typography className="flex-1" variant="h5">Insurance</Typography>
          <FontAwesomeIcon
            className="rounded-full bg-black px-[6px] py-[4px] text-white cursor-pointer hover:bg-red-500"
            size="xs"
            icon={faX}
            onClick={handleOpen}
          />
        </DialogHeader>
        <DialogBody divider>
          <div className="flex justify-between">
            <Typography variant="h6" className="flex-1">
              Insurance coverage
            </Typography>
            <section className="flex-1">
              <Typography>
                Collision damage waiver (CDW): Includes 20% tax; Excess 1,205
                GBP
              </Typography>
              <br />
              <Typography>
                Theft waiver (TW): Includes 20% tax; Excess 1,205 GBP
              </Typography>
              <br />
              <Typography>
                Third party liability protection (TP): Includes 20% tax; Maximum
                Coverage Unlimited.
              </Typography>
              <br />
              <Typography>
                The Excess Liability is the amount determined by the car rental
                supplier for which you can be held liable in case of
                damage/theft of the vehicle. Damage to or loss of tyres,
                windscreens, glass and undercarriage may not be covered by the
                CDW (Collision Damage Waiver). Please check with the rental
                agent at the desk.
              </Typography>
              <br />
              <Typography>
                If you purchase the Excess Reimbursement Insurance from a third
                party, the main driver will be required to present their credit
                card at the rental desk in order for the car rental agent to
                authorize the deposit.
              </Typography>
            </section>
          </div>
        </DialogBody>
        <DialogFooter>
          <Typography variant="h6" className="flex-1">
            Breakdown assistance
          </Typography>
          <Typography className="flex-1">Includes 20% tax</Typography>
        </DialogFooter>
      </Dialog>
    </>
  )
}
