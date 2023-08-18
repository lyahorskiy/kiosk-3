import { useState } from 'react'
function ItemBlockOneUnit({
  item,
  properties,
  title,
  weight,
  price,
  imageUrl,
  units,
  manufacturer,
  sizes,
  sliser,
  id,
}) {
  const [activeType, setActiveType] = useState(0)
  // const [activeSize, setActiveSize] = useState(0)

  const typeSliser = ['Не нарізати на слайсері ', 'Нарізати на слайсері']

  // Функции для штучки
  const [quantity, setQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
    setTotalPrice((prevTotalPrice) =>
      parseFloat((prevTotalPrice + price).toFixed(2))
    )
  }

  const minusincreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
      setTotalPrice((prevTotalPrice) =>
        parseFloat((prevTotalPrice - price).toFixed(2))
      )
    }
  }

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />

      <h4 className="pizza-block__title">
        {item} {title}
      </h4>
      <div className="pizza-block__selector">
        <div className="pizza-block__h4">
          Ціна за 1 {units}
          <div className="price">{price} грн.</div>
        </div>
        <div className="pizza-block__h4">
          Властивість <div>{properties}</div>
        </div>
        <div className="pizza-block__h4">
          Виробник <div>"{manufacturer}"</div>
        </div>

        <div className="pizza-block__h4">
          Вага 1 шт
          <div>{weight} гр.</div>
        </div>
      </div>

      <div className="pizza-block__bottom__one">
        <div className="buttton" onClick={minusincreaseQuantity}></div>

        <div className="pizza-block__price">
          <div className="pizza-block__price">{quantity} шт.</div>
        </div>
        <div className="pizza-block__price">
          {totalPrice.toFixed(2)}
          <span className="unit"> грн.</span>
        </div>

        <div className="buttton" onClick={increaseQuantity}></div>
      </div>
    </div>

    // <div className="pizza-block">
    //   <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
    //   <h4 className="pizza-block__title">
    //     {item} {title}
    //   </h4>
    //   <div className="pizza-block__selector">
    //     <ul>
    //       {sliser.map((index) => (
    //         <li
    //           onClick={() => setActiveType(index)}
    //           className={activeType === index ? 'active' : ''}
    //         >
    //           {typeSliser[index]}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    //   <div className="pizza-block__bottom">
    //     <div className="pizza-block__price">{price} грн.</div>
    //     <div className="pizza-block__price">{quantity} шт.</div>
    //     <div className="pizza-block__price">{totalPrice.toFixed(2)} грн.</div>

    //     <div
    //       className="button button--outline button--add"
    //       onClick={increaseQuantity}
    //     >
    //       <svg
    //         width="12"
    //         height="12"
    //         viewBox="0 0 12 12"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
    //           fill="white"
    //         />
    //       </svg>
    //       <span>Добавить</span>
    //       <i></i>
    //     </div>

    //     <div
    //       className="button button--outline button--add"
    //       onClick={minusincreaseQuantity}
    //     >
    //       <svg
    //         width="15"
    //         height="15"
    //         viewBox="0 0 12 12"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
    //           fill="white"
    //         />
    //       </svg>
    //       <span>Добавить</span>
    //       <i>{quantity}</i>
    //     </div>
    //   </div>
    // </div>
  )
}

export default ItemBlockOneUnit
