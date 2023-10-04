import React, { useState, useEffect } from "react";

// import here
import { Slider } from "../../shared/Slider";
import { NavMenu } from "../../shared/NavMenu";
import { AppFooter } from "../../shared/AppFooter";
import { RectangleBand } from "../../shared/RectangleBand";

import { WhatWeDo } from "./components/WhatWeDo";
import { MainBanner } from "./components/MainBanner";

import { useFetchAPI } from "../../hooks/useFetchAPI";

import { Brands } from "../../utils/Brands";

import { ICaseStudy } from "../../utils/interfaces/ICaseStudy";

import { EnvironmentVariables } from "../../utils/EnvironmentVariables";

export const HomeScreen: React.FC<{}> = (): JSX.Element => {
    const ApiURL = EnvironmentVariables.URLs;
    const EndPoints = EnvironmentVariables.EndPoints;

    const [CaseStudies, setCaseStudies] = useState<ICaseStudy[]>([]);

    const { get } = useFetchAPI();

    // when this home page loads - you want to immediately fetch the case studies data
    useEffect(() => {
        fetchCaseStudies();
    }, []);

    // and obviously there could be error handling involved here
    // if status isn't 200 - you wanna say something
    // but since this is a 'simple website' we not going to look into that
    // hoping its allowed, atleast for now :)
    const fetchCaseStudies = async () => {
        const results = await get();

        if (results.status == 200) {
            const list = results.data;

            list.map((item: ICaseStudy) => {
                return item.status = false;
            });

            setCaseStudies(list);
        }

        getBrands();
    }

    const getBrands = async () => {
        const results: any = await get(ApiURL.MainAPIURL + EndPoints.Brands.GetBrands);
            console.log(results);
            // this will result in brands being returned from the api
            // however, in a real project - we would keep the brand images in a server somewhere
            // since we do not have that here, we will continue to use the same setup on keeping the brands on this project
    }

    return <>
        <NavMenu />

        <section>
            <MainBanner />

            <div className="for-what-we-do main-container">
                <RectangleBand Text="What we do" />
                <h4>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</h4>
                <WhatWeDo />
            </div>

            <div className="for-case-studies main-container">
                <RectangleBand Text="Case studies" />
                <div className="case-studies-content">
                    {/* because of this - as in the slider - the actual design therefore varies a bit from the figma design
                    in that the alignment in figma - content isn't centered - but rather flexed - but for a slider to work accurately,
                    the cards in the slide need to be centered.
                    */}

                    {/* so initially - while completing the design - I had it exactly the same - you just need to flex the display on the slide class
                        but when emplimenting the slider, I noticed it is decent when centered
                     */}

                    {/* IT WASN'T VERY CLEAR TO ME WHAT HAVING THE CASE STUDIES AS A SLIDER MEANT, SO I ADDED A SLIDESHOW */}
                    {/* COMMENT LINE 93 IF YOU DO NOT WANT TO RUN THE SLIDESHOW AND UNCOMMENT LINE 88-92 */}

                    {/* <div className="case-studies-cards" style={{ display: "flex", justifyContent: "space-between" }}>
                        {CaseStudies.length > 0 ? CaseStudies.map((study: ICaseStudy, index: number) => {
                            return <CaseStudyCard Study={study} key={index} />
                        }) : <p style={{ margin: "20px" }}>Loading. . . .</p>}
                    </div> */}
                    {CaseStudies.length > 0 ? <Slider CaseStudies={CaseStudies} /> : <p style={{ margin: "20px" }}>Loading. . . .</p>}
                </div>
            </div>

            <div className="for-good-company main-container">
                <RectangleBand Text="You’ll be in good company" />
                <h4>Trusted by leading brands</h4>

                {/* and we could use the brand element below as a stand alone component - but its just one line 
                    so i thought its okay to keep here - at least for now :)
                */}
                <div className="good-company-content">
                    {Brands.map((brand: string, index: number) => {
                        return <div className="brand" key={index} style={{ backgroundImage: "url(" + brand + ")" }}></div>
                    })}
                </div>
            </div>
        </section>

        <AppFooter />
    </>
}