import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './InfoPage.jsx'
import { useHistory } from 'react-router-dom';
import {Button} from '@mui/material'
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state


function InfoPage() {
const history = useHistory()
  const goBudget = () => {
    history.push('/budget')
}


  return (

    
    <div>
    <List lg={{   width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem align-items="start">
        <ListItemAvatar>
          <Avatar size={100} src={"https://www.usatoday.com/gcdn/presto/2019/06/23/USAT/c3a9f051-bd6c-4b39-b5b9-38244deec783-GettyImages-932651818.jpg?width=660&height=517&fit=crop&format=pjpg&auto=webp"} />
        </ListItemAvatar>
        <ListItemText
          primary="Flights Average Cost"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'center' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                $500 to $1500
              </Typography>
              {" — Create your own budget for flights!"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar size={50} src={"https://image.cnbcfm.com/api/v1/image/106656783-1597073190121-gettyimages-1137475171-GERMANY_UBER.jpeg?v=1659111518&w=740&h=416&ffmt=webp&vtcrop=y"} />
        </ListItemAvatar>
        <ListItemText
          primary="Transportation Average Cost"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                $50 to $200
              </Typography>
              {" — Create your own budget for transportation!"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar size={50} src={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/b4/28/e8/hilton-suites-makkah.jpg?w=500&h=500&s=1"} />
        </ListItemAvatar>
        <ListItemText
          primary="Hotel Average Cost"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                $300 to $800
              </Typography>
              {" — Create your own budget for hotel and lodging!"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar size={50} src={"https://cloud4good.com/wp-content/uploads/2014/03/understanding-the-total-cost-of-ownership.jpg"} />
        </ListItemAvatar>
        <ListItemText
          primary="Total"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                $900 to $2500
              </Typography>
              {' — This is the average cost of a Umrah/Mecca for two weeks '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Button sx={{ color:'white', backgroundColor: 'green',   '&:hover': {
      backgroundColor: '#008183',
    } }} 
         onClick={goBudget}> Create Budget</Button>
     </div>   
    </div>
  );
  
}

export default InfoPage;
