import React from 'react'

import './ProfileNav.css';

function ProfieNav() {
  return (
    <div className='ProfileNav'>
        <div className='profileImg'>
            <img src="" alt="" />
        </div>
        <h2 className='personName'>full name</h2>
        <div className='aboutPerson'>about person : Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab qui labore erspiciatis odit a in? Recusandae, voluptatum?</div>
        <div>Followers : 120</div>
        <div>Following : 100</div>
    </div>
  )
}

export default ProfieNav;