import { useRouter } from 'next/router';
import React from 'react'
import data from '../../utils/data';
import Layout from '../../components/Layout';
import NextLink from 'next/link'
import { Grid, Link, List, ListItem, Typography } from '@material-ui/core';
import useStyles from '../../utils/styles';
import Image from 'next/image';

const ProductScreen = () => {
    const classes = useStyles()
    const router = useRouter();
    const {slug} = router.query
    const product = data.products.find(a => a.slug=== slug)
    if(!product){
        return <div>Product Not Found</div>
    }
  return (
    <Layout title={product.name}>
        <div className={classes.section}>
            <NextLink href="/" passHref>
                <Link>back to products</Link>
            </NextLink>
        </div>
        <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
                <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={640} 
                    height={640} 
                    layout="responsive">
                </Image>
            </Grid>
            <Grid item md={3} xs={12}>
                <List>
                    <ListItem>Category: {product.category}</ListItem>
                    <ListItem>Brand: {product.brand}</ListItem>
                    <ListItem>Rating: {product.rating} stars ({product.numReviews} reviews)</ListItem>
                    <ListItem>
                        
                        <Typography>
                        Description: {product.description}
                        </Typography>
                    </ListItem>

                </List>
            </Grid>
        </Grid>
    </Layout>
  )
}

export default ProductScreen