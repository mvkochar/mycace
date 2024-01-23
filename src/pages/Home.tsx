import React from 'react'
import "./Home.css"
import { TagsList } from "../components/TagsList/TagsList"
import Tag from '../components/Tag/Tag'

const Home = () => {
  return (
    <main>
      <div className="wrapper">
        <div className="home-main d-f jc-sb align-center">
          <div>
            <h2 className="home-main-title">Пошукаємо щось смачненького?</h2>
            <p className="home-main-desc">
              Ми об’єднали кондитерів з різних міст, щоб необхідні смаколики можна було замовити ще легше
            </p>
            <form action="" className='home-main-fm'>
              <input type="text" />
              <button>Шукати</button>
            </form>
            <div className="home-main-tags d-f">
              {
                TagsList.map((tag) => <Tag key={tag.id} title={tag.title} />)
              }
              <select name="else" className='tags-else'>
                <option value="">Інші варіанти</option>
              </select>
            </div>
            <div className="home-main-categories">
              <div className="main-categories-actions d-f">
                <button><img src="images/arrow-left.svg" alt="arrow-left" /></button>
                <button><img src="images/arrow-right.svg" alt="arrow-right" /></button>
              </div>
              <div className="main-categories-box d-f">
                <div className="categories-item">
                  <div><img src="images/category1.png" alt="category1" /></div>
                  <div className="categories-item-title">Торти</div>
                </div>
                <div className="categories-item">
                  <div><img src="images/category2.png" alt="category2" /></div>
                  <div className="categories-item-title">Цукерки</div>
                </div>
                <div className="categories-item">
                  <div><img src="images/category3.png" alt="category3" /></div>
                  <div className="categories-item-title">Капкейки</div>
                </div>
                <div className="categories-item">
                  <div><img src="images/category4.png" alt="category4" /></div>
                  <div className="categories-item-title">Макаруни</div>
                </div>
                <div className="categories-item">
                  <div><img src="images/category5.png" alt="category5" /></div>
                  <div className="categories-item-title">Печиво</div>
                </div>
              </div>
            </div>
          </div>
          <div><img src="images/home-main.png" alt="home-main" /></div>
        </div>
        <div className="home-bl">
          <div className="d-f jc-sb">
            <h3 className="home-bl-title">Торти</h3>
            <div className="home-bl-actions d-f align-center">
              <button className='home-bl-all'>Переглянути всі</button>
              <div className="home-bl-arrows d-f">
                <button><img src="images/arrow-left.svg" alt="arrow-left" /></button>
                <button><img src="images/arrow-right.svg" alt="arrow-right" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Home