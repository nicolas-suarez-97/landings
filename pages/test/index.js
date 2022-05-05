import React from "react";
import {LandingData} from "../../json/landing";
import Layout from "../../sections/layout";
import TopBannerSection from "../../sections/landings/topBannerSection";
import AchievementsSection from "../../sections/landings/achievementsSection";
import ModulesSection from "../../sections/landings/modulesSection";
import ProducerSection from "../../sections/landings/producerSection";
import FaqSection from "../../sections/landings/faqSection";
import styles from "./test.module.scss";
import VideoComponent from "../../components/videoComponent";
import HookSection from "../../sections/landings/hookSection";
import GetStartedSection from "../../sections/landings/getStartedSection";

const Test = () => {
    const {
        pageType,
        banner,
        hook,
        videoUrl,
        certificateUrl,
        achievement,
        modules,
        getStarted,
        producer,
        faq
    } = LandingData;

    return (
        <>
            <Layout
                pageType={pageType}
            >
                <TopBannerSection
                    banner={banner}
                />

                <VideoComponent
                    videoUrl={videoUrl}
                />

                <HookSection
                    hook={hook}
                />

                <AchievementsSection
                    achievement={achievement}
                />

                <ModulesSection
                    modules={modules}
                />

                <GetStartedSection
                    getStarted={getStarted}
                />

                <ProducerSection
                    producer={producer}
                />

                {/*<img
                    src={certificateUrl}
                    width="100%"
                />*/}

                <FaqSection
                    faq={faq}
                />

            </Layout>
        </>
    )
}

export default Test;