/**
 *
 * Timer component
 *
 */


var Timer = React.createClass({
  getInitialState: function () {
    return { elapsed: 0, countdown: this.props.initCountdown };
  },
  componentDidMount: function () {
    this.state.start = Date.now();
    this.timer = setInterval(this.tick, 100);
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
  },
  tick: function () {
    if (this.state.elapsed >= this.state.countdown) {
      this.props.onEnd();
    } else {
      this.setState({elapsed: Math.round((new Date() - this.state.start) / 1000)});
    }
  },
  render: function () {
    var t, val,
      seconds = this.state.countdown - this.state.elapsed,

    val = (t = Math.floor(seconds / 60) + "").length === 1 ? "0" + t : t;
    val += (t = seconds % 60 + "").length === 1 ? ":0" + t : ":" + t;

    return (
      <div className = "timer" >
        { val }
      </div>
    );
  }
});
