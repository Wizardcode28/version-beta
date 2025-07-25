import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Avatar,
  Stack
} from '@mui/material';
import {
  Phone,
  LocationOn,
  Email,
  Instagram,
  Facebook,
} from '@mui/icons-material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0f172a',
        color: 'white',
        py: 6,
        px: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="flex-start" justifyContent="space-around">
          
          {/* Logo and Description */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ textAlign: { xs: 'center', lg: 'left' }, marginTop: 10 }}>
              <Stack 
                direction="row" 
                alignItems="center" 
                spacing={2} 
                sx={{ 
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                  mb: 2 
                }}
              >
                <Avatar
                  sx={{
                    width: 140,
                    height: 55,
                    borderRadius: 0,
                    bgcolor: 'transparent'
                  }}
                  alt="ISTE Logo"
                  src="/Images/logo.png"
                  variant="square"
                >
                  
                </Avatar>
              </Stack>
              
              <Typography 
                variant="caption" 
                color="#7a7a7a" 
                sx={{ 
                  display: 'block',
                  lineHeight: 1.5,
                  maxWidth: '300px',
                  mx: { xs: 'auto', lg: 0 }
                }}
              >
                BEST STUDENT'S CHAPTER IN MADHYA PRADESH-CHHATTISGARH REGION FROM 3 CONSECUTIVE YEARS
              </Typography>
            </Box>
          </Grid>

          {/* Contact Us + Divider + Social Links Entity */}
          <Grid item xs={12} lg={8}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 4 }}>

              {/* Contact Us */}
              <Box sx={{ textAlign: 'left' }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    textAlign: 'left',
                    color: '#ea580c',
                    fontWeight: 600,
                    fontSize: 40,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  Contact Us
                </Typography>


                <Stack spacing={2}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1.5}
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    <Phone sx={{ color: '#ea580c', fontSize: 35 }} />
                    <Box>
                      <Typography variant="body2" sx={{
                        fontSize: 17,
                        color: '#b5b5b6',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#ea580c',
                        }
                      }}>
                        Abhinav Rai &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; +91 7909474088
                      </Typography>
                      <Typography variant="body2" sx={{
                        fontSize: 17,
                        color: '#b5b5b6',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#ea580c',
                        }
                      }}>
                        Vanshika Agarwal &nbsp; +91 9828534432
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack
                    direction="row"
                    alignItems="flex-start"
                    spacing={1.5}
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    <LocationOn sx={{ color: '#ea580c', fontSize: 35, mt: 0.5 }} />
                    <Link href="https://maps.app.goo.gl/ZERHwrJJcutMMMig8" sx={{cursor:'pointer', textDecoration:'none'}}  >
                      <Typography variant="body2" sx={{
                        fontSize: 17,
                        color: '#b5b5b6',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#ea580c',
                        }
                      }}>
                        Maulana Azad National Institute Of <br></br>
                        Technology Bhopal, 462003 (M.P.)
                      </Typography>

                    </Link>
                  </Stack>

                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1.5}
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    <Email sx={{ color: '#ea580c', fontSize: 35 }} />
                    <Typography variant="body2" sx={{
                      cursor: 'pointer',
                        fontSize: 17,
                        color: '#b5b5b6',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#ea580c',
                        }
                      }}>
                      istescmanit@gmail.com
                    </Typography>
                  </Stack>
                </Stack>
              </Box>

              {/* Vertical Divider */}
              <Box
                sx={{
                  width: '1px',
                  height: '225px',
                  marginTop: '20px',
                  backgroundColor: '#7a7a7a',
                  display: { xs: 'none', lg: 'flex', md: 'flex' }
                }}
              />

              {/* Social Links */}
              <Box sx={{ textAlign: 'left' }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    textAlign: 'center',
                    color: '#ea580c',
                    fontWeight: 600,
                    fontSize: 40,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  Social Links
                </Typography>


                <Stack spacing={2}>
                  <Link
                    href="https://www.instagram.com/istemanit/"
                    underline="none"
                    color="inherit"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      justifyContent: 'flex-start',
                      '&:hover .icon-wrapper': {
                        transform: 'scale(1.1)',
                      },
                      '&:hover .icon-default': {
                        display: 'none',
                      },
                      '&:hover .icon-hover': {
                        display: 'inline-block',
                      },
                    }}
                  >
                    {/* Icon Wrapper with smooth scaling */}
                    <Box
                      className="icon-wrapper"
                      sx={{
                        width: 30,
                        height: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      {/* Default Icon */}
                      <Instagram className="icon-default" sx={{ color: '#ea580c', fontSize: 35 }} />

                      {/* Hover Image Icon */}
                      <Box
                        component="img"
                        className="icon-hover"
                        src="/Images/instagram.png"
                        alt="Instagram Logo"
                        sx={{
                          width: 30,
                          height: 30,
                          display: 'none',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>

                    <Typography className='social-text' variant="body2" sx={{ fontSize: 20, color: '#b5b5b6' }}>
                      Instagram
                    </Typography>
                  </Link>



                  <Link
                    href="https://www.facebook.com/ISTESCMANIT"
                    underline="none"
                    color="inherit"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      justifyContent: 'flex-start',
                      '&:hover .icon-wrapper': {
                        transform: 'scale(1.1)',
                      },
                      '&:hover .icon-default': {
                        display: 'none',
                      },
                      '&:hover .icon-hover': {
                        display: 'inline-block',
                      },
                      '&:hover .social-text': {
                        color: '#ea580c',
                      }
                    }}
                  >
                    {/* Icon Wrapper with smooth scaling */}
                    <Box
                      className="icon-wrapper"
                      sx={{
                        width: 30,
                        height: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      {/* Default Icon */}
                      <Facebook className="icon-default" sx={{ color: '#ea580c', fontSize: 35 }} />

                      {/* Hover Image Icon */}
                      <Box
                        component="img"
                        className="icon-hover"
                        src="/Images/facebook.svg"
                        alt="Instagram Logo"
                        sx={{
                          width: 30,
                          height: 30,
                          display: 'none',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>

                    <Typography className='social-text' variant="body2" sx={{ fontSize: 20, color: '#b5b5b6' }}>
                      Facebook
                    </Typography>
                  </Link>

                  <Link
                    href="https://www.instagram.com/istemanit/"
                    underline="none"
                    color="inherit"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      justifyContent: 'flex-start',
                      '&:hover .icon-wrapper': {
                        transform: 'scale(1.1)',
                      },
                      '&:hover .icon-default': {
                        display: 'none',
                      },
                      '&:hover .icon-hover': {
                        display: 'inline-block',
                      },
                      '&:hover .social-text': {
                        color: '#ea580c',
                      }
                    }}
                  >
                    {/* Icon Wrapper with smooth scaling */}
                    <Box
                      className="icon-wrapper"
                      sx={{
                        width: 30,
                        height: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      {/* Default Icon */}
                      <LinkedInIcon className="icon-default" sx={{ color: '#ea580c', fontSize: 35 }} />

                      {/* Hover Image Icon */}
                      <Box
                        component="img"
                        className="icon-hover"
                        src="/Images/linkedin.svg"
                        alt="Instagram Logo"
                        sx={{
                          width: 40,
                          height: 40,
                          display: 'none',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>

                    <Typography className="social-text" variant="body2" sx={{ fontSize: 20, color: '#b5b5b6' }}>
                      LinkedIn
                    </Typography>
                  </Link>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* COPYRIGHT */}

      {/* HORIZONTAL DIVIDER */}

      <Box
        sx={{
          width: '100%',
          maxWidth: '960px',
          height: '1px',
          margin: '0 auto',
          marginTop: '5rem',
          backgroundColor: '#7a7a7a',
          display: { xs: 'flex', lg: 'flex', md: 'flex' }
        }}
      />

      <Container sx={{display: 'flex', justifyContent: 'space-evenly', marginTop: '1.5rem', gap: '1.5rem' }} >
        <Link sx={{textDecoration: 'none', cursor: 'pointer', color: '#b5b5b6', fontSize: '20px', fontFamily: 'Roboto', fontWeight: '600' }} > Code Of Conduct Devfolio </Link>
        <Link sx={{textDecoration: 'none', cursor: 'pointer', color: '#b5b5b6', fontSize: '20px', fontFamily: 'Roboto', fontWeight: '600' }} > Rulebook </Link>
      </Container>
      
      <Box
        sx={{
          width: '100%',
          maxWidth: '960px',
          height: '1px',
          margin: '0 auto',
          marginTop: '2rem',
          backgroundColor: '#7a7a7a',
          display: { xs: 'flex', lg: 'flex', md: 'flex' }
        }}
      />

      <Typography variant="caption" align="center" sx={{ mt: 4, display: 'block', color: '#b5b5b6',fontSize: '16px', fontWeight: '600' }}>
        Copyright © 2025 by  <Link href="https://www.istemanit.in/" sx={{textDecoration: 'none', cursor: 'pointer'}} >ISTE SC MANIT</Link> . All rights reserved.
      </Typography>

    </Box>
    
  );
}
