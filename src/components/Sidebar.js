import React from 'react'
import Input from './atoms/Input'
import PokemonHistory from './molecules/PokemonHistory'

const cssStyle = {
  display: 'flex',
  flexDirection: 'column',
  border: 'solid 5px #FF0000',
  borderRadius: '50px',
  backgroundColor: "#FFF",
  padding: '50px 5px 50px 5px',
  margin: '20px'
}

const Sidebar = () => {
  return (
    <div style={cssStyle}>
      <div>
        <img src="https://camo.githubusercontent.com/1a4b11888ddf9f2b7a9353d6b69503e634e8704c/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67" style={{ width: '100px' }} />
      </div>
      <div>
        <Input />
      </div>
      <PokemonHistory />
    </div>
  );
}

export default Sidebar;