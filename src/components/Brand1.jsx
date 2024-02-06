import imageTransformDesktop from "../../images/desktop/image-transform.jpg";
import imageTransformMobile from "../../images/mobile/image-transform.jpg";
export default function Brand1() {
  return (
    <section className="flex flex-col bg-yellow/10 sm:flex-row-reverse md:items-center">
      <picture className="inline-block flex-1">
        <source srcSet={imageTransformDesktop} media="(min-width: 640px)" />
        <img
          src={imageTransformMobile}
          alt="image transform"
          className="h-full w-full bg-cover bg-center"
        />
      </picture>
      <div className="flex-1 text-center font-fraunces sm:text-left">
        <div className="mx-auto flex max-w-fit flex-col gap-6 px-6 py-14 sm:py-8 md:gap-8 lg:gap-10">
          <h3 className="text-3xl font-black text-veryDarkDesaturedBlue sm:max-w-xs lg:text-4xl">
            Transform your brand
          </h3>
          <p className="mx-auto max-w-md font-barlow font-semibold leading-relaxed text-darkGrayishBlue lg:text-lg">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <div className="relative mx-auto flex w-full max-w-fit sm:max-w-none">
            <a
              href="#"
              className="peer relative z-20 font-black uppercase tracking-wider text-veryDarkDesaturedBlue"
            >
              Learn More
            </a>
            <div className="absolute inset-0 top-4 w-full max-w-[7.75rem] rounded-full bg-yellow/20 peer-hover:bg-yellow/80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
