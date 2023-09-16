import { Navbar, Typography } from "@material-tailwind/react";
import logo from "../assets/logobl.svg";

export function Navigation() {
  const navList = ["Home", "About", "Contact"];

  return (
    <Navbar
      shadow={false}
      className="fixed top-0 mx-auto w-screen py-2 md:px-4 lg:px-8 z-50"
      fullWidth
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img src={logo} />
        </Typography>

        <div className="flex px-2">
          <ul className="flex mx-auto gap-2 items-center lg:gap-6">
            {navList.map((item, index) => (
              <Typography
                as="li"
                key={index}
                variant="small"
                className="p-2 font-normal"
              >
                <a href="#" className="flex items-center">
                  {item}
                </a>
              </Typography>
            ))}
          </ul>
        </div>
      </div>
    </Navbar>
  );
}
