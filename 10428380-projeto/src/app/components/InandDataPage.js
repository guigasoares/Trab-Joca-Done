'use client'
import React, { useState } from 'react';
function InandDataPage() {

    const [showFullText5, setShowFullText5] = useState(false);
    const [showFullText6, setShowFullText6] = useState(false);
    const [showFullText7, setShowFullText7] = useState(false);
  
    const handleToggleText5 = () => {
      setShowFullText5(!showFullText5);
    };
  
    const handleToggleText6 = () => {
      setShowFullText6(!showFullText6);
    };
  
    const handleToggleText7 = () => {
      setShowFullText7(!showFullText7);
    };
  
    return (
      <div className="ied-container">
        <div className="row-container">
        <h1 className="inicial">Quão ruim essas substâncias podem ser para o corpo humano?</h1>
        <div className='column-container1'>
        <div className="boxIeD">
          <h2>Álcool</h2>
          {showFullText5 ? (
    <>
          <p>O consumo excessivo de álcool é uma das principais causas de morbidade e mortalidade em todo o mundo, trazendo consigo uma série de consequências negativas tanto para a saúde física quanto mental dos indivíduos. O impacto do álcool no corpo humano é vasto e pode levar a uma variedade de doenças crônicas e condições agudas.</p>
          <p>A curto prazo, o uso excessivo de álcool pode resultar em intoxicação alcoólica, que afeta o sistema nervoso central, prejudicando a coordenação motora, o julgamento e a capacidade de reação. Acidentes de trânsito, violência e lesões são frequentemente associados à embriaguez. Além disso, o consumo em grandes quantidades em um curto período de tempo pode levar ao coma alcoólico e até mesmo à morte.</p>
          <p>A longo prazo, o consumo crônico de álcool pode causar danos irreversíveis a órgãos vitais. O fígado, responsável por metabolizar o álcool, é um dos órgãos mais afetados, podendo desenvolver esteatose hepática, hepatite alcoólica e cirrose. O álcool também está associado a um risco aumentado de desenvolver certos tipos de câncer, incluindo câncer de boca, esôfago, fígado, mama e cólon.</p>
          <p>Além dos efeitos físicos, o álcool pode ter um impacto devastador na saúde mental. O abuso de álcool está fortemente ligado a transtornos psiquiátricos como depressão, ansiedade e transtornos de personalidade. O alcoolismo, ou dependência de álcool, é uma doença crônica caracterizada por um desejo incontrolável de beber, apesar das consequências negativas para a saúde, relações pessoais e vida profissional.</p>
          <p>O impacto social do abuso de álcool também é significativo, afetando famílias, comunidades e sistemas de saúde. O custo econômico inclui perda de produtividade, despesas médicas e encargos para o sistema de justiça criminal. Portanto, é essencial promover a conscientização sobre os riscos do consumo excessivo de álcool e incentivar estratégias de prevenção e tratamento eficazes.</p>
    <button onClick={handleToggleText5}>Recolher Texto</button>
  </>
  ) : (
  <>
    <img src='cervejasemfundo.png' className='breja'></img>
    <button onClick={handleToggleText5}>Saber Mais</button>
  </>
  )}
        </div>
        <div className="boxIeD">
          <h2>Substâncias Tóxicas (Drogas, Cigarros, etc.)</h2>
          {showFullText6 ? (
    <>
          <p>O uso de substâncias tóxicas, como o cigarro e drogas ilícitas, é uma preocupação global de saúde pública devido aos seus efeitos devastadores sobre a saúde humana. O cigarro, por exemplo, é um dos principais causadores de doenças cardiovasculares e respiratórias, incluindo doença coronariana, enfisema e câncer de pulmão. A nicotina presente no cigarro causa dependência e dificulta a cessação do hábito de fumar, perpetuando o ciclo de danos à saúde.</p>
          <p>Drogas ilícitas, como cocaína, heroína e metanfetaminas, também têm efeitos nocivos profundos. Além do risco de overdose e morte, o uso crônico dessas substâncias pode levar a problemas de saúde mental, como depressão e psicose, e doenças físicas, incluindo infecções por HIV e hepatite devido ao compartilhamento de agulhas. O impacto social do uso de drogas é igualmente grave, com implicações na segurança, na economia e no bem-estar das famílias e comunidades.</p>
          <p>A dependência química é uma doença complexa que exige uma abordagem multifacetada para o tratamento, envolvendo intervenções médicas, psicológicas e apoio social. A prevenção é igualmente importante e deve incluir educação sobre os riscos do uso dessas substâncias, bem como políticas públicas eficazes para reduzir a disponibilidade e o apelo do tabaco e das drogas ilícitas.</p>
          <p>Além dos efeitos físicos e mentais, o abuso de substâncias tóxicas como o cigarro e drogas ilícitas pode ter consequências sociais profundas. O vício pode levar ao isolamento social, problemas de relacionamento e dificuldades financeiras, à medida que os recursos são desviados para sustentar o hábito. No ambiente de trabalho, o abuso de substâncias pode resultar em absenteísmo, baixa produtividade e até mesmo demissão, afetando não apenas o indivíduo, mas também seus colegas e empregadores. A dependência também aumenta o risco de envolvimento com atividades criminosas, tanto por parte de quem usa quanto de quem trafica essas substâncias, contribuindo para ciclos de violência e instabilidade nas comunidades. É essencial que haja programas eficazes de prevenção e tratamento, bem como políticas públicas que abordem as raízes sociais e econômicas do abuso de substâncias.</p>
    <button onClick={handleToggleText6}>Recolher Texto</button>
  </>
  ) : (
  <>
    <img src='drogassemfundo.png' className='drogas'></img>
    <button onClick={handleToggleText6}>Saber Mais</button>
  </>
  )}
        </div>
        </div>
        <div className='column-container2'>
        <div className="boxIeD">
        <h2>Possíveis Problemas (Sociais, Familiares, Profissionais)</h2>
        {showFullText7 ? (
    <>
          <p>O consumo de álcool e substâncias tóxicas pode ter efeitos devastadores que ultrapassam os limites da saúde individual e se estendem para o tecido social, profissional e familiar. Socialmente, o abuso dessas substâncias está frequentemente ligado ao aumento da criminalidade, violência doméstica e acidentes de trânsito, gerando um ônus substancial para a sociedade em termos de segurança e recursos econômicos.</p>
          <p>No âmbito profissional, o desempenho e a produtividade são comprometidos, levando a um maior absenteísmo, erros no trabalho e até mesmo a demissões, o que pode resultar em desemprego e dificuldades financeiras para o indivíduo e sua família. As relações familiares também sofrem, pois o vício pode causar tensão, quebra de confiança e comunicação deficiente, levando a um ambiente familiar disfuncional. As crianças, em particular, são vulneráveis aos efeitos negativos, podendo experimentar negligência e abuso, e muitas vezes repetem os padrões de comportamento em suas próprias vidas.</p>
          <p>A recuperação e a reabilitação desses indivíduos requerem uma abordagem holística que inclua apoio médico, psicológico e social, além de políticas públicas eficazes que promovam a prevenção e ofereçam redes de apoio para aqueles que lutam contra o vício e suas famílias.</p>
    <button onClick={handleToggleText7}>Recolher Texto</button>
  </>
  ) : (
  <>
    <img src='problemassemfundo.png' className='problemas'></img>
    <button onClick={handleToggleText7}>Saber Mais</button>
  </>
  )}
          
          
        </div>
        </div>
        </div>
      </div>
    )
  }

  export default InandDataPage;