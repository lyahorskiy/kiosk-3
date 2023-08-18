import BarItem from '../BarItem'

const meetMenu = [
  { name: 'Вcе мясо', properties: 'meet' },
  { name: 'Вялене', properties: 'meet jerky' },
  { name: 'Куряче', properties: 'meet chicken' },
  { name: 'Балик', properties: 'meet salmon' },
  { name: 'Бастурма', properties: 'meet basturma' },
]
const sausageMenu = [
  { name: 'Вcя ковбаса', properties: 'sausage' },
  { name: 'Сировялена', properties: 'sausage dryCured' },
  { name: 'Сирокопчена', properties: 'sausage rawSmoked' },
  { name: 'Варена', properties: 'sausage cooked' },
  { name: 'Ліверна', properties: 'sausage livery' },
]
const cheeseMenu = [
  { name: 'Весь сир', properties: 'cheese' },
  { name: 'Твердий', properties: 'cheese hard' },
  { name: 'Російський', properties: 'cheese russian' },
  { name: 'Плавлений', properties: 'cheese melted' },
  { name: 'Сиркова масса', properties: 'cheese curdMass' },
]
const sausagesMenu = [
  { name: 'Всі сосиски', properties: 'sosiski' },
  { name: 'Сосиски', properties: 'sosiski cooked' },
  { name: 'Сардельки', properties: 'sosiski anchovies' },
]
const saucesMenu = [
  { name: 'Весі соуси', properties: 'sauces' },
  { name: 'Кетчуп', properties: 'sauces ketchup' },
  { name: 'Майонез', properties: 'sauces mayonnaise' },
  { name: 'Соус', properties: 'sauce soy' },
]
const pashtetMenu = [
  { name: 'Весь паштет', properties: 'pashtet' },
  { name: 'Печінковий', properties: 'pashtet liverPate' },
  { name: 'Курячий', properties: 'pashtet chickenPate' },
  { name: 'Фуагра', properties: 'pashtet foieGras' },
]
const catletiMenu = [
  { name: 'Всі', properties: 'cotlets' },
  { name: 'По Київськи', properties: 'cotlets afterKyiv' },
  { name: 'Столичні', properties: 'cotlets capital' },
]

function Categories({ value, onClickCategory, valueBar, onClickBar }) {
  const categoryes = [
    <div className="bar-item">Всі</div>,
    <BarItem
      name={'Мясо'}
      valueBar={valueBar}
      onBar={onClickBar}
      menu={meetMenu}
    />,
    // <BarItem
    //   valueBar={barItemIndex}
    //   onBar={(index) => {
    //     setBarItemIndex(index)
    //     setSelectedItem(meetMenu[index])
    //   }}
    //   name={'Мясо'}
    //   menu={meetMenu}
    // />,
    <BarItem
      name={'Ковбаса'}
      valueBar={valueBar}
      onBar={onClickBar}
      menu={sausageMenu}
    />,
    <BarItem
      name={'Сир'}
      valueBar={valueBar}
      onBar={onClickBar}
      menu={cheeseMenu}
    />,
    <BarItem
      name={'Сосиски'}
      valueBar={valueBar}
      onBar={onClickBar}
      menu={sausagesMenu}
    />,
    <BarItem
      name={'Паштет'}
      valueBar={valueBar}
      onBar={onClickBar}
      menu={pashtetMenu}
    />,
    <BarItem
      name={'Катлети'}
      valueBar={valueBar}
      onBar={onClickBar}
      menu={catletiMenu}
    />,
    <BarItem
      name={'Соуси'}
      valueBar={valueBar}
      onBar={onClickBar}
      menu={saucesMenu}
    />,
  ]

  return (
    <div className="categories">
      <ul className="categories-ul">
        {categoryes.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={`categories-li ${value === index ? 'active' : ''}`}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Categories
