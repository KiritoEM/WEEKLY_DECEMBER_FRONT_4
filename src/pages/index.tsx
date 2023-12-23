import React from "react";
import Layout from "./Layout";
import MetaTitle from "@/components/MetaTitle";
import Welcoming from "@/components/Welcoming";
import Features from "@/components/Features";

const Landing = (): JSX.Element => {
  return (
    <Layout>
      <MetaTitle title="Figma Land" />
      <section id="landing-page">
        <Welcoming />
        <Features />
      </section>
    </Layout>
  );
};

export default Landing;
