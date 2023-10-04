import React from "react";

import { ICaseStudy } from "../../../utils/interfaces/ICaseStudy";

export const CaseStudyCard: React.FC<{ Study: ICaseStudy }> = ({ Study }): JSX.Element => {
    return <div className="case-study-card fade" style={{ backgroundImage: "url(" + Study.imageUrl + ")", display: "block" }}>
        <div className="card-overlay">
            <div className="card-header">
                <h4>{Study.title}</h4>
            </div>
            <div className="card-body">
                <p>{Study.description}</p>
            </div>
        </div>
    </div>
}