import Head from "next/head";
import React from "react";

interface Ititle {
  title: string;
}

const MetaTitle: React.FC<Ititle> = ({ title }): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default MetaTitle;
