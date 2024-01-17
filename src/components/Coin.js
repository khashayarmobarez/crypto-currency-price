import React from 'react';
import styles from './Coins.module.css'

const Coin = ({name,image,symbol,marketCap,currentPrice,Change24h}) => {
    return (
        <div className={styles.coin}>
            <img src={image} alt={name}/>
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>$ {currentPrice.toLocaleString()}</span>
            <span className={Change24h > 0 ? styles.Change24hGreen : styles.Change24hRed}>{Change24h.toFixed(2)}%</span>
            <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
        </div>
    );  
};

export default Coin;