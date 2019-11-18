import React from 'react'
import { imgUrlBase } from '../config';
import { withStyles } from '@material-ui/styles';
import { ListItem, ListItemText, ListItemAvatar, Avatar,} from '@material-ui/core'

const ListItemTextWhite = withStyles({
    primary: {
        color: 'white'
    },
    secondary: {
        color: 'white'
    }
})(ListItemText);

export default function SearchDropdownItem({ item, clickHandler }) {
    return (
        <ListItem button onClick={() => clickHandler(item)}>
            <ListItemAvatar>
                <Avatar
                    alt='trImg'
                    variant='square'
                    src={item.images && item.images.default.thumbs ?
                    imgUrlBase + item.images.default.thumbs.web.w50h50.jpg :
                    'no-logo.png'}/>
            </ListItemAvatar>
            <ListItemTextWhite primary={item.title} secondary={item.description}/>
        </ListItem>
    )
}
