import React, { useState } from 'react'
import {
    Box,
    List,
    Typography } from '@material-ui/core';
import ConfirmationDialog from './ConfirmationDialog';
import { useSelector, useDispatch } from 'react-redux';
import { imgUrl } from '../config';
import { deleteFavorite } from '../redux/actions/favoritesActions';
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
    const dispatch = useDispatch();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState('');

    const handleDialogClose = remove => {
        if (remove) {
            removeFavorite(current.id)
        }
        setOpen(false);
        setCurrent({});
    }

    const requestDelete = favorite => {
        setCurrent(favorite);
        setOpen(true);
    }

    const removeFavorite = id => dispatch(deleteFavorite(id));

    if(favorites.length > 0) {
        return (
            <>
                <List className={classes.list}>
                    {
                        favorites.map(item => <FavoritesItem
                            imageUrl={item.images && item.images.default.thumbs ?
                                imgUrl + item.images.default.thumbs.web.w50h50.jpg :
                                'no-logo.png'}
                            removeFavorite={() => requestDelete(item)}
                            primary={item.title}
                            secondary={item.description}
                            key={item.id}/>)
                    }
                </List>
                <ConfirmationDialog
                    open={open}
                    rejectTxt='No'
                    confirmTxt='Yes'
                    title='Remove favorite'
                    content={`Do you want to remove ${current.title} from your favorites?`}
                    handleDialogClose={handleDialogClose}/>
            </>
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
