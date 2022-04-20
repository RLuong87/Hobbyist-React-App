import React, {useContext} from 'react';
import Container from '../common/Container';
import Splash from '../common/Splash';
import splashImg from '../../assets/outdoors/surfer.jpg';
import { AuthContext } from '../Providers/AuthProvider';


const Home = () => {

  const [auth] = useContext(AuthContext)

  return (
    <Container >
        <Splash image={splashImg} style={{
          color: "#f1f1f1",
          height: "100vh",
        }}>
          <div className='search-box'>
            <input 
              type="text"
              className="search-bar"
              placeholder="Search..."
              // onChange={e => setQuery(e.target.value)}
              // value={}
              // onKeyPress={search}
            />
          </div>
          <h1 style={{ 
            textShadow: '1px 1px black',
            textAlign: 'center',
            fontSize: 70,
            color: "gold"
        }}>
            Welcome to Hooked!
          </h1>
          <h2 style={{ 
            textShadow: '1px 1px black',
            textAlign: 'center'
             }}>
            A place for you and your hobby!
            <h2>{auth.token}</h2>
          </h2>
        </Splash>
    </Container>
  )
}

export default Home;