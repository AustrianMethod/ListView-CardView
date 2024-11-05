import { useState } from 'react'
import './App.css'

function ShopCard({item}) {
  return (
    <figure className='card' >
      <h3 className='cardName'>{item.name}</h3>
      <p className='cardColor'>{item.color}</p>
      <img className='cardImg' src={item.img}/>
      <p className='cardPrice'>{'$' + item.price}</p>
      <button className='addToCart'>Add to Cart</button>
    </figure>
  )
}

function ShopItem({item}) {
  return (
    <figure className='item' > 
      <div className='imgWrapper'>
        <img className='itemImg' src={item.img}/>
      </div>
      <h3 className='itemName'>{item.name}</h3>
      <p className='itemColor'>{item.color}</p>
      <p className='itemPrice'>{'$' + item.price}</p>
      <button className='addToCartItem'>Add to Cart</button>
    </figure>
  )
}

function CardsView({cards}) {
  return (
    <div className='cardContainer'>
      {cards.map((item)=> (
        <ShopCard key={item.name} item={item}/>
      ))}
    </div>
  )
}

function ListView({items}) {
  return (
    <div className='itemContainer'>
      {items.map((item)=> (
        <ShopItem key={item.name} item={item}/>
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

  const [view, setView] = useState("view_list");
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
