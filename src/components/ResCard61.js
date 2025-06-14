import { CDN_URL } from "../utils/constants";
import star from "../logo/star.png";
// Js Obj
// const styleCard = {
//   backgroundColor: "#D3D3D3"
// }


const ResCard61 = (props) => {
    // resData?.  =  Optional Chaining,  
    // It can make working with deeply nested obj's 
    //    much easier..
    const { resData } = props;
    ////
    //-------  a   ---------
    // const { 
    //     cloudinaryImageId, name, cuisines,
    //     avgRating, deliveryTime
    // } = resData?.card.card.info;
    ////
    //-------  b  ---------
    const {
        cloudinaryImageId, name, cuisines,
        avgRating, sla, costForTwo
    } = resData?.info || {};

    return (
        // <div className="res-card" style={styleCard}>
        <div className="res-card">
            <img className="res-logo" alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            {/* -------  a   --------- */}
            {/* <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h4>rating- {avgRating}</h4>
            <h4>{deliveryTime} mins</h4> */}

            {/* -------  b   --------- */}
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            {/* <h4>{avgRating} | {sla.deliveryTime} mins </h4> */}
            <h4 style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <span style={{ display: "flex", alignItems: "center" }}>
                    <img src={star} alt="Star" style={{ width: "16px", height: "16px", marginRight: "4px" }} />
                    {avgRating}
                </span>
                <span style={{ fontSize: "10px", margin: "0 6px" }}>●</span>
                {sla.deliveryTime} mins
            </h4>

            <h4> {costForTwo} </h4>
        </div>
    );
};

export default ResCard61;