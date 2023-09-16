import carDataRaw from "../../Data/carDataRaw.json";

type DetailsOverviewProps = {
  id: number;
};

export default function DetailsOverview({ id }: DetailsOverviewProps) {
  const items = carDataRaw.find((item) => item.id === id);
  if (items == null) return null;
  return (
    <div>
      <h1>{items.name}</h1>
      <h2>{items.year}</h2>
    </div>
  );
}
