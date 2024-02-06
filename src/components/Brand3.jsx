import graphicImageDekstop from "../../images/desktop/image-graphic-design.jpg";
import photographyImageDekstop from "../../images/desktop/image-photography.jpg";
import graphicImageMobile from "../../images/mobile/image-graphic-design.jpg";
import photographyImageMobile from "../../images/mobile/image-photography.jpg";
export default function Brand3() {
  return (
    <section className="flex flex-col sm:flex-row">
      <div className="sm:flex-1">
        <picture>
          <source srcSet={graphicImageDekstop} media="(min-width: 640px)" />
          <img
            src={graphicImageMobile}
            alt="graphic image"
            className="bg-cover bg-center lg:w-full"
          />
        </picture>
        <div className="mx-auto -mt-[16rem] mb-20 w-full max-w-fit space-y-6 text-center sm:-mt-40 sm:mb-3 lg:-mt-52 lg:mb-16 xl:-mt-[15rem]">
          <h3 className="font-fraunces text-3xl font-black text-darkDesaturedCyan lg:text-4xl">
            Graphic Design
          </h3>
          <p className="mx-auto max-w-sm font-barlow font-semibold leading-relaxed text-darkDesaturedCyan">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="sm:flex-1">
        <picture>
          <source srcSet={photographyImageDekstop} media="(min-width: 640px)" />
          <img
            src={photographyImageMobile}
            alt="graphic image"
            className="bg-cover bg-center lg:w-full"
          />
        </picture>
        <div className="mx-auto -mt-[16rem] mb-20 w-full max-w-fit space-y-6 text-center text-darkBlue sm:-mt-40 sm:mb-3 lg:-mt-52 lg:mb-16 xl:-mt-[15rem]">
          <h3 className="font-fraunces text-3xl font-black lg:text-4xl">
            Photography
          </h3>
          <p className="mx-auto max-w-sm font-barlow font-semibold leading-relaxed">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
}
