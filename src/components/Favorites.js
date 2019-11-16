import React, { useState } from 'react'
import { List, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FavoritesItem from './FavoritesItem';

const useStyles = makeStyles({
    emptyWrapper: {
        margin: 25
    },
    list: {
        paddingTop: 0,
        paddingBottom: 0
    }
});

export default function Favorites() {
    const [favorites, setFavorites] = useState([1,2,3,4]);
    const classes = useStyles();

    if(favorites.length > 0) {
        return (
            <List className={classes.list}>
                {
                    favorites.map(id => <FavoritesItem
                        imageUrl='https://banner2.cleanpng.com/20171216/6a4/ferrari-logo-png-image-5a34cef8d07541.1125412015134102968539.jpg'
                        removeFavorite={() => console.log('Removing')}
                        primary='Some primary text'
                        secondary='Some secondary text'
                        key={id}/>)
                }
            </List>
        )
    } else {
        return (
        <Box component='div' className={classes.emptyWrapper}>
            <Typography align='center'>
                No favorite tournaments found. Search for them above and click on them to add to favorites.
            </Typography>
        </Box>
        )
    }
}
