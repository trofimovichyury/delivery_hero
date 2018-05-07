import React from 'react';
import PropTypes from "prop-types";
import style from './RestaurantProductList.css';
import RestaurantSectionItems from './RestaurantSectionItems';

const RestaurantProductList = ({ item }) => {
    const renderSections = () => {
        return item.sections.map(el => (
            <div key={el.id}>
                <div className={style.section}>{ el.name }</div>
                <div
                    className={style.itemsContainer}
                ><RestaurantSectionItems items={el.items} /></div>
            </div>
        ));
    };

    return (
        <div className={style.restaurantProductList}>
            { renderSections() }
        </div>
    )
};

RestaurantProductList.propTypes = {
    item: PropTypes.object.isRequired
};

export default RestaurantProductList;
