import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function ItemBlock({
  item,
  manufacturer,
  properties,
  title,
  weight,
  price,
  imageUrl,
  sizes,
  sliser,
  units,
  id,
}) {
  const [itemCount, setItemCount] = useState(0)
  const [weightCount, setWeightCount] = useState(0)
  const [calcCount, setCalcCount] = useState(0)
  // const [activeType, setActiveType] = useState(0)
  // const [activeSize, setActiveSize] = useState(0)

  // const typeSliser = ['Не нарізати на слайсері ', 'Нарізати на слайсері']

  const onClickAddButton = () => {
    setItemCount(itemCount + 1)
    setWeightCount(weightCount + 100)
    setCalcCount(((weightCount + 100) / 1000) * price)
  }
  const onClickSubtractButton = () => {
    if (weightCount - 100 >= 0) {
      setItemCount(itemCount - 1)
      setWeightCount(weightCount - 100)
      setCalcCount(((weightCount - 100) / 1000) * price)
    }
  }

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
    if (quantity > 0) setQuantity(quantity - 1)
    setTotalPrice((prevTotalPrice) =>
      parseFloat((prevTotalPrice - price).toFixed(2))
    )
  }
  // функция чекета
  // function Example() {
  //   const [checked, setChecked] = useState(true)
  //   return (
  //     <CheckBox
  //       checked={checked}
  //       label="interested?"
  //       onChange={(event) => setChecked(event.target.checked)}
  //     />
  //   )
  // }

  return (
    <div key={id} className="pizza-block-wrapper">
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
        <div className="pizza-block__sliser">Нарізати на слайсері</div>

        <div className="pizza-block__bottom">
          <div className="buttton" onClick={onClickSubtractButton}></div>

          <div className="pizza-block__price">
            {weightCount}
            <span className="unit"> гр.</span>
          </div>
          <div className="pizza-block__price">
            {calcCount.toFixed(2)}
            <span className="unit"> грн.</span>
          </div>

          <div className="buttton" onClick={onClickAddButton}></div>
        </div>
      </div>
    </div>
  )
}

export default ItemBlock
