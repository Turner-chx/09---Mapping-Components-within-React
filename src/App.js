import React from 'react';
import Contact from './components/Contact';

import './style.css';

const contactInfo = [
  { name : "Emmanuel", email : "emmanuel@email.com", phone : "552312354", isDeletable : true},
  { name : "Johana",email :"johana@email.com", phone : "92034902",isDeletable : false},
  { name : "Lucas",email :"lucas@email.com", phone :"234983499",isDeletable : true},
  { name : "Marie",email :"marie@email.com", phone :"238942384",isDeletable : false},
  { name : "Pedro",email :"pedro@email.com", phone :"934584875",isDeletable : true}
];

export default function App() {
  return (
    <div>
      <h1>My contacts list 📱</h1>

      <div id="container">
        {
          contactInfo.map((contactInfo,index) => (
            <Contact 
              name={contactInfo.name}
              email={contactInfo.email}
              phone={contactInfo.phone}
              isDeletable={contactInfo.isDeletable}
            />
          ))
        }
      </div>
    </div>
  );
}
