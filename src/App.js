import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import Card from './components/Card';




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ArrayVA: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    let searchValue = document.querySelector("#search-box").value;
  
    fetch("https://api.soundcloud.com/tracks?q=" + searchValue +"&client_id=PGBAyVqBYXvDBjeaz3kSsHAMnr1fndq1")
      .then(response => response.json())
        .then(data => {
          console.log(data)
            this.setState({
              ArrayVA: data.map((item) => (
                <Card 
                  title={item.title}
                  artwork={item.artwork_url}
                  link={item.permalink_url}
                />
              ))
            })
        console.log()
    })
  }
  render(){
    return (
    <div className="App">
      <Searchbar placeholder="Search..." handleSubmit={this.handleSubmit} />

      <div className="cards-container">{this.state.ArrayVA}</div>
    </div>
    )
  }
}






export default App;
