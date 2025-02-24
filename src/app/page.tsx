import CarouselAdve from "@/components/carouselAdve";
import ProductArt from "@/components/productArt";
import { productProps } from "@/constants/productArtArr";

export default function Home() {

  const flexArr = productProps.slice(0, 2);
  const gridArr = productProps.slice(3, 9);

  return (
    <div className="flex flex-col">
      <main className="flex flex-col">
        {flexArr.map((item, index) => (
          <ProductArt 
            key={index}
            {...item}
          />
        ))}
        <section className="grid grid-cols-2 grid-rows-3 bg-light-white gap-3 bg-white">
          {gridArr.map((item, index) => (
            <ProductArt 
              key={index}
              {...item}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
