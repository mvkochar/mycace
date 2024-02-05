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

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        <h3 className="sign-dialog-title">Вхід</h3>
                        <button className='sign-dialog-exit' onClick={handleClose}><img src="images/exit.svg" alt="exit" /></button>
                    </div>
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
                    <button className='singn-dialog-change'>У мене немає акаунту, треба зареєструватися</button>
                </Box>
            </Modal>
        </div>
    )
}

export default SignDialog