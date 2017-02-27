const React = require('react');

const About = () => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>Welcome to the About Page for the React Weather App.</p>

            <p>Blah Blah Blah Blah Blah Blah!</p>
        </div>
    )
};

module.exports = About;

// component is simple presentation component,
// so can use stateless functional component

// const About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         )
//     }
// });
