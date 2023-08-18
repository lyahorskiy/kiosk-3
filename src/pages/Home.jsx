import React, { useState, useEffect } from 'react'
import { CgMenu } from 'react-icons/cg'
import Categories from '../components/No use/Catigories'
import DropDownMenu from '../components/DropDownMenu'
import NavItem from '../components/NavItem'
import NavBar from '../components/Navbar'
import Sort from '../components/Sort'
import ItemBlock from '../components/itemBlocks/ItemBlock'
import ItemBlockOneUnit from '../components/itemBlocks/ItemBlockOneUnit'
import Skeleton from '../components/itemBlocks/Skeleton'

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [barItemIndex, setBarItemIndex] = useState({ properties: '' })
  const [sortIndex, setSortIndex] = useState({
    name: 'популярності',
    sortProperty: 'rating',
  })

  useEffect(() => {
    setIsLoading(true)
    let fetchUrl = ''

    if (categoryIndex > 0 && barItemIndex && barItemIndex.properties) {
      fetchUrl = `https://648c44d48620b8bae7ec93c6.mockapi.io/items?properties=${
        barItemIndex.properties
      }&sortBy=${sortIndex.sortProperty}&order=${
        sortIndex.sortProperty === 'price' ? 'asc' : 'desc'
      }`
    } else {
      fetchUrl = `https://648c44d48620b8bae7ec93c6.mockapi.io/items?${
        categoryIndex > 0 ? `category=${categoryIndex}` : ''
      }&sortBy=${sortIndex.sortProperty}&order=${
        sortIndex.sortProperty === 'price' ? 'asc' : 'desc'
      }`
    }

    fetch(fetchUrl)
      .then((response) => response.json())
      .then((json) => {
        setItems(json)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setIsLoading(false)
      })
  }, [categoryIndex, sortIndex, barItemIndex])

  return (
    <>
      <div className="content__top">
        <Sort value={sortIndex} onChangeSort={(index) => setSortIndex(index)} />
        <Categories
          valueBar={barItemIndex}
          onClickBar={(i) => setBarItemIndex(i)}
          value={categoryIndex}
          onClickCategory={(index) => setCategoryIndex(index)}
        />
        <NavBar>
          <NavItem icon={<CgMenu />}>
            <DropDownMenu />
          </NavItem>
        </NavBar>
      </div>

      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
              )

              .map((item) =>
                item.units === 'шт' ? (
                  <ItemBlockOneUnit key={item.id} {...item} />
                ) : (
                  <ItemBlock key={item.id} {...item} />
                )
              )}
      </div>
    </>
  )
}

export default Home