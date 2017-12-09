

var PreviewPage = React.createClass({
  onTimeElapsed: function () {
    this.props.onStateEnd();
  },
  render: function () {
    return (
      <div className="page preview">
        <Timer initCountdown = "20" onEnd = { this.onTimeElapsed }></Timer>
        <WordPreview initWord = { Game.getWord() }></WordPreview>
      </div>
    );
  }
});

var WordPreview = React.createClass({
  render: function () {
    return (
        <div className = "wordPreview" >{ this.props.initWord }</div>
    );
  }
});