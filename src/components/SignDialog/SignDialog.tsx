import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './SignDialog.css'

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

const SignDialog = () => {

    const [open, setOpen] = React.useState(false);
    const [screen, setScreen] = React.useState(2)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleScreen = () => {
        setScreen((prevState) => {
            return prevState === 2 ? 1 : 2
        })
    }

    const regMain = () => {
        return (
            <>
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
                    <button className='reg-btn'>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z" fill="#43607C" />
                        </svg>
                    </button>
                </div>
            </>
        )
    }

    const signIn = () => {
        return (
            <>
                <form action="" className='sign-dialog-fm'>
                    <label htmlFor="phone">Номер телефону <span>На вказаний номер вам прийде СМС-повідомлення з кодом</span></label>
                    <input type="tel" name="phone" id="phone" placeholder='+38 0' />
                    <button type='button' onClick={handleClose}>Надіслати</button>
                </form>
                <div className="sign-dialog-social">
                    <div className="social-title">Увійти за допомогою</div>
                    <div className="social-box d-f">
                        <a href="#" className="social-link">Facebook</a>
                        <a href="#" className="social-link">Google</a>
                    </div>
                </div>
            </>
        )
    }

    const regBuyer = () => {
        return (
            <>
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
                        <button className='reg-buyer-send'>Надіслати</button>
                    </div>
                </form>
                <div className="sign-dialog-social" style={{marginBottom: "60px"}}>
                    <div className="social-title"> Зареєструватися за допомогою</div>
                    <div className="social-box d-f">
                        <a href="#" className="social-link">Facebook</a>
                        <a href="#" className="social-link">Google</a>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            <button className="header-actions-account" onClick={handleOpen}>Увійти</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={signStyle}>
                    <div className="d-f jc-sb">
                        <h3 className="sign-dialog-title"> {screen === 2 ? "Вхід" : "Реєстрація"} </h3>
                        <button className='sign-dialog-exit' onClick={handleClose}><img src="images/exit.svg" alt="exit" /></button>
                    </div>
                    {
                        screen === 1 ?
                            regMain()
                            : screen === 2
                                ?
                                signIn()
                                :
                                regBuyer()

                    }

                    <button
                        className='singn-dialog-change'
                        onClick={handleScreen}
                    >
                        {screen === 2 ? "У мене немає акаунту, треба зареєструватися" : "Я вже маю акаунт, хочу просто увійти"}
                    </button>
                </Box>
            </Modal>
        </div>
    )
}

export default SignDialog