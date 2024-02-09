import React, { ChangeEvent } from 'react'
import './Desserts.css'
import Tag from '../components/Tag/Tag'
import { DessertsList } from '../components/ProductsList/ProductsList'
import ProductItem from '../components/ProductItem/ProductItem'

type DessertsProps = {
  handleHeaderType: (headerId: number) => void;
}

const Desserts = ({handleHeaderType}:DessertsProps) => {

  const [moreProducts, setMoreProducts] = React.useState(false)
  const [query, setQuery] = React.useState('')
  const [isSearch, setIsSearch] = React.useState(false)
  const [searchRes, setSearchRes] = React.useState(0)

  const handleMoreProducts = () => {
    setMoreProducts((prevState) => {
      return !prevState
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
    setIsSearch(false)
    setQuery(event.target.value)
  } 

  const handleSearch = (query: string)=> {
    let res = 0
    if (query.length == 0) return 
    res = DessertsList.filter((product) => product.title.toLowerCase().includes(query.toLowerCase())).length
    setSearchRes(res)
    setIsSearch(true)
  }

  React.useEffect(() => {
    handleHeaderType(1)
  
  }, []);

  return (
    <div className="wrapper">
      <form action="" className='desserts-search-fm'>
        <input
          type="text"
          name='query'
          placeholder='Шоколадний торт з квітами'
          value={query}
          onChange={(event) => handleChange(event)}
        />
        <button type='button' onClick={()=>handleSearch(query)}>Шукати</button>
      </form>
      <div className={isSearch ? "desserts-search-result d-f align-center" : "d-n"}>
        <p className="desserts-search-query">"{query}"</p>
        <button className='desserts-search-close' onClick={()=>setIsSearch(false)}><img src="images/close.svg" alt="close" /></button>
        <p className="desserts-search-count">{searchRes} смакол.</p>
      </div>
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
              !moreProducts ?
                DessertsList.filter((product) => product.id <= 12).map((dessert) =>
                  <ProductItem
                    key={dessert.id}
                    image={dessert.image}
                    price={dessert.price}
                    title={dessert.title}
                    fillings={dessert.fillings}
                  />
                )
                :
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
          <button className='desserts-more-btn' onClick={handleMoreProducts}>
            {moreProducts ? 'Меньше смаколиків' : 'Більше смаколиків'}
          </button>
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
      <div className="home-bl">
        <div className="d-f jc-sb">
          <h3 className="home-bl-title">Статті</h3>
          <div className="home-bl-actions d-f align-center">
            <button className='home-bl-all'>Переглянути всі</button>
            <div className="home-bl-arrows d-f">
              <button><img src="images/arrow-left.svg" alt="arrow-left" /></button>
              <button><img src="images/arrow-right.svg" alt="arrow-right" /></button>
            </div>
          </div>
        </div>
        <div className="home-bl-box d-f jc-sb">
          <div className="articles-item d-f jc-sb">
            <div><img src="images/article1.png" alt="article1" /></div>
            <div className="articles-item-title">Кращі кондитерські Києва</div>
            <p className="articles-item-desc">
              Ми знаємо, де у Києві готують і подають смачні десерти та фірмові булочки, шоколадні цукерки ручної роботи,
              а також де можна купити натуральний шоколад. І вам розкажемо...
            </p>
          </div>
          <div className="articles-item d-f jc-sb">
            <div><img src="images/article2.png" alt="article2" /></div>
            <div className="articles-item-title">Як приготувати справжній французький круасан</div>
            <p className="articles-item-desc">
              Всі, хто любить круасани, мріють одного разу опинитися в маленькій французькій пекарні з
              гарячим круасаном в руках. Чи це не чудово? Ті, хто там побу...
            </p>
          </div>
          <div className="articles-item d-f jc-sb">
            <div><img src="images/article3.png" alt="article3" /></div>
            <div className="articles-item-title">Рецепти найсмачніших макарунів з незвичними смаками</div>
            <p className="articles-item-desc">
              Вишукане і неймовірно смачне французьке печиво «Макаронів» за класичним рецептом готується
              на основі мигдальної муки. Н...
            </p>
          </div>
          <div className="articles-item d-f jc-sb">
            <div><img src="images/article4.png" alt="article4" /></div>
            <div className="articles-item-title">Малинове безе в домашніх умовах</div>
            <p className="articles-item-desc">
              Безе, або меренга - це класичний французький десерт з запеченого білкового крему.
              Неймовірно ніжний, м'який всередині і трохи хрусткий зов...
            </p>
          </div>
          <div className="articles-item d-f jc-sb">
            <div><img src="images/article5.png" alt="article5" /></div>
            <div className="articles-item-title">Рецепти шоколаду без цукру</div>
            <p className="articles-item-desc">
              Розглянемо популярні способи приготування домашнього шоколаду.
              Його головна особливість — можливість комбінування різних продуктів...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desserts