import logo from "../../images/logo.svg";
import { footerLinks } from "../js/footerlinks";
import { icons } from "../js/icons";
export default function Footer() {
  return (
    <footer className="bg-footer py-14 font-barlow">
      <img
        src={logo}
        alt="logo"
        className="mx-auto bg-cover bg-center text-red-500"
      />
      <ul className="mx-auto mt-10 flex w-full max-w-fit items-center gap-10">
        {footerLinks.map((link, index) => {
          return (
            <li key={index}>
              <a
                href={link.to}
                className="text-xl font-semibold text-darkDesaturedCyan/90 hover:text-white"
              >
                {link.link}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="mt-16 flex items-center justify-center gap-8">
        {icons.map((icon) => {
          return (
            <a href={icon.to} key={icon.alt} className="">
              <img
                src={icon.img}
                alt={icon.alt}
                className="bg-cover bg-center hover:brightness-[100] hover:saturate-100"
              />
            </a>
          );
        })}
      </div>
    </footer>
  );
}
