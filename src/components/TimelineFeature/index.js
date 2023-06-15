import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ComputerIcon from '@mui/icons-material/Computer';
import ConstructionIcon from '@mui/icons-material/Construction';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PowerIcon from '@mui/icons-material/Power';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import {CustomizedDialogs} from '../Dialog/index.js';
import {Responsive} from '../Dialog/index.js';
import {FullScreenDialog} from '../Dialog/index.js';


// import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
// import {useState} from 'react';

import styles from './styles.module.css'

import json from '../../../static/json/timeline.json';

const EventTypeEnum = {
  Important: 'important',
  General: 'general',
  CS: 'cs',
  ME: 'me',
  EE: 'ee'
};

// const handleClick = event => {
//   setIsShown(true)
// }

const generateIcon = (type) => {
  switch(type){
    case EventTypeEnum.Important:
      // return(<TimelineDot color='warning'><PriorityHighIcon/></TimelineDot>);
      return <CustomizedDialogs></CustomizedDialogs>
      break;
    case EventTypeEnum.General:
      // return(<TimelineDot color='info'><TipsAndUpdatesIcon/></TimelineDot>);break;
      return <FullScreenDialog></FullScreenDialog>
    case EventTypeEnum.CS:
      return(<TimelineDot color='success'><ComputerIcon/></TimelineDot>);
      break;
    case EventTypeEnum.ME:
      // return(<TimelineDot color='grey'><ConstructionIcon/></TimelineDot>);
      return <Responsive></Responsive>
      break;
    case EventTypeEnum.EE:
      return(<TimelineDot color='secondary'><PowerIcon/></TimelineDot>);
      break;
    default:
      return(<TimelineDot color='info'><TipsAndUpdatesIcon/></TimelineDot>)
  }
}    

const GenerateTimelineItems = () => {

  return json['2022-2023'].map((event)=> {
    const date = new Date(event.date)

    return(
    <TimelineItem>
      
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <p className={styles.eventDate}>{ date.toDateString() } </p>
        </TimelineOppositeContent>
      
        <TimelineSeparator>
          <TimelineConnector />
            
            {generateIcon(event.type)}
          
          <TimelineConnector />
        </TimelineSeparator>
        
        <TimelineContent className={styles.timelineContent}>
          <h2 className={styles.eventTitle}>{ event.title }</h2>
          <p className={styles.eventDescription}>{ event.description }</p>
        </TimelineContent>
      
      </TimelineItem>

  );
  })
  
}


export default function TimeLine() {

  return (
    <div className={styles.timeline} >
      <Timeline position="alternate">
        <GenerateTimelineItems/>

        
      </Timeline>

    </div>

  );
}