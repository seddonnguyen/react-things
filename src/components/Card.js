import React from 'react'

export default function Card(props) {
    const {character} = props
    const handleClick = (character) => {
        props.changeActiveCard(character)
    }
    return (
        <div className='card' onClick={() => props.id ? null : handleClick(character)}>
            <h3>{character.name}</h3>
            <img src={character.image} alt='name' />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
        </div>
    )
}
