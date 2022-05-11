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

          <div className={styles.wrapperInverse}>
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

      <section className={styles.section}>
        <div className={styles.container}>
          <Title title='Sei que muitas vezes pode ser desanimador, ver outras marcas crescendo e ter a sensação de que o seu negócio "não sai do lugar."' />

          <div className={styles.wrapper}>
            <div className={styles.content}>
              <h3>
                Mas durante esses 2 anos prestando Consultorias, pude observar
                os problemas de muitas empreendedoras, como:
              </h3>

              <svg
                width="76"
                height="60"
                viewBox="0 0 76 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.0477 32.7159L12.1169 57.8464C10.3246 59.5834 7.42649 59.5834 5.65329 57.8464L1.3442 53.6703C-0.448068 51.9334 -0.448068 49.1247 1.3442 47.4062L19.7245 29.5931L1.3442 11.7799C-0.448068 10.043 -0.448068 7.23427 1.3442 5.51579L5.63422 1.30272C7.42649 -0.434241 10.3246 -0.434241 12.0978 1.30272L38.0286 26.4333C39.8399 28.1702 39.8399 30.9789 38.0477 32.7159ZM74.6558 26.4333L48.725 1.30272C46.9328 -0.434241 44.0346 -0.434241 42.2614 1.30272L37.9523 5.47883C36.1601 7.21579 36.1601 10.0245 37.9523 11.743L56.3327 29.5561L37.9523 47.3692C36.1601 49.1062 36.1601 51.9149 37.9523 53.6334L42.2614 57.8095C44.0537 59.5465 46.9518 59.5465 48.725 57.8095L74.6558 32.6789C76.4481 30.9789 76.4481 28.1702 74.6558 26.4333Z"
                  fill="url(#paint0_linear_198_113)"
                  fill-opacity="0.3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_198_113"
                    x1="200.267"
                    y1="23.3829"
                    x2="-4.6417"
                    y2="35.7737"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E5E5E5" />
                    <stop offset="1" stop-color="#E5E5E5" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <ul className={styles.itens}>
              <li>
                <span>01</span>Perfil estagnado;
              </li>
              <li>
                <span>02</span>Clientes que acham caro, pedem desconto e
                desvalorizam o trabalho;
              </li>
              <li>
                <span>03</span>Resultados e vendas que não aumentam;
              </li>
              <li>
                <span>04</span>Desorganização sobre questões burocráticas;
              </li>
              <li>
                <span>05</span>Seguidores desqualificados com a proposta da
                marca;
              </li>
              <li>
                <span>06</span>Imagem desalinhada com o próprio negócio;
              </li>
              <li>
                <span>07</span>Pouca postura de autoridade o que gera
                desconfiança dos clientes;
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
