import { createContext, useContext } from "react";
import { Navigation } from "../components/Navigation";
import { useNavigate } from "react-router-dom";

type RentContextProviderProps = {
    children: React.ReactNode;
};

type RentContextProps = {
    formSubmit: (e: React.FormEvent<HTMLFormElement>) => void
};

const RentContext = createContext({} as RentContextProps);

export const useRentContext = () => useContext(RentContext);

export default function RentContextProvider({
    children,
}: RentContextProviderProps) {
    const navigate = useNavigate();

    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/search-result");
    };

    return (
    <RentContext.Provider value={{formSubmit}}>
        {children}
        <Navigation />
    </RentContext.Provider>
    );
}
