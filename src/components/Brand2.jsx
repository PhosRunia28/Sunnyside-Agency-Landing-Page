import imageStandOutDesktop from "../../images/desktop/image-stand-out.jpg";
import imageStandOutMobile from "../../images/mobile/image-stand-out.jpg";
export default function Brand2() {
  return (
    <section className="flex flex-col bg-yellow/10 sm:flex-row md:items-center">
      <picture className="inline-block flex-1">
        <source srcSet={imageStandOutDesktop} media="(min-width: 640px)" />
        <img
          src={imageStandOutMobile}
          alt="image transform"
          className="h-full w-full bg-cover bg-center"
        />
      </picture>
      <div className="flex-1 text-center font-fraunces sm:text-left">
        <div className="mx-auto flex max-w-fit flex-col gap-6 px-6 py-14 sm:py-8 md:gap-8 lg:gap-10">
          <h3 className="text-3xl font-black text-veryDarkDesaturedBlue sm:max-w-xs lg:text-4xl">
            Stand out to the right audience
          </h3>
          <p className="mx-auto max-w-md font-barlow font-semibold leading-relaxed text-darkGrayishBlue lg:text-lg">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <div className="relative mx-auto flex w-full max-w-fit sm:max-w-none">
            <a
              href="#"
              className="peer relative z-20 font-black uppercase tracking-wider text-veryDarkDesaturedBlue "
            >
              Learn More
            </a>
            <div className="absolute inset-0 top-4 w-full max-w-[7.75rem] rounded-full bg-softRed/20 peer-hover:bg-softRed/80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
