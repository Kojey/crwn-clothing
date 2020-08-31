import React from 'react';
import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss'

import {ISection} from '../../api/section.interface'
import SECTIONS from './sections.data';

function Directory() {
  const sections: ISection[] = SECTIONS;

  return(
      <div className="directory-menu">
        {sections.map(section =>
          <MenuItem key={section.id} section={section} />)}
      </div>
    );
}

export default Directory;