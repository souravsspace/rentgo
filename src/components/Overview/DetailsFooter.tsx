import { Typography } from "@material-tailwind/react";
import overviewData from "../../Data/OverviewData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function DetailsFooter() {
  const followingdata = [
    { name: "Free cancellation" },
    { name: "No credit card fees" },
    { name: "CDW" },
    { name: "Tolls" },
  ];

  return (
    <main>
      <section className="mt-12 grid gap-4">
        <Typography variant="h5">Description</Typography>
        <div className="grid gap-3">
          <Typography>
            Collision Damage Waiver and Theft Protection are included with this
            car. It covers damage and theft of the vehicle with the exclusion of
            damage or loss of tyres, windscreen, glass and undercarriage.
          </Typography>
          <Typography>
            The car has a damage excess of GBP 1205.0 (Includes tax) and a theft
            excess of GBP 1205.0 (Includes tax). Please ensure that you have the
            excess amount available on your card when you pick up the car.
          </Typography>
        </div>
      </section>
      <section className="my-4 grid grid-cols-1 gap-1 md:grid-cols-3">
        {overviewData.map((img) => (
          <img
            src={img.src}
            className="max-w-[245px] cursor-pointer rounded-lg"
          />
        ))}
      </section>
      <section className="my-12">
        <Typography variant="h5" className="my-4">
          Following for FREE:
        </Typography>
        <div className="grid grid-cols-2 gap-2">
          {followingdata.map((item, index) => (
            <Typography
              key={index}
              className="flex gap-1 text-sm text-green-600"
            >
              <FontAwesomeIcon icon={faCheck} />
              <p>{item.name}</p>
            </Typography>
          ))}
        </div>
      </section>
    </main>
  );
}
