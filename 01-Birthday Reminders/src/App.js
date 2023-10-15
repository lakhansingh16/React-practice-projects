import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [birthdayData,setBirthdayData] = useState(data)
  const clearBirthdays = ()=>{
    setBirthdayData([])
  }
  return <main>
    <section className="container">
      <h3>{birthdayData.length} birthdays today</h3>
      {birthdayData.map((item)=>{
        return <List key={item.id} name={item.name} age={item.age} image={item.image}></List>
      })}
      <button onClick={clearBirthdays}>Clear all</button>
    </section>
  </main>;
}

export default App;
