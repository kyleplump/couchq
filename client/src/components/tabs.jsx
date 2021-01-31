/** @jsxImportSource @emotion/react */
import { React, useState } from 'react';
import { css } from '@emotion/react';
import { useHistory } from 'react-router-dom';
import { routeNames } from '../constants';

export default function Tabs() {

    const activeColor = '#319795';

    const styles = css`

        width: 100%;
        position: fixed;
        top: 50px;
        display: flex;
        min-height: 50px;
        box-shadow: -10px 0px 25px rgba(0, 0, 0, 0.2);

        .tab {
            width: 50vw;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #ddd; 
        }

        .active {
            background-color: white;
            color: ${activeColor};
            border-bottom: 2px solid ${activeColor};
        }
    `;

    const history = useHistory();
    const [ activeTabName, setActiveTabName ] = useState(routeNames.WATCHLIST);

    function handleTabClick(routeName) {

        setActiveTabName(routeName);

        history.push(`/${routeName}`);
    }

    return (
        <div css={styles}>
            <div onClick={() => handleTabClick(routeNames.WATCHLIST)} 
                    className={ activeTabName === routeNames.WATCHLIST ? 'tab active' : 'tab' }>
                My Watchlist
            </div>
            <div onClick={() => handleTabClick(routeNames.FIND)} 
                    className={ activeTabName === routeNames.FIND ? 'tab active' : 'tab' }>
                Find
            </div>
        </div>
    );
}