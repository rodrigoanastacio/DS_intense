import CTA from '../CTA';

import styles from './styles.module.scss';

export default function Headline() {
  return (
    <div className={styles.headline}>
      <h1>
        Aprenda a não ser só mais um perfil no instagram por meio de uma{' '}
        <strong>marca forte que conecta e vende!</strong>
      </h1>
      <p>
        O Instagram é uma excelente ferramenta para o seu negócio, mas você
        precisa construir estrutura e dominar as estratégias certas para
        alcançar resultados.
      </p>

      <CTA title="Quero construir uma marca forte" />
    </div>
  );
}
