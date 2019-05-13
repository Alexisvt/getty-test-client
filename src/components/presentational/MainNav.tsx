import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => (
  <List>
    <ListItem
      button={true}
      ContainerComponent={<NavLink to="/" activeClassName="is-active" exact={true} />}
    >
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="home" />
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="home" />
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="home" />
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="home" />
    </ListItem>
  </List>
);

export default MainNav;
