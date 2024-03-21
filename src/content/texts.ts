function calculaIdade(dataNasc: any) {
  var dataAtual = new Date();
  var anoAtual = dataAtual.getFullYear();
  var anoNascParts = dataNasc.split('/');
  var diaNasc = anoNascParts[0];
  var mesNasc = anoNascParts[1];
  var anoNasc = anoNascParts[2];
  var idade = anoAtual - anoNasc;
  var mesAtual = dataAtual.getMonth() + 1;

  if (mesAtual < mesNasc) {
    idade--;
  } else {

    if (mesAtual == mesNasc) {
      if (new Date().getDate() < diaNasc) {
        idade--;
      }
    }
  }
  return idade;
}

const texts: any = {
  "en-US": {
    home: {
      role: "Front End and Mobile Dev",
      littleDescription:
        "Hey, welcome to my Portfolio 👾<br /> I'm a software developer living in Salvador, Brazil",
    },
    about: {
      titleAbout: "About me__",
      aboutMe:
        `I am ${calculaIdade('22/12/1998')}-years-old Brazilian and have a deep passion for technology since my childhood. This interest initially sparked through my interest in video games and robotics competitions. I finished high school with a technical diploma in informatics and I am currently studying Computer Engineering at the Federal University of Bahia (UFBA).`,
      titleGoals: "My Goal__",
      goals:
        "I strive every day to be a qualified and versatile Front-End and Mobile developer, capable of creating intuitive and high-performance user interfaces on different platforms. I am passionate about staying up-to-date on new technologies and features to optimize development processes. So I can contribute to the development of quality web and mobile applications, providing an exceptional user experience.",
      languagesTitle: "Languages I speak__",
      portuguese: "Portuguese",
      english: "English",
      italian: "Italian",
      spanish: "Spanish",
      location: "Brazil, Bahia - Salvador",
      educationTitle: "Education",
      education: `• Computer Engineering Student -  UFBA  <br/> • Technical Diploma in Informatics -  IFBA `,
      employmentTitle: "Employement",
      employment: "Open",
    },
    projects: {
      titleProjects: "Some Projects_",
      kuromiDescription:
        "Mobile app developed in React Native, a classic Minesweeper game featuring Sanrio characters.",
      dreamlandDescription:
        "Mobile application developed in React Native with features aimed at helping parents to make their children sleep. - available on PlayStore.",
      hermesDescription:
        "Hermes is an algorithm that uses machine learning techniques to classify figures of speech in tweets. - university project",
      pokedexDescription:
        "I made this Pokedex using Next.js and PokeAPI ~ for the Drawer and Cards I used MUI - created for study purposes",
      costsDescription:
        "With this application you can manage the costs of your project - created for study purposes - I haven't created the backend yet",
      catcinemaDescription:
        "With this app you can search informations about your favorite movies - created for study purposes",
      workInProgressTitle: "Work in progress...",
      workInProgressDescription: "I'll update soon ♡",
      code: "Code",
      viewProject: "View Project",
    },
    contact: {
      phoneNumber: "Phone number",
      copiedToClipboard: "copied to clipboard",
    },
  },
  "pt-BR": {
    home: {
      role: "Front End e Mobile Dev",
      littleDescription:
        "Olá, bem-vindo(a) ao meu Portfólio 👾<br /> Eu sou uma desenvolvedora de software morando em Salvador, Bahia",
    },
    about: {
      titleAbout: "Sobre mim__",
      aboutMe:
        `Tenho ${calculaIdade('22/12/1998')} anos de idade e tenho uma paixão profunda por tecnologia desde a minha infância. Esse interesse começou por meio do meu envolvimento com jogos e competições de robótica. Eu conclui o ensino médio técnico com diploma em informática (IFBA) e atualmente estou cursando Engenharia de Computação na Universidade Federal da Bahia (UFBA).`,
      titleGoals: "Meu objetivo__",
      goals:
        "Busco todos os dias ser uma desenvolvedora Front-End e Mobile qualificada e versátil, capaz de criar interfaces de usuário intuitivas e de alto desempenho em diferentes plataformas. Gosto de me manter atualizada sobre novas tecnologias e recursos para otimizar processos de desenvolvimento. Com isso, posso contribuir para o desenvolvimento de aplicações web e mobile de qualidade, proporcionando uma experiência excepcional aos usuários.",
      languagesTitle: "Meus idiomas__",
      portuguese: "Português",
      english: "Inglês",
      italian: "Italiano",
      spanish: "Espanhol",
      location: "Salvador, Bahia - Brasil",
      educationTitle: "Formação",
      education: "• Estudante de Engenharia de Computação (UFBA) <br/> • Diploma Técnico em Informática (IFBA)",
      employmentTitle: "Ocupação",
      employment: "Disponível",
    },
    projects: {
      titleProjects: "Alguns Projetos_",
      kuromiDescription:
        "Aplicativo mobile desenvolvido em react native, um classico campo minado com personagens da sanrio",
      dreamlandDescription:
        "Aplicativo mobile desenvolvido com React Native com funcionalidades para ajudar os pais a fazerem seus filhos pequenos dormirem. - disponivel na PlayStore.",
      hermesDescription:
        "Hermes é um algoritmo que usa técnicas de machine learning para classificar figuras de linguagem em tweets - projeto universitário",
      pokedexDescription:
        "Eu fiz essa Pokedex usando Next.js e PokeAPI ~ para a barra lateral e cards, usei a biblioteca MUI - criado para fins de estudo",
      costsDescription:
        "Com esse app, você pode administrar os custos do seu projeto - criado para fins de estudo - não criei o backend ainda",
      catcinemaDescription:
        "Com esse app, você pode procurar informações sobre seus filmes favoritos - criado para fins de estudos",
      workInProgressTitle: "Em progresso...",
      workInProgressDescription: "Atualizarei em breve ♡",
      code: "Código",
      viewProject: "Ver projeto",
    },
    contact: {
      phoneNumber: "Telefone",
      copiedToClipboard: "copiado para a área de transferência",
    },
  },
  "it-IT": {
    home: {
      role: "Front End e Mobile Dev",
      littleDescription:
        "Ciao, benvenuti al mio Portfolio 👾<br /> Sono una sviluppatrice di software che vive a Salvador, Bahia (Brasile)",
    },
    about: {
      titleAbout: "Informazioni su di me__",
      aboutMe:
        `Sono una ragazza brasiliana di ${calculaIdade('22/12/1998')} anni e ho una profonda passione per la tecnologia fin da quando ero bambina. Ho iniziato ad interessarmi e appassionarmi grazie ai videogiochi e alle competizioni di robotica. Ho terminato il liceo con un diploma tecnico in informatica e attualmente sto studiando Ingegneria Informatica presso la <i>Federal University of Bahia (Brasile)</i>.`,
      titleGoals: "Il mio obiettivo__",
      goals:
        "Mi sforzo ogni giorno per essere una sviluppatrice Front-End e Mobile qualificata e versatile, in grado di creare interfacce utente intuitive e ad alte prestazioni su diverse piattaforme. Mi piace rimanere aggiornata sulle nuove tecnologie e funzionalità per ottimizzare i processi di sviluppo. In questo modo, posso contribuire allo sviluppo di applicazioni web e mobile di qualità, offrendo un'esperienza eccezionale agli utenti.",
      languagesTitle: "Lingue che parlo__",
      portuguese: "Portoghese",
      english: "Inglese",
      italian: "Italiano",
      spanish: "Spagnolo",
      location: "Salvador, Bahia - Brasile",
      educationTitle: "Formazione scolastica:",
      education: "• Studente di Ingegneria Informatica - UFBA <br/> • Diploma tecnico in Informatica - IFBA",
      employmentTitle: "Occupazione:",
      employment: "Disponibile per lavoro",
    },
    projects: {
      titleProjects: "Alcuni Progetti_",
      kuromiDescription:
        "Applicazione mobile sviluppata con React Native, un classico gioco del campo minato con personaggi di Sanrio",
      dreamlandDescription:
        "App mobile sviluppata con React Native con funzionalità per aiutare i genitori a far addormentare i loro piccoli. - disponibile su PlayStore.",
      hermesDescription:
        "Hermes è un algoritmo che utilizza machine learning per classificare i modi di esprimersi nei tweet - progetto universitario",
      pokedexDescription:
        "Ho creato questo Pokedex usando Next.js e PokeAPI ~ per la sidebar e le card, ho usato la libreria MUI - creato per motivi di studio",
      costsDescription:
        "Con questa app puoi gestire i costi dei tuoi progetti - creato per motivi di studio - Non ho ancora creato il backend",
      catcinemaDescription:
        "Con questa app puoi cercare informazioni sui tuoi film preferiti - creato per motivi di studio",
      workInProgressTitle: "Loading...",
      workInProgressDescription: "Aggiornerò presto ♡",
      code: "Codice",
      viewProject: "Progetto",
    },
    contact: {
      phoneNumber: "Telefono",
      copiedToClipboard: "copiato in Clipboard",
    },
  },
};

export default texts;
