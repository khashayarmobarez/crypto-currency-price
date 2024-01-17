import React, {useState, useEffect} from 'react';
import styles from './Landing.module.css'
import Coin from './Coin';

import { PropagateLoader } from 'react-spinners';

//api
import { getCoin } from '../services/Api';

//components
const Landing = () => {
    
    const [coin, setCoin] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
      const fetchAPI = async() => {
        const data = await getCoin();
        setCoin(data);
      }
  
      fetchAPI()
    }, []);

    const searchHandler = event => {
        setSearch(event.target.value)
    }

    const searchedCoins = coin.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
  
    return (
      <React.Fragment >
        <div className={styles.container}>
            { !coin.length ? 
            <div className={styles.loader}>
                <PropagateLoader
                    color="#1d2120"
                    />  
            </div>
                :
        <div className={styles.container2}>
            <input type='text' placeholder='Search...' value={search} onChange={searchHandler} />
               <div className={styles.coinsContainer}>
            {
                searchedCoins.map(coins => <Coin 
                  key={coins.id}
                  name={coins.name}
                  symbol={coins.symbol}
                  image={coins.image}
                  currentPrice={coins.current_price}
                  marketCap={coins.market_cap}
                  Change24h={coins.price_change_24h}
                  />)
            }
               </div>
            </div>
            }
        </div>
      </React.Fragment>
    );

};

export default Landing;