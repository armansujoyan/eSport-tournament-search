import React, { useState } from 'react'
import FavoritesItem from './FavoritesItem';

export default function Favorites() {
    const [favorites, setFavorites] = useState([1,2,3,4]);

    return (
        <div>
            {
                favorites.map(id => <FavoritesItem
                    imageUrl='https://banner2.cleanpng.com/20171216/6a4/ferrari-logo-png-image-5a34cef8d07541.1125412015134102968539.jpg'
                    removeFavorite={() => console.log('Removing')}
                    primary='Some primary text'
                    secondary='Some secondary text'
                    key={id}/>)
            }
        </div>
    )
}
