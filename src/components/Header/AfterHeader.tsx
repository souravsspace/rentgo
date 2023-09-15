import {
  faPersonRays,
  faShieldHalved,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-tailwind/react";

export default function AfterHeader() {
  return (
    <div className="px-2 bg-white my-[5rem] md:px-8 lg:px-[3rem] xl:px-[8rem] grid gap-5 md:gap-[4rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <section className="grid gap-4">
        <FontAwesomeIcon size="2xl" icon={faShieldHalved} />
        <Typography variant="h4">Car Insurance</Typography>
        <Typography>
          Travel safely - we handle all risks on our own. All of our cars have
          valid insurance policies​
        </Typography>
      </section>
      <section className="grid gap-4">
        <FontAwesomeIcon size="2xl" icon={faPersonRays} />
        <Typography variant="h4">Assistance on the Road</Typography>
        <Typography>
          Something happened on the road? Contact us and our team will come to
          help you along the way.
        </Typography>
      </section>
      <section className="grid gap-4">
        <FontAwesomeIcon size="2xl" icon={faTag} />
        <Typography variant="h4"> Best Cost </Typography>
        <Typography>
          Travel safely - we handle all risks on our own. All of our cars have
          valid insurance policies
        </Typography>
      </section>
    </div>
  );
}
