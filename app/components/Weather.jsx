const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('OpenWeatherMap');

const Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        let self = this;
        this.setState({ isLoading: true });

        openWeatherMap.getTemp(location)
            .then( (temp) => {
            self.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, (errorMessage) => {
                self.setState({ isLoading: false });
                alert(errorMessage);
        });
    },
    render: function () {
        let {location, temp, isLoading} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3>Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp} />;
            }
        }

        return (
            <div>
                <h3>Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch} />
                { renderMessage() }
            </div>
        )
    }
});

module.exports = Weather;

