import React, {useEffect} from 'react';
import HomepageLayout from '../layouts/HomepageLayout';
import modalVisible$ from "../observables/modalVisible$";

function Home() {

  useEffect(() =>{
    return () => {
      modalVisible$.next(false)
    }
  },[])

  return (
    <HomepageLayout />
  );
}

export default Home;
