import React, { useContext, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../contexts/ShopContext";
import TotalOrder from "./TotalOrder";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate=useNavigate();
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const itemsArray = Object.values(cartItems);
  const [method, setMethod] = useState("cod");
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-400 ">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px] ">
        <div className="text-xl sm:text-2xl my-3 ">
          <Title t1={"DELIVERY"} t2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="First Name"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Last Name"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="email"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Email Address"
          />
          <input
            type="email"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Street"
          />
        </div>
        <input
          type="text"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="City"
        />
        <div className="flex gap-3">
          <input
            type="number"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Zip Code"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Country"
          />
        </div>
        <input
          type="number"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Phone Number"
        />
      </div>

      {/* Right Sidebar */}
      <div className="mt-8">
        <div className="mt-8 min-w-80 ">
          <TotalOrder itemsArray={itemsArray} totalAmount={totalAmount} />
        </div>
        <div className="mt-12">
          <Title t1={"PAYMENT"} t2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("bkash")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "bkash" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src="" className="h-5 mx-4" alt="Bkash" />
            </div>
            <div
              onClick={() => setMethod("nagad")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "nagad" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src="" className="h-5 mx-4" alt="Nagad" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-fit text-end mt-8">
            <button onClick={()=>navigate('/orders')} className="bg-gray-900 cursor-pointer rounded-sm text-white px-16 py-3 text-sm">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
