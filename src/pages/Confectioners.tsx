import React from 'react'
import Tag from '../components/Tag/Tag'
import './Confectioners.css'
import ConfectionerItem from '../components/ConfectionerItem/ConfectionerItem'
import ProductItem from '../components/ProductItem/ProductItem'
import { DessertsList } from '../components/ProductsList/ProductsList'

const Confectioners = () => {

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
            <form action="" className='home-main-fm'>
                <input type="text" style={{ paddingTop: "4px" }} />
                <button style={{ marginLeft: "103px" }}>Шукати</button>
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
        </div>

    )
}

export default Confectioners