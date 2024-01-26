import React from 'react'
import './Desserts.css'

const Desserts = () => {
  return (
    <div className="wrapper">
        <form action="" className='desserts-search-fm'>
              <input type="text" name='query' placeholder='Шоколадний торт з квітами' />
              <button>Шукати</button>  
        </form>
    </div>
  )
}

export default Desserts