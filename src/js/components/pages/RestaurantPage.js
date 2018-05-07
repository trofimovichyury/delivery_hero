import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RestaurantView from '../widgets/restaurant/RestaurantView';
import RestaurantProductList from '../widgets/restaurant/RestaurantProductList';
import { getRestaurantInfo } from '../../utils/Api';

export default class RestaurantPage extends Component {
    state = {
        data: null
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const data = await getRestaurantInfo(id);
        console.log(data);
        this.setState({ data });
    }

    render() {
        const { data } = this.state;
        if (!data) {
            return null;
        }
        return (
            <div>
                <RestaurantView item={data} />
                <RestaurantProductList item={data} />
            </div>
        )
    }
};

RestaurantPage.propTypes = {
    match: PropTypes.object
};
