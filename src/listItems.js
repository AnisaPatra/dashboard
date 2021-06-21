import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import AssessmentIcon from '@material-ui/icons/Assessment';
import FolderIcon from '@material-ui/icons/Folder';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import CommentIcon from '@material-ui/icons/Comment';
import './listItems.css';


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon className="icon active" />
      </ListItemIcon>
      <ListItemText primary="home" className="active"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssessmentIcon className="icon" />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BusinessCenterOutlinedIcon className="icon" />
      </ListItemIcon>
      <ListItemText primary="Work" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FolderIcon className="icon" />
      </ListItemIcon>
      <ListItemText primary="Folders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EventAvailableIcon className="icon" />
      </ListItemIcon>
      <ListItemText primary="Events" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleAltOutlinedIcon className="icon" />
      </ListItemIcon>
      <ListItemText primary="People" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CommentIcon className="icon" />
      </ListItemIcon>
      <ListItemText primary="Notes" style={{fontFamily:"cursive"}} />
    </ListItem>
    
  </div>
);
