import React from 'react'
import PokemonContext from '../providers/PokemonContext';

const cssStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  border: 'solid 5px #FF0000',
  borderRadius: '50px',
  backgroundColor: "#FFF",
  padding: '50px 5px 50px 5px',
  margin: '20px'
}

const cssTitleStyle ={
  fontFamily : 'VT323',
  textTransform: 'capitalize',
  alignItems: 'center',
  fontSize: '36px',
  display: 'flex'
}

const PokemonView = () => {
  return (
    <div style={cssStyle}>
      <PokemonContext.Consumer>
        {({ selectedPokemon }) => {
          if (selectedPokemon == null)
            return <div>No Pokemon Selected</div>
          else
            return (
              <div>
                <div style={cssTitleStyle}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}><img style={{ maxWidth: '150px'}} src={selectedPokemon.image} /></div>
                  <div style={{ display: 'flex', flexDirection: 'column'}}>{selectedPokemon.name}</div>
                </div>
                <div>
                  <h3>Types : </h3>
                  {selectedPokemon.types.map(type => (
                    <span style={{ backgroundColor: "#CCC", borderRadius: '15px', padding: '5px 10px 5px 5px' }}>{type.type.name}</span>
                  ))}
                </div>
                <div>
                  <audio src={`https://raw.githubusercontent.com/lancelafontaine/PokemonCries/gh-pages/audio/${selectedPokemon.id}.mp3`} autoPlay />
                </div>
              </div>
            )
        }}
      </PokemonContext.Consumer>
    </div>
  );
}

export default PokemonView;