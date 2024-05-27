'use client'
import React, { useState } from 'react';
function SupportPage() {

 const [showFullText8, setShowFullText8] = useState(false);
    const [showFullText9, setShowFullText9] = useState(false);
    const [showFullText10, setShowFullText10] = useState(false);
    const [showFullText11, setShowFullText11] = useState(false);
  
    const handleToggleText8 = () => {
      setShowFullText8(!showFullText8);
    };
  
    const handleToggleText9 = () => {
      setShowFullText9(!showFullText9);
    };
  
    const handleToggleText10 = () => {
      setShowFullText10(!showFullText10);
    };
  
    const handleToggleText11 = () => {
      setShowFullText11(!showFullText11);
    };
  
    return (
      <div className="home-container">
      <h1 className="inicial">Quais são os principais recursos de apoio?</h1>
      <div className="boxIeD">
      <h2>Tratamento Médico e Desintoxicação</h2>
      {showFullText8 ? (
    <>
        <p>Na luta contra o vício de substâncias ilegais, o Tratamento Médico e a Desintoxicação se erguem como pilares fundamentais para a recuperação e a construção de um futuro livre das drogas. Mais do que simples medidas isoladas, representam um processo holístico e multifacetado que visa atacar o vício em suas diversas frentes, desde os aspectos físicos até os psicológicos e sociais.</p>
        <p><strong>Compreendendo a Complexidade do Vício:</strong></p>
        <p>O vício é uma doença complexa e crônica que afeta o cérebro e o comportamento do indivíduo. Caracteriza-se por um desejo compulsivo de usar substâncias, mesmo diante de consequências negativas, e pela perda de controle sobre o uso. Essa compulsão é impulsionada por alterações neuroquímicas no cérebro, que tornam cada vez mais difícil resistir à droga.</p>
        <p><strong>O Papel Essencial do Tratamento Médico:</strong></p>
        <p>O Tratamento Médico assume um papel crucial na jornada de recuperação, pois oferece suporte profissional e especializado para lidar com os diversos aspectos do vício. Através de uma avaliação individualizada, médicos e outros profissionais de saúde definem um plano de tratamento personalizado, que pode incluir:</p>
        <p><strong>Terapia Médica:</strong> Abordagem fundamental para tratar os sintomas físicos da abstinência, como dor, náuseas e insônia, garantindo um processo de desintoxicação seguro e eficaz.</p>
        <p><strong>Avaliação Psiquiátrica:</strong> Permite identificar e tratar comorbidades como depressão, ansiedade e transtornos de personalidade, que podem estar contribuindo para o vício ou dificultando a recuperação.</p>
        <p><strong>Medicação:</strong> O uso de medicamentos específicos pode ser indicado para auxiliar no controle dos sintomas da abstinência, reduzir o desejo por drogas e tratar comorbidades psiquiátricas, potencializando o sucesso do tratamento.</p>
        <p><strong>Orientação Familiar:</strong> Envolve o apoio e a educação dos familiares sobre o vício e como auxiliar no processo de recuperação do indivíduo, promovendo um ambiente familiar mais propício à mudança.</p>
        <p><strong>A Desintoxicação:</strong> Um Novo Começo:</p>
        <p>A Desintoxicação marca o início da jornada de recuperação, sendo um processo crucial para eliminar as substâncias do corpo e aliviar os sintomas físicos da abstinência. Através de acompanhamento médico rigoroso, a desintoxicação garante a segurança e o bem-estar do indivíduo, minimizando os riscos e desconfortos associados à abstinência.</p>
        <p><strong>Mais do que Abstinência:</strong></p>
        <p>A desintoxicação vai além da mera abstinência física. É um processo que prepara o terreno para a recuperação psicológica e social, abrindo caminho para que o indivíduo possa lidar com os desafios emocionais e comportamentais do vício.</p>
        <p><strong>Um Caminho para a Recuperação:</strong></p>
        <p>O Tratamento Médico e a Desintoxicação não são soluções mágicas ou atalhos para a cura. Representam o início de um árduo processo de recuperação que exige dedicação, persistência e apoio profissional contínuo. No entanto, são pilares indispensáveis para construir uma vida livre do vício e alcançar o pleno potencial.</p>
        <p>Juntos, podemos construir uma comunidade livre do vício e com um futuro promissor para todos!</p>
    <button onClick={handleToggleText8}>Mostrar Menos</button>
  </>
  ) : (
  <>
  <p>Na luta contra o vício de substâncias ilegais, o Tratamento Médico e a Desintoxicação se erguem como pilares fundamentais para a recuperação e a construção de um futuro livre das drogas. Mais do que simples medidas isoladas, representam um processo holístico e multifacetado que visa atacar o vício em suas diversas frentes, desde os aspectos físicos até os psicológicos e sociais.</p>
        <p><strong>Compreendendo a Complexidade do Vício:</strong></p>
        <p>O vício é uma doença complexa e crônica que afeta o cérebro e o comportamento do indivíduo. Caracteriza-se por um desejo compulsivo de usar substâncias, mesmo diante de consequências negativas, e pela perda de controle sobre o uso. Essa compulsão é impulsionada por alterações neuroquímicas no cérebro, que tornam cada vez mais difícil resistir à droga.</p>
        <p><strong>O Papel Essencial do Tratamento Médico:</strong></p>
    <button onClick={handleToggleText8}>Mostrar Mais</button>
  </>
  )}

        </div>
      <div className="boxIeD">
        <h2>Terapia e Aconselhamento</h2>
        {showFullText9 ? (
          <>
          <p><strong>Guiando a Jornada de Recuperação:</strong></p>
          <p>Na luta contra o vício de substâncias ilegais, Terapia e Aconselhamento se revelam ferramentas valiosas para auxiliar o indivíduo em sua jornada de recuperação. Mais do que simples conversas, representam um processo profundo e personalizado que visa abordar os aspectos psicológicos, sociais e emocionais do vício, promovendo a mudança de comportamento e a construção de uma vida livre das drogas.</p>
          <p><strong>Mergulhando nas Profundezas do Vício:</strong></p>
          <p>O vício é uma doença complexa que transcende os limites físicos da dependência química. Envolve questões emocionais, comportamentais e sociais que, se não forem devidamente exploradas e tratadas, podem comprometer o processo de recuperação. É nesse contexto que a Terapia e o Aconselhamento assumem um papel crucial.</p>
          <p><strong>A Jornada da Autodescoberta:</strong></p>
          <p>Através de um ambiente seguro e confidencial, a Terapia oferece ao indivíduo a oportunidade de explorar seus sentimentos, pensamentos e comportamentos relacionados ao vício. Com o auxílio de um profissional qualificado, ele pode identificar os gatilhos, compreender as raízes do vício, desenvolver habilidades de enfrentamento, fortalecer a autoestima.</p>
          <p><strong>O Poder do Aconselhamento:</strong></p>
          <p>O Aconselhamento, por sua vez, oferece um espaço para o indivíduo discutir seus objetivos, desafios e progressos na jornada de recuperação. Com base em sua experiência e conhecimento, o profissional de aconselhamento pode orientar e motivar, educar sobre o vício, desenvolver um plano de recuperação individualizado, conectar com recursos de apoio. </p>
          <p><strong>Terapia e Aconselhamento: Uma Jornada Conjunta:</strong></p>
          <p>Terapia e Aconselhamento não são soluções isoladas, mas sim ferramentas complementares que, quando utilizadas em conjunto, potencializam os resultados da recuperação. Ao abordar os aspectos psicológicos, sociais e emocionais do vício, essas ferramentas auxiliam o indivíduo a desenvolver resiliência, fortalecer sua autoestima e construir uma vida livre das drogas.</p>
          <p>Existem diversos recursos disponíveis para auxiliar na recuperação, como grupos de apoio, clínicas especializadas e linhas de apoio telefônico.</p>
          <button onClick={handleToggleText9}>Mostrar Menos</button>
          </>
        ) : (
          <>
          <p><strong>Guiando a Jornada de Recuperação:</strong></p>
          <p>Na luta contra o vício de substâncias ilegais, Terapia e Aconselhamento se revelam ferramentas valiosas para auxiliar o indivíduo em sua jornada de recuperação. Mais do que simples conversas, representam um processo profundo e personalizado que visa abordar os aspectos psicológicos, sociais e emocionais do vício, promovendo a mudança de comportamento e a construção de uma vida livre das drogas.</p>
          <p><strong>Mergulhando nas Profundezas do Vício:</strong></p>
          <p>O vício é uma doença complexa que transcende os limites físicos da dependência química. Envolve questões emocionais, comportamentais e sociais que, se não forem devidamente exploradas e tratadas, podem comprometer o processo de recuperação. É nesse contexto que a Terapia e o Aconselhamento assumem um papel crucial.</p>
          <p><strong>A Jornada da Autodescoberta:</strong></p>
          <button onClick={handleToggleText9}>Mostrar Mais</button>
          </>
        )
      }
      </div>
      <div className="boxIeD">
        <h2>Grupos de Apoio</h2>

        {showFullText10 ? (
          <>
        <p><strong>A Força da Comunidade na Jornada de Recuperação:</strong></p>
        <p>Na luta contra o vício de substâncias ilegais, os Grupos de Apoio se erguem como um pilar fundamental na jornada de recuperação, oferecendo um espaço seguro e acolhedor para que indivíduos em situação de vício encontrem apoio, compreensão e ferramentas para lidar com os desafios da recuperação. Mais do que simples reuniões, representam uma comunidade de pessoas que compartilham experiências, oferecem incentivo mútuo e constroem laços de amizade e solidariedade, promovendo a mudança e a construção de uma vida livre das drogas.</p>
        <p><strong>Entendendo o Poder dos Grupos de Apoio:</strong></p>
        <p>O vício é uma doença complexa e multifacetada que transcende os limites da dependência física. Envolve aspectos psicológicos, sociais e emocionais que, se não forem devidamente explorados e tratados, podem comprometer o processo de recuperação. É nesse contexto que os Grupos de Apoio assumem um papel crucial, oferecendo um ambiente propício para compartilhamento de experiências, apoio mútuo, motivação e incentivo, desenvolvimento de habilidades, aprendizado com a experiência de outros</p>
        <p><strong>Diversidade de Grupos:</strong></p>
        <p>Existem diversos tipos de Grupos de Apoio disponíveis, atendendo às diferentes necessidades e características dos indivíduos em situação de vício. Alguns grupos são específicos para determinados tipos de substâncias, enquanto outros são mais abrangentes e acolhem pessoas com diferentes tipos de vícios. É importante buscar o grupo que melhor se encaixa nas suas necessidades e expectativas.</p>
          <button onClick={handleToggleText10}>Mostrar Menos</button>
          </>
        ) : (
          <>
        <p><strong>A Força da Comunidade na Jornada de Recuperação:</strong></p>
        <p>Na luta contra o vício de substâncias ilegais, os Grupos de Apoio se erguem como um pilar fundamental na jornada de recuperação, oferecendo um espaço seguro e acolhedor para que indivíduos em situação de vício encontrem apoio, compreensão e ferramentas para lidar com os desafios da recuperação. Mais do que simples reuniões, representam uma comunidade de pessoas que compartilham experiências, oferecem incentivo mútuo e constroem laços de amizade e solidariedade, promovendo a mudança e a construção de uma vida livre das drogas.</p>
        <p><strong>Entendendo o Poder dos Grupos de Apoio:</strong></p>
        <p>O vício é uma doença complexa e multifacetada que transcende os limites da dependência física. Envolve...</p>
        <button onClick={handleToggleText10}>Mostrar Mais</button>
          </>
        )
      }
  
      </div>
      <div className="boxIeD">
        <h2>Suporte Familiar</h2>
        {showFullText11 ? (
          <>
        <p><strong>Pilar Fundamental na Jornada de Recuperação:</strong></p>
        <p>Na luta contra o vício de substâncias ilegais, o Suporte Familiar se ergue como um pilar fundamental na jornada de recuperação, oferecendo ao indivíduo em situação de vício uma rede de amor, apoio e compreensão que o auxilia a superar os desafios e construir uma vida livre das drogas. Mais do que simples presença física, o Suporte Familiar representa um conjunto de ações e atitudes que demonstram amor, cuidado e confiança no potencial do indivíduo para se recuperar.</p>
        <p><strong>Compreendendo a Importância do Suporte Familiar:</strong></p>
        <p>O vício é uma doença complexa que afeta não apenas o indivíduo que usa drogas, mas também toda a família. As consequências do vício podem se manifestar de diversas formas, como problemas financeiros, conflitos familiares, violência doméstica e negligência de crianças. Nesse contexto, o Suporte Familiar assume um papel crucial para promover um ambiente familiar acolhedor e seguro, oferecer apoio emocional, incentivar a busca por ajuda profissional, auxiliar na organização e acompanhamento do tratamento, celebrar conquistas e progressos, manter a esperança e a positividade</p>
        <p><strong>Como Oferecer Suporte Familiar:</strong></p>
        <p>Existem diversas maneiras de oferecer Suporte Familiar a um indivíduo em situação de vício. Algumas dicas importantes incluem: educar-se sobre o vício, comunicar-se de forma clara e honesta, estabelecer limites claros, evitar a culpabilização e a crítica, cuidar de si mesmo</p>
          <button onClick={handleToggleText11}>Mostrar Menos</button>
          </>
        ) : (
          <>
        <p><strong>Pilar Fundamental na Jornada de Recuperação:</strong></p>
        <p>Na luta contra o vício de substâncias ilegais, o Suporte Familiar se ergue como um pilar fundamental na jornada de recuperação, oferecendo ao indivíduo em situação de vício uma rede de amor, apoio e compreensão que o auxilia a superar os desafios e construir uma vida livre das drogas. Mais do que simples presença física, o Suporte Familiar representa um conjunto de ações e atitudes que demonstram amor, cuidado e confiança no potencial do indivíduo para se recuperar.</p>
        <p><strong>Compreendendo a Importância do Suporte Familiar:</strong></p>
        <p>O vício é uma doença complexa que afeta não apenas o indivíduo que usa drogas...</p>
        <button onClick={handleToggleText11}>Mostrar Mais</button>
          </>
        )
      }        
        </div>

      <div className="boxIeD">
        <h2>Recursos Online e Linhas de Ajuda</h2>
        {showFullText11 ? (
          <>
        <p><strong>Apoio na Palma da Sua Mão:</strong></p>
        <p>Na luta contra o vício de substâncias ilegais, os Recursos Online e Linhas de Ajuda se erguem como ferramentas valiosas para auxiliar indivíduos em situação de vício e seus familiares na jornada de recuperação. Através da internet e do telefone, é possível ter acesso a um leque de informações, serviços e apoio emocional, tudo na palma da sua mão, 24 horas por dia, 7 dias por semana.</p>
        <p><strong>Diversidade de Recursos:</strong></p>
        <p>A internet oferece uma variedade de Recursos Online que podem ser úteis para quem está enfrentando o vício:</p>
        <p><strong>Sites de informação:</strong> Diversos sites fornecem informações confiáveis sobre o vício, seus efeitos, os diferentes tipos de tratamento disponíveis e dicas para lidar com os desafios da recuperação. Alguns exemplos:</p>
        <p><a href='https://cvv.org.br/page/2/'>https://cvv.org.br/page/2/</a></p>
        <p><a href='https://www.gov.br/mj/pt-br/assuntos/sua-protecao/politicas-sobre-drogas/arquivo-manual-de-avaliacao-e-alienacao-de-bens/planad_set_2022.pdf'>https://www.gov.br/mj/pt-br/assuntos/sua-protecao/politicas-sobre-drogas/arquivo-manual-de-avaliacao-e-alienacao-de-bens/planad_set_2022.pdf</a></p>
        <p><a href='https://nida.nih.gov/es'>https://nida.nih.gov/es</a></p>
        <p><strong>Grupos de apoio online:</strong> Fóruns e grupos online permitem que indivíduos em situação de vício e seus familiares se conectem, compartilhem experiências, troquem informações e ofereçam apoio mútuo. Alguns exemplos:</p>
        <p><a href='https://na.org/'>https://na.org/</a></p>
        <p><a href='https://www.gruponovavida.com.br/blog/grupo-de-apoio-a-familiares-de-dependentes-quimicos'>https://www.gruponovavida.com.br/blog/grupo-de-apoio-a-familiares-de-dependentes-quimicos</a></p>
        <p><a href='https://www.gruporecanto.com.br/blog/grupos-de-apoio-importancia-beneficios-e-como-frequentar/'>https://www.gruporecanto.com.br/blog/grupos-de-apoio-importancia-beneficios-e-como-frequentar/</a></p>
        <p><strong>Aplicativos de recuperação:</strong> Diversos aplicativos oferecem ferramentas e recursos para auxiliar na recuperação do vício, como acompanhamento do progresso, lembretes de medicação, técnicas de relaxamento e suporte emocional. Exemplo:</p>
        <p><a href='https://play.google.com/store/apps/details?id=com.shpavda.bad_habit_break&hl=es_EC&gl=US'>https://play.google.com/store/apps/details?id=com.shpavda.bad_habit_break&hl=es_EC&gl=US</a></p>
        <p><strong>Linhas de ajuda:</strong> Serviços de atendimento telefônico oferecem apoio emocional, orientação e informações sobre o vício e os recursos disponíveis para tratamento e recuperação. Alguns exemplos:</p>
        <p><strong>Centro de Valorização da Vida (CVV): 188</strong></p>
        <p><strong>Narcotics Anonymous (NA): 0800 772 3444</strong></p>
        <p><strong>Grupos de Apoio para Familiares e Amigos de Alcoólicos e Drogaditos (GRAAAD): (11) 3322-4444</strong></p>
        <p><strong>Benefícios dos Recursos Online e Linhas de Ajuda:</strong></p>
        <p>Os Recursos Online e Linhas de Ajuda oferecem diversos benefícios para quem está enfrentando o vício: acessibilidade, anonimato, imediação, flexibilidade, complementaridade</p>
          <button onClick={handleToggleText11}>Mostrar Menos</button>
          </>
        ) : (
          <>
        <p><strong>Apoio na Palma da Sua Mão:</strong></p>
        <p>Na luta contra o vício de substâncias ilegais, os Recursos Online e Linhas de Ajuda se erguem como ferramentas valiosas para auxiliar indivíduos em situação de vício e seus familiares na jornada de recuperação. Através da internet e do telefone, é possível ter acesso a um leque de informações, serviços e apoio emocional, tudo na palma da sua mão, 24 horas por dia, 7 dias por semana.</p>
        <p><strong>Diversidade de Recursos:</strong></p>
        <p>A internet oferece uma variedade de Recursos Online que podem ser úteis para quem está enfrentando o vício:</p>
        <p><strong>Sites de informação:</strong> Diversos sites fornecem informações confiáveis sobre o vício, seus efeitos...</p>
        <button onClick={handleToggleText11}>Mostrar Mais</button>
          </>
        )
      }        
        
        
      </div>
    </div>
    )
  }


  export default SupportPage;