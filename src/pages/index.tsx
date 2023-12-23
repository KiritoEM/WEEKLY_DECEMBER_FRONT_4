import React from "react";
import Layout from "./Layout";
import MetaTitle from "@/components/MetaTitle";
import Welcoming from "@/components/Welcoming";

const Landing = (): JSX.Element => {
  return (
    <Layout>
      <MetaTitle title="Figma Land" />
      <section id="landing-page">
        <Welcoming />
      </section>
    </Layout>
  );
};

export default Landing;
