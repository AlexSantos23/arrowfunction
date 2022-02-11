import React, {Component} from 'react'

class App extends Component {
  mensagem = (nome) => {
    return <h1>Seja bem vindo(a) {nome}</h1>
  }
  calc = (x) => {
    return x*2
  }
  render(){
    return(
      <div>
        {this.mensagem("Alex")}
        <h1>{this.calc(23)}</h1>
      </div>
    )
  }
}
export default App