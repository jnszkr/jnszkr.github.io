var Application = React.createClass({
  getInitialState: function() {
    return {
      currentState: 0,
      gameStates: ["home", "preview", "game", "gameEnd"]
    };
  },
  nextState: function() {
    var currState = this.state.currentState;

    currState = (currState + 1) % this.state.gameStates.length;

    console.log("nextState: set current state => ", currState);
    this.setState({ currentState: currState });
  },
  render: function() {
    var currState = this.state.gameStates[this.state.currentState],
      currentPage;

    switch (currState) {
      case "preview":
        currentPage = <PreviewPage onStateEnd={this.nextState} />;
        break;
      case "game":
        currentPage = <GamePage onStateEnd={this.nextState} />;
        break;
      case "gameEnd":
        currentPage = <PreviewPage onStateEnd={this.nextState} result="true" />;
        break;
      default:
        currentPage = <HomePage onStateEnd={this.nextState} />;
        break;
    }
    return (
      <div>
        <Logo />
        {currentPage}
      </div>
    );
  }
});

React.render(<Application />, document.getElementById("app"));
