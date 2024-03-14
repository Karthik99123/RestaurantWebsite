import React from 'react'
import Layout from '../components/Layout/Layout';
import {m, Box,Typography,TableContainer,Table,TableHead,TableRow,TableCell,Paper,TableBody} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:5,ml:10,"& h4":{fontWeight:"bold",mb:2}}}>
          <Typography>
             Contact My Restaurant
          </Typography>
          <p>
          Our team is headed up by a married couple who love Jesus and feel 
          God’s calling on their lives to serve Him in what they do best – design & websites.
           We currently have seven team members with a myriad of 
          skills and talents who each bring something unique to the table.
          </p>
        </Box>
        <Box sx={{ m : 3,width:"600px" ,ml:10,"@media (max-width:600px)":{
          width:'300px'
        }}}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black',color:'white',}} align="center">
                    Contact Details
                  </TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon  sx={{color:"red",pt:1}}/> 1800-000-0999 (toolfree)
                  </TableCell>
                 </TableRow>
                 <TableRow>
                 <TableCell>
                    < EmailIcon sx={{color:"blue",pt:1}}/> help@myrest.com
                  </TableCell>
                 </TableRow>
                 <TableRow>
                 <TableCell>
                    < CallIcon sx={{color:"brown",pt:1}}/> 7654323456
                  </TableCell>
                 </TableRow>
              </TableBody>

            </Table>
           
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact