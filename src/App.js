import { useState } from 'react';
import './App.css';
import data from './Components/Data/Data';
import Item from './Components/Item/Item';
import image from './images/pizza.jpg'

function App() {

  const [items, setItems] = useState(data);

  return (
    <div className="App">
      <div className="box">
        <div className='row m-0 p-0'>
          <div className="block left col-lg-4 col-12 p-0">
            <img className='w-100' src={image} alt="" />
          </div>
          <div className="block right col-lg-8 col-12">
            <div className='itemBlock'>
              {
                items.map((item) => {
                  return (
                    <Item key={item.id} {...item}></Item>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
