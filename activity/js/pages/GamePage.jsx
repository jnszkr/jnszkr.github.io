/**
 *
 * Game page
 *
 */
var GamePage = React.createClass({
  onTimeElapsed: function () {
      this.props.onStateEnd();
  },
  render: function () {
    return (
      <div className = "page" >
        <Timer initCountdown = "120" onEnd = { this.onTimeElapsed }></Timer>
      </div>
    );
  }
});
