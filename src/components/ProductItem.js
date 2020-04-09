import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grow from '@material-ui/core/Grow';
import Zoom from '@material-ui/core/Zoom';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    transition: {
      transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.complex,
      }),
    },
    paperShrunk: {
        height: 200,
        minWidth: 200,
        width: '0%',
        // transition: theme.transitions.create('all', {
        //     easing: theme.transitions.easing.easeInOut,
        //     duration: theme.transitions.duration.standard,
        //     }),
    },
    paperExpanded: {
        height: 400,
        width: '100%',
        minWidth: 1000,
        alignSelf: "center",
        justifySelf: "center",
        // transition: theme.transitions.create('all', {
        //     easing: theme.transitions.easing.easeInOut,
        //     duration: theme.transitions.duration.standard,
        //   }),
    },
    gridItem: {
        transition: theme.transitions.create('all', {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.complex,
          }),
    },
    gridItemExpanded: {
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    imageBox: {
        flex: '.3',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 400,
        marginLeft: '10px'
    },
    detailsBox: {
        flex: '.7',
        padding: "10px 5px 5px 5px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    tinyThumb: {
      width: 50,
    },
    thumb: {
    //   height: 150,
      width: 150,
    },
    largeImage: {
        // height: 300,
        width: '75%',
        // flex: 1
        padding: "10px 5px 5px 5px",
    },
    product: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "10px 5px 5px 5px",
      transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.complex,
      }),
    },
    productExpanded: {
        display: 'flex',
        flexDirection: 'row',
        transition: theme.transitions.create('all', {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.complex,
          }),
    }
  }));

const Product = (props) => {

    const classes = useStyles();
    if (!props.expanded) {
        return (
            <Fade in={!props.expanded} style={{ transitionDelay: !props.expanded ? '500ms' : '0ms' }}>
            <div className={classes.product}>
            <img className={classes.thumb} src={props.product.image_urls[0]}></img>
            <Typography color="secondary">{props.product.title}</Typography>
            </div>
            </Fade>
        )
    }
    else {
        return (
            <Grow in={props.expanded} style={{ transformOrigin: '0 0 0' }} {...(props.expanded ? { timeout: 1000 } : {})}>
            <div className={classes.productExpanded}>
                
                <div className={classes.imageBox}>
                    <Grid container direction='column' xs={1}>
                        {props.product.image_urls.map((url) => (
                            <Grid item>
                                <img className={classes.tinyThumb} src={url}></img>
                            </Grid>
                        ))}
                    </Grid>
                <img className={classes.largeImage} src={props.product.image_urls[0]}></img>
                </div>
                <div className={classes.detailsBox}>
                    <Typography color="secondary">{props.product.title}</Typography>
                    <Typography color="secondary">SKU: {props.product.sku}</Typography>
                    <Typography color="secondary">Desc: {props.product.desc}</Typography>
                    <Typography color="secondary">Price: {props.product.price}</Typography>
                    <Typography color="secondary">URL: {props.product.url}</Typography>
                </div>
            
            </div>
            </Grow>
        )
    }

}

export default function ProductItem(props) {

    const [expanded, setExpanded] = React.useState(false);
    
    const handleExpandItem = () => {
        setExpanded(!expanded);
    }

  const classes = useStyles();
    return (
        <Grid key={props.product.sku} item xs={expanded ? 12 : 2} className={classes.gridItem}>
              <Paper className={clsx(classes.transition, {
                                [classes.paperExpanded]: expanded,
                                [classes.paperShrunk]: !expanded
                                            })} onClick={handleExpandItem}>
                {/* <div className={classes.product}> */}
                <Product expanded={expanded} product={props.product} />
                {/* </div> */}
              </Paper>
            </Grid>
    )

};