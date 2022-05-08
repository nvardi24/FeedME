import React from 'react';
import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
        <h1>Feed.Me</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
        <img src={mealsImg} alt='A table full of delicous food!'/>
        </div>
    </React.Fragment>
};

export default Header;