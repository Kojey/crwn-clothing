import React from 'react';
import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss'
import SECTIONS from './sections.data';

function Directory() {
  // const [sections, setSections] = useState(SECTIONS)
  const sections = SECTIONS;

  return(
      <div className="directory-menu">
        {sections.map(({id, ...props}) =>
          <MenuItem key={id} {...props} />)}
      </div>
    );
}

export default Directory;