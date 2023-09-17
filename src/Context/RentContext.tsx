import { createContext, useContext, useState } from "react";
import { Navigation } from "../Components/Navigation";
import { useNavigate } from "react-router-dom";

type RentContextProviderProps = {
  children: React.ReactNode;
};

type RentContextProps = {
  showCar: showCarType[];
  getCarDetails: (id: number) => void;
  formSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

type showCarType = {
  id: number;
};

const RentContext = createContext({} as RentContextProps);

export const useRentContext = () => useContext(RentContext);

export default function RentContextProvider({
  children,
}: RentContextProviderProps) {
  const navigate = useNavigate();
  const [showCar, setShowCar] = useState<showCarType[]>([]);

  function getCarDetails(id: number) {
    navigate("/overview");
    setShowCar((currItems) => {
      if (currItems.find((item) => item.id === id) == null)
        return [...currItems, { id }];
      return currItems;
    });
  }

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/search-result");
  };

  return (
    <RentContext.Provider value={{ formSubmit, showCar, getCarDetails }}>
      {children}
      <Navigation />
    </RentContext.Provider>
  );
}
