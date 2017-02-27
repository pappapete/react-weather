const React = require('react');

// const About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         )
//     }
// });

// component is simple presentation component,
// then can use stateless functional component

const About = (props) => {
    return (
        <div>
            <h3>About</h3>
            <p>Welcome to the About Page</p>
        </div>
    )
};

module.exports = About;