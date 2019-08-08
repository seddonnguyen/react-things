import React, {Component} from 'react'
import CardContainer from './CardContainer'
import ActiveCard from './ActiveCard'

export default class MainContainer extends Component {

  constructor() {
    super()
    this.state = {
      character: {}
    }
  }

  changeActiveCard = (character) => {
    this.setState({
      character,
    })
  }

  render () {
    return(
      <div className='main-container'>
          <CardContainer changeActiveCard={this.changeActiveCard} characters={this.props.characters}/>
          { this.props.characters.length > 0
            ? <ActiveCard character={this.state.character}/>
            : 'No Active Card'
          }
      </div>
        )
  }


}