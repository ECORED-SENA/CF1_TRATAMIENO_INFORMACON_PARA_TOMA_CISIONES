export default {
  global: {
    componenteFormativo: 'Tratamiento de la información y toma de decisiones',
    descripcionCurso:
      'En este componente se abordarán temáticas correspondientes a la estructura general del procesamiento de información como elemento fundamental en cuanto a la toma de decisiones, teniendo como base la implementación los sistemas de información a través de las herramientas tecnológicas y ofimáticas aplicados bajo los lineamientos normativos vigentes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Datos e Información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Procedimientos técnicos y de registro',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Control de la información',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas tecnológicas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas ofimáticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Toma de decisiones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Soporte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Documentación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Métodos técnicos y sistemas de ordenación',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Tratamiento y procesamiento de datos',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Normatividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Seguridad y salud en el trabajo (posturas)',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Seguridad ambiental (uso eficiente del papel)',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Datos e información',
      referencia:
        'NTICX and More. [NTICX AND MORE]. (2021, 7 de junio). Datos e información. [vídeo]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/0_AREX5iJZQ',
    },
    {
      tema: 'Herramientas tecnológicas',
      referencia:
        'ONiAd – Publicidad [ONiAd - Publicidad Programática]. (2019, 1 de agosto). Programática. [vídeo]. Yotube.',
      tipo: 'Video',
      link: 'https://youtu.be/QmBMwydWEeg',
    },
    {
      tema: 'Herramientas ofimáticas',
      referencia:
        'UPM. [UPM]. (2016, 19 de enero). Herramientas ofimáticas online. [vídeo].YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/l0bbutwn-So',
    },
    {
      tema: 'Herramientas ofimáticas',
      referencia:
        'Ecosistema de recursos educativos digitales SENA. [Ecosistema de Recursos Educativos Digitales SENA]. (2022, 26 de marzo). Herramientas ofimáticas. [vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/Hs7UG7RO3_M',
    },
    {
      tema: 'Celdas',
      referencia: 'Microsoft 365. (2022). Tareas básicas en Excel. Microsoft.',
      tipo: 'Manual',
      link:
        'https://support.microsoft.com/es-es/office/tareas-b%C3%A1sicas-en-excel-dc775dd1-fa52-430f-9c3c-d998d1735fca',
    },
    {
      tema: 'Sistemas de información',
      referencia:
        'Lapiedra Alcamí, R., Devece Carañana, C. y  Guiral Herrando, J. (2000). Introducción a la gestión de sistemas de información en la empresa. Meta Biblioteca.',
      tipo: 'Artículo',
      link:
        'https://libros.metabiblioteca.org/bitstream/001/193/8/978-84-693-9894-4.pdf',
    },
    {
      tema: 'Toma de decisiones                                          ',
      referencia:
        'Conduce tu empresa. [Conduce Tu Empresa].(2020, 11 de abril). ¿Cómo tomar una buena decisión empresarial? | Proceso de Toma de Decisiones. [vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/rWQum6aqpeE',
    },
    {
      tema: 'Seguridad y salud en el trabajo (posturas)',
      referencia:
        'Sanco Seguros. [Sancor Seguros]. (2015, 12 de mayol). Prevención Riesgos del Trabajo: Posturas Saludables. [vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/nZTfwdwJH-4',
    },
    {
      tema: 'Seguridad ambiental (uso eficiente del papel)',
      referencia:
        'Castrillon, M. [NCASTRILLON M]. (2018, 26 de julio). Uso eficiente del papel. [vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/0dtYD9Z1LTg',
    },
  ],
  glosario: [
    {
      termino: 'Archivo',
      significado:
        'Es un sistema que asegura la información organizacional de manera ordenada y organizada dentro de cada área específica ya sea de manera física o digital.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Una base de datos es información que se configura para un fácil acceso, administración y actualización. Las bases de datos informáticas suelen almacenar conjuntos de registros de datos o archivos que contienen información, como transacciones de ventas, datos de clientes, información financiera y de productos.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'Es la ciencia que estudia el entorno general del trabajo. Más específicamente, implementa las estrategias de adaptación adecuada que debe tener un trabajador ejerciendo su labor, eliminando los riesgos a consecuencia de esto.',
    },
    {
      termino: 'Información organizacional',
      significado:
        'Elemento que incluye políticas, procedimientos y estándares que los propietarios del sistema y los proveedores de control común deben seguir y la definición e implementación de controles técnicos, operativos y de gestión en toda la organización.',
    },
    {
      termino: 'Sistema de gestión',
      significado:
        'Es un elemento esencial dentro de una organización que se encarga de la gestión articulada entre todas las áreas, que logra cumplir sus objetivos, como por ejemplo el mejoramiento de la calidad del servicio o bien, eficiencia operativa y administrativa, la gestión ambiental, entre otras.',
    },
    {
      termino: 'SGSST',
      significado: 'Sistema General de Seguridad y Salud en el Trabajo.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'Es una de las funciones más importantes de un gerente. Cada gerente tiene que tomar decisiones rutinarias que pueden tener consecuencias drásticas. Debido a la naturaleza impredecible de los efectos de estas decisiones, los gerentes deben ser muy cuidadosos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cohen, D. y Asín Lares, E. (2000). Sistemas de información para los negocios, un enfoque de toma de decisiones (3ra. Edi.). McGraw-Hill.',
      link:
        'https://www.academia.edu/9505127/Sistemas_de_Informacion_para_los_Negocios_3ra_Edicion_Daniel_Cohen_Karen_Enrique_Asin_Lares',
    },
    {
      referencia:
        'Harrington, J. (1992). Mejoramiento de los procesos de la empresa. McGraw-Hill.',
      link:
        'https://www.academia.edu/11065235/MEJORAMIENTO_DE_LOS_PROCESOS_DE_LA_EMPRESA_H_James_harrington',
    },
    {
      referencia:
        'Norma Técnica Colombiana. (2008). Sistems de gestión de la calidad requisitos NTC-ISO 9001. Acecep.',
      link: 'https://www.cecep.edu.co/documentos/calidad/ISO-9001-2008.pdf',
    },
    {
      referencia:
        'Rincón, R. D. (1998). Los indicadores de gestión organizacional: Una guía para su definición. Revista Universidad EAFIT.',
      link:
        'https://repository.eafit.edu.co/bitstream/handle/10784/16386/document%20-%202020-08-17T103302.529.pdf?sequence=2&isAllowed=y',
    },
    {
      referencia:
        'Ríos, L.G. y Mustafá Iza, Y. (2004). Origen de los actuales procesos administrativos. Redalyc.',
      link: 'https://www.redalyc.org/pdf/849/84912053038.pdf',
    },
    {
      referencia:
        'Romero Galindo, R. M. (2012). Análisis, Diseño e Implementación de un Sistema de información aplicado a la Gestión Educativa en Centros de Educación Especial. Pontificia Universidad Católica del Perú.',
      link:
        'https://tesis.pucp.edu.pe/repositorio/bitstream/handle/20.500.12404/1562/ROMERO_GALINDO_RAUL_SISTEMA_INFORMACION_EDUCACION_ESPECIAL.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Silberschatz, A. y Korth, H. (1998). Fundamentos de la base de datos. HispaFiles. ',
      link:
        'https://hispafiles.ru/data/t/47328/src/Fundamentos_de_Bases_de_Datos_5a_Ed_-_Si.pdf',
    },
    {
      referencia:
        'Whitten, J. L. y Bentley, L. D. (1996). Análisis y diseño de sistemas de información.  cGraw-Hill.',
      link:
        'https://www.academia.edu/31758172/Analisis_de_sistemas_Dise%C3%B1o_y_Metodos_Whitten_7ma',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Francisco Charà Carrero',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Giovanna Andrea Escobar',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Carlos Julian Ramirez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
