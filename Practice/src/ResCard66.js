// import { CDN_URL } from "../utils/constants";


//--- Js Obj ----
//
// const styleCard = {
//   backgroundColor: "#D3D3D3"
// }


// const ResCard = (props) => {
//    
//     // resData?.  = Optional Chaining,  
//     // It can make working with deeply nested objects much easier
//     const { resData } = props;
//     const {
//         cloudinaryImageId, name, cuisines,
//         avgRating, deliveryTime,
//     } = resData?.card.card.info;
//
//     return (
//
//         <div className="res-card" style={styleCard}>
//             <img className="res-logo" alt="res-logo"
//                 src= { CDN_URL + cloudinaryImageId }
//             />
//             {/* <h3>Meghana Foods</h3>
//               <h3>Biryani, North Indian, Asian</h3>
//               <h4>4.2</h4>
//               <h4>38 minutes</h4> */}
////
//             {/* <h3>{resData.card.card.info.name}</h3>
//         <h3>{resData.card.card.info.cuisines.join(", ")}</h3>
//         <h4>{resData.card.card.info.avgRating}</h4>
//         <h4>{resData.card.card.info.sla.deliveryTime}</h4> */}
////
//             <h3>{name}</h3>
//             <h3>{cuisines.join(", ")}</h3>
//             <h4>rating- {avgRating}</h4>
//             <h4>{deliveryTime} mins</h4>
//         </div>
//     );
// };
////
// export default ResCard;




import { CDN_URL } from "../../src/utils/constants";

// Js Obj
const styleCard = {
  backgroundColor: "#D3D3D3"
}


const ResCard = (props) => {
    // resData?.  =  Optional Chaining,  
    // It can make working with deeply nested obj's 
    //    much easier..
    const { resData } = props;
    // const { 
    //     cloudinaryImageId, name, cuisines,
    //     avgRating, sla
    // } = resData?.card.card.info;
    const { 
        cloudinaryImageId, name, cuisines,
        avgRating, sla
    } = resData?.card?.card?.info  || {};

    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo"
                src= { CDN_URL + cloudinaryImageId }
            />
            {/* <h3>Meghana Foods</h3>
              <h3>Biryani, North Indian, Asian</h3>
              <h4>4.2</h4>
              <h4>38 minutes</h4> */}
              
            {/* <h3>{resData.card.card.info.name}</h3>
                <h3>{resData.card.card.info.cuisines.join(", ")}</h3>
                <h4>{resData.card.card.info.avgRating}</h4>
                <h4>{resData.card.card.info.sla.deliveryTime}</h4> 
            */}

            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h4>rating- {avgRating}</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    );
};

export default ResCard;