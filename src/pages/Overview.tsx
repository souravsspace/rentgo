import { useRentContext } from "../Context/RentContext";
import Aside from "../Components/Overview/Aside";
import Details from "../Components/Overview/Details";

export default function Overview() {
  const { showCar } = useRentContext();
  return (
    <main className="bg-gray-50 my-[5.1rem] py-[2rem]">
      <div className="mx-4  md:mx-[8rem]">
        <div className="flex items-start justify-between gap-[3rem]">
          <section className="flex-auto">
            {showCar.map((car, index) => (
              <Details key={index} {...car} />
            ))}
          </section>
          <section>
            {showCar.map((car, index) => (
              <Aside key={index} {...car} />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
