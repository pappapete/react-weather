const React = require('react');
const {Link} = require('react-router');

const Examples = () => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Let's celebrate React with some examples</p>
            <ol>
                <li>
                    <Link to="/?location=sydney">Sydney, Australia</Link>
                </li>
                <li>
                    <Link to="/?location=tulum">Tulum, Mexico</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;

// const Examples = React.createClass({
//     render: function () {
//         return (
//           <h3>Examples Component</h3>
//         );
//     }
// });