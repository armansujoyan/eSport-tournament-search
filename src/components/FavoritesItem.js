import React from 'react'
import { ListItem, ListItemText, ListItemAvatar, Avatar, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default function FavoritesItem({
    imageUrl,
    primary,
    secondary,
    removeFavorite
}) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar
                    alt='Avatar'
                    variant='square'
                    src={imageUrl}
                />
            </ListItemAvatar>
            <ListItemText  primary={primary} secondary={secondary}
            primaryTypographyProps={{variant: 'subtitle1'}}
            secondaryTypographyProps={{variant: 'subtitle2'}}/>
            <IconButton onClick={removeFavorite}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    )
}
