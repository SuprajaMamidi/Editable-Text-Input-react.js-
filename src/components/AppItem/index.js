import {Component} from 'react'

import './index.css'

class AppItem extends Component {
  state = {
    isClicked: false,
    input: '',
  }

  one = event => {
    this.setState({input: event.target.value})
  }

  start = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked, input} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Editable Text Input</h1>

          {isClicked === true ? (
            <div className="input-and-button-container">
              <p>{input}</p>
              <button type="button" onClick={this.start} className="button">
                Edit
              </button>
            </div>
          ) : (
            <div className="input-and-button-container">
              <input type="text" value={input} onChange={this.one} className="input"/>
              <button type="button" onClick={this.start} className="button">
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default AppItem
