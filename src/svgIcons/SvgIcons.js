import React from 'react';
import './SvgIcons.scss'
import * as AllIcons from './index';

const SvgIcons = ({weather}) => {
    const currentIcon = AllIcons[weather];

    if (!currentIcon) {
        return null
    }

    return(
        <div>
            {currentIcon()}
        </div>
);
};

export default SvgIcons;