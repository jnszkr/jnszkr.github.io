

var HomePage = React.createClass({
    onStartClicked: function () {
        this.props.onStateEnd();
        Game.startNewGame();
    },
    render: function () {
        return <div className="page">
            <div className="btn" onClick={this.onStartClicked}>
                {lang.getText("home_startButton")}
            </div>
        </div>
    }
});