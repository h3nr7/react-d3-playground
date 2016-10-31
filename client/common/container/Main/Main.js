import React from 'react'
import './Main.scss'

export default class Main extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    console.log('amamam')
  }

  render() {
    return(
      <div className="main__container">
        <h1>Hello!</h1>
      </div>
    )
  }
}
