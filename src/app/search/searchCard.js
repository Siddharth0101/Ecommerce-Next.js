import { useSelector } from "react-redux";
import SearchDisplay from "./searchDisplay";

export default function SearchCard() {
  const searchFilter = useSelector((state) => state.search.items);
  console.log(searchFilter);

  return (
    <div className="flex overflow-x-auto space-x-4">
      {searchFilter.map((item, index) => (
        <div key={index} className="inline-block flex-shrink-0 px-4">
          <SearchDisplay
            title={item.title}
            image={item.image}
            description={item.description}
            originalPrice={item.originalPrice}
            discountedPrice={item.discountPrice}
            ratings={item.ratings}
          />
        </div>
      ))}
    </div>
  );
}
