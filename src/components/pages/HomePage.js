import React, { Component } from 'react';
import RestaurantView from '../widgets/restaurant/RestaurantView';
import style from './HomePage.css';
import Select from '../widgets/form/Select';
import { getListOfRestaurants } from '../../utils/Api';

const sortOptions = {
    name: 'By Name',
    rating: 'By Rating'
};

export default class HomePage extends Component {
    state = {
        data: [],
        sort: 'name',
        filters: new Set(),
        filter: ''
    };

    async componentDidMount() {
        const body = await getListOfRestaurants();
        let filters = [];
        body.data.map(restaurant => {
            filters = filters.concat(restaurant.general.categories[0].split(','));
        });
        console.log(body);
        this.setState({
            data: body.data,
            filters: new Set(filters)
        });
    }

    onChange = ({ currentTarget: { value, name } }) =>
        this.setState({
            [name]: value
        });

    getSortedAndFilteredArray = () => {
        const {data, filter, sort} = this.state;
        return data
            .filter(restaurant => !filter || restaurant.general.categories[0].includes(filter))
            .sort((a,b) => {
                if (sort === 'name') {
                    if (a.general.name === b.general.name) {
                        return 0;
                    } else {
                        return a.general.name > b.general.name ? 1 : -1;
                    }
                } else {
                    return b.rating.average - a.rating.average;
                }
            });
    };

    renderRestaurants = () => this.getSortedAndFilteredArray().map(el => <RestaurantView item={el} />);

    render() {
        return (
            <div>
                <div>Logo</div>
                <div className={style.contentWrapper}>
                    <div className={style.filtersContainer}>
                        <Select
                            value={this.state.sort}
                            name="sort"
                            onChange={this.onChange}
                            options={sortOptions}
                        />
                        <Select
                            value={this.state.filter}
                            name="filter"
                            onChange={this.onChange}
                            placeholder="Filter"
                            options={[...this.state.filters]}
                        />
                    </div>
                    <div className={style.restaurantsList}>
                        {this.renderRestaurants()}
                    </div>
                </div>
            </div>
        )
    }
}
