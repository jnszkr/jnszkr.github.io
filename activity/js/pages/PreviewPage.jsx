var PreviewPage = React.createClass({
  getInitialState: function() {
    return { countdown: Game.previewTime };
  },
  onTimeElapsed: function() {
    this.props.onStateEnd();
  },
  stopTimer: function stopTimer() {
    console.log("stop timer");
    this.setState({ countdown: 1 });
    console.log(this.state);
  },
  render: function() {
    if (this.props.result)
      return (
        <div className="page preview">
          <h2>{lang.getText("solution")}</h2>
          <h1>
            <WordPreview initWord={Game.getWord()} />
          </h1>
          <button className="btn" onClick={this.props.onStateEnd}>
            {lang.getText("ok")}
          </button>
        </div>
      );
    else
      return (
        <div className="page preview">
          <Timer
            initCountdown={this.state.countdown}
            onEnd={this.onTimeElapsed}
          />
          <WordPreview initWord={Game.getWord()} />
          <button className="btn" onClick={this.stopTimer}>
            {lang.getText("i_am_ready")}
          </button>
        </div>
      );
  }
});

var WordPreview = React.createClass({
  render: function() {
    return <div className="wordPreview">{this.props.initWord}</div>;
  }
});
