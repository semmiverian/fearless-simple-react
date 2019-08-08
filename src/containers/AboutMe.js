import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addIncrement, addDecrement, hitSwapiAPi } from './../store/action'

class AboutMe extends Component {
  state = {
    incrementCounter: 10,
    decrementCounter: 5
  }
  
  add = () => {
    // alert('aku ditambah')
    this.props.addIncrement(this.state.incrementCounter)
  } 

  substract = () => {
    this.props.addDecrement(this.state.decrementCounter)
  }

  componentDidMount() {
    this.props.hitSwapiAPi()
  }
  
  render() {
    const { swapi } = this.props
    console.log(swapi)
    return (
      <div>
        { swapi.loading && <h3>Sabar Dlu mas lagi di proses</h3>}
        <br />
        { !swapi.loading && Object.keys(swapi.data).length !== 0 && JSON.stringify(swapi.data)}
        <br />
        { !swapi.loading && Object.keys(swapi.error).length !== 0 && JSON.stringify(swapi.error)}


        <h1>Haloo nama saya {this.props.name}</h1>
        <h2>Counter saya berjumlah {this.props.counter}</h2>

        <button onClick={this.add}>Tambah aku mas</button>
        <button onClick={this.substract}>Kurangi aku mas</button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    name: state.name,
    counter: state.counter,
    swapi: state.swapi
  }
}

const mapDispatchToProps = {addIncrement, addDecrement, hitSwapiAPi}


export default connect(mapStateToProps, mapDispatchToProps)(AboutMe)
