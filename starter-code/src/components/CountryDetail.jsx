import React from "react";
import { Link } from "react-router-dom";
import countries from '../countries.json';

const CountryDetail = (props) => {
    const getCountry = (id) => {
        return countries.find(country => country.cca3 === id)
  };

  const { params } = props.match;
  const countrySelected = getCountry(params.id)
  
  return(
      <div>
            <h1>{countrySelected.name.official}</h1>
            <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td>Capital</td>
                    <td>{countrySelected.capital}</td>
                </tr> 
                <tr>
                    <td>Area</td>
                    <td>
                        {countrySelected.area} km2
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                    <ul>
                        {countrySelected.borders.map((country,index) => {
                        return (
                            <li>
                            <Link  to={`/${country}`} key={index}>
                            {getCountry(country).name.official}</Link>
                            </li>
                        )
                        })
                        }
                    </ul>   
                    </td>  
                </tr>    
            </tbody>
            </table>
      </div>
 )
};
  
  
  
  export default CountryDetail;