import React from 'react'
import "./ShopRegistration.css"

type ShopRegistrationProps = {
    handleHeaderType: (headerId: number) => void
}

const ShopRegistration = ({ handleHeaderType }: ShopRegistrationProps) => {
    React.useEffect(() => {
        handleHeaderType(3)

    }, []);

    return (

        <main>
            <div className="wrapper">
                <div className="shop-reg-main d-f">
                    <div>
                        <div className="shop-reg-msg">
                            <div className="reg-msg-title">Привіт, тепер це твій магазин!</div>
                            <p className="reg-msg-desc">
                                Розкажи про себе як можна більше. Це допоможе клієнту сформувати довіру до тебе.
                            </p>
                        </div>
                        <div className='shop-reg-polygon'><img src="images/polygon.svg" alt="polygon" /></div>
                    </div>
                    <form action="" className='shop-reg-fm d-f'>
                        <div>
                            <h4 className="form-bl-title">Фото</h4>
                            <div className="form-bl-desc">
                                Додайте сюди своє фото або логотип компанії. Кондитерів з фото обирають частіше
                            </div>
                            <button type='button' className='add-photo-btn'>Завантажити фото</button>
                        </div>
                        <div>
                            <h4 className="form-bl-title">Загальне</h4>
                            <label htmlFor='confectioner' className="form-bl-label">Ім’я кондитера або назва кондитерської</label>
                            <input type="text" name='confectioner' id='confectioner' placeholder='Інна Пономаренко' />
                            <label htmlFor='desc' className="form-bl-label">Опис</label>
                            <p className="form-bl-desc">
                                Допоможіть клієнтам більше дізнатися про вас. Тут можна написати про свій досвід,
                                навички та досягнення.
                            </p>
                            <textarea name="desc" id="desc"></textarea>
                        </div>
                        <div>
                            <h4 className="form-bl-title">Контакти</h4>
                            <label htmlFor="address" className='form-bl-label'>Адреса</label>
                            <input type="text" name='address' id='address' />
                            <label htmlFor="phone" className='form-bl-label'>Номер телфону</label>
                            <input type="tel" name="phone" id="phone" placeholder='+56 085 345 76 34' />
                            <label htmlFor="mail" className='form-bl-label'>Пошта</label>
                            <input type="text" name='mail' id='mail' />
                            <button type='button' className='add-contact-btn'>Додати контакт</button>
                        </div>
                        <div>
                            <h4 className="form-bl-title">Доставка</h4>
                            <p className="form-bl-desc">
                                Опишіть доступні способи доставки, їх вартість та умови. <br />
                                Наприклад: “Власна доставка, безкоштовно для замовлення від 1000 грн”, “Таксі за тарифами перевізника”
                            </p>
                            <textarea name="delivery" id="delivery"></textarea>
                        </div>
                        <div>
                            <h4 className="form-bl-title">Оплата</h4>
                            <p className="form-bl-desc">
                                Опишіть доступні способи оплати. <br />
                                Наприклад: “Передплата 30%”, “Оплата терміналом кур’єру”
                            </p>
                            <input type="text" name="payment" id="payment"></input>
                        </div>
                        <div>
                            <h4 className="form-bl-title">Соціальні мережі</h4>
                            <p className="form-bl-desc">
                                Вставте посилання на свої соцмережі в цих полях
                            </p>
                            <label htmlFor="instagram" className='form-bl-label'>Instagram</label>
                            <input type="text" name='instagram' id='instagram' />
                            <label htmlFor="facebook" className='form-bl-label'>Facebook</label>
                            <input type="text" name='facebook' id='facebook' />
                            <label htmlFor="youtube" className='form-bl-label'>Youtube</label>
                            <input type="text" name='youtube' id='youtube' />
                        </div>
                        <button type='button' className='save-btn'>Зберегти</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default ShopRegistration