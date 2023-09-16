import { useRentContext } from "../Context/RentContext";
import AsideOverview from "../components/Overview/AsideOverview";
import DetailsOverview from "../components/Overview/DetailsOverview";

export default function OverviewCar() {
  const { showCar } = useRentContext();
  return (
    <main className="mx-4 my-[7.1rem] md:mx-[8rem] ">
      <div className="flex justify-between items-center gap-[3rem]">
        <section className="flex-auto bg-blue-600">
          {showCar.map((car, index) => (
            <DetailsOverview key={index} {...car} />
          ))}
        </section>
        <section>
          {showCar.map((car, index) => (
            <AsideOverview key={index} {...car} />
          ))}
        </section>
      </div>
    </main>
  );
}
