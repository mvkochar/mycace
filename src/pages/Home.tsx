import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <main>
      <div className="wrapper">
        <div className="home-main d-f jc-sb align-center">
            <div>
              <h2 className="home-main-title">Пошукаємо щось смачненького?</h2>
              <p className="home-main-desc">
                Ми об’єднали кондитерів з різних міст, щоб необхідні смаколики можна було замовити ще легше
              </p>
              <form action="" className='home-main-fm'>
                <input type="text" />
                <button>Шукати</button>
              </form>
            </div>
            <div><img src="images/home-main.png" alt="home-main" /></div>
        </div>
      </div>
    </main>
  )
}

export default Home