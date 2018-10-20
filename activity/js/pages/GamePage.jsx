/**
 *
 * Game page
 *
 */
var GamePage = React.createClass({
  getInitialState: function() {
    return { freeToRob: false, ready: false };
  },
  onTimeElapsed: function() {
    this.props.onStateEnd();
  },
  render: function() {
    return (
      <div className="page">
        <Timer initCountdown={Game.gameTime} onEnd={this.onTimeElapsed} />
      </div>
    );
  }
});
