const React = require('react');
const {Link, IndexLink} = require('react-router');

const Navigation = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        alert('not yet!');
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                                Get Weather
                            </IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                                Examples
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Search Weather" /></li>
                            <li><input type="submit" className="button" value="Get Weather" /></li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = Navigation;

// let old = (
//     <div>
//         <h2>Navigation</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//         <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//     </div>
// );