<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1(data-aos="fade-right") Soporte  

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p Todas las empresas, necesitan de los servicios de las áreas de sistemas y tecnologías de la información, con el fin de aumentar la productividad, estas áreas pueden tener personal propio o subcontratado,  son los responsables de satisfacer las necesidades computacionales  y de soporte técnico de las aplicaciones del negocio, contables y las ofimáticas, permitiendo que las empresas sean más competitivas, por lo cual es imprescindible mantenerse actualizadas sobre las últimas tendencias tecnológicas emergentes.

    p Los clientes prefieren trabajar con empresas capaces de mantenerse al día con las tendencias tecnológicas. Ser muy consciente de la importancia de los servicios de soporte de TI, en particular los cambios grandes y pequeños en su estructura general, junto con sus demandas y costos, transmite un sentido de confiabilidad y dedicación al tiempo que asegura operaciones más optimizadas.

    h5.mb-5 Las funciones de soportes que realizan las áreas de sistemas son las siguientes:

    .row.justify-content-center.mb-5
      .col-lg-6
        ImagenInfografica.color-secundario.mb-5(data-aos="fade-up")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema5/img02.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="4.8%" y="36%" numero="1")
            p Dar soporte informático a todas las áreas que lo requieran, atendiendo de los usuarios (consultas, resolución de problemas, preguntas frecuentes, asesoría técnica, información general).

          .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="89.8%" y="33.6%" numero="2")
            p Realizar mantenimiento correctivo y preventivo en los equipos de cómputo.

          .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="74.78%" y="9.8%" numero="3")
            p Optimizar el rendimiento de las aplicaciones de negocios.
          
          .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="34.2%" y="15.5%" numero="4")
            p Gestionar las cuentas de usuario y accesos, preservando la seguridad de los sistemas y la privacidad de los datos de los usuarios.

          .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="64.2%" y="94.4%" numero="5")
            p Instalar, configurar y dar mantenimiento a los servicios informáticos.

          .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="49.2%" y="6%" numero="6")
            p Respaldar la información mediante copias de seguridad periódicas.

          .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="21.2%" y="64.1%" numero="7")
            p Evaluar las necesidades de recursos como  memorias, discos, CPUs y aprovisionarse en caso de ser necesario.

          .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="85.2%" y="67%" numero="8")
            p Hacer validaciones de conectividad de las redes de datos.

    p.mb-5 Es necesario reconocer la importancia y las ventajas de TI en las operaciones internas y externas de una empresa, sin duda estas garantizan el buen funcionamiento de los equipos y tienen las aplicaciones al máximo rendimiento, con el fin de facilitar soporte y desarrollo de los procesos de todas las áreas de la empresa.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-md-5.mb-5.padding_2 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4.p-lg-5
                p Los empleados en general también deben recibir capacitaciones en el uso de los aplicativos que maneja, para que puedan desempeñarse adecuadamente en sus funciones y estar familiarizados con el <em>software</em> o el sistema.           
            .col-lg-4
              img.img-t.mx-auto(src='@/assets/curso/tema5/img03.svg' alt='AvatarTop') 

    p.mb-5 Las tecnologías de la información cubren una amplia gama de servicios e industrias, sin ella, sería imposible que las empresas y la sociedad trascienda en el cumplimiento de  sus misiones, amplíen su red y alcancen el éxito, soportando desde procesos simples como la entrada de datos, el mantenimiento de registros, hasta la implementación de operaciones complejas, el mantenimiento de los sistemas de información, la protección de datos, la implementación de los sistemas avanzados, con el propósito de soportar la base tecnológica y aplicaciones claves de las organizaciones.

    .row.mb-5
      .col-lg-9.up.bg_cajon-color3.ms-3
        .color-fondo.bg-color(data-aos="fade-down")
          .color-fondo__texto 
            | <b>Dentro de cualquier organización es importante reconocer las áreas que soportan la estrategia del negocio, en cada una se debe tener personal calificado para realizar las tareas propias del cargo, a continuación, se detallan las más representativas que soportan las empresas:</b>

    .botones-hover.mb-4(data-aos="fade-up-right")
      Botones
    
    .row.mb-5(data-aos="fade-right")
      .col-lg-4.col-xl-5.col-xxl-4
        .bg_1
          .row.align-items-center
            .col-lg-12
              ul.lista-ul
                li
                  i.fas.fa-caret-right
                  h4.m_block.text-white.mt_1 Tipos, características y normatividad

    p.mb-5 Los servicios y sistemas tecnológicos abarcan una amplia gama de recursos innovadores y de resolución de problemas, en la siguiente lista se enumeran los beneficios de los servicios de soporte de TI y los escenarios donde la tecnología de la información se entrelaza con todas las decisiones grandes y pequeñas del crecimiento de una empresa:

    .bg_slyder.p-5.mb-5
      SlyderA(tipo="b").color_slyder-a_botones
        .row.justify-content-around
          .col-lg-6(data-aos="fade-right") 
            h4.mb-4 Gestión eficaz de datos
            p Las empresas soportan datos importantes, como el salario de los empleados, los ingresos y los detalles de recursos humanos. Por esta razón, el almacenamiento y la gestión de datos son cruciales para cualquier tipo de negocio y también es un gran ejemplo de por qué es importante el soporte de TI. La inclusión de servicios de TI competentes en la gestión de datos impone una evaluación más profunda de las necesidades comerciales y un análisis cuidadoso del panorama de datos de la empresa.    
          .col-lg-4(data-aos="fade-left") 
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema1/img06.svg', alt='AvatarTop')

        .row.justify-content-around
          .col-lg-6
            h4.mb-4 Mejorar la toma de decisiones
            p Se basan en estudios de mercado sólidos, el proceso es posible a través de videoconferencias, revisión de comentarios públicos en las redes sociales, foros de la industria y comentarios de encuestas en línea. Estos procesos son factores que contribuyen a mejores decisiones comerciales y establecimiento de objetivos.
          .col-lg-4
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema5/img06.svg', alt='AvatarTop')

        .row.justify-content-around
          .col-lg-6
            h4 Resolver problemas complejos
            p Las áreas sistemas brindan a las empresas las herramientas necesarias para obtener <em>hardware</em> mejorado, como almacenamiento de alta memoria, procesadores más rápidos y pantallas de alta calidad, combinado con aplicaciones más inteligentes como <em>software</em> de mapas mentales, sistemas colaborativos y un proceso automatizado para hacer que el trabajo sea más ágil y organizado, ayuda a las industrias a investigar y recopilar datos fácilmente, analizar información y planificar la escalabilidad. 
          .col-lg-4
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema5/img07.svg', alt='AvatarTop')

        .row.justify-content-around
          .col-lg-6
            h4 Seguridad contra virus y otro <em>software</em> comprometido
            p Los servicios de soporte de TI garantizan la seguridad de sus sistemas informáticos contra una variedad de virus y otras amenazas en línea. Además mantener los sistemas informáticos actualizados y monitoreados evita que la empresa caiga en riesgos de acceso y operaciones de datos digitales.    
          .col-lg-4
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema5/img08.svg', alt='AvatarTop')

        .row.justify-content-around
          .col-lg-6
            h4 Monitoreo integral
            p Es importante monitorear el desempeño y el progreso de las operaciones internas de una empresa y los esfuerzos de llegar al cliente en cada etapa. La supervisión integral con la ayuda de un sistema de TI es imprescindible para las empresas que ofrecen servicios en línea a los clientes. Esto es para evitar que se pongan en peligro los servicios y la seguridad de los clientes. 
          .col-lg-4
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema5/img09.svg', alt='AvatarTop')

        .row.justify-content-around
          .col-lg-6
            h4 Gestión de los recursos humanos
            p Creación de un portal al que solo pueden acceder los empleados internos, donde se publique información sobre la situación laboral, ayudando a determinar entre los recursos y las ofertas de trabajo que aún están abiertas de las que ya se han cumplido, entre otros aspectos relacionados.
  
          .col-lg-4
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema5/img10.svg', alt='AvatarTop')

        .row.justify-content-around
          .col-lg-6
            h4 Estrategias de <em>marketing</em> en línea
            p Pueden ser amplificadas por los sistemas de información en términos de facilitar una investigación de mercado más precisa y acumular datos valiosos. Esto incluye encontrar audiencias objetivo, descubrir sus necesidades y demandas únicas y crear una campaña promocional que atraiga a las personas a comprar.   
          .col-lg-4
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema5/img11.svg', alt='AvatarTop')

        .row.justify-content-around
          .col-lg-6
            h4 Soporte al cliente mejorado
            p Los clientes pueden recibir asistencia desde múltiples canales de comunicación y brindar a los usuarios finales más opciones sobre cómo pueden llegar a un negocio, ya sea por teléfono, correo electrónico, mensajería de redes sociales, chat en vivo o incluso SMS, estos canales hacen que los clientes lleguen a su negocio de manera conveniente.    
          .col-lg-4
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema5/img12.svg', alt='AvatarTop')

        .row.justify-content-around
          .col-lg-6
            h4 Mayor reconocimiento de marca
            p Cuando la marca se combina con los servicios y sistemas de información, no se limita solo a mejorar las estrategias de <em>marketing</em> existentes o ayudar a formar un nuevo enfoque publicitario. La tecnología puede aumentar aún más la marca mediante la maximización de la originalidad de la línea de productos y servicios de una empresa.    
          .col-lg-4
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema5/img13.svg', alt='AvatarTop')



</template>

<script>
export default {
  name: 'Tema5',
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

<script>
import Botones from '../components/Botones.vue'
export default {
  name: 'Tema5',
  components: {
    Botones,
  },
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
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
