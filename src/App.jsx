import { useState } from 'react'
import './App.css'

function ShopCard({item}) {
  return (
    <figure className='card'>
      <div className='cardNameColor'>
        <h3 className='cardName'>{item.name}</h3>
        <p className='cardColor'>{item.color}</p>
      </div>
      <div className='cardImgWrapper'>
        <img className='cardImg' src={item.img}/>
      </div>
      <div className='cardPriceAdd'>
        <p className='cardPrice'>{item.price}</p>
      </div>
    </figure>
  )
}

function ShopItem({item}) {
  return (
    <figure className='item'>
      <div className='itemImgWrapper'>
        <img className='itemImg' src={item.img}/>
      </div>
      <h3 className='itemName'>{item.name}</h3>
      <p className='itemColor'>{item.color}</p>
      <p className='itemPrice'>{item.price}</p>
    </figure>
  )
}

function CardsView({cards}) {
  return (
    <div className='cardContainer'>
      {cards.map((item)=> (
        <ShopCard item={item}/>
      ))}
    </div>
  )
}

function ListView({items}) {
  return (
    <div className='itemContainer'>
      {items.map((item)=> (
        <ShopItem item={item}/>
      ))}
    </div>
  )
}

function IconSwitch({icon, onSwitch}) {
  return (
    <div className="material-icons" onClick={() => onSwitch(icon)}>
      {icon}
    </div>
  )
}

function Store() {
  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

  const [view, setView] = useState("iew_list");
  const onSwitch = view => {
    view === "view_list" 
      ? setView("view_module") 
      : setView("view_list");
  }
  return (
    <div className='store'>
      <IconSwitch icon={view} onSwitch={onSwitch}/>
      {view === "view_module" 
        ? <ListView items={products}/>
        : <CardsView cards={products}/>
       
      }
    </div>
  )
}

function App() {
  return (
    <Store/>
  )
}

export default App
