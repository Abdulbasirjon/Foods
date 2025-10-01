import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import lavash from './Lavash.svg/image.png';
import lavash1 from './Lavash.svg/image copy.png';
import lavash2 from './Lavash.svg/image copy 2.png';
import lavash3 from './Lavash.svg/image copy 3.png';
import lavash4 from './Lavash.svg/image copy 4.png';
import desert from './desert/image.png';
import desert1 from './desert/image copy.png';
import desert2 from './desert/image copy 2.png';
import desert3 from './desert/image copy 3.png';
import desert4 from './desert/image copy 4.png';
import desert5 from './desert/image copy 5.png';
import set from './set/image.png';
import set1 from './set/image copy.png';
import set2 from './set/image copy 2.png';
import set3 from './set/image copy 3.png';
import set4 from './set/image copy 4.png';
import set5 from './set/image copy 5.png';
import set6 from './set/image copy 6.png';
import xaggi from './xaggi/image.png';
import xaggi1 from './xaggi/image copy.png';
import xaggi2 from './xaggi/image copy 2.png';
import xaggi3 from './xaggi/image copy 3.png';
import xaggi4 from './xaggi/image copy 4.png';
import xaggi5 from './xaggi/image copy 5.png';
import React from 'react';
import './Tab.css';
const Tablist = () => {
  return (
    <div>
      <Tabs className="tabs">
        <TabList className="tablist">
          <Tab className="tab">Lavash</Tab>
          <Tab className="tab">Desert</Tab>
          <Tab className="tab">Set</Tab>
          <Tab className="tab">Xaggi</Tab> 
          <Tab className="tab">Burger</Tab>
          <Tab className="tab">Pizza</Tab>
          <Tab className="tab">Sendvich</Tab>
          <Tab className="tab">Donar</Tab>
          <Tab className="tab">Xot-dog</Tab>
          <Tab className="tab">Free</Tab>
          <Tab className="tab">Drink</Tab>
          <Tab className="tab">Salad</Tab>
          <Tab className="tab">Bread</Tab>
          <Tab className="tab">Sauce</Tab>
        </TabList>
        <TabPanel className={({ isActive }) => isActive ? "active" : ""}>
            <div className="lavash-div">
                <div className="vash-div">
                    <img src={lavash} alt="" />
                    <h2>Hot spicy fried rice with omelet</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={lavash1} alt="" />
                    <h2>Spicy instant noodle with</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={lavash2} alt="" />
                    <h2>constant noodle special omelette</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.9 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={lavash3} alt="" />
                    <h2>noodle with spinach</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>0.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={lavash4} alt="" />
                    <h2>Salted Pasta with mushroom sauce </h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel className={({ isActive }) => isActive ? "active" : ""}>
            <div className="lavash-div">
                <div className="vash-div">
                    <img src={desert} alt="" />
                    <h2>x owls available</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>3.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert1} alt="" />
                    <h2>Salted Pasta with mushroom sauce</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert2} alt="" />
                    <h2>Beef dumpling in hot soup</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>3.9 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert3} alt="" />
                    <h2>Healthy noodle with spinach leaf</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert4} alt="" />
                    <h2>Hot spicy fried rice with omelet</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert5} alt="" />
                    <h2>Salted Pasta with mushroom sauce</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel className={({ isActive }) => isActive ? "active" : ""}>
            <div className="lavash-div">
                <div className="vash-div">
                    <img src={set} alt="" />
                    <h2>Spicy seasoned seafood noodles</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set1} alt="" />
                    <h2>x owls available</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>3.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set2} alt="" />
                    <h2>Salted Pasta with mushroom sauce</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.9 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set3} alt="" />
                    <h2>Healthy noodle with spinach leaf</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set4} alt="" />
                    <h2>Hot spicy fried rice with omelet</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set5} alt="" />
                    <h2>Spicy instant noodle with vegetables</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set6} alt="" />
                    <h2>constant noodle special omelette</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel className={({ isActive }) => isActive ? "active" : ""}>
            <div className="lavash-div">
                <div className="vash-div">
                    <img src={xaggi} alt="" />
                    <h2>Hot spicy fried rice with omelet</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi1} alt="" />
                    <h2>x owls available</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi2} alt="" />
                    <h2>Spicy instant noodle with vegetables</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi3} alt="" />
                    <h2>constant noodle special omelette</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi4} alt="" />
                    <h2>noodle with spinach</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi5} alt="" />
                    <h2>Spicy seasoned seafood noodles</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel className={({ isActive }) => isActive ? "active" : ""}>
            <div className="lavash-div">
                <div className="vash-div">
                    <img src={xaggi} alt="" />
                    <h2>Hot spicy fried rice with omelet</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi1} alt="" />
                    <h2>x owls available</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi2} alt="" />
                    <h2>Spicy instant noodle with vegetables</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi3} alt="" />
                    <h2>constant noodle special omelette</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi4} alt="" />
                    <h2>noodle with spinach</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi5} alt="" />
                    <h2>Spicy seasoned seafood noodles</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel className={({ isActive }) => isActive ? "active" : ""}>
            <div className="lavash-div">
                <div className="vash-div">
                    <img src={set} alt="" />
                    <h2>Spicy seasoned seafood noodles</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set1} alt="" />
                    <h2>x owls available</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>3.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set2} alt="" />
                    <h2>Salted Pasta with mushroom sauce</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.9 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set3} alt="" />
                    <h2>Healthy noodle with spinach leaf</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set4} alt="" />
                    <h2>Hot spicy fried rice with omelet</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set5} alt="" />
                    <h2>Spicy instant noodle with vegetables</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set6} alt="" />
                    <h2>constant noodle special omelette</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel className={({ isActive }) => isActive ? "active" : ""}>
            <div className="lavash-div">
                <div className="vash-div">
                    <img src={desert} alt="" />
                    <h2>x owls available</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>3.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert1} alt="" />
                    <h2>Salted Pasta with mushroom sauce</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert2} alt="" />
                    <h2>Beef dumpling in hot soup</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>3.9 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert3} alt="" />
                    <h2>Healthy noodle with spinach leaf</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert4} alt="" />
                    <h2>Hot spicy fried rice with omelet</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert5} alt="" />
                    <h2>Salted Pasta with mushroom sauce</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel className={({ isActive }) => isActive ? "active" : ""}>
            <div className="lavash-div">
                <div className="vash-div">
                    <img src={lavash} alt="" />
                    <h2>Hot spicy fried rice with omelet</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={lavash1} alt="" />
                    <h2>Spicy instant noodle with</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={lavash2} alt="" />
                    <h2>constant noodle special omelette</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.9 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={lavash3} alt="" />
                    <h2>noodle with spinach</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>0.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={lavash4} alt="" />
                    <h2>Salted Pasta with mushroom sauce </h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel className={({ isActive }) => isActive ? "active" : ""}>
            <div className="lavash-div">
                <div className="vash-div">
                    <img src={desert} alt="" />
                    <h2>x owls available</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>3.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert1} alt="" />
                    <h2>Salted Pasta with mushroom sauce</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert2} alt="" />
                    <h2>Beef dumpling in hot soup</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>3.9 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert3} alt="" />
                    <h2>Healthy noodle with spinach leaf</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert4} alt="" />
                    <h2>Hot spicy fried rice with omelet</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert5} alt="" />
                    <h2>Salted Pasta with mushroom sauce</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel className={({ isActive }) => isActive ? "active" : ""}>
            <div className="lavash-div">
                <div className="vash-div">
                    <img src={set} alt="" />
                    <h2>Spicy seasoned seafood noodles</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set1} alt="" />
                    <h2>x owls available</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>3.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set2} alt="" />
                    <h2>Salted Pasta with mushroom sauce</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.9 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set3} alt="" />
                    <h2>Healthy noodle with spinach leaf</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set4} alt="" />
                    <h2>Hot spicy fried rice with omelet</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set5} alt="" />
                    <h2>Spicy instant noodle with vegetables</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set6} alt="" />
                    <h2>constant noodle special omelette</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel className={({ isActive }) => isActive ? "active" : ""}>
            <div className="lavash-div">
                <div className="vash-div">
                    <img src={xaggi} alt="" />
                    <h2>Hot spicy fried rice with omelet</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi1} alt="" />
                    <h2>x owls available</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi2} alt="" />
                    <h2>Spicy instant noodle with vegetables</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi3} alt="" />
                    <h2>constant noodle special omelette</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi4} alt="" />
                    <h2>noodle with spinach</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi5} alt="" />
                    <h2>Spicy seasoned seafood noodles</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel className={({ isActive }) => isActive ? "active" : ""}>
            <div className="lavash-div">
                <div className="vash-div">
                    <img src={xaggi} alt="" />
                    <h2>Hot spicy fried rice with omelet</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi1} alt="" />
                    <h2>x owls available</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi2} alt="" />
                    <h2>Spicy instant noodle with vegetables</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi3} alt="" />
                    <h2>constant noodle special omelette</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi4} alt="" />
                    <h2>noodle with spinach</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={xaggi5} alt="" />
                    <h2>Spicy seasoned seafood noodles</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel className={({ isActive }) => isActive ? "active" : ""}>
            <div className="lavash-div">
                <div className="vash-div">
                    <img src={set} alt="" />
                    <h2>Spicy seasoned seafood noodles</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set1} alt="" />
                    <h2>x owls available</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>3.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set2} alt="" />
                    <h2>Salted Pasta with mushroom sauce</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.9 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set3} alt="" />
                    <h2>Healthy noodle with spinach leaf</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set4} alt="" />
                    <h2>Hot spicy fried rice with omelet</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set5} alt="" />
                    <h2>Spicy instant noodle with vegetables</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={set6} alt="" />
                    <h2>constant noodle special omelette</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel className={({ isActive }) => isActive ? "active" : ""}>
            <div className="lavash-div">
                <div className="vash-div">
                    <img src={desert} alt="" />
                    <h2>x owls available</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>3.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert1} alt="" />
                    <h2>Salted Pasta with mushroom sauce</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert2} alt="" />
                    <h2>Beef dumpling in hot soup</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>3.9 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert3} alt="" />
                    <h2>Healthy noodle with spinach leaf</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>2.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert4} alt="" />
                    <h2>Hot spicy fried rice with omelet</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>9.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
                <div className="vash-div">
                    <img src={desert5} alt="" />
                    <h2>Salted Pasta with mushroom sauce</h2>
                    <p>Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div>
                        <h4>5.29 сум</h4>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}
export default Tablist;