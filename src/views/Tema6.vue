<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1(data-aos="fade-right") Documentación de datos

    p.mb-5 La documentación de los datos es fundamental para garantizar una comprensión común de la información contenida en los datos y para asegurar la confiabilidad de esa información. Los analistas comerciales a menudo son responsables de crear documentación de datos para proyectos de sistemas de información y la alineación de esta documentación con procesos y reglas de gobierno. La clasificación de la documentación de datos:

    .row.mb-5.justify-content-center
      .col-lg-7.mb-4.mb-lg-0
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Diagramas de flujo de datos") El seguimiento del flujo de datos a través de una aplicación incluye la identificación de las fuentes, transformaciones y destinos de los datos que serán compatibles. Los destinos incluyen tanto los almacenes de datos como los procesos posteriores que utilizan los datos. Las fuentes de datos pueden compartirse dentro y entre la organización o pueden involucrar entidades externas. Incluyen entrada de datos, bases de datos existentes, archivos de computadora y flujos de datos de aplicaciones externas. Una vez que se determinan las fuentes, se definen los procesos que deben ocurrir para transformar o manipular los datos. 
          
          p.text-small(numero="2" titulo="Matriz de datos comunes") Se utiliza durante la fase de recopilación de requisitos de un proyecto cuando se requiere al menos algún nivel de integración de datos que involucre múltiples aplicaciones y/o alguna forma de gobierno de datos organizacional. Para construir este tipo de matriz, los elementos de datos se enumeran para el dominio de alcance, con información sobre esos datos en relación con las unidades organizativas o aplicaciones que interactúan con esos datos. Este tipo de diagrama debe construirse para incluir información aplicable al problema en consideración.
          
          p.text-small(numero="3" titulo="Requisitos de datos de modelado") Se usan para mejorar una aplicación, el modelado de los datos a un alto nivel proporciona orientación en los esfuerzos de diseño. Es un modelo de alto nivel, orientado al negocio, que captura las necesidades de datos operativos, con el fin de identificar las "entidades" de datos que deben explorarse para definir los requisitos. 
          
          p.text-small(numero="4" titulo="El modelo de datos conceptual") Representa la información que la empresa necesita para respaldar los procesos comerciales existentes dentro del dominio de la organización o proyecto. Este tipo de modelo es de muy alto nivel y guía el diseño del almacén de datos para una aplicación. Este modelo es independiente de cualquier tecnología que se utilice para implementar la solución es muy útil durante la fase de recopilación de requisitos de un proyecto y puede descartarse una vez que se define un modelo lógico para el dominio del problema.

          p.text-small(numero="5" titulo="Modelo de relación de entidad lógica") Este incluye las entidades que se necesitan para apoyar una solicitud, la información acerca de cada una de las entidades (incluyendo atributos y los identificadores únicos), y las relaciones que se necesitan entre las entidades. Este tipo de modelo puede estar informado por el modelo de datos conceptuales, pero la estructura de entidad-relación identificada se modifica para admitir (en un alto nivel) el dominio de la solución técnica.

          p.text-small(numero="6" titulo="Modelo de datos físicos") Un modelo de datos físicos proporciona especificaciones detalladas para la estructura de datos que respalda las operaciones comerciales. El modelo de datos lógicos, generalmente completado con los requisitos funcionales del proyecto de referencia, se amplía y modifica para ajustarse a la arquitectura de datos que se utilizará para almacenar los datos. Esto podría reflejar cualquier tipo de arquitectura: las bases de datos relacionales o los almacenes de datos XML requieren esta especificación. 
      .col-lg-4
        figure
          img(src='@/assets/curso/tema6/img01.svg')
    
    Separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 6.1	Métodos técnicos y sistemas de ordenación

    span.etiqueta <b>Los sistemas de gestión de bases de datos (DBMS) son </b>
    | sistemas de <em>software</em> que se utilizan para almacenar, recuperar y ejecutar consultas sobre datos, sirven como interfaz entre un usuario final y una base de datos, permitiendo a los usuarios crear, leer, actualizar y eliminar datos en la base de datos.

    p.mb-5.mt-4 En estos se administran los datos, el motor de la base de datos y el esquema de la base de datos, lo que permite que los usuarios y otros programas manipulen o extraigan los datos. Esto ayuda a proporcionar seguridad de datos, integridad de datos, concurrencia y procedimientos uniformes de administración de datos.

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.m_bloque-imgreves.m_bloque-textoreves1(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/img02.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p Los sistemas de gestión de bases de datos optimizan la organización de datos siguiendo una técnica de diseño de esquema de base de datos llamada normalización, que divide una tabla grande en tablas más pequeñas cuando cualquiera de sus atributos tiene redundancia en los valores, ofrece muchos beneficios sobre los sistemas de archivos tradicionales, incluida la flexibilidad y un sistema de respaldo más complejo.

    p.mb-5 Los sistemas de gestión de bases de datos se pueden clasificar en función de una variedad de criterios, como el modelo de datos, la distribución de la base de datos o el número de usuarios, los tipos más utilizados son relacionales, distribuidos, jerárquicos, orientados a objetos y de red. Se presentan a continuación: 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta-avatar
        img.img-t.mx-auto(src='@/assets/curso/tema6/img03.svg' alt='AvatarTop')
        .tarjeta.bg_color1.h-500
          .text-black.p-5
            h4 Sistema de gestión de bases de datos distribuidas
            p  Es un conjunto de bases de datos interrelacionadas lógicamente distribuidas en una red administrada por una aplicación de base de datos centralizada. Este tipo de DBMS sincroniza los datos periódicamente y garantiza que cualquier cambio en los datos se actualice universalmente en la base de datos.
      
      .tarjeta-avatar
        img.img-t.mx-auto(src='@/assets/curso/tema6/img04.svg' alt='AvatarTop')
        .tarjeta.bg_color2.h-500
          .text-black.p-5
            h4 Sistema de gestión de base de datos jerárquica
            p En estas se organizan los datos del modelo en una estructura similar a un árbol. El almacenamiento de datos es un formato de arriba hacia abajo o de abajo hacia arriba y se representa mediante una relación padre-hijo.

      .tarjeta-avatar
        img.img-t.mx-auto(src='@/assets/curso/tema6/img05.svg' alt='AvatarTop')
        .tarjeta.bg_color1.h-500
          .text-black.p-5
            h4 Sistema de gestión de base de datos de red
            p El modelo de base de datos en red aborda la necesidad de relaciones más complejas al permitir varios padres. Las entidades se organizan en un gráfico al que se puede acceder a través de varias rutas.

      .tarjeta-avatar
        img.img-t.mx-auto(src='@/assets/curso/tema6/img06.svg' alt='AvatarTop')
        .tarjeta.bg_color2.h-500
          .text-black.p-5
            h4 Sistema de gestión de bases de datos relacionales
            p Son el modelo de datos más popular debido a su interfaz fácil de usar, se basa en la normalización de datos en las filas y columnas de las tablas. Esta es una opción viable cuando se necesita un sistema de almacenamiento de datos que sea escalable, flexible y capaz de administrar mucha información.

      .tarjeta-avatar
        img.img-t.mx-auto(src='@/assets/curso/tema6/img07.svg' alt='AvatarTop')
        .tarjeta.bg_color1.h-500
          .text-black.p-5
            h4 Sistema de gestión de base de datos orientado a objetos
            p Estos almacenan datos en objetos, en lugar de filas y columnas. Se basa en la programación orientada a objetos (POO) que permite que los objetos tengan miembros como campos, propiedades y métodos.
       
    Separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 6.2	Tratamiento y procesamiento de datos

    p.mb-4 Tratamiento de datos está compuesto el acceso, la recopilación, el uso, el procesamiento, el almacenamiento, el intercambio, la distribución, la transferencia, la divulgación, la seguridad, la destrucción o la eliminación de cualquier información o datos personales, sensibles o confidenciales, ya sea en formato electrónico o en cualquier otra forma o medio.

    .row.justify-content-center.mb-5
      .col-lg-8.bg_cajon-color4.ms-3
        .color-fondo.bg-color(data-aos="fade-down")
          .color-fondo__texto 
            | La adquisición de datos implica recopilar o agregar a las existencias de datos, existen varios métodos de adquisición de datos como es el procesamiento de datos que refiere a una serie de acciones o pasos realizados en los datos para verificar, organizar, transformar, integrar y extraer datos en un formato de salida adecuado para un uso posterior. Los métodos de procesamiento deben documentarse rigurosamente para garantizar la utilidad e integridad de los datos.
    
    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/img08.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p El análisis de datos implica acciones y métodos realizados sobre datos que ayudan a describir hechos, detectar patrones, desarrollar explicaciones y probar hipótesis, esto incluye la garantía de calidad de datos, el análisis de datos estadísticos, el modelado y la interpretación de resultados.

    .row.align-items-center.mb-5
      .col-lg-8.bg_cajon-color5.mb-4.mb-lg-0
        .color-fondo.bg-color(data-aos="fade-down")
          .color-fondo__texto   
            | Tratar de clasificar los datos en patrones comúnmente conocidos es de gran ayuda y está íntimamente relacionado con el tratamiento estadístico de los datos. Esto se debe a que la distribución de probabilidad normal ocurre con mucha frecuencia y son las distribuciones subyacentes en la mayoría de los experimentos médicos, sociales y físicos.
            br
            br
            | Por lo tanto, si se sabe que un tamaño de muestra dado tiene una distribución normal, entonces el tratamiento estadístico de los datos se facilita para el investigador, ya que ya tendría mucha teoría de respaldo en este aspecto. Sin embargo, siempre se debe tener cuidado de no asumir que todos los datos se distribuyen normalmente, y siempre se debe confirmar con las pruebas adecuadas.
      .col-lg-4
        .row
          .col-lg-6
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema6/img09.svg')

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-2
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema6/img10.svg')
      .col-lg-8.bg_cajon-color6
        .color-fondo.bg-color(data-aos="fade-down")
          .color-fondo__texto   
            | El tratamiento estadístico de los datos también implica describir los datos, y la mejor forma de hacerlo es a través de las medidas de tendencia central como la media, la mediana y la moda, estos ayudan a explicar en pocas palabras cómo se concentran los datos. El rango, la incertidumbre y la desviación estándar permiten la compresión de la distribución de los datos. Por lo tanto, dos distribuciones con la misma media pueden tener una desviación estándar muy diferente, lo que muestra qué tan bien se concentran los puntos de datos alrededor de la media.
            br
            br
            | El tratamiento estadístico de los datos es un aspecto importante de toda la experimentación actual y es necesaria una comprensión profunda para realizar los experimentos correctos con las inferencias correctas a partir de los datos obtenidos.

    .row.mb-5
      .col-lg-3.col-xl-4.col-xxl-3
        .bg_1
          .row.align-items-center
            .col-lg-12
              ul.lista-ul
                li
                  i.fas.fa-caret-right
                  h4.m_block.text-white.mt_1 Procedimiento de registro

    | Expandir las fronteras del conocimiento científico es una actividad comunitaria, este es un principio importante a tener en cuenta al adquirir y archivar datos. Los datos deben registrarse de manera que no solo sean comprensibles para el individuo, sino también para los colaboradores de esa persona y para otras personas fuera del círculo inmediato. 
    span.etiqueta <b>Se debe tener precaución de no cometer algunos de los siguientes errores:</b>

    .row.align-items-center.mt-5
      .col-lg-6
        .bg_slyder.p-4.mb-5
          SlyderA(tipo="b").heigth_1.color_slyder-a_botones
            .row.justify-content-center.align-items-start
              .col-lg-10(data-aos="fade-right") 
                | Es posible que no registren todos los parámetros relevantes de una manera que los conecte claramente a un conjunto de datos, con el resultado de que el conjunto de datos es inútil cuando se realiza un análisis detallado más adelante.

            .row.justify-content-center
              .col-lg-10
                | Pueden organizar los conjuntos de datos de una manera que sea difícil de entender para otros, haciendo que los datos sean efectivamente inaccesibles para cualquiera que no sea la persona que los adquirió.

            .row.justify-content-center
              .col-lg-10
                | Es posible que no proporcionen un sistema sólido para realizar copias de seguridad de sus datos, con el riesgo de perder los datos sin procesar originales.

            .row.justify-content-center
              .col-lg-10
                | Pueden almacenar los datos en un formato al que solo se puede acceder fácilmente mediante un único tipo de <em>software</em> propietario, arriesgándose a la pérdida efectiva de esos datos si el <em>software</em> ya no es compatible.
            
            .row.justify-content-center
              .col-lg-10
                | Es posible que no tengan un plan para retener los datos más allá del punto en que se utilizan en una publicación, lo que dificulta el seguimiento de las consultas relacionadas con el proceso.

            .row.justify-content-center
              .col-lg-10
                | No se ha escrito mucho sobre buenas prácticas para la gestión y retención de datos, las grandes colaboraciones de investigación suelen tener planes de gestión de datos cuidadosamente diseñados, y el tamaño de su grupo les brinda la oportunidad de tener personas que dedican una gran cantidad de esfuerzo a mantener la integridad de los datos. Por otro lado, hay orientación limitada disponible para colaboraciones más pequeñas que pueden no tener los mismos recursos para mantener la integridad de los datos.
        
      .col-lg-5.mb-5
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema6/img11.svg')











    

    

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
