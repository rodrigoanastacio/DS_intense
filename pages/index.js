import Image from 'next/image';

import Hero from '../components/Hero';
import Headline from '../components/Headline';
import Title from '../components/Title';

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

      <section className={styles.section}>
        <div className={styles.container}>
          <Title title="Acredito que você viu no digital a oportunidade de construir um negócio e conquistar liberdade financeira." />
        </div>
      </section>
    </>
  );
}
