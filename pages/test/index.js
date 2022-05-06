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
import BenefitsSection from "../../sections/landings/benefitsSection";

const Test = () => {
    const {
        pageType,
        courseUrl,
        banner,
        hook,
        videoUrl,
        benefits,
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
                courseUrl={courseUrl}
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

                <ProducerSection
                    producer={producer}
                />

                <ModulesSection
                    modules={modules}
                />

                <BenefitsSection
                    benefits={benefits}
                />

                <GetStartedSection
                    getStarted={getStarted}
                />

                <FaqSection
                    faq={faq}
                />

            </Layout>
        </>
    )
}

export default Test;