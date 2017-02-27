const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('OpenWeatherMap');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,

        }
    },
    handleSearch: function (location) {
        let self = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location)
            .then( (temp) => {
            self.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, (e) => {
                self.setState({
                    isLoading: false,
                    errorMessage: e.message
                });
        });
    },
    render: function () {
        let {location, temp, isLoading, errorMessage} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp} />;
            }
        }
        
        function renderError () {
            if (typeof errorMessage === 'string') {
                return <ErrorModal/>
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                { renderMessage() }
                { renderError() }
            </div>
        )
    }
});

module.exports = Weather;

