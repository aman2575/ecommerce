import React, { Children, title } from 'react'
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography, footer, Link } from '@material-ui/core'
import useStyles from '../utils/styles'
import NextLink from 'next/link'



const Layout = ({title, children}) => {
    const classes = useStyles();
    return (
            <div>
                <Head>
                    <title>{title ? `${title} - Ecommerce`: "Ecommerce"}</title>
                </Head>
                <AppBar position='static' className={classes.navbar}>
                    <Toolbar>
                        <NextLink passHref href='/'>
                            <Link>
                            <Typography className={classes.brand}>Ecommerce</Typography>
                            </Link>
                        </NextLink>
                        <div className={classes.grow}></div>
                            <div>
                                <NextLink href='/cart' passHref>
                                    <Link>Cart</Link>
                                </NextLink>
                                <NextLink href='/login' passHref>
                                    <Link>Login</Link>
                                </NextLink>
                            </div>
                    </Toolbar>
                </AppBar>
                <Container className={classes.main}>
                    { children}
                </Container>
                <footer className={classes.footer}>
                <Typography>All rights reserved. Next Ecommerce</Typography>
                </footer>
            </div>
    )
}

export default Layout