import React from "react";

// import interfaces here
import { ICardItem } from "../../../utils/interfaces/ICardItem";

export const WhatWeDoCard: React.FC<{ Card: ICardItem }> = ({ Card }): JSX.Element => {

    return <div className="what-we-do-card">
        <div className="card-content">
            <div className="card-header">
                <div className="card-header-image">
                    <img src={Card.ImageName} alt="card image" />
                </div>
                <div className="card-header-name">
                    <p>{Card.Name}</p>
                </div>
            </div>
            <div className="card-body">
                <p>{Card.Description}</p>
            </div>
        </div>
    </div>
}