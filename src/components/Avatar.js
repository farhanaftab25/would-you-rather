import React from 'react';

function Avatar({height, avatarURL}) {
    return (
        <img style={{'height': height}}
            src={`${process.env.PUBLIC_URL}/assets/avatars/${avatarURL}`}
            alt={avatarURL}
            className="rounded-circle"
        />
    )
}
export default Avatar;
