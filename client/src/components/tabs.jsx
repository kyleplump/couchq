/** @jsxImportSource @emotion/react */
import { React, useState } from 'react';
import { css } from '@emotion/react';
import { useHistory } from 'react-router-dom';
import { routeNames } from '../constants';

export default function Tabs() {

    const activeColor = '#319795';

    const styles = css`
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        min-height: 50px;
        box-shadow: -10px 0px 25px rgba(0, 0, 0, 0.2);

        .tab {
            width: 50vw;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top: 1px solid #ddd; 
        }

        .active {
            background-color: ${activeColor};
            color: white;
            border-top: 1px solid transparent;
        }
    `;

    const history = useHistory();
    const [ activeTabName, setActiveTabName ] = useState(routeNames.FIND);

    function handleTabClick(routeName) {

        setActiveTabName(routeName);

        history.push(`/${routeName}`);
    }

    return (
        <div css={styles}>
            <div onClick={() => handleTabClick(routeNames.FIND)} 
                    className={ activeTabName === routeNames.FIND ? 'tab active' : 'tab' }>
                Find
            </div>
            <div onClick={() => handleTabClick(routeNames.WATCHLIST)} 
                    className={ activeTabName === routeNames.WATCHLIST ? 'tab active' : 'tab' }>
                My Watchlist
            </div>
        </div>
    );
}