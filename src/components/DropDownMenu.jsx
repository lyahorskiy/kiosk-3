import { ReactComponent as CogIcon } from '../assets/img/navbarImage/cog.svg'
import { ReactComponent as ChevronIcon } from '../assets/img/navbarImage/chevron.svg'
import { ReactComponent as ArrowIcon } from '../assets/img/navbarImage/arrow.svg'
import {
  GiSteak,
  GiBubblingBowl,
  GiSlicedSausage,
  GiSausage,
  GiSausagesRibbon,
  GiCoalPile,
  GiFlatPlatform,
  GiButterToast,
  GiButter,
  GiBerriesBowl,
  GiKetchup,
  GiBeerBottle,
  GiSquareBottle,
  GiMeat,
} from 'react-icons/gi'
import { LiaCheeseSolid } from 'react-icons/lia'
import { FaBottleDroplet } from 'react-icons/fa6'

import { CSSTransition } from 'react-transition-group'
import React, { useState, useRef } from 'react'

import DropDownItem from './DropDownItem'

function DropDownMenu() {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)
  const dropdownRef = useRef(null)

  function calcHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height + 30)
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<GiBerriesBowl />}
            rightIcon={<ChevronIcon />}
            set={setActiveMenu}
          >
            Всі вироби
          </DropDownItem>
          <DropDownItem
            leftIcon={<GiSteak />}
            rightIcon={<ChevronIcon />}
            goToMenu="meet"
            set={setActiveMenu}
          >
            М'ясо
          </DropDownItem>

          <DropDownItem
            leftIcon={<GiSlicedSausage />}
            rightIcon={<ChevronIcon />}
            goToMenu="sausage"
            set={setActiveMenu}
          >
            Ковбаса
          </DropDownItem>

          <DropDownItem
            leftIcon={<LiaCheeseSolid />}
            rightIcon={<ChevronIcon />}
            goToMenu="cheese"
            set={setActiveMenu}
          >
            Сир
          </DropDownItem>

          <DropDownItem
            leftIcon={<GiSausagesRibbon />}
            rightIcon={<ChevronIcon />}
            goToMenu="sausages"
            set={setActiveMenu}
          >
            Сосиски
          </DropDownItem>

          <DropDownItem
            leftIcon={<GiButterToast />}
            rightIcon={<ChevronIcon />}
            goToMenu="paste"
            set={setActiveMenu}
          >
            Паштет
          </DropDownItem>

          <DropDownItem
            leftIcon={<GiButter />}
            rightIcon={<ChevronIcon />}
            goToMenu="butter"
            set={setActiveMenu}
          >
            Вершкове масло
          </DropDownItem>

          <DropDownItem
            leftIcon={<GiBubblingBowl />}
            rightIcon={<ChevronIcon />}
            goToMenu="cutlets"
            set={setActiveMenu}
          >
            Катлети
          </DropDownItem>

          <DropDownItem
            leftIcon={<GiKetchup />}
            rightIcon={<ChevronIcon />}
            goToMenu="sauces"
            set={setActiveMenu}
          >
            Соуси
          </DropDownItem>

          <DropDownItem
            leftIcon={<GiSquareBottle />}
            rightIcon={<ChevronIcon />}
            goToMenu="Oil"
            set={setActiveMenu}
          >
            Олія
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'meet'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowIcon />}
            set={setActiveMenu}
            goToMenu="main"
          >
            Повернутись
          </DropDownItem>
          <DropDownItem leftIcon={<GiSteak />} rightIcon={<ChevronIcon />}>
            М'ясо вялене
          </DropDownItem>
          <DropDownItem leftIcon={<GiSteak />} rightIcon={<ChevronIcon />}>
            М'ясо копчене
          </DropDownItem>
          <DropDownItem leftIcon={<GiSteak />} rightIcon={<ChevronIcon />}>
            Балик
          </DropDownItem>
          <DropDownItem leftIcon={<GiSteak />} rightIcon={<ChevronIcon />}>
            Бастурма
          </DropDownItem>
          <DropDownItem leftIcon={<GiMeat />} rightIcon={<ChevronIcon />}>
            Ребро копчене
          </DropDownItem>
          <DropDownItem leftIcon={<GiMeat />} rightIcon={<ChevronIcon />}>
            Ребро вялене
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'sausage'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowIcon />}
            set={setActiveMenu}
            goToMenu="main"
          >
            Повернутись
          </DropDownItem>
          <DropDownItem leftIcon={<GiSausage />} rightIcon={<ChevronIcon />}>
            Ковбаса сирокопчена
          </DropDownItem>
          <DropDownItem leftIcon={<GiSausage />} rightIcon={<ChevronIcon />}>
            Ковбаса сировялена
          </DropDownItem>
          <DropDownItem
            leftIcon={<GiSlicedSausage />}
            rightIcon={<ChevronIcon />}
          >
            Ковбаса варена
          </DropDownItem>
          <DropDownItem leftIcon={<GiSausage />} rightIcon={<ChevronIcon />}>
            Ковбаса ливерна
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'cheese'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowIcon />}
            set={setActiveMenu}
            goToMenu="main"
          >
            Повернутись
          </DropDownItem>
          <DropDownItem
            leftIcon={<LiaCheeseSolid />}
            rightIcon={<ChevronIcon />}
          >
            Сир твердий
          </DropDownItem>
          <DropDownItem
            leftIcon={<LiaCheeseSolid />}
            rightIcon={<ChevronIcon />}
          >
            Сир копчений
          </DropDownItem>
          <DropDownItem
            leftIcon={<GiFlatPlatform />}
            rightIcon={<ChevronIcon />}
          >
            Сир плавлений
          </DropDownItem>
          <DropDownItem leftIcon={<GiCoalPile />} rightIcon={<ChevronIcon />}>
            Сиркова масса
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'sausages'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowIcon />}
            set={setActiveMenu}
            goToMenu="main"
          >
            Повернутись
          </DropDownItem>
          <DropDownItem
            leftIcon={<GiSausagesRibbon />}
            rightIcon={<ChevronIcon />}
          >
            Сосиски
          </DropDownItem>
          <DropDownItem leftIcon={<GiSausage />} rightIcon={<ChevronIcon />}>
            Сардельки
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'paste'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowIcon />}
            set={setActiveMenu}
            goToMenu="main"
          >
            Повернутись
          </DropDownItem>
          <DropDownItem
            leftIcon={<GiButterToast />}
            rightIcon={<ChevronIcon />}
          >
            Паштет Печінковий
          </DropDownItem>
          <DropDownItem
            leftIcon={<GiButterToast />}
            rightIcon={<ChevronIcon />}
          >
            Паштет Курячий
          </DropDownItem>
          <DropDownItem
            leftIcon={<GiButterToast />}
            rightIcon={<ChevronIcon />}
          >
            Фуагра
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'cutlets'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowIcon />}
            set={setActiveMenu}
            goToMenu="main"
          >
            Повернутись
          </DropDownItem>
          <DropDownItem
            leftIcon={<GiBubblingBowl />}
            rightIcon={<ChevronIcon />}
          >
            Катлети по Київські
          </DropDownItem>
          <DropDownItem
            leftIcon={<GiBubblingBowl />}
            rightIcon={<ChevronIcon />}
          >
            Катлети Столичні
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'sauces'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowIcon />}
            set={setActiveMenu}
            goToMenu="main"
          >
            Повернутись
          </DropDownItem>
          <DropDownItem leftIcon={<GiKetchup />} rightIcon={<ChevronIcon />}>
            Кетчуп
          </DropDownItem>
          <DropDownItem leftIcon={<GiKetchup />} rightIcon={<ChevronIcon />}>
            Майонез
          </DropDownItem>

          <DropDownItem leftIcon={<GiBeerBottle />} rightIcon={<ChevronIcon />}>
            Сацебелі
          </DropDownItem>
          <DropDownItem leftIcon={<GiBeerBottle />} rightIcon={<ChevronIcon />}>
            Гірчиця
          </DropDownItem>
          <DropDownItem leftIcon={<GiBeerBottle />} rightIcon={<ChevronIcon />}>
            Тартар
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'butter'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowIcon />}
            set={setActiveMenu}
            goToMenu="main"
          >
            Повернутись
          </DropDownItem>
          <DropDownItem leftIcon={<GiButter />} rightIcon={<ChevronIcon />}>
            Селянське масло
          </DropDownItem>
          <DropDownItem leftIcon={<GiButter />} rightIcon={<ChevronIcon />}>
            Яготиньське масло
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'Oil'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowIcon />}
            set={setActiveMenu}
            goToMenu="main"
          >
            Повернутись
          </DropDownItem>
          <DropDownItem
            leftIcon={<GiSquareBottle />}
            rightIcon={<ChevronIcon />}
          >
            Соняшникова олія
          </DropDownItem>
          <DropDownItem
            leftIcon={<GiSquareBottle />}
            rightIcon={<ChevronIcon />}
          >
            Оливкова олія
          </DropDownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

export default DropDownMenu
