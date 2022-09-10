import { useEffect, useState, useContext } from "react";
import { DatePicker } from "react-datepicker";
import { locations, propertyTypes, prices } from "../../utils/dropdownOptions";
import { ThemeContext } from "../../utils/FiltersContext";
export default function Filters() {
  const filters = ["locations", "Property Type", "prices"];
  const { locationSelect, setLocationSelect } = useContext(ThemeContext);
  const { startPriceSelect, setStartPriceSelect } = useContext(ThemeContext);
  const { endPriceSelect, setEndPriceSelect } = useContext(ThemeContext);
  const [priceselect, setPriceSelect] = useState("All");
  const {dateSelect, setDateSelect} = useContext(ThemeContext);
  const [openFilter, setOpenFilter] = useState(false);

  const { propertyTypeSelect, setPropertyTypeSelect } =
    useContext(ThemeContext);
  // const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    // console.log(locationSelect, startPriceSelect, endPriceSelect, propertyTypeSelect);
    console.log(dateSelect);
  }, [locationSelect, startPriceSelect, endPriceSelect, propertyTypeSelect, dateSelect]);

  return (
    <>
    <div className={`flex md:hidden flex-row justify-end px-4`}>
      <div className='px-6 py-2 outline-none rounded font-medium text-md bg-gray-900 hover:bg-gray-600 flex gap-2' onClick={() => setOpenFilter(!openFilter)}>
    <button
          type="button"
          class="inline-flex justify-center items-center text-white rounded-lg md:hidden focus:outline-none dark:text-gray-400 dark:hover:text-white"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="text-md text-white">Filters</div>
        </div>
    </div>
    <div className={`${openFilter? 'flex': 'hidden'} mx-4 my-8 px-4 flex flex-col lg:grid lg:grid-cols-12 gap-2 p-4 pl-5 w-auto text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
      {filters.map((filter, index) => (
        <div className="dropdown relative block col-span-3">
          <h3 className="text-left text-transform: uppercase">{filter}</h3>
          <button
            className="dropdown-toggle px-6 py-2.5 w-full justify-center bg-gray-500 text-white font-medium text-sm leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {filter === "locations"
              ? locationSelect
                ? locationSelect
                : filter
              : filter === "Property Type"
              ? propertyTypeSelect
                ? propertyTypeSelect
                : filter
              : priceselect
              ? priceselect
              : filter}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-2 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              ></path>
            </svg>
          </button>
          <ul
            className=" dropdown-menu min-w-max w-full text-center absolute hidden  bg-white text-base z-50 float-left py-2 list-none rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
            aria-labelledby="dropdownMenuButton1"
          >
            {filter === "locations" && (
              <>
                {locations.map((location, index) => (
                  <li>
                    <a
                      className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100"
                      href="#"
                      onClick={() => {
                        setLocationSelect(location);
                      }}
                    >
                      {location}
                    </a>
                  </li>
                ))}
              </>
            )}
            {filter === "prices" && (
              <>
                {prices.map((price, index) => (
                  <li>
                    <a
                      className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100"
                      href="#"
                      onClick={() => {
                        if (price === "All") {
                          setStartPriceSelect(0);
                          setEndPriceSelect(100000);
                          setPriceSelect(price);
                        } else {
                          setStartPriceSelect(price.split(" - ")[0]);
                          setEndPriceSelect(price.split(" - ")[1]);
                          setPriceSelect(price);
                        }
                      }}
                    >
                      {price}
                    </a>
                  </li>
                ))}
              </>
            )}
            {filter === "Property Type" && (
              <>
                {propertyTypes.map((property, index) => (
                  <li>
                    <a
                      className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100"
                      href="#"
                      onClick={() => setPropertyTypeSelect(property)}
                    >
                      {property}
                    </a>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      ))}
      <div className="relative col-span-3">
        <h3 className="text-left text-transform: uppercase">Select a date</h3>
        <div className="w-full">
          <div
            className="datepicker relative"
            data-mdb-toggle-button="false"
          >
            <input
              type="date" value={dateSelect} onChange={(e) => setDateSelect(e.target.value)}
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-gray-500 border-gray-300 rounded transition ease-in-out m-0 focus:bg-blue-700 hover:bg-blue-700 focus:border-blue-600 focus:outline-none"
              placeholder="Select a date"
              data-mdb-toggle="datepicker"
            />
          </div>
        </div>
      </div>

      {/* <div className="relative col-span-3">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div> */}
    </div>
    </>
  );
}
