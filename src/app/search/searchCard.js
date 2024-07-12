import { useSelector } from "react-redux";
import SearchDisplay from "./searchDisplay";

export default function SearchCard({ setOpen }) {
  const searchFilter = useSelector((state) => state.search.items);
  return (
    <div className="flex overflow-x-auto space-x-4">
      {searchFilter.map((item, index) => (
        <div key={index} className="inline-block flex-shrink-0 px-4">
          <SearchDisplay
            setOpen={setOpen}
            title={item.title}
            image={item.image}
            description={item.description}
            originalPrice={item.originalPrice}
            discountedPrice={item.discountPrice}
            ratings={item.ratings}
            large={item.large.quantity}
            medium={item.medium.quantity}
            small={item.small.quantity}
            image1={item.imageView.image1}
            image2={item.imageView.image2}
            image3={item.imageView.image3}
            image4={item.imageView.image4}
          />
        </div>
      ))}
    </div>
  );
}
