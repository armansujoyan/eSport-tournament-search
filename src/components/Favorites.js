import React from 'react'
import { List, Box, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { imgUrl } from '../config';
import { favoritesSelector } from '../redux/selectors/favorites';
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
    const favorites = useSelector(favoritesSelector);
    const classes = useStyles();

    if(favorites.length > 0) {
        return (
            <List className={classes.list}>
                {
                    favorites.map(item => <FavoritesItem
                        imageUrl={item.images && item.images.default.thumbs ?
                            imgUrl + item.images.default.thumbs.web.w50h50.jpg :
                            'no-logo.png'}
                        removeFavorite={() => console.log('Removing')}
                        primary='Some primary text'
                        secondary='Some secondary text'
                        key={item.id}/>)
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
