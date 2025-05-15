// lib/projectsData.ts o app/data/projectsData.ts
export interface ProjectDetail {
  id: string;
  title: string;
  mainImage: string;
  galleryImages?: string[];
  description: React.ReactNode; // Para permitir JSX si necesitas párrafos, listas etc.
  location: string;
  year?: string;
  servicesProvided: string[];
  client?: string;
  category: "urbanismo" | "medio-ambiente" | "mixto";
}

export const projectsList: ProjectDetail[] = [
  // --- PROYECTOS DE URBANISMO ---
  {
    id: "club-social-ancash",
    title: "Edificio de Oficinas y Club Social Ancash",
    mainImage:
      "/images/CLUBSOCIALANCASHYEDIFICIODEOFICINAS-JESUSMARIA-LIMA.webp",
    description: (
      <>
        <p className="mb-3">
          Diseño arquitectónico y planificación para el Edificio de Oficinas y
          Club Social Ancash en Jesús María, Lima.
        </p>
        <p>
          El proyecto se enfocó en la creación de espacios modernos y
          funcionales, integrando áreas de trabajo corporativo con instalaciones
          recreativas y sociales para el club, optimizando el uso del terreno y
          la interrelación con el entorno urbano.
        </p>
      </>
    ),
    location: "Jesús María, Lima, Perú",
    servicesProvided: ["Diseño Arquitectónico", "Planificación Urbana"],
    category: "urbanismo",
  },
  {
    id: "banbif-chiclayo",
    title: "Banco Interamericano de Finanzas - BANBIF",
    mainImage: "/images/BANCOINTERAMERICANODEFINANZAS-BANBIF-CHICLAYO.webp",
    description:
      "Desarrollo del proyecto arquitectónico para la sede del Banco Interamericano de Finanzas (BANBIF) en Chiclayo. El diseño buscó reflejar la solidez e identidad de la institución, creando un espacio funcional y seguro para sus operaciones.",
    location: "Chiclayo, Lambayeque, Perú",
    servicesProvided: ["Diseño Arquitectónico Institucional"],
    category: "urbanismo",
  },
  {
    id: "edificio-santa-victoria",
    title: "Edificio de Oficinas Santa Victoria",
    mainImage: "/images/EDIFICIODEOFICINASSANTAVICTORIA-CHICLAYO.webp",
    description:
      "Proyecto arquitectónico para un moderno edificio de oficinas en la urbanización Santa Victoria, Chiclayo, diseñado para ofrecer espacios de trabajo flexibles y eficientes, con una estética contemporánea.",
    location: "Urb. Santa Victoria, Chiclayo, Lambayeque, Perú",
    servicesProvided: ["Diseño Arquitectónico Comercial"],
    category: "urbanismo",
  },
  {
    id: "edificio-san-pedro",
    title: "Edificio Empresarial San Pedro",
    mainImage: "/images/EDIFICIOEMPRESARIALSAN-PEDRO-CHICLAYO.webp",
    description:
      "Diseño y desarrollo de un edificio empresarial en Chiclayo, enfocado en crear un centro de negocios moderno con oficinas y locales comerciales, optimizando la funcionalidad y la imagen corporativa.",
    location: "Chiclayo, Lambayeque, Perú",
    servicesProvided: ["Diseño Arquitectónico Empresarial"],
    category: "urbanismo",
  },
  {
    id: "hotel-olmos",
    title: "Hotel Olmos",
    mainImage: "/images/HOTELOLMOS-LAMBAYEQUE.webp",
    description:
      "Proyecto arquitectónico para el Hotel Olmos en Lambayeque, diseñado para ofrecer confort y servicios de calidad a sus huéspedes, integrándose al contexto local y promoviendo el turismo en la región.",
    location: "Olmos, Lambayeque, Perú",
    servicesProvided: ["Diseño Arquitectónico Hotelero"],
    category: "urbanismo",
  },
  {
    id: "habilitacion-pomalca",
    title: "Habilitación Urbana Empresa Agroindustrial Pomalca",
    mainImage:
      "/images/HABILITACION-URBANA-DE-LA-EMPRESA-AGROINDUSTRIAL-POMALCA-S.A.A.webp",
    description:
      "Elaboración del proyecto de habilitación urbana en terrenos de la Empresa Agroindustrial Pomalca S.A.A., transformando suelo rústico en áreas urbanizadas con la dotación de servicios básicos e infraestructura necesaria.",
    location: "Pomalca, Chiclayo, Lambayeque, Perú",
    year: "2007",
    servicesProvided: ["Habilitación Urbana", "Diseño Urbano"],
    category: "urbanismo",
  },
  {
    id: "pdu-zarumilla",
    title: "Plan de Desarrollo Urbano (PDU) de Zarumilla",
    mainImage:
      "https://vrf137hlqv.ufs.sh/f/YfEXHleiA93z1uOSDQsgc61Dz0GXNsV9hqRLoMP3aeJgYljU",
    description:
      "Elaboración del Plan de Desarrollo Urbano (PDU) para el distrito de Zarumilla, provincia de Zarumilla, Tumbes. Este plan establece las directrices para el crecimiento ordenado y sostenible del distrito.",
    location: "Zarumilla, Tumbes, Perú",
    year: "2014",
    servicesProvided: ["Plan de Desarrollo Urbano (PDU)"],
    category: "urbanismo",
  },
  {
    id: "pat-zarumilla",
    title: "Plan de Acondicionamiento Territorial (PAT) de Zarumilla",
    mainImage:
      "https://vrf137hlqv.ufs.sh/f/YfEXHleiA93z1uOSDQsgc61Dz0GXNsV9hqRLoMP3aeJgYljU",
    description:
      "Formulación del Plan de Acondicionamiento Territorial (PAT) para la provincia de Zarumilla, Tumbes. Este instrumento de planificación define el uso del suelo y las estrategias de desarrollo a nivel provincial.",
    location: "Provincia de Zarumilla, Tumbes, Perú",
    year: "2014",
    servicesProvided: ["Plan de Acondicionamiento Territorial (PAT)"],
    category: "urbanismo",
  },
  {
    id: "pdu-nuevo-chimbote",
    title: "Plan de Desarrollo Urbano (PDU) de Nuevo Chimbote",
    mainImage:
      "https://vrf137hlqv.ufs.sh/f/YfEXHleiA93zvVfC2hwtH8F2lpsxQ976efrSqAo4UYJMvugP",
    description:
      "Elaboración del Plan de Desarrollo Urbano (PDU) y estudio de riesgos para el distrito de Nuevo Chimbote, Santa, Ancash. El plan guía el desarrollo urbano seguro y sostenible de la ciudad.",
    location: "Nuevo Chimbote, Santa, Ancash, Perú",
    year: "2012",
    servicesProvided: ["Plan de Desarrollo Urbano (PDU)", "Estudio de Riesgos"],
    category: "urbanismo",
  },

  // --- PROYECTOS DE MEDIO AMBIENTE ---
  {
    id: "dia-olmos-occidente",
    title: "DIA y ET - PTARD Campamento Occidente Olmos",
    mainImage:
      "/images/DECLARACIONDEIMPACTOAMBIENTALDELAPTARDELCAMPAMENTOOCCIDENTEDELPROYECTOTRASVASEOLMOS.webp",
    description:
      "Elaboración de la Declaración de Impacto Ambiental (DIA) y el Expediente Técnico para la Planta de Tratamiento de Aguas Residuales Domésticas (PTARD) del Campamento Occidente del Proyecto Trasvase Olmos.",
    location: "Huancabamba, Piura, Perú",
    year: "2010",
    servicesProvided: [
      "Declaración de Impacto Ambiental (DIA)",
      "Expediente Técnico",
    ],
    category: "medio-ambiente",
  },
  {
    id: "pma-olmos-oriente",
    title: "PMA y ET - PTARD Campamento Oriente Olmos",
    mainImage:
      "/images/DECLARACIONDEIMPACTOAMBIENTALDELAPTARDELCAMPAMENTOORIENTEDELPROYECTOTRASVASEOLMOS.webp", // Podría ser la misma u otra similar
    description:
      "Desarrollo del Plan de Manejo Ambiental (PMA) y Expediente Técnico para la Planta de Tratamiento de Aguas Residuales Domésticas (PTARD) del Campamento Oriente del Proyecto Trasvase Olmos.",
    location: "Jaén, Cajamarca, Perú",
    servicesProvided: ["Plan de Manejo Ambiental (PMA)", "Expediente Técnico"],
    category: "medio-ambiente",
  },
  {
    id: "eiasd-salud-motupe",
    title: "EIA-sd Mejoramiento Servicios de Salud Motupe",
    mainImage:
      "/images/Consultorías en Medio Ambiente/Estudio de Impacto Ambiental Semidetallado EIAsd del PROYECTO “MEJORAMIENTO DE LOS SERVICIOS DE SALUD DEL ESTABLECIMIENTO DE SALUD MOTUPE, DISTRITO DE MOTUPE, PROVINCIA DE LAMBAYEQUE, DEPARTAMENTO DE LAMBAYEQUE” (2020).webp",
    description:
      "Estudio de Impacto Ambiental Semidetallado (EIA-sd) para el proyecto de “Mejoramiento de los Servicios de Salud del Establecimiento de Salud Motupe”, incluyendo el Estudio de Impacto Vial correspondiente.",
    location: "Motupe, Lambayeque, Perú",
    year: "2020",
    servicesProvided: [
      "Estudio de Impacto Ambiental Semidetallado (EIA-sd)",
      "Estudio de Impacto Vial",
    ],
    category: "medio-ambiente",
  },
  {
    id: "pama-cementerio-motupe",
    title: "PAMA Creación del Cementerio Público Motupe",
    mainImage:
      "/images/Consultorías en Medio Ambiente/Programa de Adecuación Medio Ambiental (PAMA) del PROYECTO “CREACION DEL CEMENTERIO PUBLICO“SEÑOR DE LA RESURRECCIÓN”SOCIEDAD DE BENEFICENCIA PÚBLICA DE MOTUPE. (2018).webp",
    description:
      "Programa de Adecuación Medio Ambiental (PAMA) para el proyecto de “Creación del Cementerio Público Señor de la Resurrección” de la Sociedad de Beneficencia Pública de Motupe.",
    location: "Motupe, Lambayeque, Perú",
    year: "2018",
    servicesProvided: ["Programa de Adecuación y Manejo Ambiental (PAMA)"],
    category: "medio-ambiente",
  },
  {
    id: "eiasd-drenaje-victoria",
    title: "EIA-sd Instalación Sistema de Drenaje Pluvial La Victoria",
    mainImage:
      "/images/Consultorías en Medio Ambiente/Estudio de Impacto Ambiental Semidetallado (EIA-sd) del PROYECTO INSTALACIÓN DEL SISTEMA DE DRENAJE PLUVIAL URBANO EN LA CIUDAD DE LA VICTORIA, CHICLAYO - LAMBAYEQUE. (2014).webp",
    description:
      'Estudio de Impacto Ambiental Semidetallado (EIA-sd) para el proyecto de "Instalación del Sistema de Drenaje Pluvial Urbano en la ciudad de La Victoria, Chiclayo - Lambayeque".',
    location: "La Victoria, Chiclayo, Lambayeque, Perú",
    year: "2014",
    servicesProvided: ["Estudio de Impacto Ambiental Semidetallado (EIA-sd)"],
    category: "medio-ambiente",
  },
  {
    id: "eia-pistas-ayabaca",
    title: "EIA Mejoramiento de Pistas y Veredas Ayabaca",
    mainImage:
      "/images/Estudio-de-Impacto-Ambiental-del-PROYECTO-MEJORAMIENTO-DE-PISTAS-Y-VEREDAS-EN-LA-LOCALIDAD-DE-AYABAC.webp",
    description:
      'Estudio de Impacto Ambiental para el proyecto de "Mejoramiento de Pistas y Veredas en la Localidad de Ayabaca, Provincia de Ayabaca – Piura".',
    location: "Ayabaca, Piura, Perú",
    year: "2014",
    servicesProvided: ["Estudio de Impacto Ambiental (EIA)"],
    category: "medio-ambiente",
  },
  {
    id: "eiasd-agua-ferrenafe",
    title: "EIA-sd Sistemas de Agua Potable y Alcantarillado Ferreñafe",
    mainImage:
      "/images/EstudiodeImpactoAmbientaldeRedesdeAguaPotableydeAlcantarilladodelaCiudaddeFerreñafe.webp",
    description:
      'Estudio de Impacto Ambiental Semidetallado (EIA-sd) del proyecto "Mejoramiento y Ampliación Integral de los Sistemas de Agua Potable y Alcantarillado de la Localidad de Ferreñafe, Provincia de Ferreñafe".',
    location: "Ferreñafe, Lambayeque, Perú",
    year: "2012",
    servicesProvided: ["Estudio de Impacto Ambiental Semidetallado (EIA-sd)"],
    category: "medio-ambiente",
  },
  {
    id: "eiasd-agua-lambayeque",
    title: "EIA-sd Sistemas de Agua Potable y Alcantarillado Lambayeque",
    mainImage:
      "/images/EstudiodeImpactoAmbientaldeRedesdeAguaPotableydeAlcantarilladodelaCiudaddeLambayeque.webp",
    description:
      'Estudio de Impacto Ambiental Semidetallado (EIA-sd) del proyecto "Mejoramiento y Ampliación Integral de los Sistemas de Agua Potable y Alcantarillado de la Localidad de Lambayeque, Provincia de Lambayeque".',
    location: "Lambayeque, Lambayeque, Perú",
    year: "2012",
    servicesProvided: ["Estudio de Impacto Ambiental Semidetallado (EIA-sd)"],
    category: "medio-ambiente",
  },
  {
    id: "obs-digesa-agua-bagua",
    title: "Levantamiento Observaciones DIGESA Agua Potable Bagua",
    mainImage:
      "/images/Consultorías en Medio Ambiente/Levantamiento de Observaciones de DIGESA al Estudio de Impacto Ambiental del PROYECTO INTEGRADO DEL SISTEMA DE AGUA POTABLE Y ALCANTARILLADO DE LA LOCALIDAD DE BAGUA. (2011).webp",
    description:
      "Levantamiento de Observaciones de DIGESA al Estudio de Impacto Ambiental del Proyecto Integrado del Sistema de Agua Potable y Alcantarillado de la Localidad de Bagua.",
    location: "Bagua, Amazonas, Perú",
    year: "2011",
    servicesProvided: ["Gestión Ambiental", "Cumplimiento Normativo"],
    category: "medio-ambiente",
  },
  // Agrega más proyectos aquí, extrayendo info del folleto y video.
  // Asegúrate que los 'id' sean únicos y descriptivos para las URLs.
];

export const getProjectById = (id: string): ProjectDetail | undefined => {
  return projectsList.find((project) => project.id === id);
};
