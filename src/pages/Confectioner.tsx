import React from 'react'
import './Confectioner.css'
import ReviewItem from '../components/ReviwItem/ReviewItem'
import { DessertsList } from '../components/ProductsList/ProductsList'
import ProductItem from '../components/ProductItem/ProductItem'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Tag from '../components/Tag/Tag'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#FFFFFF',
  border: 0,
  boxShadow: 24,
  p: 5
};

const Confectioner = () => {
  const [open, setOpen] = React.useState(false)
  const [tab, setTab] = React.useState(2)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const findProduct = (productTitle: string) => {
    const product = DessertsList.filter((dessert) => dessert.title.toLowerCase() === productTitle.toLowerCase())[0]

    return (
      <ProductItem
        image={product.image}
        price={product.price}
        title={product.title}
        fillings={product.fillings}
      />
    )
  }

  return (
    <main>
      <div className="wrapper">
        <form action="" className='home-main-fm' style={{ height: "50px" }}>
          <input type="text" placeholder='Шоколадний торт з квітами' style={{ paddingTop: "4px" }} />
          <button style={{ marginLeft: "103px" }}>Шукати</button>
        </form>
        <div className="confectioner-main d-f">
          <div>
            <div className="confectioner-main-tabs">
              <button
                className={tab === 1 ? 'main-tabs-btn tabs-btn__active' : 'main-tabs-btn'}
                onClick={() => setTab(1)}
              >
                Про кондитера
              </button>
              <button
                className={tab === 2 ? 'main-tabs-btn tabs-btn__active' : 'main-tabs-btn'}
                onClick={() => setTab(2)}
              >
                Товари
              </button>
            </div>
            <div className={tab === 2 ? "desserts-main-filters" : "d-n"}>
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
          </div>
          <div>
            <div className={tab === 1 ? 'd-b' : 'd-n'}>
              <div className="confectioner-main-about d-f align-center">
                <div><img src="images/confectioner1.png" alt="confectioner1" /></div>
                <div>
                  <div className="confectioner-main-city">Київ</div>
                  <h2 className="confectioner-main-name">Інна Пономаренко</h2>
                  <button className='confectioner-main-contact' onClick={handleOpen}>Переглянути контакти</button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <div className="d-f jc-sb">
                        <h2 className="contact-modal-title">Інна Пономаренко</h2>
                        <button className='contact-modal-exit' onClick={handleClose}><img src="images/exit.svg" alt="exit" /></button>
                      </div>
                      <div className="contact-modal-info d-f">
                        <div className="info-bl d-f align-center">
                          <div className="info-bl-title">Адреса</div>
                          <div className="info-bl-desc">Київ, Симиренка 23а</div>
                          <div><img src="images/location2.svg" alt="location2" /></div>
                        </div>
                        <div className="info-bl d-f align-center">
                          <div className="info-bl-title">Телефон</div>
                          <div className="info-bl-desc">+56 085 345 76 34</div>
                          <div><img src="images/copy.svg" alt="copy" /></div>
                        </div>
                        <div className="info-bl d-f align-center">
                          <div className="info-bl-title">Пошта</div>
                          <div className="info-bl-desc">mail@example.com</div>
                          <div><img src="images/copy.svg" alt="copy" /></div>
                        </div>
                      </div>
                      <div className="contact-modal-delivery">
                        <div className="delivery-title">Доставка</div>
                        <ul className="delivery-list">
                          <li>Таксі за тарифами перевізника</li>
                          <li>Cамовивіз, Київ, Симиренка 23а</li>
                          <li>Власна доставка, 150 грн</li>
                          <li>Власна доставка, безкоштовно для замовлення від 1000 грн</li>
                        </ul>
                      </div>
                      <div className="contact-modal-payment">
                        <div className="payment-title">Оплата</div>
                        <div className="payment-desc">Передплата 50%</div>
                      </div>
                      <div className="contact-modal-social d-f">
                        <div><img src="images/social1.svg" alt="social1" /></div>
                        <div><img src="images/social2.svg" alt="social2" /></div>
                        <div><img src="images/social3.svg" alt="social3" /></div>
                      </div>
                      <button className='contact-modal-write'>Написати кондитеру</button>
                    </Box>
                  </Modal>
                </div>
              </div>
              <p className="confectioner-main-desc">Вже понад 10 років удосконалюю свої навички.</p>
              <p className="confectioner-main-desc">
                З 2011 по 2017 - засновник бренду Марципан у Вінниці зі штатом 35 осіб. Я була шеф-кондитером 3 ресторанів.
                А також, одним із перших кондитерів, який ввів у моду кенді бари в Чорнозем'ї та спільно з партнерами
                придумали коробки квіти та макаронів - ідея яка розлетілася по всьому світу.
              </p>
              <p className="confectioner-main-desc">Також, я та моя команда займаємося організацією та запуском кондитерських виробництв.</p>
              <p className="confectioner-main-desc">Маю великий досвід за плечима. За 10 років роботи я створила тисячі та тисячі тортів.</p>
              <p className="confectioner-main-desc">
                Пройшовши великий шлях від домашнього кондитера до бренд-шефа, я з великою радістю та впевненістю ділюся
                з учнями своїми знаннями від випічки тортів та тістечок до масштабних весільних тортів.
              </p>
              <div className="confectioner-main-reviews">
                <h3 className="main-reviews-title">Відгуки</h3>
                <div className="main-reviews-content d-f">
                  <ReviewItem
                    fname='Анна Щедріна'
                    date='15.11.2020'
                    productTitle='Торт “Червоний оксамит”'
                    desc='Замовляли на мій День народження мусовий торт із маракуєю та залишилися дуже задоволені. 
                        Тортик вийшов дуже смачний, з приємною кислинкою за рахунок маракуї та неймовірно ніжною та легкою 
                        текстурою. Начинка, на мій смак, просто шикарна: желе маракуйї, бісквіт, хрусткий шар та мус із 
                        манго та маракуйї.'
                    itemWidth='1152px'
                  />
                  <ReviewItem
                    fname='Олександр Ольцев'
                    date='15.11.2020'
                    productTitle='Торт весільний з фруктами'
                    desc='Супер десерти для дому та хореки. Чарівні круасани. Торти, кейки та мусові десерти - це кохання'
                    itemWidth='1152px'
                  />
                  <ReviewItem
                    fname='Тарас Коломієць'
                    date='15.11.2020'
                    productTitle='Торт для дня народження з квітами, 5 кг'
                    desc="Найсмачніші торти та тістечка, казкові еклери. У захваті від десертів. 
                        Кондитера - чарівниці, доставка завжди на найвищому рівні!!!!! Всій сім'єю обожнюємо 
                        Вашу кондитерську , дякую за вашу працю і смакоти!!"
                    itemWidth='1152px'
                  />
                </div>
                <button className='desserts-more-btn'>Більше відгуків</button>
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
            <div className={tab === 2 ? 'd-b' : 'd-n'}>
              <h2 className="confectioner-main-name">Інна Пономаренко</h2>
              <div className="desserts-main-tags d-f" style={{ marginTop: "30px" }}>
                <Tag title='Усі' isActive={true} />
                <Tag title='Капкейки' />
                <Tag title='Торти' />
                <Tag title='Кейк-попси' />
                <Tag title='Макаруни' />
                <Tag title='Печиво' />
                <Tag title='Цукерки' />
              </div>
              <div className="confectioner-products d-f">
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
              <button className='desserts-more-btn' style={{ width: "1152px" }}>Більше смаколиків</button>
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
        <div className={tab === 1 ? "d-b" : "d-n"}>
          <div className="home-bl">
            <div className="d-f jc-sb">
              <h3 className="home-bl-title">Tорти</h3>
              <div className="home-bl-actions d-f align-center">
                <button className='home-bl-all'>Переглянути всі</button>
                <div className="home-bl-arrows d-f">
                  <button><img src="images/arrow-left.svg" alt="arrow-left" /></button>
                  <button><img src="images/arrow-right.svg" alt="arrow-right" /></button>
                </div>
              </div>
            </div>
            <div className="home-bl-box d-f jc-sb">
              {findProduct('Торт “Літнє бажання” з шоколадом та макарунами')}
              {findProduct('Весільний триярусний торт з фруктами та квітами')}
              {findProduct('Бісквітний торт з ягодами')}
              {findProduct('Ванільно-карамельний торт з печивом Орео')}
              {findProduct('Торт рожевий з макарунами')}
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
              {findProduct('Пасхальні капкейки шоколадні та ванільні')}
              {findProduct('Оригінальні капкейки з кремом та печивом')}
              {findProduct('Капкейки з карамеллю 3 шт')}
              {findProduct('Капкейки з ніжним кремом')}
              {findProduct('Чорні капкейки з шоколадом та печивом')}
            </div>
          </div>
        </div>
        <div className={tab === 2 ? "d-b" : "d-n"}>
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
      </div>
    </main>
  )
}

export default Confectioner