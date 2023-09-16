import { Navbar, Typography } from "@material-tailwind/react";
import logo from "../../public/assets/logobl.svg";
import { Link, useNavigate } from "react-router-dom";

export function Navigation() {
  const navList = [
    {id: 1, name: "Home", navigate: "/"},
    {id: 2, name: "About", navigate: "/about"},
    {id: 3, name: "Contact", navigate: "/contact"},
  ];

  const navigate = useNavigate();

  return (
    <Navbar
      shadow={false}
      className="fixed top-0 z-50 mx-auto w-screen py-2 md:px-4 lg:px-8"
      fullWidth
    >
      <div className="flex items-center justify-between text-blue-gray-900 md:mx-[6rem]">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img src={logo} onClick={()=> navigate('/')}/>
        </Typography>

        <div className="flex">
          <ul className="mx-auto flex items-center gap-4 lg:gap-8">
            {navList.map((item, index) => (
              <Typography
                as="li"
                key={index}
                variant="small"
                className="font-normal"
              >
                <Link to={item.navigate} className="flex items-center">
                  {item.name}
                </Link>
              </Typography>
            ))}
          </ul>
        </div>
      </div>
    </Navbar>
  );
}
