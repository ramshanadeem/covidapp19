import React from 'react';
import './App.css';
import {Cards, Chart, Countries} from './components'
import {getAllData} from './Api'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }  

  async componentDidMount() {
    const data = await getAllData();
    console.log(data)
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await getAllData(country);

    this.setState({ data, country: country });
  }
  render(){
    const { data, country } = this.state;
  return (
    <div style={{backgroundColor:'#9dfffc',color:'white'}} className="App">
     
        <img style={{width:'100%',height:'400px'}} src="https://image.freepik.com/free-vector/covid-19-coronavirus-outbreak-design-with-virus-blood-cell-microscopic-view-shiny-red-background-2019-ncov-corona-virus-illustration-dangerous-sars-epidemic-theme-banner_1314-2654.jpg"></img>
            <Countries handleCountryChange={this.handleCountryChange} />
      <Cards data={data} />
      <Chart data={data} country={country} />
      
      </div>
  );
  }
}

export default App;
