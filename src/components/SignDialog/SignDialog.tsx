import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './SignDialog.css'

type SignDialogProps = {
    screenType?: number
    showSignBtn?: boolean
}

const signStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const SignDialog = ({ screenType = 2, showSignBtn = true }: SignDialogProps) => {

    const [open, setOpen] = React.useState(!showSignBtn);
    const [screen, setScreen] = React.useState(screenType);
    const [codeOne, setCodeOne] = React.useState("")
    

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setScreen(2);
    }

    const handleScreen = () => {
        setScreen((prevState) => {
            return prevState === 2 ? 1 : 2
        })
    }

    const regMain = () => {
        return (
            <>
                <div className="d-f jc-sb">
                    <h3 className="sign-dialog-title">Реєстрація</h3>
                    <button className='sign-dialog-exit' onClick={handleClose}><img src="images/exit.svg" alt="exit" /></button>
                </div>
                <div className="registration-main-item d-f jc-sb align-center">
                    <div><img src="images/cookie.svg" alt="cookie" /></div>
                    <div style={{ width: "307px" }}>
                        <div className="reg-title">Покупець</div>
                        <div className="reg-subtitle">Хочу купувати, дарувати та їсти</div>
                    </div>
                    <button className='reg-btn' onClick={() => setScreen(4)}><img src="images/arrow-right.svg" alt="arrow-right" /></button>
                </div>
                <div className="registration-main-item d-f jc-sb align-center">
                    <div><img src="images/cupcake.svg" alt="cupcake" /></div>
                    <div style={{ width: "307px" }}>
                        <div className="reg-title">Кондитер</div>
                        <div className="reg-subtitle">Хочу випікати, прикрашати та продавати</div>
                    </div>
                    <button className='reg-btn' onClick={() => setScreen(6)}>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z"
                                fill="#43607C" />
                        </svg>
                    </button>
                </div>
                <button
                    className='singn-dialog-change'
                    onClick={handleScreen}
                >
                    {screen === 2 ? "У мене немає акаунту, треба зареєструватися" : "Я вже маю акаунт, хочу просто увійти"}
                </button>
            </>
        )
    }

    const signIn = () => {
        return (
            <>
                <div className="d-f jc-sb">
                    <h3 className="sign-dialog-title">Вхід</h3>
                    <button className='sign-dialog-exit' onClick={handleClose}><img src="images/exit.svg" alt="exit" /></button>
                </div>
                <form action="" className='sign-dialog-fm'>
                    <label htmlFor="phone">Номер телефону <span>На вказаний номер вам прийде СМС-повідомлення з кодом</span></label>
                    <input type="tel" name="phone" id="phone" placeholder='+38 0' />
                    <button type='button' onClick={() => setScreen(3)}>Надіслати</button>
                </form>
                <div className="sign-dialog-social">
                    <div className="social-title">Увійти за допомогою</div>
                    <div className="social-box d-f">
                        <a href="#" className="social-link">Facebook</a>
                        <a href="#" className="social-link">Google</a>
                    </div>
                </div>
                <button
                    className='singn-dialog-change'
                    onClick={handleScreen}
                >
                    {screen === 2 ? "У мене немає акаунту, треба зареєструватися" : "Я вже маю акаунт, хочу просто увійти"}
                </button>
            </>
        )
    }

    const regBuyer = () => {
        return (
            <>
                <div className="d-f jc-sb">
                    <h3 className="sign-dialog-title">Реєстрація</h3>
                    <button className='sign-dialog-exit' onClick={handleClose}><img src="images/exit.svg" alt="exit" /></button>
                </div>
                <form action="" className='reg-buyer-fm d-f'>
                    <div className="fname-block">
                        <label htmlFor="fname">Ім'я та прізвище</label>
                        <input type="text" name='fname' id='fname' />
                    </div>
                    <div className="phone-block d-f">
                        <div>
                            <label htmlFor="phone">Номер телефону <span>На вказаний номер вам прийде СМС-повідомлення з кодом</span></label>
                            <input type="tel" name="phone" id="phone" placeholder='+38 0' />
                        </div>
                        <button className='reg-buyer-send' onClick={() => setScreen(5)}>Надіслати</button>
                    </div>
                </form>
                <div className="sign-dialog-social" style={{ marginBottom: "60px" }}>
                    <div className="social-title"> Зареєструватися за допомогою</div>
                    <div className="social-box d-f">
                        <a href="#" className="social-link">Facebook</a>
                        <a href="#" className="social-link">Google</a>
                    </div>
                </div>
                <button
                    className='singn-dialog-change'
                    onClick={handleScreen}
                >
                    {screen === 2 ? "У мене немає акаунту, треба зареєструватися" : "Я вже маю акаунт, хочу просто увійти"}
                </button>
            </>
        )
    }

    const regConfectioner = () => {
        return (
            <>
                <div className="d-f jc-sb">
                    <h3 className="sign-dialog-title">Реєстрація</h3>
                    <button className='sign-dialog-exit' onClick={handleClose}><img src="images/exit.svg" alt="exit" /></button>
                </div>
                <form action="" className='reg-buyer-fm d-f'>
                    <div className="fname-block">
                        <label htmlFor="fname">Ім’я або назва компанії</label>
                        <input type="text" name='fname' id='fname' />
                    </div>
                    <div className="phone-block d-f">
                        <div>
                            <label htmlFor="phone">Номер телефону <span>На вказаний номер вам прийде СМС-повідомлення з кодом</span></label>
                            <input type="tel" name="phone" id="phone" placeholder='+38 0' />
                        </div>
                        <button className='reg-buyer-send' onClick={() => setScreen(7)}>Надіслати</button>
                    </div>
                </form>
                <div className="sign-dialog-social" style={{ marginBottom: "60px" }}>
                    <div className="social-title"> Зареєструватися за допомогою</div>
                    <div className="social-box d-f">
                        <a href="#" className="social-link">Facebook</a>
                        <a href="#" className="social-link">Google</a>
                    </div>
                </div>
                <button
                    className='singn-dialog-change'
                    onClick={handleScreen}
                >
                    {screen === 2 ? "У мене немає акаунту, треба зареєструватися" : "Я вже маю акаунт, хочу просто увійти"}
                </button>
            </>
        )
    }

    const confirmPhone = () => {                
        return (
            <>
                <div className="d-f jc-sb">
                    <h3 className="sign-dialog-title"> {screen === 3 ? 'Вхід' : 'Реєстрація'}</h3>
                    <button className='sign-dialog-exit' onClick={handleClose}><img src="images/exit.svg" alt="exit" /></button>
                </div>
                <p className="confirm-title">Введіть код з повідомлення</p>
                <div className="confirm-code d-f">
                    <input className='confirm-code-item' 
                        type='text' name='codeOne' value={codeOne} 
                        onChange={(event) => { setCodeOne(event.target.value[0]); }}>
                    </input>
                    <div className='confirm-code-item'></div>
                    <div className='confirm-code-item'></div>
                    <div className='confirm-code-item'></div>
                    <div className='confirm-code-item'></div>
                    <div className='confirm-code-item'></div>
                </div>
                <button className='second-send-btn'>Надіслати повторно</button>
                <a href="" className="cofirm-link">Підтвердити</a>
            </>
        )
    }


    return (
        <div>
            {showSignBtn ? <button className="header-actions-account" onClick={handleOpen}>Увійти</button> : null}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={signStyle}>
                    {
                        screen === 1 ?
                            regMain()
                            : screen === 2
                                ?
                                signIn()
                                : screen === 4 ?
                                    regBuyer()
                                    : screen === 6 ?
                                        regConfectioner()
                                        :
                                        confirmPhone()
                    }
                </Box>
            </Modal>
        </div>
    )
}

export default SignDialog