import AfterHeader from "../components/Header/AfterHeader";
import { CarsCard } from "../components/Car/CarCard";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <CarsCard />
      <AfterHeader />
    </>
  );
}
