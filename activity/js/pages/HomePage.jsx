var HomePage = React.createClass({
  onStartClicked: function() {
    this.props.onStateEnd();
    Game.startNewGame();
  },
  render: function() {
    return (
      <div className="page">
        <button className="btn" onClick={this.onStartClicked}>
          {lang.getText("start_game")}
        </button>
      </div>
    );
  }
});
