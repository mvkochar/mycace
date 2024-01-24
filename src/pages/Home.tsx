import React from 'react'
import "./Home.css"
import { TagsList } from "../components/TagsList/TagsList"
import Tag from '../components/Tag/Tag'
import { CakesHomeList, CupcakesHomeList } from '../components/ProductsList/ProductsList'
import ProductItem from '../components/ProductItem/ProductItem'

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
          <div className="home-bl-box d-f jc-sb">
            {
              CakesHomeList.map((cake) =>
                <ProductItem
                  key={cake.id}
                  image={cake.image}
                  price={cake.price}
                  title={cake.title}
                  fillings={cake.fillings}
                  titlePt={cake.titlePt}
                  titlePb={cake.titlePt}
                />
              )
            }
          </div>
        </div>
        <div className="home-bl">
          <div className="d-f jc-sb">
            <h3 className="home-bl-title">Капкейки</h3>
            <div className="home-bl-actions d-f align-center">
              <button className='home-bl-all'>Переглянути всі</button>
              <div className="home-bl-arrows d-f">
                <button><img src="images/arrow-left.svg" alt="arrow-left" /></button>
                <button><img src="images/arrow-right.svg" alt="arrow-right" /></button>
              </div>
            </div>

          </div>
          <div className="home-bl-box d-f jc-sb">
            {
              CupcakesHomeList.map((cupcake) =>
                <ProductItem
                  key={cupcake.id}
                  image={cupcake.image}
                  price={cupcake.price}
                  title={cupcake.title}
                  fillings={cupcake.fillings}
                  titlePt={cupcake.titlePt}
                  titlePb={cupcake.titlePt}
                />
              )
            }
          </div>
        </div>
      </div>
      <div className="home-registration">
        <h3 className="home-registration-title">Обожнюєш свою роботу і хочеш більше клієнтів?</h3>
        <p className="home-registration-desc">
          Реєструйся як кондитер, викладай фото своїх смаколиків та отримуй замовлення через MyCake
        </p>
        <button className='home-registration-btn'>Зареєструватися як кондитер</button>
      </div>
      <div className="wrapper">
        <div className="home-bl">
          <div className="d-f jc-sb">
            <h3 className="home-bl-title">Кращі кондитери</h3>
            <div className="home-bl-actions d-f align-center">
              <button className='home-bl-all'>Переглянути всі</button>
              <div className="home-bl-arrows d-f">
                <button><img src="images/arrow-left.svg" alt="arrow-left" /></button>
                <button><img src="images/arrow-right.svg" alt="arrow-right" /></button>
              </div>
            </div>
          </div>
          <div className="home-bl-box d-f jc-sb">
            <div className="confectioners-item d-f align-center">
              <div><img src="images/confectioner1.png" alt="confectioner1" /></div>
              <div>
                <div className="confectioners-item-name">Інна Пономаренко</div>
                <div className="confectioners-item-reviews">23 відгуки</div>
                <p className="confectioners-item-desc">
                  Кондитер IV розряду та автор «Школа юного кондитера» Рекордсмен книги рекордів...
                </p>
                <div className="confectioners-item-tags d-f jc-sb">
                  <Tag title='Торти' />
                  <Tag title='Цукерки' />
                  <Tag title='+3' />
                </div>
              </div>
            </div>
            <div className="confectioners-item d-f align-center">
              <div><img src="images/confectioner2.png" alt="confectioner2" /></div>
              <div>
                <div className="confectioners-item-name">Home Bakery</div>
                <div className="confectioners-item-reviews">59 відгуки</div>
                <p className="confectioners-item-desc">
                  Кондитер IV розряду та автор «Школа юного кондитера» Рекордсмен книги рекордів...
                </p>
                <div className="confectioners-item-tags d-f jc-sb">
                  <Tag title='Торти' />
                  <Tag title='Цукерки' />
                  <Tag title='+3' />
                </div>
              </div>
            </div>
            <div className="confectioners-item d-f align-center">
              <div><img src="images/confectioner3.png" alt="confectioner3" /></div>
              <div>
                <div className="confectioners-item-name">Іванна Марченко</div>
                <div className="confectioners-item-reviews">15 відгуків</div>
                <p className="confectioners-item-desc">
                  Кондитер IV розряду та автор «Школа юного кондитера» Рекордсмен книги рекордів...
                </p>
                <div className="confectioners-item-tags d-f jc-sb">
                  <Tag title='Торти' />
                  <Tag title='Цукерки' />
                  <Tag title='+3' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home