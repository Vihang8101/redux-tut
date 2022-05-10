import { ADD_TO_CART } from "../Constant";

const initialstate = {
    cardData:[]
}
// used to assign data and display data
const cardItems = (state = initialstate,action) =>
{
            if(action == ADD_TO_CART)
            {return {
                ...state,
                
                cardData : action.data
              };
              
                
               }

               else
               {
                   return state
               }
}
export default cardItems