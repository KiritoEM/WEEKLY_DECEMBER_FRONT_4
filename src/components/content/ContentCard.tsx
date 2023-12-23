import Image from "next/image";
import React from "react";

interface IcontentProps {
  title: string;
  img: string;
  button: string;
  id?: string;
}

const ContentCard: React.FC<IcontentProps> = ({
  img,
  title,
  button,
  id
}): JSX.Element => {
  return (
    <div className="content-card">
      <div className="content-card__header">
        <div className="title">
          <h5>{title}</h5>
        </div>
        <div className="text" id={id}>
          <p>
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify .
          </p>
        </div>
        <div className="button">
          <button className="btn">{button}</button>
        </div>
      </div>
      <div className="content-card__img">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ContentCard;
