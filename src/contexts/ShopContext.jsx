import { createContext } from "react";
// import products from '../assets/products'


export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    const values={

    };
    return (
        <ShopContext.Provider value={values}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;