import { Fragment } from "react";
import { navLinks } from "../js/navLinks";
export default function NavMobile() {
  return (
    <div className="customSpike absolute left-1/2 top-24 z-40 flex w-[90%] -translate-x-1/2 justify-center bg-white py-8 sm:hidden">
      <ul className="font-barlow flex flex-col items-center justify-center gap-6">
        {navLinks.map((nav) => {
          return (
            <Fragment key={nav.link}>
              {nav.link == "Contact" && (
                <li className="bg-yellow font-fraunces rounded-full px-10 py-3">
                  <a href={nav.to} className="text-sm font-semibold uppercase">
                    {nav.link}
                  </a>
                </li>
              )}
              {nav.link != "Contact" && (
                <li>
                  <a
                    href={nav.to}
                    className="text-grayishBlue text-lg font-semibold hover:text-black"
                  >
                    {nav.link}
                  </a>
                </li>
              )}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}
