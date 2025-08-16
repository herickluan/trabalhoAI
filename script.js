const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " No futuro, a inteligência artificial revolucionará o automobilismo, ajudando equipes a tomar decisões estratégicas, otimizando o desempenho dos carros e proporcionando uma experiência mais segura e emocionante para pilotos e fãs. Como você imagina essa transformação acontecendo?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início fiquei receoso sobre como a inteligência artificial poderia impactar as corridas e a segurança dos pilotos."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Fiquei empolgado para ver como a IA pode melhorar o desempenho dos carros e a experiência dos fãs nas corridas."
            }
        ]
    },
    {
        enunciado:"Com os avanços da inteligência artificial, uma equipe de automobilismo decidiu incorporar essa tecnologia em suas estratégias de corrida. Após uma apresentação sobre o tema, você foi convidado a escrever um trabalho sobre o futuro da IA no automobilismo. Qual abordagem você escolhe para começar esse trabalho?",
        alternativas: [
            {
                texto: "Pesquisei sobre as aplicações da inteligência artificial no automobilismo, usando uma ferramenta de IA para encontrar dados atuais e exemplos práticos, e apresentei as informações de forma clara e objetiva.",
                afirmacao: "Foi capaz de usar a IA para coletar e interpretar dados importantes sobre a influência dessa tecnologia no automobilismo."
            },
            {
                texto: "Produzi o trabalho baseando-me nas conversas com colegas, investigações na internet e no meu entendimento sobre o impacto da IA no automobilismo.",
                afirmacao: "Senti mais segurança ao utilizar meus próprios conhecimentos e habilidades para elaborar o trabalho."
            }
        ]
    },
    {
        enunciado: "Depois de entregar seu trabalho sobre a evolução da inteligência artificial no automobilismo, a turma participou de um debate para refletir sobre as mudanças que a IA pode trazer para as profissões ligadas ao esporte. Durante a discussão, surgiu um tema central: de que forma a IA influenciará os empregos do futuro nesse setor. Qual é a sua opinião nesse debate?",
        alternativas: [
            {
                texto: "Defende que a inteligência artificial no automobilismo abrirá novas vagas de emprego e fortalecerá as habilidades dos profissionais da área.",
                afirmacao: "Busca incentivar avanços tecnológicos no automobilismo, promovendo a criação de novas carreiras e o crescimento profissional."
            },
            {
                texto: "Demostra preocupação com os profissionais que podem ser substituídos por máquinas e ressalta a necessidade de garantir a proteção dos trabalhadores.",
                afirmacao: "Sua inquietação levou à criação de um grupo de discussão entre trabalhadores para debater o uso responsável e ético da IA no automobilismo."
            }
        ]
    },
    {
        enunciado: "Para concluir o debate, você precisa criar uma arte digital que expresse suas ideias sobre como a inteligência artificial vai influenciar o automobilismo. Como você vai fazer isso?",
        alternativas: [
            {
                texto: "Desenvolveu uma imagem digital sobre IA no automobilismo usando uma plataforma simples de design, como o Paint." ,
                afirmacao: "Percebeu que muitas pessoas ainda têm dificuldades com ferramentas básicas de design digital e resolveu ajudar compartilhando seus conhecimentos sobre criação de imagens para iniciantes."
            },
            {
                texto: "Fez uma ilustração sobre a influência da IA no automobilismo utilizando um programa de criação de imagens assistido por inteligência artificial.",
                afirmacao: "Aprendeu a dominar ferramentas automáticas de criação visual e agora apoia quem encontra dificuldades no desenho tradicional a explorar essas tecnologias."
            }
        ]
    },
    {
        enunciado: "Você integra uma equipe de corrida responsável por preparar um projeto sobre a aplicação da inteligência artificial nas próximas competições. O andamento está atrasado, e um colega resolveu usar a IA para finalizar o trabalho. No entanto, o resultado ficou idêntico ao conteúdo gerado automaticamente pelo chat. Como você age diante dessa situação?",
        alternativas: [
            {
                texto: "Usar a inteligência artificial como ferramenta para ajudar no projeto pode ser útil, mas depender totalmente dela para criar todo o conteúdo pode ser problemático.",
                afirmacao: "Acabou se tornando excessivamente dependente da IA para realizar as tarefas da equipe, o que prejudica seu aprendizado e participação ativa."
            },
            {
                texto: "A inteligência artificial pode ser muito útil na elaboração de estratégias e análises para a equipe de corrida, mas é essencial revisar as informações geradas e adaptá-las à realidade da equipe, trazendo também a visão dos integrantes.",
                afirmacao: "Percebeu que a IA segue padrões programados que nem sempre refletem a experiência da equipe nas pistas, e entendeu que o conteúdo gerado deve ser usado como ponto de partida, não como resultado final do projeto." 
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();