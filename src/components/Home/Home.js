import React, { useContext, useEffect, useState } from 'react';
import Container from '../common/Container';
import splashImg from '../../assets/fishing/rods.jpg';
import { AuthContext } from '../Providers/AuthProvider';
import HomeContent from './HomeContent';
import { apiHostUrl } from '../../config';
import Spinner from '../faCommon/Spinner';
import axios from 'axios';

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
    _getContent()
  }, [])

  const display = () => {
    return content.map(con => <HomeContent contents={con} key={con.id} />)
  }

  return (
    <div className='home-pic'>
      <div>
        {typeof content.main != "undefined"
          ?
          <Spinner />
          :
          display()
        }
      </div>
      <div className='box1'>
        <div>
          <h1 style={{
            textShadow: '1px 1px black',
            textAlign: 'center',
            fontSize: 50,
            color: "gold",
          }}>
            When and Where to Fish?
          </h1>
        </div>
        <h2 style={{
          textAlign: "center",
        }}>
          Fishing activities have always been heavily dependent on the weather, both in terms of when it’s even possible and safe to engage in the activity, but also when and where to fish to maximize the catch. <br />
        </h2>
        <h2 style={{
          textAlign: "center"
        }}><br />For more information on how to obtain a fishing license in RI, please visit <br />&nbsp;
          <a href='http://www.dem.ri.gov/programs/managementservices/licenses/fishing-licenses.php'>
            www.dem.ri.gov
          </a>
        </h2>
      </div>
    </div>
  )
}

export default Home;