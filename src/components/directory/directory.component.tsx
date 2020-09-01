import React from 'react';
//@ts-ignore
import {connect} from 'react-redux'
import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss'

import {ISection} from '../../api/interface'
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

interface DirectoryProps {
  sections: ISection[]
}
const Directory = (props: DirectoryProps) =>(
      <div className="directory-menu">
        {props.sections?.map(section =>
          <MenuItem key={section.id} section={section} />)}
      </div>
);

const mapPropsToState = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapPropsToState)(Directory);