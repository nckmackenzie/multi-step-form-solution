import React from 'react';

const Section = props => {
  return (
    <article className={props.className}>
      <div className="mb-8">
        <h2 className="text-marine-blue font-bold text-2xl md:text-3xl mb-2">
          {props.title}
        </h2>
        <p className="text-primary-gray text-base">{props.description}</p>
      </div>
      {props.children}
    </article>
  );
};

export default Section;
