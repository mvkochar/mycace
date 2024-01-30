import React from 'react'
import './SingleProduct.css'
import Tag from '../components/Tag/Tag'

const SingleProduct = () => {
    return (
        <main>
            <div className="wrapper">
                <div className="product-main d-f jc-sb">
                    <div className="product-main-images d-f align-center">
                        <div className='images-min-bl d-f'>
                            <button className='images-action-btn'><img src="images/arrow_up.svg" alt="arrow-up" /></button>
                            <div><img src="images/single-product/product-min1.png" alt="product-min1" /></div>
                            <div><img src="images/single-product/product-min2.png" alt="product-min2" /></div>
                            <div><img src="images/single-product/product-min3.png" alt="product-min3" /></div>
                            <div><img src="images/single-product/product-min4.png" alt="product-min4" /></div>
                            <button className='images-action-btn'><img src="images/arrow_down.svg" alt="arrow-down" /></button>
                        </div>
                        <div><img src="images/single-product/product.png" alt="product" /></div>
                    </div>
                    <div>
                        <div className="product-main-tags d-f">
                            <Tag title='Для дівчат' />
                            <Tag title='На день народження' />
                            <Tag title='Класичні рецепти' />
                        </div>
                        <h1 className='product-main-title'>Торт “Червоний оксамит”</h1>
                        <h3 className="product-main-price">670 грн</h3>
                        <div className="product-main-info d-f align-center">
                            <div>2 кг</div>
                            <div className="info-pattern"></div>
                            <div>Начинка: червоний оксамит</div>
                            <div className="info-pattern"></div>
                            <div>Прикраси з мастики</div>
                        </div>
                        <p className="product-main-desc">
                            Цей торт особливо актуальний до Дня святого Валентина. Ви тільки подивіться, який він пристрасний!
                            І смачний звичайно. І з приготуванням впорається будь-хто! Загалом все, як ми любимо!
                            Тому цей «Червоний оксамит» до приготування обов'язковий. Щоб отримати такий насичений червоний колір,
                            використовуйте або сухі індійські барвники (Roha), або гелевий Americolor Red Red.
                        </p>
                        <div className="product-main-actions d-f">
                            <button className='params-btn'>Обрати параметри</button>
                            <button className='contacts-btn'>Переглянути контакти</button>
                            <button className='likes-btn'><img src="images/like.svg" alt="like" /></button>
                        </div>
                    </div>
                </div>
                <div className="product-confectioner d-f jc-sb">
                    <div>
                        <div className="product-confectioner-about d-f">
                            <div><img src="images/confectioner1.png" alt="confectioner1" /></div>
                            <div>
                                <div className="product-confectioner-info d-f">
                                    <div className="product-confectioner-name">Інна Пономаренко</div>
                                    <div className="product-confectioner-city">Київ</div>
                                </div>
                                <a href="#" className="product-confectioner-link">Перейти на сторінку</a>
                            </div>
                        </div>
                        <div className="product-confectioner-tags d-f">
                            <Tag title='Торти' />
                            <Tag title='Цукерки' />
                            <Tag title='Печиво' />
                            <Tag title='Капкейки' />
                            <Tag title='Макаруни' />
                        </div>
                        <p className="product-confectioner-desc">Вже понад 10 років удосконалюю свої навички.</p>
                        <p className="product-confectioner-desc">
                            З 2011 по 2017 - засновник бренду Марципан у Вінниці зі штатом 35 осіб. Я була шеф-кондитером 3 ресторанів.
                            А також, одним із перших кондитерів, який ввів у моду кенді бари в Чорнозем'ї та спільно з партнерами
                            придумали коробки квіти та макаронів - ідея яка розлетілася по всьому світу.
                        </p>
                        <p className="product-confectioner-desc">
                            Також, я та моя команда займаємося організацією та запуском кондитерських виробництв.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SingleProduct