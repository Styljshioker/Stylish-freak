import React from 'react';
import { Box, Typography, IconButton, Link, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(4),
  },
  footer: {
    marginTop: 'auto',
    textAlign: 'center',
    display: 'flex',
    
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  section: {
    marginBottom: theme.spacing(2),
    textAlign: 'left',
  },
  socialIcons: {
    '& > *': {
      marginRight: theme.spacing(1),
      color: theme.palette.primary.contrastText,
    },
  },
  link: {
    color: theme.palette.primary.contrastText,
    margin: theme.spacing(1, 0),
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  divider: {
    margin: theme.spacing(2, 0),
    backgroundColor: theme.palette.primary.contrastText,
    height: 2,
    width: '100%',
  },
  copyright: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.container}>
      <Box className={classes.footer}>
        <Divider className={classes.divider} />
        {/* StylishFreak */}
        <Box className={classes.section}>
          <Typography variant="h6" gutterBottom>
            StylishFreak
          </Typography>
          <Box className={classes.socialIcons}>
            <Link
              href="https://t.me/StylishFreak"
              target="_blank"
              className={classes.link}
            >
              <TelegramIcon fontSize="large" />
            </Link>
            <Link
              href="https://www.facebook.com/StylishFreak"
              target="_blank"
              className={classes.link}
            >
              <FacebookIcon fontSize="large" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/stylishfreak"
              target="_blank"
              className={classes.link}
            >
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link
              href="https://twitter.com/StylishFreak"
              target="_blank"
              className={classes.link}
            >
              <TwitterIcon fontSize="large" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCmLFqJtjV_xUg0LFKzMF1Ew"
              target="_blank"
              className={classes.link}
            >
              <YouTubeIcon fontSize="large" />
            </Link>
            <Link
              href="https://www.instagram.com/StylishFreak/"
              target="_blank"
              className={classes.link}
            >
              <InstagramIcon fontSize="large" />
            </Link>
          </Box>
        </Box>

        {/* Company */}
        <Box className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <Link href="#" className={classes.link}>
            <p>About Us</p>
          </Link>
          <Link href="#" className={classes.link}>
            <p>Blog</p>
          </Link>
        </Box>

        {/* Support */}
        <Box className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Support
          </Typography>
          <Link href="#" className={classes.link}>
            <p>Contact Us</p>
          </Link>
          <Link href="#" className={classes.link}>
            <p>Privacy Policy</p>
          </Link>
          <Link href="#" className={classes.link}>
            <p>Cookies Policy</p>
          </Link>
          <Link href="#" className={classes.link}>
            <p>Terms of Service</p>
          </Link>
        </Box>

        {/* Divider */}
        <Divider className={classes.divider} />

        </Box>
        {/* Copyright */}
        <Typography
          variant="caption"
          gutterBottom
          className={classes.copyright}
        >
          <span>© {new Date().getFullYear()} StylishFreak.com</span>
          <span>Designed By <Link href="https://hooleymass.dev" target="_blank" className={classes.link}>HooleyMass</Link></span>
        </Typography>
    </Box>
  );
};

export default Footer;
