import styles from './Coins.module.css';

export default function TableHeader() {
  return (
    <>
      <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <h1 className={styles.coin_h1}>Crypto Currency   </h1>
              
            </div>
            <div className={styles.coin_data}>
              <p className={styles.coin_price}>Price</p>
              <p className={styles.coin_volume}>Market volume</p>
                <p className={(styles.coin_percent, styles.green)}>
                    24 hrs
                </p>
              <p className={styles.coin_marketcap}>
                Market Capacity
              </p>
            </div>
          </div>
        </div>
    </>
  );
}