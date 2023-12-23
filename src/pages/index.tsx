import React from "react";
import Layout from "./Layout";
import MetaTitle from "@/components/MetaTitle";
import Welcoming from "@/components/Welcoming";
import Features from "@/components/Features";
import Content from "@/components/Content";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";

const Landing = (): JSX.Element => {
  return (
    <Layout>
      <MetaTitle title="Figma Land" />
      <section id="landing-page">
        <Welcoming />
        <Features />
        <Content />
        <Gallery />
        <Partners />
        <Testimonials />
      </section>
    </Layout>
  );
};

export default Landing;
