import React from 'react';
import './Contac.css';
const Contac = () => {
  return (
    <div className='contac'>
      <div className="container">
        <div className="main-contac">
            <h2>Телефоны контактных центров</h2>
            <p>Круглосуточно, без выходных</p>
            <main className='main-div'>
                <h3>Ташкент</h3>
                <p>+998934629992</p>
            </main>
            <hr className="hr" />
            <main className='main-div'>
                <h3>Наманган</h3>
                <p>+998993253304</p>
            </main>
            <hr className="hr" />
            <main className='main-div'>
                <h3>Алмалык</h3>
                <p>+998934629992</p>
            </main>
            <hr className="hr" />
        </div>
        <main className="main-contac">
            <h2>Отдел поддержки клиентов</h2>
            <div>
                <h3>Электронная почта</h3>
                <h3><a className="links" href="mailto:islombekraximjanov97dev@gmail.com" target="_blank" rel="noopener noreferrer">islombekraximjanov97dev@gmail.com</a></h3>
            </div>
        </main>
      </div>
    </div>
  )
}
export default Contac;