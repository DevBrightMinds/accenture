import React, { useEffect, useState } from "react";

import { ICaseStudy } from "../utils/interfaces/ICaseStudy";

// this can obviously be modified so that it takes just about anything and slides it 
// for now - we will only focus on the case studies
export const Slider: React.FC<{ CaseStudies: ICaseStudy[] }> = ({ CaseStudies }): JSX.Element => {
    const [SlidePos, setSlidePos] = useState<number>(0);

    useEffect(() => {
        runSlideShow();

    }, [SlidePos]);

    // in the general sense, we could design to map through the case studies array every 2 seconds - deciding what to display and what to hide
    // i believe that's at leart how a slider works
    // so we increment or move to the next item per render of the slider - meaning - we will monitor the Slide Position and when it changes we will run the slide show
    const runSlideShow = () => {
        CaseStudies.map((item: ICaseStudy, index) => {
            return (index == SlidePos) ? item.status = true : item.status = false;
        });

        setTimeout(() => {
            setSlidePos((SlidePos + 1) < CaseStudies.length ? (SlidePos + 1) : 0);
        }, 2000);
    }

    return <>
        <div className="slider">
            {CaseStudies.map((study: ICaseStudy, index: number) => {
                return <div className={study.status ? "slide-active case-study-card fade" : "case-study-card fade"} key={index} style={{ backgroundImage: "url(" + study.imageUrl + ")" }}>
                    <div className="slide-position">{(index + 1) + "/" + CaseStudies.length}</div>
                    <div className="card-overlay">
                        <div className="card-header">
                            <h4>{study.title}</h4>
                        </div>
                        <div className="card-body">
                            <p>{study.description}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>

        <div className="slide-controls">
            {CaseStudies.map((study: ICaseStudy, index: number) => {
                return <span key={index} className={study.status ? "dot dot-active" : "dot"}></span>
            })}
        </div>
    </>
}