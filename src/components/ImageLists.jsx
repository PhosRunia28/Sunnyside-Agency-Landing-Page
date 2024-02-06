import { imageLists } from "../js/imageLists";
export default function ImageLists() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-4 sm:grid-rows-1">
      {imageLists.map((image) => {
        return (
          <picture key={image.alt}>
            <source srcSet={image.desktop} media="(min-width: 640px)" />
            <img
              src={image.mobile}
              alt={image.desc}
              className="bg-cover bg-center"
            />
          </picture>
        );
      })}
    </div>
  );
}
