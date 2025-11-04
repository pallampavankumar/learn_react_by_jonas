import {Link} from 'react-router-dom'
import NavPage from '../Components/NavPage'
const HomePage = () => {
  return (
    <div>
      <NavPage/>
      <h1>Home Page</h1>
      <Link to="/appLayout">Go to App Layout</Link>
    </div>
  )
}

export default HomePage
