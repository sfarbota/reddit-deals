import React, { useState } from 'react';
import ImageButton from '../components/ImageButton';
import '../App.css';

function Home() {
  const [url, setUrl] = useState('');

  return (
    <div className="App">
      <h1 className="mt-4 mb-4 d-flex justify-content-center">Reddit Deals</h1>
      <ImageButton changeUrl={x => setUrl(x)} />
    </div>
  );
}

export default Home;
