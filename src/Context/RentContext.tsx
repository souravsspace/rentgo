import { createContext, useContext, useState } from "react"
import { Navigation } from "../Components/Navigation"
import { useNavigate } from "react-router-dom"

type RentContextProviderProps = {
  children: React.ReactNode
}

type RentContextProps = {
  showCar: showCarType[]
  thePrice: number
  isChecked: boolean | any
  getCarDetails: (id: number) => void
  formSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  HandleChecked: (e: React.ChangeEvent<HTMLInputElement>, rate: number) => void
  open: boolean
  openDrawer: () => void
  closeDrawer: () => void
  showResult: (id: number) => void
  carId: number
  carIdLast: number
}

type showCarType = {
  id: number
}

const RentContext = createContext({} as RentContextProps)

export const useRentContext = () => useContext(RentContext)

export default function RentContextProvider({
  children,
}: RentContextProviderProps) {
  const navigate = useNavigate()
  const [showCar, setShowCar] = useState<showCarType[]>([])
  const [isChecked, setIsChecked] = useState<any>(false)
  const [thePrice, setThePrice] = useState(0)

  const [open, setOpen] = useState(false)

  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  const [carId, setCarId] = useState(0)
  const [carIdLast, setCarIdLast] = useState(10)

  function showResult(id: number) {
    if (id === 1) {
      setCarId(0)
      setCarIdLast(10)
    }
    if (id === 2) {
      setCarId(11)
      setCarIdLast(20)
    }
    if (id === 3) {
      setCarId(21)
      setCarIdLast(30)
    }
    if (id === 4) {
      setCarId(31)
      setCarIdLast(40)
    }
    if (id == null) return null
  }

  const HandleChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    rate: number,
  ) => {
    if (e.target.checked) setThePrice(thePrice + rate)
    else setThePrice(thePrice - rate)
    setIsChecked(!isChecked)
  }

  function getCarDetails(id: number) {
    navigate("/overview")
    setShowCar((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id }]
      } else {
        return currItems.map((item) => {
          if (item.id === id) return { ...item, id }
          return item
        })
      }
    })
  }

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate("/search-result")
  }

  return (
    <RentContext.Provider
      value={{
        formSubmit,
        showCar,
        getCarDetails,
        HandleChecked,
        isChecked,
        thePrice,
        openDrawer,
        closeDrawer,
        open,
        showResult,
        carId,
        carIdLast,
      }}
    >
      {children}
      <Navigation />
    </RentContext.Provider>
  )
}
