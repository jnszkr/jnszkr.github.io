

var HomePage = React.createClass({
    onStartClicked: function () {
        this.props.onStateEnd();
    },
    render: function () {
        return <div className="page">
            <div className="button" onClick={this.onStartClicked}>
                {lang.getText("home_startButton")}
            </div>
        </div>
    }
});