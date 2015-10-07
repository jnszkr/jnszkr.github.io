
var Application = React.createClass({
    getInitialState: function () {
        var gameStates = [
            "home", "preview", "game", "gameEnd"
        ];
        return {currentState: 0, gameStates: gameStates};
    },
    nextState: function () {
        var currState = this.state.currentState;

        currState = currState === this.state.gameStates.length ? 0 : this.state.currentState + 1;

        this.setState({currentState: currState});
    },
    render: function () {
        var currState = this.state.gameStates[this.state.currentState],
            currentPage;

        switch (currState) {
            case "preview":
                currentPage = <PreviewPage onStateEnd={this.nextState}></PreviewPage>;
                break;
            case "game":
                currentPage = <GamePage onStateEnd={this.nextState}></GamePage>;
                break;
            default:
                currentPage = <HomePage onStateEnd={this.nextState}></HomePage>;
                break;
        }
        return (
            <div>
                <Logo></Logo>
                {currentPage}
            </div>
        );
    }
});


React.render(<Application/>, document.getElementById('app'));