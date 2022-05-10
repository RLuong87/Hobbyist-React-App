import React, { useContext } from 'react';
import Container from '../common/Container';
import Splash from '../common/Splash';
import splashImg from '../../assets/fishing/rods.jpg';
import { AuthContext } from '../Providers/AuthProvider';
import BorderCard from '../common/BorderCard';

const demURL = "http://www.dem.ri.gov/programs/managementservices/licenses/fishing-licenses.php";

const Home = () => {

  const [auth] = useContext(AuthContext)

  return (
    <Container >
      <Splash image={splashImg} style={{
        color: "#f1f1f1",
        height: "100vh",
      }}>
        <h1 style={{
          textShadow: '1px 1px black',
          textAlign: 'center',
          fontSize: 70,
          color: "gold",
        }}>
          Welcome to Hooked!
        </h1>
      </Splash>
          <BorderCard>
      {/* <div className='search-box'>
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
        // onChange={e => setQuery(e.target.value)}
        // value={}
        // onKeyPress={search}
        />
      </div> */}
      <h1 style={{
        textShadow: '1px 1px black',
        textAlign: 'center',
        fontSize: 50,
        color: "gold",
        // backgroundColor: "#F1F1F1",
      }}>
        When and Where to Fish?</h1>
        <h2 style={{
          textAlign: "center",
        }}>
          Fishing activities have always been heavily dependent on the weather – both in terms of when it’s even possible and safe to engage in the activity, but also when and where to fish to maximize the catch. <br />
        </h2>
        <h2 style={{
          textAlign: "center"
        }}><br />For more information on rules and regulations or to obtain a fishing license in RI, please visit <br />&nbsp;
          <a href='http://www.dem.ri.gov/programs/managementservices/licenses/fishing-licenses.php'>
            RI DEM
          </a>
        </h2>
      </BorderCard>
    </Container>
  )
}

export default Home;