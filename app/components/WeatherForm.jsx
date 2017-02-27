const React = require('react');

const WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        let location = this.refs.location.value;

        if(location.length > 0){
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text"
                       ref="location"
                       placeholder="Enter city name"/>
                <button className="hollow button expanded">Get Weather</button>
            </form>
        );
    }
});

module.exports = WeatherForm;
