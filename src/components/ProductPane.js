import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Typography } from '@material-ui/core';
import ProductItem from './ProductItem';

const GET_PRODUCTS = gql`
  {
    products {
      sku
      title
      image_urls
      options {
        color
      }
      tags
      details
      price
      avail
      category
      reviews {
        sku
        title
        author
        rating
        body
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.complex,
    }),
  },
  paper: {
    height: 200,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
  thumb: {
    height: 150,
    width: 150,
  },
  product: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 5px 5px 5px",
  }
}));

export default function SpacingGrid(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

//   const handleChange = (event) => {
//     setSpacing(Number(event.target.value));
//   };

const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (

        <Grid container className={classes.root}spacing={spacing}>
          {data.products.map((product) => (
            <ProductItem product={product}/>
          ))}
        </Grid>
        
  );
}
