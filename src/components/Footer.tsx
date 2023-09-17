import {
  faDribbble,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Typography } from "@material-tailwind/react";
import logo from "../../public/assets/logo.svg";

export default function Footer() {
  const footerNavData = [
    {
      title: "Company",
      items: ["About", "How it works", "Documentation"],
    },
    {
      title: "Support",
      items: ["Help Center", "Refund policy", "FAQ "],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-gray-900 text-white py-[3rem]">
      <div className="flex justify-between items-center md:px-8 lg:px-[3rem] xl:px-[8rem] gap-10 md:gap-0 flex-col md:flex-row">
        <section className="grid gap-8">
          <div>
            <img src={logo} />
          </div>
          <div className="flex items-center gap-20">
            {footerNavData.map((navItem) => (
              <div key={navItem.title} className="grid gap-3">
                <Typography variant="h6">{navItem.title}</Typography>
                <ul className="list-none p-0 m-0 grid gap-1">
                  {navItem.items.map((item) => (
                    <li key={item}>
                      <Typography className="cursor-pointer">{item}</Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="grid gap-4">
          <Typography>Daily from 09:00 - 21:00</Typography>
          <Typography variant="h4">+1 808 203 4565</Typography>
          <Typography variant="h5">Email: our_email@example.com</Typography>
          <div className="flex gap-4">
            <IconButton className="rounded bg-[#ea4335] text-2xl hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
              <FontAwesomeIcon icon={faFacebook} />
            </IconButton>
            <IconButton className="rounded bg-[#1DA1F2] text-2xl hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
              <FontAwesomeIcon icon={faTwitter} />
            </IconButton>
            <IconButton className="rounded bg-[#ea4c89] text-2xl hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
              <FontAwesomeIcon icon={faDribbble} />
            </IconButton>
          </div>
        </section>
      </div>
      <div className="mx-[1rem] md:mx-[5rem]">
        <div className="mt-12 border-t  border-blue-gray-50 py-4">
          <Typography
            variant="small"
            className="mb-4 font-normal text-white md:mb-0 px-4 md:px-12 text-center md:text-left"
          >
            &copy; {currentYear} <a href="/">Material Tailwind</a>. All Rights
            Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
