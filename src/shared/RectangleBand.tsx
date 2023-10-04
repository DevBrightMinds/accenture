import React from "react";

import RectangleBar from "../assets/svgs/Rectangle1.svg";

export const RectangleBand: React.FC<{ Text: string }> = ({Text}): JSX.Element => {
    return <span className="band-container"><img src={RectangleBar} alt={Text} /> <small>{Text}</small></span>
}