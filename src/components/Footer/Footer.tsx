import { Container, Grid, Link, List, ListItemText } from '@mui/material'
import React from 'react'
import '../../scss/_variables.scss'
import '../../scss/footer.scss'

const Footer = () => (
    <div>
    <div className="footer">
        <Container>
        <Grid container justifyContent="" className="footer">
            <Grid item xs={12} sm={4} md={4} >
                <h2>OpenHackDay <br/> Sri Lanka</h2>
            </Grid>
            <Grid item xs={12} sm={4} md={3} >
                <h3>Docs</h3>
                <List className="list">
                   <Link href="/" className="link">
                        <ListItemText className="list">Tutorial</ListItemText>
                   </Link>          
               </List>
            </Grid>
            <Grid item xs={12} sm={4} md={3} >
                <h3>Community</h3>

                <List className="list">
                   <Link href="/" className="link">
                        <ListItemText className="list">Stack Overflow</ListItemText>
                   </Link>  
                   <Link href="/" className="link">
                        <ListItemText className="list">Discord</ListItemText>
                   </Link>  
                   <Link href="/" className="link">
                        <ListItemText className="list">Twitter</ListItemText>
                   </Link>             
               </List>

            </Grid>
        </Grid>
        </Container>
    </div>
    <Grid container justifyContent="center" style={{padding: "15px"}}>
        Copyright © 2021 OpenHackDay. Built with 🖤 in Sri Lanka.
    </Grid>

    
    </div>
)

export default Footer