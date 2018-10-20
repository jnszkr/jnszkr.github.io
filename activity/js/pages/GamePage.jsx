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
    if (!this.state.freeToRob) {
      this.setState({ freeToRob: true });
    } else {
      this.props.onStateEnd();
    }
  },
  render: function() {
    return (
      <div className="page">
        <Timer
          initCountdown={
            this.state.freeToRob ? Game.gameTime / 2 : Game.gameTime
          }
          onEnd={this.onTimeElapsed}
        />
        {this.state.freeToRob ? <h2>{lang.getText("free_to_rob")}</h2> : null}
      </div>
    );
  }
});
