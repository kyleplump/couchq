/** @jsxImportSource @emotion/react */
import { React } from 'react';
import { jsx, css } from '@emotion/react'

export default function Tabs() {

    const styles = css`
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        min-height: 50px;

        .tab {
            width: 50vw;
        }

        .active {
            background-color: blue;
        }
    `;

    return (
        <div css={styles}>
            <div className="tab active">
                Find
            </div>
            <div className="tab">
                My Watchlist
            </div>
        </div>
    );
}