const React = require('react');



const WeatherMessage = ({location, temp}) => {
    // let {location, temp} = props;
    return (
        <h3 className="text-center">
            The temperature in {location} is {temp}&deg;C
        </h3>
    );
};

module.exports = WeatherMessage;

// const WeatherMessage = React.createClass({
//     render: function () {
//         let {location, temp} = this.props;
//
//         return (
//             <p>The temperature in {location} is {temp}&deg;C</p>
//         );
//     }
// });