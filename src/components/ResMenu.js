import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constants";
import { useCart } from '../components/CartContext';
import { toast } from "react-toastify";
import "../../i.css";


const ResMenu = () => {

  const [resInfo, setResInfo] = useState(null);
  const { addToCart } = useCart();

  const { resId } = useParams(); // id is resId.
  // console.log("resId",resId); 

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      // "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=791051&catalog_qa=undefined&submitAction=ENTER"
      // "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=393840&catalog_qa=undefined&submitAction=ENTER"
      ////
      // "resId" is only diff in all API's.
      // 393840 Chinese Wok, 32129  burger king, 
      ////
      Menu_API + resId
      // + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log("API 2-", json);
    setResInfo(json);
  };

  const {
    name, costForTwoMessage, cloudinaryImageId,
    cuisines, sla,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};


  // const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
  // console.log("itemCards", itemCards);
  //
  // Extract itemCards dynamically
  const allCards = resInfo?.data?.cards || [];
  let itemCards = [];

  for (const card of allCards) {
    const regularCards = card?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    if (regularCards) {
      for (const innerCard of regularCards) {
        if (innerCard?.card?.card?.itemCards) {
          itemCards = innerCard.card.card.itemCards;
          break;
        }
      }
    }
    if (itemCards.length > 0) break;
  }



  return resInfo === null ? (<Shimmer />)
    : (
      <div className="menu">
        <div className="menu-content">
          {/* <h1>{name}</h1>
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt={name} />
        <h2>{cuisines?.join(", ")} - {costForTwoMessage} </h2>
        <h2>{sla?.deliveryTime} mins</h2>
        <h2>Menu</h2>
        <ul>
          <li>Bugers</li>
          <li>Biryani</li>
          <li>Diet Coke</li> 
          <li>{itemCards[0].card.info.name}</li>
          <li>{itemCards[1].card.info.name}</li>
          <li>{itemCards[2].card.info.name}</li> 
          <li>{itemCards.map( (item) => 
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultprice/100} 
            </li>)}
          </li>
        </ul> */}
          <div className="menu">
            <h1>{name}</h1>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
              alt={name}
            />
            <h2>{cuisines?.join(", ")} - {costForTwoMessage} </h2>
            <h2>{sla?.deliveryTime} mins</h2>
            <h2>Menu</h2>


            <div className="menu-items">

              {itemCards.map((item) => {
                const { id, name, price, defaultPrice, description, imageId, ratings } = item.card.info;

                return (
                  <div key={id} className="menu-card">
                    
                    <div className="menu-text">
                      <h3>{name}</h3>
                      <p>₹{price / 100 || defaultPrice / 100}</p>
                      {ratings?.aggregatedRating && (
                        <p>⭐ {ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCount})</p>
                      )}
                      <p className="description">{description}</p>
                    </div>

                    <div className="menu-image-section">
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
                        alt={name}
                      />
                      <button className="add-btn" 
                        onClick= {() => {
                          addToCart(item.card.info);
                          toast.success(`${item.card.info.name} added to cart!`);
                        }}
                      >
                        ADD
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
          {/* ); */}
        </div>
      </div>
    );
}

export default ResMenu;