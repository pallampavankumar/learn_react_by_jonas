import styles from './CityList.module.css';  
import Spinner from './Spinner';    
import CityItem from './CityItem';  
// eslint-disable-next-line react/prop-types
function CityList( {cities,isLoading} ) {
  if(isLoading){
    return <Spinner/>;
  }
  return (
    <ul className={styles.CityList}>
      {/* eslint-disable-next-line react/prop-types */}
      {cities.map(city=><CityItem city={city} key={city.id}/>)}
    </ul>
  )
}

export default CityList
