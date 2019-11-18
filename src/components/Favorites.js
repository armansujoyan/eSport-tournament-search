import React, { useState } from 'react'
import {
    Box,
    List,
    Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { imgUrlBase } from '../config';
import { deleteFavorite } from '../redux/actions/favoritesActions';
import { setDialogueVisibility } from '../redux/actions/uiActions'
import { favoritesSelector } from '../redux/selectors/favorites';
import { getDialogueVisibiliy } from '../redux/selectors/ui'

import ConfirmationDialog from './ConfirmationDialog';

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
    const showDialogue = useSelector(getDialogueVisibiliy);
    const dispatch = useDispatch();
    const classes = useStyles();

    const setDialogueState = visibility => dispatch(setDialogueVisibility(visibility));

    const [current, setCurrent] = useState('');

    const handleDialogClose = remove => {
        if (remove)
            removeFavorite(current.id)
        setDialogueState(false);
        setCurrent({});
    }

    const openRemoveDialog = favorite => {
        setCurrent(favorite);
        setDialogueState(true);
    }

    const favoritesToList = item =>
        <FavoritesItem
            imageUrl={item.images && item.images.default.thumbs ?
                imgUrlBase + item.images.default.thumbs.web.w50h50.jpg :
                'no-logo.png'}
            removeFavorite={() => openRemoveDialog(item)}
            primary={item.title}
            secondary={item.description}
            key={item.id}/>

    const removeFavorite = id => dispatch(deleteFavorite(id));

    if(favorites.length > 0) {
        return (
            <>
                <List className={classes.list}>
                    { favorites.map(favoritesToList) }
                </List>
                <ConfirmationDialog
                    open={showDialogue}
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
