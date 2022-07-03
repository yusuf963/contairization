import React, { Component } from 'react'
import axios from 'axios'


class Fib extends Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('/api/values', {
      index: this.state.index
    })
    this.setState({ index: '' })

  }
  state = {
    seenIndexes: [],
    values: {},
    index: ''
  }
  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes()
  }
  async fetchValues() {
    const values = await axios.get('/api/values/current')
    this.setState({ values: values.data })
  }
  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all')
    this.setState({
      seenIndexes: seenIndexes.data
    })
  }
  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ')
  }

  renderValue() {
    const enteries = []
    for (let key in this.state.values) {
      enteries.push(
        <div key={key}>
          For index {key} I calculate {this.state.values[key]}
        </div>
      )
    }

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index</label>
          <input
            value={this.state.index}
            onChange={e => this.setState({ index: e.target.value })}
          />
          <button>Sybmit</button>
        </form>
        <h4>Index I Have seen</h4>
        {this.renderSeenIndexes()}
        <h4>Calculate Values:</h4>
        {this.renderValue()}
      </div>

    )
  }
}

export { Fib }