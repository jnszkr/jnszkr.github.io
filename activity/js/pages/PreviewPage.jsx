

var PreviewPage = React.createClass({
    onTimeElapsed: function () {
        this.props.onStateEnd();
    },
    render: function () {
        return (
            <div className="page">
                <WordPreview initWord="Tessék"></WordPreview>
                <Timer initCountdown="5" onEnd={this.onTimeElapsed}></Timer>
            </div>
        );
    }
});



var WordPreview = React.createClass({
    render: function () {
        return (
            <div className="wordPreview">{this.props.initWord}</div>
        );
    }
});