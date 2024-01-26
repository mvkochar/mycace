import React from 'react'
import './Footer.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <footer className='footer d-f jc-sb align-center'>
      <div>
        <div><Link to='/'><img src="images/footer-logo.svg" alt="Logo" /></Link></div>
        <div className="header-location">Вся Україна</div>
      </div>
      <nav>
        <ul className="footer-list d-f">
          <li className="footer-list-item"><Link to="desserts">Десерти</Link></li>
          <li className="footer-list-item"><a href="#">Кращі кондитери</a></li>
          <li className="footer-list-item"><a href="#">Корисні статті</a></li>
        </ul>
      </nav>
      <div>
        <a href="#" className="footer-rules">Правила користування</a>
        <button className="footer-connect" onClick={handleOpen}>Форма зворотнього зв’язку</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="d-f jc-sb">
              <h2 className="connect-title">Форма зворотнього зв’язку</h2>
              <button className='connect-exit' onClick={handleClose}><img src="images/exit.svg" alt="Exit" /></button>
            </div>
            <form action="" className='connect-fm'>
              <div className="input-bl d-f">
                <label htmlFor="fname">Ім’я та прізвище</label>
                <input type="text" name='fname' id='fname' placeholder='Анна Василенко' />
              </div>
              <div className="input-bl d-f">
                <div>
                  <label htmlFor="email">Пошта</label>
                  <p className="email-desc">
                    Напишіть пошту, на яку ви очікуєте отримати відповідь
                  </p>
                </div>
                <input type="email" name='email' id='email' />
              </div>
              <div className="message-bl d-f align-center">
                <label htmlFor="msg">Текст звернення</label>
                <textarea name="msg" id="msg"></textarea>
              </div>
              <button className='send-btn' onClick={handleClose}>Відправити звернення</button>
              <button className='cancel-btn' onClick={handleClose}>Скасувати</button>
            </form>
          </Box>
        </Modal>
      </div>
      <div>
        <div className="footer-rights">
          &copy; Mycake 2022 All rights reserved
        </div>
        <div className="footer-social d-f">
          <div><img src="images/footer-social1.svg" alt="foote-social1" /></div>
          <div><img src="images/footer-social2.svg" alt="foote-social2" /></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer