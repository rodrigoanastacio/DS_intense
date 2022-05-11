import Image from 'next/image';

import Hero from '../components/Hero';
import Headline from '../components/Headline';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Hero>
        <Headline />
        <div className={styles.img}>
          <img src="dayane-silva.svg" alt="Dayane Silva" />
        </div>
      </Hero>

      <section>
        <div className={styles.container}>
          <h2>Lorem ipsum dolor sit amet.</h2>
        </div>
      </section>
    </>
  );
}
