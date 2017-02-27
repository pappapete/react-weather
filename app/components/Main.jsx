const React = require('react');
const Navigation = require('Navigation');

const Main = (props) => {
    return(
        <div>
            <Navigation/>
            <div className="row">
                <div className="columns small-12 medium-6 large-4 small-centered">
                    { props.children }
                </div>
            </div>
        </div>
    );
};

module.exports = Main;


// let Main = React.createClass({
//     render: function () {
//         return(
//             <div>
//                 <Navigation/>
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div>
//         );
//     }
// });