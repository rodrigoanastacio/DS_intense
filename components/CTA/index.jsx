import styles from './styles.module.scss';

export default function CTA({ title }) {
  return (
    <a className={styles.cta} href="#">
      {title}
    </a>
  );
}
