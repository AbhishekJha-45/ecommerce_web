import Image from "next/image";
import card from "../../../style/card.module.css";

function ProductCard() {
  return (
    <div className={card.card}>
      <div className={card.image_container}>
        <Image src={"/images/grocery/sugar.jpg"} width={200} height={200} alt="phomtu" />
      </div>
      <div className={card.title}>
        <span>New brand name</span>
      </div>
      <div className={card.size}>
        <span>Size</span>
        <ul className={card.list_size}>
          <li className={card.item_list}>
            <button className="item-list-button">37</button>
          </li>
          <li className={card.item_list}>
            <button className="item-list-button">38</button>
          </li>
          <li className={card.item_list}>
            <button className="item-list-button">39</button>
          </li>
          <li className={card.item_list}>
            <button className="item-list-button">40</button>
          </li>
          <li className={card.item_list}>
            <button className="item-list-button">41</button>
          </li>
        </ul>
      </div>
      <div className={card.action}>
        <div className={card.price}>
          <span>$299</span>
        </div>
        <button className={card.cart_button}>
          <svg
            className={card.cart_icon}
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
