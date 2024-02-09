import React from 'react'
import Tag from '../components/Tag/Tag'
import './Confectioners.css'
import ConfectionerItem from '../components/ConfectionerItem/ConfectionerItem'
import ProductItem from '../components/ProductItem/ProductItem'
import { DessertsList } from '../components/ProductsList/ProductsList'

type ConfectionersProps = {
    handleHeaderType: (headerId: number) => void;
}

const Confectioners = ({ handleHeaderType }: ConfectionersProps) => {

    React.useEffect(() => {
        handleHeaderType(1)
    }, []);

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
        <div className='wrapper'>
            <form action="" className='home-main-fm' style={{height: "50px"}}>
                <input type="text" style={{ paddingTop: "4px" }} />
                <button type='button' style={{ marginLeft: "103px" }}>Шукати</button>
            </form>
            <div className="confectioners-tags desserts-main-tags  d-f">
                <Tag title='Усі' isActive={true} />
                <Tag title='Капкейки' />
                <Tag title='Торти' />
                <Tag title='Кейк-попси' />
                <Tag title='Макаруни' />
                <Tag title='Печиво' />
                <Tag title='Цукерки' />
            </div>
            <div className="confectioners-bl d-f">
                <div>
                    <ConfectionerItem
                        image='images/Confectioners/1.png'
                        title='Інна Пономаренко'
                        reviews={23}
                        desc='Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен книги рекордов...'
                        tagOne='Торти'
                        tagTwo='Цукерки'
                        tagsMore={3}
                    />
                </div>
                <div className='confectioners-bl-info'>
                    <div className="d-f jc-sb">
                        <h3 className="home-bl-title">Інна Пономаренко</h3>
                        <div className="home-bl-actions d-f align-center">
                            <button className='home-bl-all'>Переглянути всі</button>
                            <div className="home-bl-arrows d-f">
                                <button><img src="images/arrow-left.svg" alt="arrow-left" /></button>
                                <button><img src="images/arrow-right.svg" alt="arrow-right" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="confectioners-bl-box d-f">
                        {findProduct('Весільний триярусний торт з фруктами та квітами')}
                        {findProduct('Бісквітний торт з ягодами')}
                        {findProduct('Ванільно-карамельний торт з печивом Орео')}
                        {findProduct('Торт рожевий з макарунами')}

                    </div>

                </div>

            </div>
            <div className="confectioners-bl d-f">
                <div>
                    <ConfectionerItem
                        image='images/Confectioners/2.png'
                        title='Home Bakery'
                        reviews={59}
                        desc='Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен книги рекордов...'
                        tagOne='Торти'
                        tagTwo='Капкейки'
                        tagsMore={2}
                    />
                </div>
                <div className='confectioners-bl-info'>
                    <div className="d-f jc-sb">
                        <h3 className="home-bl-title">Home Bakery</h3>
                        <div className="home-bl-actions d-f align-center">
                            <button className='home-bl-all'>Переглянути всі</button>
                            <div className="home-bl-arrows d-f">
                                <button><img src="images/arrow-left.svg" alt="arrow-left" /></button>
                                <button><img src="images/arrow-right.svg" alt="arrow-right" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="confectioners-bl-box d-f">
                        {findProduct('Торт “Літнє бажання” з шоколадом та макарунами')}
                        {findProduct('Чорні капкейки з шоколадом та печивом')}
                        {findProduct('Капкейки з карамеллю 3 шт')}
                        {findProduct('Капкейки з ніжним кремом')}
                    </div>
                </div>
            </div>
            <div className="confectioners-bl d-f">
                <div>
                    <ConfectionerItem
                        image='images/Confectioners/3.png'
                        title='Іванна Марченко'
                        reviews={15}
                        desc='Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен книги рекордов...'
                        tagOne='Капкейки'
                        tagTwo='Макаруни'
                        tagsMore={5}
                    />
                </div>
                <div className='confectioners-bl-info'>
                    <div className="d-f jc-sb">
                        <h3 className="home-bl-title">Іванна Марченко</h3>
                        <div className="home-bl-actions d-f align-center">
                            <button className='home-bl-all'>Переглянути всі</button>
                            <div className="home-bl-arrows d-f">
                                <button><img src="images/arrow-left.svg" alt="arrow-left" /></button>
                                <button><img src="images/arrow-right.svg" alt="arrow-right" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="confectioners-bl-box d-f">
                        {findProduct('Торт рожевий з макарунами')}
                        {findProduct('Весільний триярусний торт з фруктами та квітами')}
                        {findProduct('Оригінальні капкейки з кремом та печивом')}
                        {findProduct('Пасхальні капкейки шоколадні та ванільні')}
                    </div>
                </div>
            </div>
            <div className="confectioners-bl d-f">
                <div>
                    <ConfectionerItem
                        image='images/Confectioners/4.png'
                        title='Ангеліна Колеснікова'
                        reviews={18}
                        desc='Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен книги рекордов...'
                        tagOne='Печиво'
                        tagTwo='Макаруни'
                        tagsMore={5}
                    />
                </div>
                <div className='confectioners-bl-info'>
                    <div className="d-f jc-sb">
                        <h3 className="home-bl-title">Ангеліна Колеснікова</h3>
                        <div className="home-bl-actions d-f align-center">
                            <button className='home-bl-all'>Переглянути всі</button>
                            <div className="home-bl-arrows d-f">
                                <button><img src="images/arrow-left.svg" alt="arrow-left" /></button>
                                <button><img src="images/arrow-right.svg" alt="arrow-right" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="confectioners-bl-box d-f">
                        {findProduct('Капкейки з ніжним кремом')}
                        {findProduct('Торт “Літнє бажання” з шоколадом та макарунами')}
                        {findProduct('Чорні капкейки з шоколадом та печивом')}
                        {findProduct('Капкейки з карамеллю 3 шт')}
                    </div>
                </div>
            </div>
            <div className="confectioners-bl d-f">
                <div>
                    <ConfectionerItem
                        image='images/Confectioners/5.png'
                        title='Кондитерська Blossom: торти, капк...'
                        reviews={18}
                        desc='Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен книги рекордов...'
                        tagOne='Печиво'
                        tagTwo='Макаруни'
                        tagsMore={5}
                    />
                </div>
                <div className='confectioners-bl-info'>
                    <div className="d-f jc-sb">
                        <h3 className="home-bl-title">Кондитерська Blossom: торти, капкейки, макаруни</h3>
                        <div className="home-bl-actions d-f align-center">
                            <button className='home-bl-all'>Переглянути всі</button>
                            <div className="home-bl-arrows d-f">
                                <button><img src="images/arrow-left.svg" alt="arrow-left" /></button>
                                <button><img src="images/arrow-right.svg" alt="arrow-right" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="confectioners-bl-box d-f">
                        {findProduct('Бісквітний торт з ягодами')}
                        {findProduct('Ванільно-карамельний торт з печивом Орео')}
                        {findProduct('Весільний триярусний торт з фруктами та квітами')}
                        {findProduct('Торт рожевий з макарунами')}
                    </div>
                </div>
            </div>
            <button className='desserts-more-btn' style={{ width: "98%" }}>'Більше смаколиків'</button>
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

export default Confectioners