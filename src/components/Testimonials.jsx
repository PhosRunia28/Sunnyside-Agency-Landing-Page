import { testimonials } from "../js/testimonials";
export default function Testimonials() {
  return (
    <div className="px-6 pb-20 pt-24 xl:pb-28 xl:pt-36">
      <h3 className="text-center font-fraunces text-sm font-bold uppercase tracking-[0.2em] text-grayishBlue lg:text-base">
        Client Testimonials
      </h3>
      <div className="mt-14 grid grid-cols-1 grid-rows-1 gap-16 text-center font-barlow md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-0">
        {testimonials.map((testimonial, index) => {
          return (
            <div className="flex flex-col gap-5" key={index}>
              <img
                src={testimonial.image}
                alt="user image"
                className="mx-auto h-full max-w-[4rem] rounded-full"
              />
              <p className="mx-auto max-w-xs leading-relaxed text-black/60">
                {testimonial.statement}
              </p>
              <div className="mt-8">
                <h4 className="mb-1 font-fraunces font-black text-veryDarkDesaturedBlue">
                  {testimonial.name}
                </h4>
                <small className="font-semibold text-grayishBlue">
                  {testimonial.position}
                </small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
