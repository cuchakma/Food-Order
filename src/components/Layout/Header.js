import React from 'react';
import classes from '../styles/Header.module.css';
import mealsImage from '../../assets/meals.jpeg'
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return ( <>
                <header className={classes.header}>
                    <h1>React Meals</h1>
                    {<HeaderCartButton/>}
                </header>
                <div className={classes['main-image']}>
                    <img src={mealsImage} alt='A Table Full Of Delicious Food!'/>
                </div>
           </> );
};

export default Header;