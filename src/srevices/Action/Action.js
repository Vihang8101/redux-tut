import { ADD_TO_CART } from "../Constant";



//used to retuen data 
export const addToCart = (data) =>
{
    return{
        type:ADD_TO_CART,
        data:data
    }
}