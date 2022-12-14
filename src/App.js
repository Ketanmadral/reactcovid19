import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Cards,Chart,CountryPicker} from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";



class App extends React.Component{
constructor(props){
    super(props);
    
    this.state={
        data:{},
        country:'',
    }
}

  async componentDidMount(){
      const fetchedData = await fetchData();

      this.setState({data:fetchedData});
     }

     handleCountryChange = async (country)=>{

    const fetchedData = await fetchData(country);

    this.setState({data: fetchedData, country: country});
     }


    render(){
        const {data, country} = this.state;
        return(
        <div className={styles.container}>
           <img src={coronaImage} className={styles.image} alt="Covid-19"/> 
         <Cards data={data}/>
         <CountryPicker handleChangeCountry = {this.handleCountryChange}/>
         <Chart data={data} country={country}/>
        </div>
        )
    }
}

export default App;