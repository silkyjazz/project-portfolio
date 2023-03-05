import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// library.add(fab, fas);

export default function Footer() {

    const iconStyle= {
        margin: "10px",
    }
  return (
    <footer>
      <p style={{ display: 'flex', justifyContent: 'center' }}>
        <FontAwesomeIcon icon={['fab', 'github']}  size="2x" style={iconStyle}/>
        <FontAwesomeIcon icon={['fab', 'linkedin']}  size="2x" style={iconStyle}/>
        <FontAwesomeIcon icon={['fa', 'envelope']} size="2x" style={iconStyle}/>
      </p>
    </footer>
  );
}


