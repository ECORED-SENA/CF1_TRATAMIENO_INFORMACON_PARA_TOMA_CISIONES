<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Herramientas ofimáticas

    p Este tipo de herramientas son una ayuda para la realización de tareas de oficina, aportan a la gestión, creación y manipulación de grandes cantidades de datos y documentos, además con estas se pueden crear presentaciones, informes, bases de datos, textos, hojas de cálculo, correo electrónico, entre otros. Se clasifican así:          

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Herramienta de procesador de textos" :icono="require('@/assets/curso/tema3/img01.svg')")
        .row.justify-content-around
          .col-md-7.mb-4.mb-md-0
            h4(data-aos="fade-right") Herramienta de procesador de textos
            p(data-aos="fade-right") Estas permiten la creación de los documentos de texto, ayudando a crear, formatear, manipular y guardar archivos de texto. El más común es Microsoft Word, que puede ser instalado o en la nube. Y como ejemplos también pueden encontrarse: Google Docs, OpenOffice, Abiword, Word perfect, WordPad, Bloc de Notas etc.
        
          .col-md-3
            figure
              img.img-t.mx-auto(data-aos="fade-left")(src='@/assets/curso/tema3/img05.svg', alt='Texto que describa la imagen')
              
      .py-4.py-md-5(titulo="Herramienta de presentación" :icono="require('@/assets/curso/tema3/img02.svg')")
        .row.justify-content-around
          .col-md-7.mb-4.mb-md-0
            h4 Herramienta de presentación
            p Ayuda al usuario a dividir la información en pequeñas partes llamadas diapositivas, que son básicamente pequeñas partes de un tema en particular dispuestas en diferentes páginas, las diapositivas pueden contener imágenes, audios, videos, gráficos, tablas, etc, representando ideas para la presentación ante una audiencia. La herramienta más conocida es  Microsoft PowerPoint, pero en línea existen muchas otras como Google Slides, Prezi, Genially, Slidebean, Glogster, Keynote, Bunkr, entre otras.
            
          .col-md-3
            figur7
              img.img-t.mx-auto(src='@/assets/curso/tema3/img06.svg', alt='Texto que describa la imagen')
              
      .py-4.py-md-5(titulo="Herramienta de hoja de cálculo" :icono="require('@/assets/curso/tema3/img03.svg')")
        .row.justify-content-around
          .col-md-7.mb-4.mb-md-0
            h4 Herramienta de hoja de cálculo
            p Este <em>Software</em> contiene los datos en forma de filas y columnas, donde la intersección de una fila y una columna se llama una celda, en esta se almacenan los datos y se puede aplicar varias fórmulas  y cálculos para el análisis de información y conclusiones de los datos. En los sectores empresariales y financieros se utiliza frecuentemente estas herramientas, además cuentan con la posibilidad de adicionar gráficos, tablas, gráficos 3D, filtros, tablas dinámicas  etc. Información que aporta a la creación de informes y publicación de resultados de análisis de datos. La herramienta más conocida es  Microsoft Excel, pero en línea está disponible las hojas de cálculo de Google, ThinkFree, Numbers, Zoho Sheet, Birt, OpenOffice, entre otras.        
          .col-md-3
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema3/img07.svg', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Sistemas de gestión de bases de datos" :icono="require('@/assets/curso/tema3/img04.svg')")
        .row.justify-content-around
          .col-md-7.mb-4.mb-md-0
            h4 Sistemas de gestión de bases de datos
            p Es una colección de datos o información relacionados en forma organizada. Un sistema de gestión de bases de datos es una herramienta que se utiliza para almacenar, buscar, extraer o eliminar información de una base de datos. Como ejemplo se pueden mencionar:  Microsoft SQL, Mysql, PostgreSql, Oracle, MongoDB, DB2, entre otras.
                          
          .col-md-3
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema3/img08.svg', alt='Texto que describa la imagen')

    p.mb-5 Es importante reconocer las funciones de las herramientas de oficina, pues estas facilitan la organización del trabajo, a continuación, se relacionan las más representativas:

    .row.justify-content-center
      .col-lg-8
        ImagenInfografica.color-secundario.mb-5(data-aos="fade-down")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img09.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="46.1%" y="83.3%" numero="1")
            p Organizar archivos, documentos y textos.

          .tarjeta.color-acento-botones.p-3(x="89.4%" y="38.6%" numero="2")
            p Realizar cálculos y análisis de datos.

          .tarjeta.color-acento-botones.p-3(x="67.3%" y="66.7%" numero="3")
            p Almacenar, acceder, manipular o eliminar datos específicos.

          .tarjeta.color-acento-botones.p-3(x="28.3%" y="35%" numero="4")
            p Diseño de presentaciones, gráficos y animaciones.

          .tarjeta.color-acento-botones.p-3(x="65%" y="26.4%" numero="5")
            p Editar fotos y videos.

          .tarjeta.color-acento-botones.p-3(x="47.2%" y="52.4%" numero="6")
            p Mantener registros de asistencia y control documental. 

    .row.mb-5(data-aos="fade-right")
      .col-lg-2.col-xl-3.col-xxl-2
        .bg_1
          .row.align-items-center
            .col-lg-10
              ul.lista-ul
                li
                  i.fas.fa-caret-right
                  h4.m_block.text-white.mt_1 Celdas

    p Una celda es una parte de una tabla donde se cruzan una fila y una columna, está diseñada para contener una parte específica de los datos dentro de un registro, a veces se hace referencia a una celda como campo. 

    p.mb-4 <b>Es importante que, al usar herramientas de hojas de cálculo, el reconocimiento de la ubicación con las opciones y los menús disponibles, esto para un mejor manejo y uso.</b>

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-md-5.mb-5.padding_2 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.px-4.py-4.py-lg-5
                p En las celdas se pueden realizar cálculos sencillos con el fin de realizar seguimiento a los datos que se dispongan en la hoja de cálculo, además permite el ordenamiento, creación de filtros, tablas y gráficos. Las celdas pueden contener números, texto o fórmulas. Los datos se escriben en las celdas y se agrupan en filas y columnas.             
            .col-lg-4
              img.img-t.mx-auto(src='@/assets/curso/tema3/img10.svg' alt='AvatarTop') 

    .row.align-items-center.mb-5
      .col-lg-7.up.bg_cajon-color1
        .color-fondo.bg-color(data-aos="fade-down")
          .color-fondo__texto   
            | La fila de una tabla se compone de una o más celdas, que se ejecutan una al lado de la otra horizontalmente. La columna se compone de una o más celdas que se extienden una debajo de la otra verticalmente.
            br
            br
            | A las columnas, normalmente se les asigna un tipo de datos, que determinan el contenido de cada celda dentro de esa columna. Por lo tanto, todas las celdas dentro de una columna compartirán un tipo de datos. Especialmente si con estas se requiere hacer cálculos, para un posterior análisis de la información.
      .col-lg-5.mt-5.mt-col-lg-0
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema3/img11.png')

    .row.align-items-center.mb-5
      .col-lg-5.mb-5.mb-lg-0
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema3/img12.png')
      .col-lg-7.up.bg_cajon-color2
        .color-fondo.bg-color(data-aos="fade-down")
          .color-fondo__texto   
            | Antes de realizar cualquier modificación en una celda se debe seleccionar con el cursor, para seleccionar la celda solo se debe hacer clic sobre esta, para seleccionar un conjunto de celdas adyacentes, se debe dejar el clic sostenido en la primera celda a desplazar el mouse hasta la última celda a seleccionar y después soltarlo, las celdas seleccionadas aparecerán con un marco alrededor y cambiarán de color.
            br
            br
            | Para realizar la selección de una columna se debe situar el cursor sobre el identificativo de la columna en la parte superior de la hoja, y seleccionar la letra que representa la columna. De igual manera para seleccionar una fila se debe situar el cursor sobre el identificativo izquierdo de la fila y dar clic.

    p <b>En las hojas de cálculo también se puede determinar las celdas que deben permanecer fijas al momento de hacer los cálculos.</b>

    .row.mb-4(data-aos="fade-right")
      .col-lg-3.col-xl-4.col-xxl-3
        .bg_1
          .row.align-items-center
            .col-lg-12
              ul.lista-ul
                li
                  i.fas.fa-caret-right
                  h4.m_block.text-white.mt_1 Sistemas de información

    p Se refiere a un aplicativo conectado a una red para recopilar, almacenar, procesar, analizar y distribuir datos. Los sistemas de información y los profesionales pueden ayudar a las empresas a mejorar su eficiencia, maximizar los ingresos y optimizar sus operaciones.

    p <b>Existen diferentes tipos de sistemas de información que pueden servir para una variedad de propósitos dependiendo de las necesidades de una organización. Se presentan los siguientes ejemplos:</b>

    .row.align-items-center.mb-5
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
          .row.justify-content-evenly(titulo="Almacenes de datos")
            .col-md-3.mb-4.mb-md-0
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema3/img13.svg', alt='Texto que describa la imagen')
            .col-md-7
              p Son sistemas de gestión de datos que admiten análisis y otras actividades de inteligencia empresarial, en estos se consolidan y analizan datos de una gran variedad de fuentes. Los almacenes de datos pueden proporcionar información sobre las empresas para ayudar a mejorar la toma de decisiones.         

          .row.justify-content-evenly(titulo="Sistemas empresariales")
            .col-md-3.mb-4.mb-md-0
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema3/img14.svg', alt='Texto que describa la imagen')
            .col-md-7
              p También conocidos como sistemas de planificación de recursos empresariales (ERP), son sistemas integrados que combinan todo el <em>Hardware</em> y el <em>Software</em> que utiliza una empresa para diferentes funciones en sus operaciones. Estos sistemas para toda la organización ayudan a que la información fluya entre los departamentos y permiten que los procesos de diferentes partes del negocio se integren en toda la empresa.          

          .row.justify-content-evenly(titulo="Sistemas expertos")
            .col-md-3.mb-4.mb-md-0
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema3/img15.svg', alt='Texto que describa la imagen')
            .col-md-7
              p Estos utilizan inteligencia artificial para imitar la toma de decisiones humana. El <em>Software</em> utiliza el conocimiento humano para resolver problemas que normalmente requerirían la experiencia de una persona, estos se pueden aplicar en áreas como diagnósticos médicos, contabilidad y codificación.          

          .row.justify-content-evenly(titulo="Sistemas de información geográfica")
            .col-md-3.mb-4.mb-md-0
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema3/img16.svg', alt='Texto que describa la imagen')
            .col-md-7
              p Son herramientas que recopilan, organizan, mapean y analizan datos con un componente espacial, estas pueden mejorar el análisis y la toma de decisiones al permitir que los usuarios visualicen datos en un mapa.           

          .row.justify-content-evenly(titulo="Sistemas de automatización de oficinas")
            .col-md-3.mb-4.mb-md-0
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema3/img17.svg', alt='Texto que describa la imagen')
            .col-md-7
              p Estas combinan tecnología de comunicación, personas y computadoras para ayudar a realizar actividades de oficina, como preparar comunicaciones escritas, imprimir, programar o crear informes.          
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/img18.png')(data-aos="fade-left")

    h5.mb-5 Cada sistema de información incluye varios componentes claves, entre estos están el <em>Hardware</em>, <em>Software</em>, telecomunicaciones, personas y datos, que se detalla a continuación:

    .bg_slyder2.p-5.mb-5
      SlyderA(tipo="b").color2_slyder-a_botones
        .row.justify-content-center.align-items-center
          .col-lg-4(data-aos="fade-left") 
            figure
              img(src='@/assets/curso/tema3/img19.png', alt='AvatarTop')
          .col-lg-7(data-aos="fade-right") 
            h3(style= "color: #13B770") <em>Hardware</em>
            p.text-white El componente de <em>Hardware</em> comprende los elementos físicos del sistema, lo que las personas pueden tocar físicamente, estos mecanismos, equipos y cableados permiten el funcionamiento de los sistemas como computadoras, teléfonos inteligentes y tabletas.
            p.text-white Los dispositivos de entrada y salida son piezas esenciales de tecnología que permiten a los humanos interactuar con computadoras y los sistemas de información, estos son los teclados, ratones, micrófonos y escáneres, y los dispositivos de salida pueden incluir impresoras, monitores, parlantes y tarjetas de sonido y video.
            p.text-white Las piezas de <em>Hardware</em>, incluidos los microprocesadores, los discos duros, las unidades de suministro de energía eléctrica y el almacenamiento extraíble, también permiten que las computadoras almacenen y procesen datos.

        .row.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img20.png', alt='AvatarTop')
          .col-lg-7
            h3(style= "color: #13B770") <em>Software</em>
            p.text-white Son los programas intangibles que gestionan las funciones del sistema de información, incluida la entrada, la salida, el procesamiento y el almacenamiento. Un ejemplo de estos son los sistemas operativos MacOS o Windows, que proporcionan una base para que se ejecute el <em>Software</em> de la aplicación.
            p.text-white El <em>Software</em> de aplicación opera programas orientados a usos particulares en los sistemas de información. Por ejemplo, las aplicaciones de procesamiento con interfaz gráfica de usuario que permite a los usuarios interactuar a través de gráficos digitales, como iconos, botones y barras de desplazamiento, en lugar de comandos basados en texto.  
            p.text-white El <em>Software</em> puede ser de código abierto (disponible públicamente para que los usuarios y programadores la manipulen) o de código cerrado (tiene un propietario y requiere licenciamiento). 

        .row.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img21.png', alt='AvatarTop')
          .col-lg-7
            h3(style= "color: #13B770") Telecomunicaciones
            p.text-white Estos conectan las redes informáticas y permiten que la información se transmita a través de ellas, además facilitan el acceso a la información desde la nube.
            p.text-white Las redes de telecomunicaciones utilizan elementos para transmitir los datos como los cables coaxiales, fibra óptica o dispositivos inalámbricos y antenas.
            p.text-white Las redes de área local (LAN) conectan computadoras para crear redes de computadoras en un espacio designado, como una escuela o un hogar. Las redes de área amplia (WAN) son colecciones de LAN que facilitan el intercambio de datos en áreas extensas. Una red privada virtual (VPN) permite a un usuario proteger su privacidad en línea mediante el cifrado de datos en redes públicas.
            p.text-white Las microondas y las ondas de radio también se pueden utilizar para transmitir información en las redes de telecomunicaciones.

        .row.justify-content-center
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img22.png', alt='AvatarTop')
          .col-lg-7
            h3(style= "color: #13B770").mb-5 Bases de datos
            p.text-white Los datos son elementos intangibles, que son almacenados, transmitidos, analizados y procesados por otros componentes de los sistemas de información. 
            p.text-white Los datos se pueden almacenar en una base de datos o almacén de datos, en la forma que mejor se adapte a la organización que los utiliza.
            p.text-white Las bases de datos albergan colecciones de datos e información que se pueden consultar o recuperar para propósitos específicos.  

        .row.justify-content-center
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img23.png', alt='AvatarTop')
          .col-lg-7
            h3(style= "color: #13B770").mb-5 Recursos humanos
            p.text-white Son una parte crucial de los sistemas de información, pues el componente humano abarca a las personas calificadas que influyen y manipulan los datos, el <em>Software</em> y los procesos en los sistemas de información. Los seres humanos involucrados en los sistemas de información pueden incluir analistas de negocios, analistas de seguridad de la información o analistas de sistemas para respaldar las operaciones y los procesos de una organización. 
    

        

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
