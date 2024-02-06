import headerImgDesktop from "../../images/desktop/image-header.jpg";
import iconArrowDown from "../../images/icon-arrow-down.svg";
import hamburger from "../../images/icon-hamburger.svg";
import logo from "../../images/logo.svg";
import headerImgMobile from "../../images/mobile/image-header.jpg";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
export default function Header({ setOpenNav, openNav }) {
  return (
    <header className="relative h-screen sm:h-[80vh] md:h-[70vh] lg:h-screen">
      <div className="relative z-30 flex items-center justify-between px-6 pt-6">
        <img src={logo} alt="logo" className="bg-cover bg-center" />
        <img
          src={hamburger}
          alt="hamburger"
          className="cursor-pointer bg-cover bg-center sm:hidden"
          onClick={() => setOpenNav(!openNav)}
        />
        <NavDesktop />
      </div>
      {/* content */}
      <div className="absolute left-1/2 top-36 z-30 w-full max-w-xs -translate-x-1/2 font-fraunces md:top-[30%] md:max-w-none xl:top-[30%]">
        <h2 className="mb-14 text-center text-4xl font-bold uppercase tracking-[0.3em] text-white lg:text-5xl">
          We are creatives
        </h2>
        <img
          src={iconArrowDown}
          alt="arrow down"
          className="mx-auto bg-cover bg-center"
        />
      </div>
      {/* header image */}
      <picture className="absolute inset-0 inline-block">
        <source srcSet={headerImgDesktop} media="(min-width: 640px)" />
        <img
          src={headerImgMobile}
          alt="header image"
          className="h-full w-full bg-cover bg-center"
        />
      </picture>
      {openNav && <NavMobile />}
    </header>
  );
}
