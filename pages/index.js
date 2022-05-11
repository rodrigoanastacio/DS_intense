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

          <div className={styles.wrapper}>
            <div className={styles.text}>
              <p>
                Porém, você dedica muito tempo ao Instagram na produção de
                conteúdo, stories, hacks e várias outras coisas e mesmo assim
                não alcança resultados maiores.
              </p>

              <p>
                E no fim, você acaba se comparando com quem tem mais resultados
                e se pergunta: Onde estou errando?
              </p>

              <p>
                O seu erro é priorizar apenas o Instagram e esquecer que para
                construir uma marca forte, você precisa de um plano de negócios,
                que te ajude a sair do “amadorismo” e gerenciar o seu negócio
                com estratégia e foco em resultados.
              </p>

              <p>
                Por experiência própria eu posso te dizer que: Para fazer seu
                negócio crescer, o Instagram precisa ser seu aliado e uma
                ferramenta para beneficiar a visibilidade da sua marca e a
                atração de novos clientes e não o ponto MAIS importante do seu
                trabalho.
              </p>

              <p>
                Por isso, que através da Consultoria INTENSE quero te ajudar a
                construir um posicionamento de empreendedora de sucesso,
                mentalidade, postura e visão estratégica de crescimento para
                conquistar uma marca FORTE!
              </p>

              <p>
                A Consultoria INTENSE será um direcionamento totalmente
                personalizado às necessidades do seu negócio, para que você
                consiga alcançar o sucesso que tanto deseja.
              </p>
            </div>
            <div className={styles.image}>
              <img src="/image-benefits.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
