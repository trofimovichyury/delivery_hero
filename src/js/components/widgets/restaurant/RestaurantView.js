import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import style from './RestaurantView.css';

const renderCategories = item => {
    const categories = item.general.categories || item.info.categories;
    return (
        categories[0].split(',').map((category, i) => (
            <div key={i} className={style.category}>{category}</div>
        ))
    );
};

const renderAddress = address => (
    `${address.city} ${address.street_name || address.streetName} ${address.street_number || address.streetNumber}`
);

const getRestaurantTitleString = item => (
    item.id ?
        (
            <div className={style.restaurantTitle}><Link to={`/restaurant/${item.id}`}>{item.general.name}</Link>{` (${item.rating.average})`}</div>
        ):
        (
            <div className={style.restaurantTitle}>{`${item.info.name} (${item.rating.average})`}</div>
        )
);

const RestaurantView = ({ item }) => {
    const { general, address, info } = item;
    if (!general || !address) {
        return null;
    }
    return (
        <div
            className={style.restaurantView}
        >
            <img
                src={general.logo_uri || info.logoUri}
                className={style.restaurantImage}
            />
            <div className={style.restaurantInfo}>
                { getRestaurantTitleString(item) }
                <div className={style.restaurantAddress}>{ renderAddress(address) }</div>
                <div>{ renderCategories(item) }</div>
            </div>
        </div>
    )
};

RestaurantView.propTypes = {
    item: PropTypes.object.isRequired
};

export default RestaurantView;