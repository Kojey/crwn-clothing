import React from 'react';
//@ts-ignore
import {withRouter} from 'react-router-dom';

import {ISection} from '../../api/section.interface'

import './menu-item.styles.scss';

interface MenuItemProps {
  section: ISection
  history?: any
  match?: any
}
const MenuItem = (props: MenuItemProps) => (
  <div className={`${props.section.size} menu-item`}
        onClick={() => props.history.push(`${props.match.url}${props.section.linkUrl}`)}>
    <div  style={{
          backgroundImage: `url(${props.section.imageUrl})`
        }} className="background-image"/>
    <div className="content">
      <h1 className="title">{props.section.title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem);