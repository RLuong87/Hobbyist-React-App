import React, { useContext, useEffect, useState } from 'react';
import Container from '../common/Container';
import Splash from '../common/Splash';
import splashImg from '../../assets/fishing/rods.jpg';
import { AuthContext } from '../Providers/AuthProvider';
import HomeContent from './HomeContent';
import { apiHostUrl } from '../../config';
import Spinner from '../faCommon/Spinner';
import axios from 'axios';
import BorderCard from '../common/BorderCard';

const Home = () => {

  const [auth] = useContext(AuthContext)
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const _getContent = async () => {
      try {
        const res = await axios.get(`${apiHostUrl}/api/content`,
          {
            headers: {
              "Authorization": `Bearer ${auth.token}`
            }
          })
        setContent(res.data)
        console.log(res.data);
        setLoading(false);
      } catch (err) {
      }
    }
    setLoading(true)
    _getContent()
  }, [])

  const display = () => {
    return content.map(con => <HomeContent contents={con} key={con.id} />)
  }

  return (
    <Container >
      <Splash image={splashImg} style={{
        color: "#f1f1f1",
        height: "100vh",
      }}>
        <h1 style={{
          margin: 100,
          textShadow: '1px 1px black',
          textAlign: 'center',
          fontSize: 70,
          color: "gold",
        }}>
          Welcome to Hooked!
        </h1>
      </Splash>
        <div>
          {typeof content.main != "undefined"
            ?
            <Spinner />
            :
            display()
          }
        </div>
      <div className='box1'>
        <h1 style={{
          textShadow: '1px 1px black',
          textAlign: 'center',
          fontSize: 50,
          color: "gold",
        }}>
          When and Where to Fish?</h1>
        <h2 style={{
          textAlign: "center",
        }}>
          Fishing activities have always been heavily dependent on the weather, both in terms of when it’s even possible and safe to engage in the activity, but also when and where to fish to maximize the catch. <br />
        </h2>
        <h2 style={{
          textAlign: "center"
        }}><br />For more information on rules and regulations or to obtain a fishing license in RI, please visit <br />&nbsp;
          <a href='http://www.dem.ri.gov/programs/managementservices/licenses/fishing-licenses.php'>
            www.dem.ri.gov
          </a>
        </h2>
      </div>
      <footer>
        <div className="footer">
          <h1>
            Built
          </h1>
          <span role='img' aria-label='love'>
          </span>
          with
          💚
          by Richies Luong
        </div>
      </footer>
    </Container>
  )
}

export default Home;