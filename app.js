class App extends React.Component {

   state = {
      oman:'',
      omany : ['Wygrasz na loterii ','Dobry czas na miłość ','Dobry czas na naukę Reacta '],
      value: '',
    }

    handleDraw = () => {
        const index = Math.round(Math.random()*(this.state.omany.length-1))
        this.setState({
           oman: this.state.omany[index] 
        })
    }

    handleAdd = () => {
        const omany = [...this.state.omany]
        omany.push(this.state.value)
        this.setState({
            omany,
            value: ''
        })
        alert(`Wróżba została dodana`)
    }

    handleInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return(
            <React.Fragment>
               <button className="losuj" onClick={this.handleDraw}>Wylosuj wróżbę na dziś</button>
               <br/>
               <input type="text" value={this.state.value} onChange={this.handleInputChange}></input>
               <button className="dodaj" onClick={this.handleAdd}>Dodaj własną wróżbę</button>
               <br/>
               <br/>
               {this.state.oman ? <label >{this.state.oman}</label> : null}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
