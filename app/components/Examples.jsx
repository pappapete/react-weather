const React = require('react');

// const Examples = React.createClass({
//     render: function () {
//         return (
//           <h3>Examples Component</h3>
//         );
//     }
// });

const Examples = (props) => {
    return (
        <div>
            <h3>Examples</h3>
            <p>Let's celebrate React with some examples</p>
        </div>
    )
};

module.exports = Examples;