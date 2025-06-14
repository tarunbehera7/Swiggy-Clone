
<!-- Hard-coded data like CDN url, 
    It will be in this folder 
    A common practice is to keep it
    inside a separate file..
    
All the utility files which are common 
utilities will be put in this folder 

Some ppl call this "common", "config" or "utils"

Create a file named "constants.js"
    and it should be in small letters 
    as it's not a component.



====== 2 types of Export/Import  ====== 

(a). Default Export/Import--

export default Component;
import Component from "path"; 

(b). Named Export/Import--
export default <name of var>
import {name of var} from "path" 



-->
Code-1 Problem (Limited Search) -----

You had only `1` state variable `listOfRes` 
    that stored both OG data & filtered results.
    .
    When you searched:
    .
    It `filtered` the `current` listOfRes 
        (which might already be filtered)
    .    
    Then `overwrote` the `OG`-data by doing 
        setListOfRes(filteredRes).
    .
    This meant each `new search` worked only on the 
        `currently visible` cards, &
        `not all` OG data.
    .       
    ----------------------------------------------------
    //-----Only 1 state var for restaurants------
    .
    .
    const [listOfRes, setListOfRes] = useState([]); 
    .
    // When searching:
    const filteredRes = listOfRes.filter(...); // Filters curr visible list.
    setListOfRes(filteredRes); // ⚠️ OVERWRITES original data.
    .
    // When rendering:
    {listOfRes.map(...)}  // Only shows filtered results.
    --------------------------------------------------------