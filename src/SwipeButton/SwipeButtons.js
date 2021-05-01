import React from 'react';

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from '@material-ui/core/IconButton';


import "./SwipeButtons.css";

const SwipeButtons = () => {
    return (
        <div className = "swipeButtons">
        <IconButton className = "swipeButtons_repeat" >
        <ReplayIcon fontSize = "large"/>
        </IconButton>
        <IconButton className = "swipeButtons_left">
        <CloseIcon fontSize = "large"/>
        </IconButton>
        <IconButton className = "swipeButtons_start">
        <StarRateIcon fontSize = "large"/>
        </IconButton>
        <IconButton className = "swipeButtons_right">
        <FavoriteIcon fontSize = "large"/>
        </IconButton>
        <IconButton className = "swipeButtons_lightning">
        <FlashOnIcon fontSize = "large"/>
        </IconButton>

           
        </div>
    );
};

export default SwipeButtons
