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
                </div>
            </div>
        </main>
    )
}

export default ShopRegistration