import './App.css';
import { useEffect, useState } from 'react';
import IssuePage from './components/IssuePage/IssuePage';
import axios from 'axios';
import data from './data.json';
import InfiniteScroll from "react-infinite-scroll-component";
import Header from './components/Header/Header'

function App() {

  const [issueData, setData] = useState([]);

  useEffect(() => {
    getData();
  },[]);


  const getData = async () => {
    try {
      const response = await axios.get('https://api.github.com/repos/facebook/react/issues');
      setData([...issueData, ...response.data]);
    } catch (error) {
      console.log(error.message);
      setData([...issueData, ...data]);
    }
  }

  return (
    <>
    <Header/>
      <div className="container">
      <InfiniteScroll dataLength={issueData.length} next={getData} hasMore={true} loader={<Loading/>}>
        {issueData.map((issue,idx) => (
          <IssuePage key={idx} issue={issue}/>
        ))}
      </InfiniteScroll>
      </div>
    </>
  );
}

function Loading() {
  return (
    <h1 style={{textAlign: "center"}}>Loading...</h1>
  )
}

export default App;
