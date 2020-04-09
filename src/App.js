import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { AppBar, Toolbar, Drawer, IconButton, Typography, Divider, List, ListItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import CategoryIcon from '@material-ui/icons/Category';
import ProductPane from './components/ProductPane';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Collapse from '@material-ui/core/Collapse';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexDirection: 'row'
  },
  appBar: {
    // backgroundColor: "#000000",
    // position: "fixed",
    // display: 'flex',
    // flexDirection: "column",
    // height: "128px",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarLeftDrawerOpen: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarRightDrawerOpen: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarBothDrawersOpen: {
    width: `calc(100% - ${2*drawerWidth}px)`,
    marginLeft: drawerWidth,
    marginRight: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  topSection:{
    position: "fixed",
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    marginTop: "64px",
    right: "0",
    left: "0",
  },
  toolbar: {
    backgroundColor: "#000000",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: "25px 25px 15px 25px",
    color: 'secondary',
    backgroundColor: '#ffffff ',
    justifyContent: "center",
    borderRadius: "5px",
  },
  title: {
    marginLeft: 'auto',
    marginRight:'auto',
  },
  leftMenuButton: {
    marginRight: theme.spacing(2),
  },
  rightMenuButton: {
    marginLeft: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  leftDrawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  rightDrawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    marginTop: '100px',
    padding: theme.spacing(5),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -2*drawerWidth,
  },
  contentLeftDrawerOpen: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentRightDrawerOpen: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
     marginLeft: -2*drawerWidth,
     marginRight: drawerWidth,
  },
  contentBothDrawersOpen: {
    width: `calc(100% - ${2*drawerWidth}px)`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: -drawerWidth,
    marginRight: drawerWidth,
  },
  paper: {
    height: 300,
    width: 300,
  }
}));

export default function App() {

  const classes = useStyles();
  const theme = useTheme();
  const [leftDrawerOpen, setLeftDrawerOpen] = React.useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);
  const [searchBarOpen, setSearchBarOpen] = React.useState(false);

  const handleLeftDrawerOpen = () => {
    setLeftDrawerOpen(true);
  };

  const handleLeftDrawerClose = () => {
    setLeftDrawerOpen(false);
  };

  const handleRightDrawerOpen = () => {
    setRightDrawerOpen(true);
  };

  const handleRightDrawerClose = () => {
    setRightDrawerOpen(false);
  };

  const toggleSearchBar = () => {
    setSearchBarOpen(!searchBarOpen);
  }

  return (
    <div className={classes.root}>
      <div className={classes.topSection}
      >
      <AppBar 
        // position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarLeftDrawerOpen]: leftDrawerOpen && !rightDrawerOpen,
          [classes.appBarRightDrawerOpen]: rightDrawerOpen && !leftDrawerOpen,
          [classes.appBarBothDrawersOpen]: leftDrawerOpen && rightDrawerOpen,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <Button color="primary" startIcon={<CategoryIcon color="primary"/>} onClick={handleLeftDrawerOpen} edge="start"
            className={clsx(classes.leftMenuButton, leftDrawerOpen && classes.hide)}>Categories</Button>
            
          <Typography color="primary" className={classes.title} variant="h6" noWrap>
            Wretched Relics Data Explorer
          </Typography> 
          
          <Button color="primary" startIcon={<LocalOfferIcon color="primary"/>} onClick={handleRightDrawerOpen} edge="end"
            className={clsx(classes.rightMenuButton, rightDrawerOpen && classes.hide)}>Tags</Button>
        </Toolbar>
        
      </AppBar>

      

      <Collapse in={searchBarOpen}>
        <div className={clsx(classes.searchBox)}>
          
            <TextField  color="primary" label="Search" variant="outlined" InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}/>
            <IconButton onClick={toggleSearchBar}>
              <ArrowDropUpIcon />
            </IconButton>
        
        </div>
        </Collapse>
        <IconButton className={clsx(classes.toggleSearchButton, searchBarOpen && classes.hide)} onClick={toggleSearchBar} size="small"
        backgroundColor="#ffffff">
          <SearchIcon fontSize="small"/><ArrowDropDownIcon fontSize="small"/>
        </IconButton>

      </div>
     
      <Drawer
        className={classes.leftDrawer}
        variant="persistent"
        anchor="left"
        open={leftDrawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleLeftDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key="tags">
              <ListItemIcon><LocalOfferIcon></LocalOfferIcon></ListItemIcon>
              <ListItemText primary="Tags" />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key="categories">
              <ListItemIcon><LocalOfferIcon></LocalOfferIcon></ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItem>
        </List>
      </Drawer> 
      <Drawer
        className={classes.rightDrawer}
        variant="persistent"
        anchor="right"
        open={rightDrawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleRightDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key="tags">
              <ListItemIcon><LocalOfferIcon></LocalOfferIcon></ListItemIcon>
              <ListItemText primary="Tags" />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key="categories">
              <ListItemIcon><LocalOfferIcon></LocalOfferIcon></ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItem>
        </List>
      </Drawer>
      <div className={clsx(classes.content, {
          [classes.contentLeftDrawerOpen]: leftDrawerOpen && !rightDrawerOpen,
          [classes.contentRightDrawerOpen]: rightDrawerOpen && !leftDrawerOpen,
          [classes.contentBothDrawersOpen]: leftDrawerOpen && rightDrawerOpen,
        })}>
          <ProductPane/>
        </div>
    </div>
  );
}
