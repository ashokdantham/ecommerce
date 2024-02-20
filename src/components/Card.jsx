import { sliceWords, upperFirst } from "../@/utils";
import React from "react";
import Rating from "./Rating";
import { useCard } from "../context/Cart";

const Card= ({ item, index }) => {
  const {removeFromCart , cartItems ,addToCart } = useCard();
  return (
    <div
      key={index}
      className="relative border py-4 block overflow-hidden group rounded-xl"
    >
      <img
        src={item.image}
        alt="asdas"
        className="object-contain w-full aspect-square transition duration-500 group-hover:scale-105 sm:h-72"
      />
      <div className="relative p-6 bg-white border-gray-100">
        <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
          {upperFirst(item.category)}
        </span>
        <Rating item={item} />
        <h3 className="mt-4 text-sm font-medium text-gray-900">
          {sliceWords(item.title, 5)}
        </h3>
        <p className="mt-1.5 text-sm text-gray-700">${item.price}</p>
        <div className="mt-4">
          <button
            onClick={() =>
              addToCart({
                title: item?.title,
                category: item?.category,
                price: item?.price,
                id: item?.id,
                image: item?.image,
                quantity: 1,
              })
            }
            className="block w-full p-2 text-center text-sm font-medium transition bg-yellow-400 rounded hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;