import React from 'react';
import Contact from './components/Contact';

import './style.css';

// 1. populate the following array with the correct data
const contactInfo = [];

export default function App() {
  return (
    <div>
      <h1>My contacts list 📱</h1>

      <div id="container">
        {/* 2. map contactInfo array here and display <Contact /> for each entry in the array*/}
        <Contact
          name="Emmanuel"
          email="emmanuel@email.com"
          phone="552312354"
          isDeletable={true}
        />
        <Contact
          name="Johana"
          email="johana@email.com"
          phone="92034902"
          isDeletable={false}
        />
        <Contact
          name="Lucas"
          email="lucas@email.com"
          phone="234983499"
          isDeletable={true}
        />
        <Contact
          name="Marie"
          email="marie@email.com"
          phone="238942384"
          isDeletable={false}
        />
        <Contact
          name="Pedro"
          email="pedro@email.com"
          phone="934584875"
          isDeletable={true}
        />
      </div>
    </div>
  );
}
