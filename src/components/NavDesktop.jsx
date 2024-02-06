import { Fragment } from "react";
import { navLinks } from "../js/navLinks";

export default function NavDesktop() {
  return (
    <ul className="hidden items-center gap-8 sm:flex">
      {navLinks.map((nav) => {
        return (
          <Fragment key={nav.link}>
            {nav.link == "Contact" && (
              <li className="font-fraunces rounded-full bg-white px-6 py-3 hover:bg-white/40 hover:text-white">
                <a href={nav.to} className="text-sm font-semibold uppercase">
                  {nav.link}
                </a>
              </li>
            )}
            {nav.link != "Contact" && (
              <li>
                <a
                  href={nav.to}
                  className="text-lg font-semibold text-white/80 hover:text-white"
                >
                  {nav.link}
                </a>
              </li>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
}
