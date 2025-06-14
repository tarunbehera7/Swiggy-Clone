export const CDN_URL = 
"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Logo was not a url....So, keep it like this
// export const LOGO_URL = ;



//// ------ 2nd way to export  ------
//  
// named Export/Import
//
// When in a single file u hv to use
//       multiple things
//
// Always import them inside curly barces



// ====== 2 types of Export/Import  ====== 
// 
// (1)-Default Export/Import--
// 
// export default Component;
// import Component from "path"; 
//
//
// (2)-Named Export/Import--
//
// export default <name of var>
// import {name of var} from "path";


export const Menu_API = "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=";