const React = require('react');

// const WeatherMessage = React.createClass({
//     render: function () {
//         let {location, temp} = this.props;
//
//         return (
//             <p>The temperature in {location} is {temp}&deg;C</p>
//         );
//     }
// });

const WeatherMessage = ({location, temp}) => {
    // let {location, temp} = props;
    return (
        <p>The temperature in {location} is {temp}&deg;C</p>
    );
};

module.exports = WeatherMessage;