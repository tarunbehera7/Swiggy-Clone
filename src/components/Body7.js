import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import ResCard61 from "./ResCard61";
import { Link } from "react-router-dom";
import search from "../logo/search.png";

const Body7 = () => {

  const [listOfRes, setListOfRes] = useState([]); // OG full data
  const [filteredRes, setFilteredRes] = useState([]); // Temp displayed data ; new state var for display.
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // console.log("useEffect Called..")
    fetchData();
  }, []);


  const fetchData = async () => {
    ////
    const data = await fetch(
      "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // Once we hv data, convert it into JSON.
    const json = await data.json();

    console.log("API response", json);
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };


  return listOfRes.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">

        <div className="search">
          <input type="text" className="search-box" placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="search-btn"
            onClick={() => {
              // console.log(searchText);
              ////
              const filteredRes =
                listOfRes.filter(
                  // (res) => res.info.name.includes(searchText) 
                  (res) =>
                    res.info.name
                    .toLowerCase().includes(searchText.toLowerCase())
                );
              setFilteredRes(filteredRes);
            }}>
            <img src={search} alt="Search" style={{ width: "20px", height: "20px" }} />
          </button>
        </div>


        <button className="filter-btn"
          onClick= {() => {
            const filteredList = listOfRes.filter(
                (res) => res?.info?.avgRating > 4.3
              );
            // Whenever a state var updates,
            // react re-renders the component..
            setFilteredRes(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="res-container">
        {/* //-----   b   ----- */}
        {filteredRes.map( (restaurant) => (
            // <ResCard61 
            //   key= {restaurant.info.id}
            //   resData= {restaurant}
            // />
            <Link to={`/res/${restaurant.info.id}`} key={restaurant.info.id}>
              <ResCard61 resData={restaurant} />
            </Link>
            // <Link to={"/res/" + restaurant.info.id} key={restaurant.info.id}> 
            //   <ResCard61 
            //     // key= {restaurant.info.id}
            //     resData= {restaurant}/>
            // </Link>
          ))}
      </div>
    </div>
  );
};

export default Body7;