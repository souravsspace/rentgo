import { Typography } from "@material-tailwind/react";

type MinorDetailsProps = {
  exterior: string;
  interior: string;
  drivetr: string;
  trans: string;
  ec: number;
  fueltype: string;
  ac: boolean;
  gps: boolean;
};

export default function MinorDetails(items: MinorDetailsProps) {
  const { exterior, interior, drivetr, trans, ec, fueltype, ac, gps } = items;
  return (
    <main className="mt-12 grid gap-8">
      <Typography variant="h4">Overview</Typography>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <Typography>Exterior Color</Typography>
          <Typography variant="h6">{exterior}</Typography>
        </div>
        <div>
          <Typography>Interior Color</Typography>
          <Typography variant="h6">{interior}</Typography>
        </div>
        <div>
          <Typography>Drivetrain</Typography>
          <Typography variant="h6">{drivetr}</Typography>
        </div>
        <div>
          <Typography>Transmission</Typography>
          <Typography variant="h6">{trans}</Typography>
        </div>
        <div>
          <Typography>Engine Capacity</Typography>
          <Typography variant="h6">{ec}</Typography>
        </div>
        <div>
          <Typography>Fuel Types</Typography>
          <Typography variant="h6">{fueltype}</Typography>
        </div>
        <div>
          <Typography>Air Conditioner</Typography>
          <Typography variant="h6">{ac ? "True" : "False"}</Typography>
        </div>
        <div>
          <Typography>GPS</Typography>
          <Typography variant="h6">{gps ? "True" : "False"}</Typography>
        </div>
      </div>
    </main>
  );
}
