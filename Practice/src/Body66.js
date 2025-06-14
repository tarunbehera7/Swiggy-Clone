import { useState } from "react"
import Shimmer from "../../src/components/Shimmer";
import resList from "../../src/utils/mockData";

const Body66 = () => {

    // const[listOfRes, setListOfRes] = useState([]);


    return (
        <div className="Body">
            {/* <div className="filter">
                <div className="filter-btn">
                    <button className="btn"
                        onClick={() => {
                            // console.log("Btn clicked"); // 1
                            ////
                            // listOfRes = listOfRes.filter(
                            //   (res) => res.card.card.info.avgRating > 4
                            // );
                            // console.log(listOfRes);
                            listOfRes = listOfRes.filter(
                                (res) => res?.card?.card?.avg?.infoRating > 4.3;
                            );
                            console.log(listOfRes); 
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>   */}
            <div className="res-container">
                {resList.map( 
                    (restaurant) => (
                        <ResCard66/>
                    )
                )}
            </div>
        </div >
    );
};

export default Body66;
