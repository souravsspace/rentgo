import { createContext, useContext } from "react";

type RentContextProviderProps = {
  children: React.ReactNode;
}

const RentContext = createContext({})

export const useRentContext = () => useContext(RentContext)

export default function RentContextProvider({children}: RentContextProviderProps){
    return (
        <RentContext.Provider value={{}}>
            {children}
        </RentContext.Provider>
    )
}

