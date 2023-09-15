import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import CardItemsBody from "./CardItemsBody";
import formatCurrency from "../../Utilities/FormatCurrency";
import Images from "../../assets/Images";
import CarData from "../../Data/CarData.json";

type CarItemsProps = {
  id: number;
  img: string;
  name: string;
  rentPrice: number;
};

export default function Items(
  car: any,
  { id, img, name, rentPrice }: CarItemsProps
) {
  return (
    <div>
      <Card className="overflow-hidden mx-auto min-w-[23.5rem]">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          
          {/* <img src={img} alt={name} className="w-full" /> */}
          {/* {Images.find((images) => images.id === id) && (
            <div>
              {Images.map((image) => (
                <img key={image.id} src={image.src} alt={name} />
              ))}
            </div>
          )} */}
          {/* {Images.map((image) => (
            <div key={image.id}>
              {image.id === id && <img src={image.src} alt={name} />}
            </div>
          ))} */}
          {/* {Images.map((image) => (
            <img key={image.id} src={image.src} alt={name} />
          ))} */}


        </CardHeader>
        <CardItemsBody {...car} />
        <CardFooter className="flex items-center justify-between">
          <Typography variant="h5">{formatCurrency(rentPrice)}/Day</Typography>
          <Button type="button">Rent Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
