'use client'
import React, { useState } from 'react';
function HomePage() {
    const [showFullText1, setShowFullText1] = useState(false);
    const [showFullText2, setShowFullText2] = useState(false);
    const [showFullText3, setShowFullText3] = useState(false);
    const [showFullText4, setShowFullText4] = useState(false);
  
    const handleToggleText1 = () => {
      setShowFullText1(!showFullText1);
    };
  
    const handleToggleText2 = () => {
      setShowFullText2(!showFullText2);
    };
  
    const handleToggleText3 = () => {
      setShowFullText3(!showFullText3);
    };
  
    const handleToggleText4 = () => {
      setShowFullText4(!showFullText4);
    };
  
    return (
      <div className="home-container">
        <div className="row-container">
          <div className="column-container1">
            <div className="column">
              <div className="boxHP">
                <h2>Quem Somos Nós?</h2>
                {showFullText1 ? (
    <>
    <p><strong>MackCuida:</strong> Uma Comunidade Livre e Saudável.</p>
    <p>Nós somos um grupo chamado "MackCuida", e reconhecemos o impacto devastador do abuso de drogas e álcool, especialmente entre os jovens. Guiados pelo Objetivo de Desenvolvimento Sustentável 3.5 da ONU, reforçamos a prevenção e o tratamento do vício na comunidade Mackenzie, buscando um futuro onde os estudantes estejam livres do vício e possam alcançar seu pleno potencial.</p>
    <p><strong>Acreditamos em uma comunidade onde:</strong></p>
    <p><strong>Informação acessível:</strong> fornecemos informações claras e precisas sobre os perigos do abuso de substâncias, utilizando linguagem acessível e materiais informativos de alta qualidade.</p>
    <p><strong>Prevenção priorizada:</strong> desenvolvemos programas e campanhas de conscientização para promover a prevenção do vício entre os estudantes, desde a primeira fase da vida universitária.</p>
    <p><strong>Apoio fundamental:</strong> oferecemos um ambiente acolhedor e confidencial para que estudantes possam buscar ajuda e orientação sobre questões relacionadas ao vício, sem julgamentos ou constrangimentos.</p>
    <p><strong>Recuperação possível:</strong> conectamos estudantes com profissionais de saúde qualificados e recursos de tratamento eficazes para auxiliar na recuperação do vício e na construção de uma vida livre das drogas.</p>
    <p><strong>Junte-se a nós!</strong></p>
    <button onClick={handleToggleText1}>Mostrar Menos</button>
  </>
  ) : (
  <>
  <p><strong>MackCuida:</strong> Uma Comunidade Livre e Saudável.</p>
    <p>Nós somos um grupo chamado "MackCuida", e reconhecemos o impacto devastador do abuso de drogas e álcool, especialmente entre os jovens. Guiados pelo Objetivo de Desenvolvimento Sustentável 3.5 da ONU, reforçamos a prevenção e o tratamento do vício na comunidade Mackenzie, buscando um futuro onde os estudantes estejam livres do vício e possam alcançar seu pleno potencial.</p>
    <p><strong>Acreditamos em uma comunidade onde:</strong></p>
    <p><strong>Informação acessível:</strong> fornecemos informações claras e precisas sobre os perigos do abuso de substâncias, utilizando...</p>
    <button onClick={handleToggleText1}>Mostrar Mais</button>
  </>
  )}
  </div>
              <div className="boxHP">
                <h2>Nossa Proposta</h2>
                {showFullText2 ? (
                  <>
                  <p>Acreditamos em um futuro melhor para os mackenzistas, sem vício e sem essas substâncias em excesso. Através de ações eficazes de conscientização, educação e apoio, nossa missão é criar um ambiente universitário mais saudável e seguro, onde o uso indevido de drogas e álcool não seja uma barreira para o sucesso individual e coletivo.</p>
                  <p>Focamos nossos esforços nos estudantes da Mackenzie, reconhecendo a vulnerabilidade especial dessa faixa etária.</p>
                  <p>Informamos e sensibilizamos a comunidade sobre os perigos do abuso de substâncias, utilizando linguagem clara, acessível e materiais informativos de alta qualidade.</p>
                  <p>Desenvolvemos workshops, palestras e grupos de apoio para promover a compreensão dos riscos e dos impactos do vício, além de oferecer ferramentas para a prevenção e a busca por ajuda.</p>
                  <p>Oferecemos um ambiente acolhedor e confidencial para que estudantes possam buscar ajuda e orientação sobre questões relacionadas ao abuso de substâncias.</p>
                  <p>Colaboramos com a administração da Mackenzie, entidades estudantis, profissionais da saúde e outras organizações para ampliar nosso alcance e fortalecer a rede de apoio à comunidade.</p>
                  <p>Acreditamos que a mudança é possível quando todos se unem por um objetivo comum. Convidamos você, estudante da Mackenzie, a se juntar a nós nessa luta.</p>
                  <p>Seja um voluntário, participe de eventos e workshops, e espalhe a mensagem de prevenção.</p>
                  <p>Se você foi afetado pelo abuso de substâncias, ou conhece alguém que foi, compartilhe sua história para inspirar e ajudar outros. Juntos, podemos construir uma comunidade Mackenzie livre do vício e com um futuro promissor para todos.</p>
                  <button onClick={handleToggleText2}>Mostrar Menos</button>
                  </>
                  ) : (
                    <>
                      <p>Acreditamos em um futuro melhor para os mackenzistas, sem vício e sem essas substâncias em excesso. Através de ações eficazes de conscientização, educação e apoio, nossa missão é criar um ambiente universitário mais saudável e seguro, onde o uso indevido de drogas e álcool não seja uma barreira para o sucesso individual e coletivo.</p>
                      <p>Focamos nossos esforços nos estudantes da Mackenzie, reconhecendo a vulnerabilidade especial dessa faixa etária...</p>
                      <button onClick={handleToggleText2}>Mostrar Mais</button>
                    </>
                )}
              </div>
            </div>
          </div>
          <div className="column-container2">
            <div className="column">
              <div className="boxHP">
                <h2>Funcionalidades</h2>
                {showFullText3 ? (
                   <>
                   <p>Lutando contra o vício? Você não está sozinho(a)! Aqui no grupo "Mackenzie contra o vicio de substâncias ilegais", oferecemos um espaço acolhedor e seguro para te auxiliar na jornada de superação. Através de ferramentas e recursos abrangentes, você terá o apoio necessário para se libertar do vício e construir uma vida plena e feliz.</p>
                   <p><strong>O que você pode encontrar em nosso site:</strong></p>
                   <p><strong>Autoajuda:</strong></p>
                   <p><strong>Dicas e informações:</strong> Explore artigos, guias e vídeos informativos sobre os diversos tipos de vício, seus efeitos e as melhores estratégias para combatê-los.</p>
                   <p><strong>Testes e avaliações:</strong> Faça testes online para identificar se você está em risco de desenvolver um vício ou se já precisa de ajuda profissional.</p>
                   <p><strong>Planejamento personalizado:</strong> Crie um plano de ação personalizado para sua jornada de recuperação, definindo metas, estratégias e buscando o apoio necessário.</p>
                   <p><strong>Suporte profissional:</strong></p>
                   <p><strong>Formulário de contato:</strong> Entre em contato conosco através do nosso formulário seguro e sigiloso. Nossa equipe de especialistas está à disposição para te orientar e direcionar para o melhor tipo de ajuda.</p>
                   <p><strong>Links para ajuda profissional:</strong> Encontre uma lista completa de instituições, clínicas e profissionais especializados em tratamento de vícios em sua região.</p>
                   <p><strong>Aplicativos de apoio:</strong> Conheça e baixe aplicativos que podem te auxiliar no seu dia a dia, oferecendo ferramentas de monitoramento, lembretes, técnicas de relaxamento e suporte emocional.</p>
                   <p><strong>Números de telefone para ajuda imediata:</strong> Em caso de crise ou necessidade urgente de apoio, tenha acesso a números de telefone de serviços de ajuda gratuitos e confidenciais.</p>
                   <p>Além disso, aqui em nosso site nós te convencemos a procurar ajuda! Você não precisa sofrer e nem passar por isso sozinho, explore nosso site e veja os benefícios que o tratamento pode trazer à sua vida!</p>
                   <button onClick={handleToggleText3}>Mostrar Menos</button>
                   </>
                   ) : (
                     <>
                      <p>Lutando contra o vício? Você não está sozinho(a)! Aqui no grupo "Mackenzie contra o vicio de substâncias ilegais", oferecemos um espaço acolhedor e seguro para te auxiliar na jornada de superação. Através de ferramentas e recursos abrangentes, você terá o apoio necessário para se libertar do vício e construir uma vida plena e feliz.</p>
                     <p><strong>O que você pode encontrar em nosso site:</strong></p>
                     <p><strong>Autoajuda:</strong></p>
                     <p><strong>Dicas e informações:</strong> Explore artigos, guias e vídeos informativos sobre os diversos tipos de vício, seus efeitos e as melhores estratégias para combatê-los...</p>
                       <button onClick={handleToggleText3}>Mostrar Mais</button>
                     </>
                )}
              </div>
              <div className="boxHP">
                <h2>Privacidade e Segurança</h2>
                {showFullText4 ? (
                   <>
                   <p><strong>Segurança e Privacidade no Grupo MackCuida:</strong></p>
                   <p>No grupo MackCuida, nossa prioridade é criar um ambiente seguro e confidencial para todos os membros que estão buscando apoio e ajuda para lidar com o consumo excessivo de álcool e substâncias ilegais. Reconhecemos a importância da segurança e privacidade de cada indivíduo que faz parte da nossa comunidade, e trabalhamos continuamente para garantir que esses aspectos sejam preservados em todas as interações e atividades do grupo.</p>
                   <p><strong>Compromisso com a Confidencialidade:</strong></p>
                   <p>Entendemos que compartilhar experiências relacionadas ao consumo de álcool e substâncias ilegais pode ser uma etapa difícil e sensível para muitos. Por isso, todos os membros do grupo MackCuida são incentivados a respeitar a confidencialidade e a privacidade dos outros participantes. O que é discutido no âmbito do grupo permanece estritamente confidencial, criando um espaço seguro onde os membros podem se abrir e compartilhar suas preocupações sem medo de julgamento ou exposição.</p>
                   <p><strong>Proteção dos Dados Pessoais:</strong></p>
                   <p>Além disso, tomamos medidas rigorosas para proteger os dados pessoais de nossos membros. Todas as informações compartilhadas conosco, seja durante as reuniões do grupo, em plataformas online ou através de qualquer outro meio de comunicação, são tratadas com o mais alto nível de sigilo e segurança. Garantimos que os dados dos nossos membros sejam armazenados de forma segura e que apenas as pessoas autorizadas tenham acesso a eles, respeitando sempre as leis e regulamentações de proteção de dados.</p>
                   <p><strong>Ambiente de Apoio e Respeito:</strong></p>
                   <p>No MackCuida, valorizamos a diversidade e a individualidade de cada membro. Criamos um ambiente de apoio e respeito mútuo, onde todos são encorajados a expressar suas preocupações, buscar orientação e oferecer suporte uns aos outros de maneira empática e solidária. Nossa comunidade é baseada na compreensão de que cada jornada de recuperação é única, e estamos aqui para apoiar e encorajar uns aos outros em cada passo do caminho.</p>
                   <p>Em resumo, a segurança e privacidade dos nossos membros são fundamentais para o grupo MackCuida. Estamos comprometidos em fornecer um espaço confiável e acolhedor, onde todos possam se sentir seguros para compartilhar suas experiências, buscar ajuda e trabalhar juntos na jornada rumo a uma vida mais saudável e equilibrada, livre do consumo excessivo de álcool e substâncias ilegais.</p>
                     <button onClick={handleToggleText4}>Mostrar Menos</button>
                   </>
                 ) : (
                   <>
                       <p><strong>Segurança e Privacidade no Grupo MackCuida:</strong></p>
                     <p>No grupo MackCuida, nossa prioridade é criar um ambiente seguro e confidencial para todos os membros que estão buscando apoio e ajuda para lidar com o consumo excessivo de álcool e substâncias ilegais. Reconhecemos a importância da segurança e privacidade de cada indivíduo que faz parte da nossa comunidade, e trabalhamos continuamente para garantir que esses aspectos sejam preservados em todas as interações e atividades do grupo...</p>
                     <button onClick={handleToggleText4}>Mostrar Mais</button>
                   </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default HomePage;