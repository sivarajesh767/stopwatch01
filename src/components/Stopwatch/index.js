// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {stopwatchElapsedInSeconds: 0, isStopwatchRunning: false}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onMintues = () => {
    const {stopwatchElapsedInSeconds} = this.state
    const mintues = Math.floor(stopwatchElapsedInSeconds / 60)
    if (mintues < 10) {
      return `0${mintues}`
    }
    return mintues
  }
  onSeconds = () => {
    const {stopwatchElapsedInSeconds} = this.state
    const seconds = Math.floor(stopwatchElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  updateButton = () => {
    this.setState(preState => ({
      stopwatchElapsedInSeconds: preState.stopwatchElapsedInSeconds + 1,
    }))
  }

  onStartButton = () => {
    this.timeInterval = setInterval(this.updateButton, 100)
    this.setState({isStopwatchRunning: true})
  }

  onStopButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isStopwatchRunning: false})
  }

  onResetButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isStopwatchRunning: false, stopwatchElapsedInSeconds: 0})
  }

  render() {
    const {isStopwatchRunning} = this.state
    const time = `${this.onMintues()}: ${this.onSeconds()}`

    return (
      <div className="bg-co">
        <div className="co-1">
          <h1 className="heading-1">Stopwatch</h1>
          <div className="time-co">
            <div className="timer-co">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
                className="stop-watch"
              />
              <p className="heading-2">Timer</p>
            </div>
            <h1 className="para-1">{time}</h1>
            <div className="button">
              <button
                type="button"
                onClick={this.onStartButton}
                disabled={isStopwatchRunning}
                className="start-button"
              >
                Start
              </button>
              <button
                type="button"
                onClick={this.onStopButton}
                className="stop-button"
              >
                Stop
              </button>
              <button
                type="button"
                onClick={this.onResetButton}
                className="reset-button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
