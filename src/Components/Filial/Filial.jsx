import React from 'react';
import './Filial.css';
const Filial = () => {
  return (
    <div className='filial'>
      <div className="filial-container">
        <div className="fil-box">
            <main>
                <h2>MaxWay Magic City</h2>
                <p>Magic City,ул. Бабура, 174, Ташкент, Узбекистан</p>
            </main>
            <main>
                <p>Часы работы</p>
                <p>10:00-03:00</p>
            </main>
        </div>
        <div className="fil-box">
            <main>
                <h2>MaxWay Tashkent City</h2>
                <p>Magic City, Navoiy, 26, Ташкент, Узбекистан</p>
            </main>
            <main>
                <p>Часы работы</p>
                <p>10:00-03:00</p>
            </main>
        </div>
        <div className="fil-box">
            <main>
                <h2>MaxWay Chilanzar City</h2>
                <p>Magic City,ул. Chilanzar, 3, Ташкент, Узбекистан</p>
            </main>
            <main>
                <p>Часы работы</p>
                <p>10:00-03:00</p>
            </main>
        </div>
      </div>
    </div>
  )
}
export default Filial;