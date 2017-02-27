const React = require('react');
const Navigation = require('Navigation');

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

const Main = (props) => {
    return(
        <div>
            <Navigation/>
            <h2>Main Component</h2>
            { props.children }
        </div>
    );
};

module.exports = Main;