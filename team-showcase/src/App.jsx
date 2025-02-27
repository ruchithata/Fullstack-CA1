import { Router, Route } from 'react-router-dom'
import React from 'react';
import TeamMemberCard1 from './components/TeamMemberCard1';
import TeamMemberCard2 from './components/TeamMemberCard2';
import './components/TeamMemberCard.css'

const App = () => {
  return (
    <>
    <Router>
      <Route path='/member1' element={<TeamMemberCard1/>}/>
      <Route path='/member2' element={<TeamMemberCard2/>}/>
    </Router>
    </>
  );
}

export default App;