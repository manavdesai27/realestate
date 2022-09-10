import Card from "./Card";
import { listingsData } from "../../utils/dummyData";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../utils/FiltersContext";
import PropertyModal from "./PropertyModal";
export default function CardsList() {
  const {
    dateSelect,
    locationSelect,
    startPriceSelect,
    endPriceSelect,
    propertyTypeSelect,
    searchData,
  } = useContext(ThemeContext);

  const processDates = (d) => {
    return new Date(d);
  };
  const processUtc = (d) => {
    return new Date(d).toUTCString();
  };

  var [listings, setListings] = useState(listingsData);
  const [product, setProduct] = useState({});
  const [open, close] = useState(false);

  const closeModal = () => {
    close(false);
  };

  const openModal = (item) => {
    console.log("open modal");
    close(true);
    setProduct(item);
  };

  useEffect(() => {
    // processUtc(dateSelect).getTime();
    listings = listingsData.filter((listing) => {
      // console.log(processDates(listing.date).getTime() >= processDates(dateSelect).getTime());
      return (
        (listing.homeType === propertyTypeSelect ||
          propertyTypeSelect === "All") &&
        listing.price >= startPriceSelect &&
        listing.price <= endPriceSelect &&
        processDates(listing.date).getTime() <=
          processDates(dateSelect).getTime() &&
        (listing.state === locationSelect || locationSelect === "All")
      );
    });
    if (searchData.length) {
      console.log(searchData);
      listings = listings.filter((listing) => {
        return (
          listing.address.toLowerCase().includes(searchData.toLowerCase()) ||
          listing.city.toLowerCase().includes(searchData.toLowerCase()) ||
          listing.state.toLowerCase().includes(searchData.toLowerCase())
        );
      });
      console.log(listings);
    }
    setListings(listings);
  }, [
    locationSelect,
    startPriceSelect,
    endPriceSelect,
    propertyTypeSelect,
    dateSelect,
    searchData,
  ]);

  return (
    <>
      <PropertyModal close={closeModal} open={open} product={product} />
      {listings.length ? (
        <div className="my-4 px-4 flex flex-col lg:grid grid-cols-3 gap-4 flex-wrap">
          {listings.map((item, index) => (
            <Card
              onclickFun={() => {
                openModal(item);
              }}
              key={index}
              property={item}
            />
          ))}
        </div>
      ) : (
        <h1>No data to show for current filters!</h1>
      )}
    </>
  );
}
