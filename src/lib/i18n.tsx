import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "it" | "fr";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TranslationValue = string | string[] | { [key: string]: any };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const translations: Record<Lang, Record<string, any>> = {
  it: {
    home: {
      title: "Bianco & Legno di Borrelli Matthias — Falegnameria e Imbiancatura",
      description:
        "Artigiano di montagna specializzato in rinnovazione infissi in legno, pareti di perlinato e imbiancature. Massima serietà e affidabilità.",
      hero: {
        slogan: "Massima serietà e affidabilità",
        subtitle:
          "Falegnameria e imbiancatura artigianale, appositamente condivisa per case, baite e attività di montagna.",
        cta: "Richiedi un preventivo",
      },
      services: "I nostri servizi",
      about: {
        title: "L'artigiano e il suo mestiere",
        chiSiamo: "Chi siamo",
        text: "Bianco & Legno nasce dalla passione di Matthias Borrelli per il legno e per le case di montagna. Ogni lavoro parte da un sopralluogo attento, prosegue con materiali scelti uno a uno e si conclude con una finitura fatta a mano. Nessuna fretta, nessuna scorciatoia: solo il tempo giusto perché il risultato duri.",
        founded: "Anno di fondazione",
        experience: "Anni di esperienza",
        experienceText: "6 mesi di attività ufficiale, 6+ anni di esperienza in falegnameria e imbiancatura.",
        handmade: "Lavori a mano",
        knowMe: "Conosci Matthias",
      },
    },
    chiSono: {
      title: "Chi Sono",
      subtitle: "Il legno racconta chi lo lavora",
      eyebrow: "La mia storia",
      role: "Falegname e imbianchino",
      story: {
        p1: "Sono cresciuto tra i boschi e le case in legno della valle, ho imparato il mestoto in bottega, affiancando falegnami di vecchia scuola. Nel 2026 ho aperto la mia attività, unendo due competenze che raramente viaggiano insieme: la lavorazione del legno e la tinteggiatura.",
        p2: "Questo mi permette di seguire il cantiere dall'inizio alla fine — dalla revisione di un infisso alla mano di finitura sulla parete — con un solo referente, tempi certi e nessun rimpallo di responsabilità.",
        p3: "Oggi lavoro con Bianco & Legno per famiglie, seconde case, rifugi e piccole strutture ricettive, con lo stesso principio di sempre: fare bene, una cosa alla volta.",
        quote:
          "Ricordo ancora il primo infisso che ho sverniciato con mio padre: un portone in larice scuro per una baita a Cogne. Aveva quarant'anni di vernice e il legno era consumato. Ci aveva messo due settimane, mano a mano. Alla fine, quel portone ha resistito a vent'anni di inverni. È così che ho imparato che il tempo giusto non è mai troppo.",
      },
      values: "I miei valori",
      valori: {
        artigianalita: {
          title: "Artigianalità",
          text: "Eseguo ogni intervento a mano, senza standardizzazioni: il pezzo si adatta alla casa, non il contrario.",
        },
        esperienza: {
          title: "Esperienza",
          text: "Ho oltre sei anni di esperienza tra cantieri alpini, restauri di baite e ristrutturazioni di abitazioni private.",
        },
        curaDettaglio: {
          title: "Cura del dettaglio",
          text: "Curo giunzioni pulite, bordi netti, superfici uniformi. La differenza si vede da vicino.",
        },
        montagna: {
          title: "Ambiente di montagna",
          text: "Scelgo legni locali e prodotti a bassa emissione, per resistere a gelo, umidità e forti escursioni termiche.",
        },
      },
    },
    servizi: {
      title: "I Miei Servizi",
      subtitle: "Dal telaio alla mano di finitura",
      eyebrow: "Cosa faccio",
      infissi: {
        title: "Rinnovazione infissi in legno",
        intro:
          "Finestre, porte, scuri e portoncini recuperati anziché sostituiti: un intervento più sostenibile e spesso molto più conveniente della sostituzione integrale.",
        items: [
          "Sopralluogo e valutazione dello stato del legno",
          "Sverniciatura, carteggiatura e stuccatura delle fessurazioni",
          "Sostituzione di parti ammalorate e regolazione della ferramenta",
          "Impregnante protettivo e doppia mano di finitura",
          "Rifacimento sigillature e riposa in opera",
        ],
      },
      perlinato: {
        title: "Pareti di perlinato",
        intro:
          "Rivestimenti in legno per pareti, soffitti e sottotetti, realizzati su misura in abete spazzolato, larice o cirmolo, con posa a incastro precisa e ordinata.",
        items: [
          "Consulenza su essenza, larghezza doghe e verso di posa",
          "Realizzazione dell'orditura e livellamento del supporto",
          "Posa maschio-femmina con giunzioni invisibili",
          "Coibentazione integrativa dove richiesta",
          "Finitura a cera, olio naturale o smalto opaco",
        ],
      },
      imbiancatura: {
        title: "Imbiancatura",
        intro:
          "Tinteggiature per interni ed esterni con prodotti traspiranti, adatti anche a murature vecchie e ambienti soggetti a umidità e sbalzi termici.",
        items: [
          "Protezione di pavimenti, mobili e serramenti",
          "Rasatura, stuccatura e trattamento antimuffa",
          "Pitture lavabili, a calce o silossaniche per esterni",
          "Velature e finiture decorative su richiesta",
          "Pulizia finale e riconsegna dell'ambiente",
        ],
      },
    },
    contatti: {
      title: "Contatti e Preventivi — Bianco & Legno di Borrelli Matthias",
      description:
        "Richiedi un preventivo gratuito: telefono +39 123 456 7890, info@biancoelegno.it, Instagram @biancoelegno.borrelli.",
      subtitle: "Parliamone",
      titleForm: "Contatti",
      intro: "Massima serietà e affidabilità",
      form: {
        title: "Richiedi un preventivo",
        text: "Raccontaci il lavoro: rispondiamo entro 24 ore lavorative.",
        nome: "Nome e cognome *",
        email: "Email *",
        telefono: "Telefono",
        messaggio: "Messaggio *",
        submit: "Invia richiesta",
        sending: "Invio in corso…",
      },
      where: {
        title: "Dove trovarci",
        subtitle: "Valle di montagna, ti raggiungiamo noi",
      },
      hours: {
        title: "Orari di laboratorio",
        text: "Lunedì – Venerdì: 8.00 – 12.00 / 13.30 – 18.00\nSabato: su appuntamento\nDomenica: chiuso",
      },
      nav: {
        home: "Home",
        chiSono: "Chi Sono",
        servizi: "Servizi",
        galleria: "Galleria",
        contatti: "Contatti",
      },
      thankYou: "Grazie! La tua richiesta è stata registrata, ti ricontattiamo presto.",
    },
    footer: {
      signature:
        "Falegnameria e imbiancatura artigianale. Lavori curati nel dettaglio, con il legno e i tempi della montagna.",
    },
  },
  fr: {
    home: {
      title: "Bianco & Legno de Borrelli Matthias — Menuiserie et Peinture",
      description:
        "Artisan de montagne spécialisé dans la rénovation de fenêtres en bois, les murs en lambris et la peinture. Sérieux et fiabilité maximale.",
      hero: {
        slogan: "Sérieux et fiabilité maximale",
        subtitle:
          "Menuiserie et peinture artisanales, depuis 2026 au service des maisons, des chalets et des établissements de montagne.",
        cta: "Demandez votre devis",
      },
      services: "Nos services",
      about: {
        title: "L'artisan et son métier",
        chiSiamo: "Qui sommes-nous",
        text: "Bianco & Legno naît de la passion de Matthias Borrelli pour le bois et pour les maisons de montagne. Chaque travail commence par un examen attentif, se poursuit avec des matériaux choisis un par un et se termine par une finition faite à la main. Aucune précipitation, aucun raccourci: juste le temps juste pour que le résultat dure.",
        founded: "Année de création",
        experience: "Années d'expérience",
        handmade: "Travaux à la main",
        experienceText:
          "6 mois d'activité officielle, 6+ années d'expérience en menuiserie et peinture.",
        knowMe: "Découvrez Matthias",
      },
    },
    chiSono: {
      title: "Qui suis-je",
      subtitle: "Le bois raconte celui qui le travaille",
      eyebrow: "Ma histoire",
      role: "Menuisier et peintre",
      story: {
        p1: "J'ai grandi parmi les forêts et les maisons en bois de la vallée, j'ai appris mon métier en atelier, aux côtés de menuisiers de la vieille école. En 2026, j'ai ouvert mon entreprise, unissant deux compétences qui voyagent rarement ensemble: le travail du bois et la peinture.",
        p2: "Cela me permet de suivre le chantier de bout en bout — de la révision d'une fenêtre à la finition sur le mur — avec une seule et même personne référente, des délais certifiés et aucune ambiguïté de responsabilité.",
        p3: "Aujourd'hui, je travaille avec Bianco & Legno pour des familles, des secondes résidences, des refuges et de petits établissements accueillants, avec le même principe depuis toujours: bien faire, une chose à la fois.",
        quote:
          "Je me souviens encore du premier ouvrant que j'ai décapé avec mon père: une porte en chêne sombre pour un chalet à Cogne. Elle avait quarante ans de peinture et le bois était usé. Cela m'avait pris deux semaines, main dans la main. À la fin, cette porte a résisté vingt ans d'hivers. C'est ainsi que j'ai appris que le temps juste n'est jamais trop.",
      },
      values: "Mes valeurs",
      valori: {
        artigianalita: {
          title: "Artisanat",
          text: "Je réalise chaque intervention à la main, sans standardisation: le morceau s'adapte à la maison, et non l'inverse.",
        },
        esperienza: {
          title: "Expérience",
          text: "J'ai plus de six ans d'expérience entre les chantiers alpins, les restaurations de chalets et les rénovations de résidences privées.",
        },
        curaDettaglio: {
          title: "Attention aux détails",
          text: "Je prends soin des joints propres, des bords nets et des surfaces uniformes. La différence se voit de près.",
        },
        montagna: {
          title: "Environnement de montagne",
          text: "Je choisis des bois locaux et des produits à faible émission, pour résister au gel, à l'humidité et aux fortes variations thermiques.",
        },
      },
    },
    servizi: {
      title: "Mes Services",
      subtitle: "Du cadre à la finition",
      eyebrow: "Ce que je fais",
      infissi: {
        title: "Rénovation de portes et fenêtres en bois",
        intro:
          "Des fenêtres, portes, volets et portails récupérés plutôt que remplacés: une intervention plus durable et souvent beaucoup moins chère qu'un remplacement intégral.",
        items: [
          "Inspection et évaluation de l'état du bois",
          "Décapage, calage et enduit des joints",
          "Remplacement des pièces endommagées et réglage de la ferrure",
          "Imprégnation protectrice et deux couches de finition",
          "Remise à niveau des joints et pose en œuvre",
        ],
      },
      perlinato: {
        title: "Murs en lambris",
        intro:
          "Revêtements en bois pour murs, plafonds et combles, réalisés sur mesure en pin sablé, chêne ou frêne, avec un assemblage précis et ordonné.",
        items: [
          "Conseil sur l'essence, la largeur des lamelles et le sens de pose",
          "Réalisation de l'ossature et nivellement du support",
          "Pose mâle-femelle avec des joints invisibles",
          "Isolation supplémentaire sur demande",
          "Finition au cire, huile naturelle ou vernis mat",
        ],
      },
      imbiancatura: {
        title: "Peinture",
        intro:
          "Peintures pour intérieurs et extérieurs avec des produits respirables, adaptés aussi aux murs anciens et aux environnements humides et sujets aux variations thermiques.",
        items: [
          "Protection des sols, meubles et menuiseries",
          "Ragréage, enduit et traitement antimoisissure",
          "Peintures lavables, à la chaux ou siloxaniques pour l'extérieur",
          "Vérysures et finitions décoratives sur demande",
          "Nettoyage final et remise en service de l'environnement",
        ],
      },
    },
    contatti: {
      title: "Contact et Devis — Bianco & Legno di Borrelli Matthias",
      description:
        "Demandez votre devis gratuit: téléphone +39 123 456 7890, info@biancoelegno.it, Instagram @biancoelegno.borrelli.",
      subtitle: "Parlons-en",
      titleForm: "Contact",
      intro: "Sérieux et fiabilité maximale",
      form: {
        title: "Demandez votre devis",
        text: "Racontez-nous le travail: nous répondons sous 24 heures ouvrables.",
        nome: "Nom et prénom *",
        email: "Email *",
        telefono: "Téléphone",
        messaggio: "Message *",
        submit: "Envoyer la demande",
        sending: "Envoi en cours…",
      },
      where: {
        title: "Où nous trouver",
        subtitle: "Vallée de montagne, c'est nous qui nous déplaçons",
      },
      hours: {
        title: "Heures d'ouverture de l'atelier",
        text: "Lundi – Vendredi: 8h00 – 12h00 / 13h30 – 18h00\nSamedi: sur rendez-vous\nDimanche: fermé",
      },
      nav: {
        home: "Accueil",
        chiSono: "Qui suis-je",
        servizi: "Services",
        galleria: "Galerie",
        contatti: "Contact",
      },
      thankYou: "Merci! Votre demande a été enregistrée, nous vous recontacterons bientôt.",
    },
    footer: {
      signature:
        "Menuiserie et peinture artisanales. Travaux soignés dans les détails, avec le bois et le temps de la montagne.",
    },
  },
};

const LangContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: "it", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("it");
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export function t(lang: Lang, key: string): string {
  const keys = key.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = translations[lang];
  for (const k of keys) {
    if (result && typeof result === "object" && k in result) {
      result = result[k];
    } else {
      return key;
    }
  }
  return typeof result === "string" ? result : key;
}
