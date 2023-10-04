import React from "react";

export const MainBanner: React.FC<{}> = (): JSX.Element => {
    return <div className="app-main-banner">
        <div className="banner-content">
            <p>Live with Confidence</p>
            <p>Jose Mourinho brings confidence to pan-African Sanlam <br /> campaign</p>
            <div className="btn-container">
                {/* the purple color isn't in class -> is-primary */}
                <button className="button is-primary is-rounded">View Project</button>
            </div>
        </div>
    </div>
}