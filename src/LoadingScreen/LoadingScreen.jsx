import React from 'react';
import styles from './LoadingScreen.module.css';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoadingScreen = () => {
    return (
        <div className={styles.loaderContainer}>
            <AiOutlineLoading3Quarters className={styles.loading} />
        </div>

    )
}

export default LoadingScreen;