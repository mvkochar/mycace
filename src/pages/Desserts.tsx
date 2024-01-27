import React from 'react'
import './Desserts.css'
import Tag from '../components/Tag/Tag'
import { DessertsList } from '../components/ProductsList/ProductsList'
import ProductItem from '../components/ProductItem/ProductItem'

const Desserts = () => {
  return (
    <div className="wrapper">
      <form action="" className='desserts-search-fm'>
        <input type="text" name='query' placeholder='Шоколадний торт з квітами' />
        <button>Шукати</button>
      </form>
      <div className="desserts-main d-f">
        <div className="desserts-main-filters">
          <h3 className="filters-title">Шукаєш <br /> щось особливе?</h3>
          <form action="" className="filters-fm">
            <div className="filters-fm-bl">
              <h4 className="fm-bl-title">Тематика</h4>
              <div className="check-bl d-f align-center">
                <input type="checkbox" name="girls" id="girls" />
                <label htmlFor="girls">Для дівчат</label>
              </div>
              <div className="check-bl d-f align-center">
                <input type="checkbox" name="mans" id="mans" />
                <label htmlFor="girls">Для чоловіків</label>
              </div>
              <div className="check-bl d-f align-center">
                <input type="checkbox" name="patriotic" id="patriotic" />
                <label htmlFor="patriotic">Патріотичні</label>
              </div>
              <div className="check-bl d-f align-center">
                <input type="checkbox" name="wedding" id="wedding" />
                <label htmlFor="wedding">Весільні</label>
              </div>
              <div className="check-bl d-f align-center">
                <input type="checkbox" name="birthday" id="birthday" />
                <label htmlFor="birthday">До дня народження</label>
              </div>
              <div className="check-bl last-bl d-f align-center">
                <input type="checkbox" name="corporate" id="corporate" />
                <label htmlFor="corporate">Корпоративні</label>
              </div>
            </div>
            <div className="filters-fm-bl">
              <h4 className="fm-bl-title">Особливості</h4>
              <div className="check-bl d-f align-center">
                <input type="checkbox" name="classic" id="classic" />
                <label htmlFor="classic">Класичні рецепти</label>
              </div>
              <div className="check-bl d-f align-center">
                <input type="checkbox" name="glutenFree" id="glutenFree" />
                <label htmlFor="glutenFree">Без глютену</label>
              </div>
              <div className="check-bl d-f align-center">
                <input type="checkbox" name="vegan" id="vegan" />
                <label htmlFor="vegan">Веганські</label>
              </div>
              <div className="check-bl d-f align-center">
                <input type="checkbox" name="withoutSugar" id="withoutSugar" />
                <label htmlFor="withoutSugar">Без цукру</label>
              </div>
              <div className="check-bl d-f align-center">
                <input type="checkbox" name="fruits" id="fruits" />
                <label htmlFor="fruits">З фруктами</label>
              </div>
              <div className="check-bl last-bl d-f align-center">
                <input type="checkbox" name="flowers" id="flowers" />
                <label htmlFor="flowers">З квітами</label>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="desserts-main-tags d-f">
            <Tag title='Усі' isActive={true} />
            <Tag title='Капкейки' />
            <Tag title='Торти' />
            <Tag title='Кейк-попси' />
            <Tag title='Макаруни' />
            <Tag title='Печиво' />
            <Tag title='Цукерки' />
          </div>
          <div className="desserts-main-box d-f">
            {
              DessertsList.map((dessert) =>
                <ProductItem
                  key={dessert.id}
                  image={dessert.image}
                  price={dessert.price}
                  title={dessert.title}
                  fillings={dessert.fillings}
                />
              )
            }
          </div>
          <button className='desserts-more-btn'>Більше смаколиків</button>
          <div className="desserts-main-pages d-f">
              <button className='pages-action'><img src="images/btn-left.svg" alt="btn-left" /></button>
              <button className='pages-item'>1</button>
              <button className='pages-item'>2</button>
              <button className='pages-item pages-item__active'>3</button>
              <button className='pages-item'>4</button>
              <button className='pages-more'>...</button>
              <button className='pages-item'>15</button>
              <button className='pages-action'><img src="images/btn-right.svg" alt="btn-right" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desserts