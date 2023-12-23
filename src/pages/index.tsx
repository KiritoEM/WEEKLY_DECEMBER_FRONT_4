import React from "react";
import Layout from "./Layout";
import MetaTitle from "@/components/MetaTitle";

const Landing = (): JSX.Element => {
  return (
    <Layout>
      <MetaTitle title="Figma Land"/>
      <section id="landing-page"></section>
    </Layout>
  );
};

export default Landing;
