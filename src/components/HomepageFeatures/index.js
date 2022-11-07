import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Who Are We?',
    Svg: require('@site/static/img/who_are_we.svg').default,
    description: (
      <>
        We are Aren
      </>
    ),
  },
  {
    title: 'What We Do?',
    Svg: require('@site/static/img/what_we_do.svg').default,
    description: (
      <>
        We do Aren
      </>
    ),
  },
  {
    title: 'Robosub Competition',
    Svg: require('@site/static/img/submarine_black_filled.svg').default,
    description: (
      <>
        The fundamental goal of the RoboSub competition is for an Autonomous Underwater Vehicle (AUV) to demonstrate its autonomy by completing underwater tasks, with a new theme each year
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
