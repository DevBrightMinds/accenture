import React from "react";

// imports from here
import { WhatWeDoCard } from "./WhatWeDoCard";

import { CardItems } from "../../../utils/CardItems";
import { ICardItem } from "../../../utils/interfaces/ICardItem";


export const WhatWeDo: React.FC<{}> = (): JSX.Element => {
    return <div className="what-we-do">
        <div className="app-what-we-do-content">
            {CardItems.map((card: ICardItem, index) => {
                return <WhatWeDoCard Card={card} key={index} />
            })}
        </div>
    </div>
}