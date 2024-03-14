import React from 'react'
import Layout from '../components/Layout/Layout';
import {Box,Typography} from '@mui/material';

const About = () => {
  return (
    <Layout>
        <Box  sx={{my:15,
              textAlign:"center",
              p:2,
              "& h4":{
                fontWeight:'bold',
                my:2,
                fontSize:"1.3rem"
              },
              "& p":{
                textAlign:'justify'
              },
              "@media (max-width:600px)":{
                mt:0,
                "& h4":{
                  fontSize:'1.5rem'
                }
              }
        }}>
          <Typography variant='h4'>
            Welcome to My Restaurant
          </Typography>
          <p>
          Our heart and desire is to see people become disciples of Jesus Christ. 
          Our non-profit’s role in this  is to equip local churches to fulfill the
           Great Commission. Our world has never been more connected as now and technology 
           never more advanced. We believe the message of the Gospel can be more readily 
           available to people all over the world through Church websites. The average
            American spends 32 hours per month on the Internet, imagine if you could 
            reach them for just a few minutes to share the Gospel. It’s more than
             a possibility. Your church can begin to use the Internet as a ministry 
             and tool to reach thousands of unsaved people. That’s what we’re all 
             about and that’s why we do it!

          </p>
          <br />
          <p>

          We believe God has called us with a purpose to equip local churches to
           use the web effectively by getting them set up with creative and functional
            websites they can use right away. We know that the average church doesn’t have 
            a web developer on staff; It’s Pastors, lay people, youth leaders or the sound 
            guy who is in charge of the church website. We also know by experience that getting
             it right is an arduous task. We partner with church leadership teams by giving them 
             a simple, effective path to getting the message of their church to the local area and 
             the world!
          </p>

        </Box>
    </Layout>
  )
}

export default About