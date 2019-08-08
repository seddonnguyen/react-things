import React from 'react'
import Card from './Card'

export default function ActiveCard(props) {
  return (
      <React.Fragment>
      <h3>Active Card </h3>
        <Card character={props.character} id="active-card" />
      </React.Fragment>
    );
}