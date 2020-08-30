import React from 'react';
import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss'
import SECTIONS from './sections.data';

class Directory extends React.Component {
  constructor(){
    super();
    this.state = {
      sections: SECTIONS
    }
  }

  render(){ 
    return(
      <div className="directory-menu">
        {this.state.sections.map(({id, ...props}) =>
          <MenuItem key={id} {...props} />)}
      </div>
    );
  }
}

export default Directory;