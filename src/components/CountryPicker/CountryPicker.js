import React,{useState, useEffect} from 'react';
import styles from "./CountryPicker.module.css";
import { fetchCountries } from '../../api';

function CountryPicker({handleChangeCountry}) {
 const [countries,setCountries] = useState([]);

 useEffect(()=>{

     const fetchedCountries = async()=>{
         setCountries( await fetchCountries());
     }

     fetchedCountries();
 },[setCountries])

  return (
    <div>
        <form className={styles.form}>
            <select className="form-select" defaultValue="" onChange={(e)=>handleChangeCountry(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country,i)=><option value={country} key={i}>{country}</option>)}
            </select>
        </form>
    </div>
  )
}

export default CountryPicker