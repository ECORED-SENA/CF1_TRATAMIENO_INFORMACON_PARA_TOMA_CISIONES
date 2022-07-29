<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Normatividad

    p El campo de la seguridad y salud en el trabajo establece estándares para ordenar la eliminación, mitigación o sustitución de los peligros en el lugar de trabajo, donde se cubren no sólo las disposiciones de primeros auxilios y la operación segura de maquinaria pesada, sino también la prevención de infecciones, las mejores prácticas ergonómicas y los métodos para responder a la violencia en el lugar de trabajo.

    p <b>En el siguiente video se explica en qué consiste el sistema de gestión de la seguridad y salud en el trabajo:</b>

    .row.justify-content-center.mb-5 
      .col-lg-10
        figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video

    .row.justify-content-center
      .col-lg-8
        h5 Los hábitos saludables en el ambiente laboral permitirán la prevención de riesgo de salud en el trabajo:

    .row.justify-content-center.mb-5
      .col-lg-10
        figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video

    h5.mb-5 Algunos de los temas cubiertos por las normas se seguridad y salud en el trabajo son los siguientes:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta-avatar
        img.img-t.mx-auto(src='@/assets/curso/tema7/img01.svg' alt='AvatarTop')
        .tarjeta.bg_color1.h-500
          .text-black.p-5
            p Es responsabilidad del empleador asegurarse de que los trabajadores cuenten con el equipo de protección personal requerido para trabajar de manera segura. Según el trabajo y el entorno laboral, esto puede incluir dispositivos de protección contra caídas, cascos, ropa de alta visibilidad o guantes de seguridad.

      .tarjeta-avatar
        img.img-t.mx-auto(src='@/assets/curso/tema7/img02.svg' alt='AvatarTop')
        .tarjeta.bg_color1.h-500
          .text-black.p-5
            p Se debe garantizar la operación segura del equipo de trabajo, los procedimientos de seguridad garantizan que los empleados puedan usar maquinaria pesada, herramientas eléctricas y otros equipos de trabajo con un riesgo mínimo de lesiones. Esto incluye no solo el manejo adecuado del equipo, sino también inspecciones y mantenimientos regulares para garantizar que funcione de manera óptima.

      .tarjeta-avatar
        img.img-t.mx-auto(src='@/assets/curso/tema7/img03.svg' alt='AvatarTop')
        .tarjeta.bg_color1.h-500
          .text-black.p-5            
            p Mantener la hidratación, dado que están en el trabajo durante largos períodos de tiempo y los trabajadores corren el riesgo de deshidratarse si no se les proporciona agua potable limpia. Si bien esto afecta a todos los trabajadores, es especialmente importante para aquellos que realizan un trabajo físico intenso, usan equipo de protección personal pesado o trabajan en ambientes con altas temperaturas.

      .tarjeta-avatar
        img.img-t.mx-auto(src='@/assets/curso/tema7/img04.svg' alt='AvatarTop')
        .tarjeta.bg_color1.h-500
          .text-black.p-5          
            p Buenos movimientos corporales, pues los trastornos musculoesqueléticos son un tipo extremadamente común de lesión en el lugar de trabajo. Para prevenirlos, los trabajadores deben seguir las mejores prácticas ergonómicas. Esto incluye técnicas seguras de levantamiento, buena postura y evitar movimientos repetitivos mientras realiza sus tareas laborales.

    h5.mb-5 A continuación, se mencionan las normas más relevantes impuestas en Colombia relacionadas con este fin: 

    .row.justify-content-center.mb-5
      .col-lg-10
        LineaTiempoE.color-acento-contenido
          .row(titulo="2012" subtitulo="")
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema7/img12.png', alt='Texto que describa la imagen')
            .col-lg-6
              p <b>Resolución 1409</b>
              p En esta se establece el reglamento de seguridad para protección contra caídas en trabajo de alturas, esta rige para todos los actores que estén vinculados de manera formal e informal a una empresa o sean independientes que desempeñan labores a una altura superior a 1.5 metros, igualmente esta norma aplica para actividades de atención de emergencias y rescate y actividades lúdicas, artísticas, deportivas o de alta montaña.

          .row(titulo="2013" subtitulo="")
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema7/img13.png', alt='Texto que describa la imagen')
            .col-lg-6
              p <b>Resolución 90708</b>
              p A través de esta se estipula el reglamento técnico de instalaciones eléctricas con cumplimiento obligatorio sobre todo el territorio nacional.

          .row(titulo="2014" subtitulo="")
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema7/img14.png', alt='Texto que describa la imagen')
            .col-lg-6
              p <b>Resolución 1565</b>
              p Está expide la guía metodológica para la elaboración del plan estratégico de seguridad vial.
              p <b>Resolución 3368</b>
              p Modifica la resolución 1409 del año 2012 con el fin de entregar definiciones de coordinador, entrenador en alturas y además establece el requerimiento de certificado de competencias o capacitación de trabajo realizado en alturas.
              p <b>Decreto 1507</b>
              p Entra a regir el manual único para la calificación de la pérdida de la capacidad laboral u ocupacional.
              p <b>Decreto 1477</b>
              p En este se establece la tabla de enfermedades laborales, permitiendo la identificación de agentes de riesgo para facilidad de prevención de enfermedades en las actividades laborales y  el nombramiento de las enfermedades para determinar el diagnóstico médico a los trabajadores afectados.

          .row(titulo="2015" subtitulo="")
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema7/img15.png', alt='Texto que describa la imagen')
            .col-lg-6
              p <b>Decreto 1072</b>
              p Es este se expide el decreto único reglamentario del sector del trabajo, donde se formula y adoptan las políticas, planes generales, programas y proyectos para el trabajo, el respeto de los derechos fundamentales, las garantías de los trabajadores, el fortalecimiento, promoción y protección de las actividades de la economía solidaria y el trabajo decente.
          
          .row(titulo="2016" subtitulo="")
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema7/img16.png', alt='Texto que describa la imagen')
            .col-lg-6
              p <b>Decreto 171</b>
              p En este se reglamenta la transición para la implementación del sistema de gestión de la seguridad y salud en el trabajo, donde todos los empleadores los contratantes de cualquier modalidad deberán sustituir el programa de salud ocupacional por el SGSST.
              p <b>Resolución 974</b>
              p Aporta el formulario único de afiliación y registro de novedades en al sistema general en seguridad social en salud, aplica para entidades vinculadas al sector salud.
              p <b>Decreto 1563</b>
              p En este se establece la regla para la afiliación voluntaria de los trabajadores independientes que devenguen más de 1 SMMLV y el pago de aportes de ARL, mediante la planilla integrada de liquidación de aportes.
              p <b>Resolución 4927</b>
              p En esta se establecen los parámetros y requisitos para desarrollar, certificar y registrar la capacitación virtual en el SGSST, esta capacitación que debe ser gratuita la otorga la administradora de Riesgos Laborales.

          .row(titulo="2017" subtitulo="")
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema7/img17.png', alt='Texto que describa la imagen')
            .col-lg-6
              p <b>Resolución 1111</b>
              p Se define los estándares mínimos del SGSST para empleadores y contratantes, esta incluye normas, requisitos y procedimientos obligatorios con que se verifica, controla que se cumplan las condiciones básicas para el desarrollo de actividades.
              p <b>Decreto 52</b>
              p Se modifica la fecha en que todos los empleadores y contratantes de personal bajo cualquier modalidad deberán sustituir el programa de salud ocupacional por el SGSST, ahora a partir del 1 junio 2017 se inicia de manera progresiva y sistemática la ejecución las fases de implementación.
          
          .row(titulo="2018" subtitulo="")
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema7/img18.png', alt='Texto que describa la imagen')
            .col-lg-6
              p <b>Resolución 3310</b>
              p Se adopta el formulario único para reporte de novedades al sistema de riesgos laborales.
              p <b>Resolución 0312</b>
              p En esta se deroga la Resolución 1111 de 2017,  definiendo nuevos estándares mínimos del SGSST.

    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 7.1	Métodos técnicos y sistemas de ordenación

    p.mb-4 La mala postura en el lugar de trabajo es una de las principales causas de dolor de espalda, además el estrés en el lugar de trabajo y puede provocar lesiones por esfuerzos repetitivos. Esto puede dar como resultado una mala salud de los empleados,  que en última instancia, conducirá a una reducción de la productividad, pérdida de tiempo y mayores costos comerciales.

    h5.mb-5 La aplicación de las técnicas de postura y ergonomía en el lugar de trabajo ayudan a mejorar el entorno de trabajo y el bienestar en la jornada normal de trabajo.

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema7/img05.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p La postura es la posición en la que mantiene su cuerpo erguido contra las fuerzas de la gravedad mientras está de pie o sentado. La clave para una buena postura es entrenar su cuerpo para sentarse, pararse y caminar en posiciones donde se ejerza la menor tensión en los músculos y ligamentos de soporte durante las actividades de soporte de peso.
    
    .row.justify-content-center.mb-4       
      .col-lg-10 
        .cajon.color-acento-contenido.p-5.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-11 
              .h4.mb-4 Los efectos de una mala postura son:
              ul.lista-ul
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Mala alineación de las articulaciones.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Dolores musculares generales o dolor de cabeza.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Mayores fuerzas de cizallamiento dentro de la columna que afectan la integridad del disco.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Compresión de estructuras discales y articulares.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Compresión/espacio reducido para que los nervios atraviesan el cuerpo. 
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Reducción del flujo sanguíneo a los músculos que resulta en un aumento de la fatiga.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Lesiones por uso excesivo. 

    p En algunos casos, los nervios pueden verse afectados o inflamados, lo que da como resultado una variedad de sensaciones, desde calor y frío hasta entumecimiento y hormigueo en un área determinada, comúnmente las manos y los pies. Una característica del daño a los nervios es que a veces el síntoma no está en el lugar donde se está causando el daño. Por ejemplo, un nervio irritado en el cuello puede causar entumecimiento y hormigueo en el brazo o la mano.

    p.mb-0 <b>Es necesario tener presente las siguientes recomendaciones para prevenir el riesgo biomecánico y ergonómico en el trabajo:</b>

    .row.justify-content-center.mb-4 
      .col-lg-10
        figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
    
    .row.justify-content-center.mb-4         
      .col-lg-10 
        .cajon.color-acento-contenido.p-5.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-11 
              .h4.mb-4 Además, al momento de realizar actividades laborales de pie, es importante considerar las siguientes recomendaciones:
              ul.lista-ul
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 La alineación del tobillo, la parte exterior de la cadera, el hombro y justo detrás de la oreja debe estar en línea vertical.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Enganchar los abdominales inferiores empujando el ombligo hacia la columna si la espalda está arqueada.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Apretar los glúteos si la pelvis se gira demasiado hacia adelante.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Levantar los arcos de los pies para que la rótula esté alineada con el segundo dedo del pie.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Tirar los hombros hacia atrás acercando los omóplatos si están girados hacia adelante.
                
    p.mb-0 <b>Las condiciones ergonómicas en el puesto de trabajo también son necesarias, observa el siguiente video donde se presenta más detalle de estas:</b>

    .row.justify-content-center.mb-4 
      .col-lg-10
        figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
    
    .row.justify-content-center.mb-4       
      .col-lg-10 
        .cajon.color-acento-contenido.p-5.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-11 
              .h4.mb-4 Por esto es importante aplicar las siguientes recomendaciones cuando realices actividades laborales en postura sentada:
              ul.lista-ul
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Sentarse bien en la silla.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Inclinar el asiento ligeramente hacia adelante para girar la parte superior de la pelvis de modo que la columna quede en posición neutral.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Ajustar la altura de la silla para que la cadera quede ligeramente más alta que la rodilla.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Asegurar que los pies estén apoyados en el piso, separados al ancho de los hombros.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Sentarse en una postura erguida equilibrada con la cabeza sobre los hombros.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Mover la silla cerca del escritorio para evitar estirar la parte superior del cuerpo hacia adelante.

    p.mb-5 A pesar de los mejores esfuerzos que realicen los empleadores, es necesario el compromiso del empleado siguiendo los hábitos saludables y las recomendaciones, además es esencial buscar una opinión del médico de salud ocupacional y fisioterapeuta si en algún momento presenta algún síntoma o molestia que pueda tratarse a tiempo. 

    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 7.2	Seguridad ambiental (uso eficiente del papel)

    p.mb-4 Se estima que la mitad de todos los desechos de una oficina se basan en papel, por lo que los beneficios para el negocio de reducir esto son claros. Aplicar medidas del uso eficiente del papel en la oficina, es relativamente sencillo y económico, pero es necesario el compromiso de todos los empleados y tener conciencia ambiental. 

    h5.mb-5 La implementación de sistemas de información en las empresas aporta el reemplazo del papel o a la reducción de su consumo, pues se puede contar con documentos electrónicos en red y la gestión de registros, lo que trae beneficios.

    .row.justify-content-center.mb-4
      .col-lg-6.col-xl-7.col-xxl-6
        p <b>Una de las estrategias para reducir el desperdicio de papel en una oficina es:</b>

    .row.mb-5
      .col-lg-2.mb-4.mb-lg-0
        .bg_6.p-5.h-100
          .row.justify-content-center
            .col-lg-10
              img.img-t.mx-auto(src='@/assets/curso/tema7/img06.svg')
      .col-lg-2.mb-4.mb-lg-0
        .bg_6.p-5.h-100
          .row.justify-content-center
            .col-lg-10
              img.img-t.mx-auto(src='@/assets/curso/tema7/img07.svg')
      .col-lg-2.mb-4.mb-lg-0
        .bg_6.p-5.h-100
          .row.justify-content-center
            .col-lg-10
              img.img-t.mx-auto(src='@/assets/curso/tema7/img08.svg')
      .col-lg-2.mb-4.mb-lg-0
        .bg_6.p-5.h-100
          .row.justify-content-center
            .col-lg-10
              img.img-t.mx-auto(src='@/assets/curso/tema7/img09.svg')
      .col-lg-2.mb-4.mb-lg-0
        .bg_6.p-5.h-100
          .row.justify-content-center
            .col-lg-10
              img.img-t.mx-auto(src='@/assets/curso/tema7/img10.svg')
      .col-lg-2
        .bg_6.p-5.h-100
          .row.justify-content-center
            .col-lg-10
              img.img-t.mx-auto.mt-3(src='@/assets/curso/tema7/img11.svg')

    .row.justify-content-center.mb-4       
      .col-lg-10 
        .cajon.color-acento-contenido.p-5.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-11 
              .h4.mb-4 Para asegurarse de que el papel se recicla, se debe:
              ul.lista-ul
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Colocar papeleras de reciclaje en todas las oficinas. Una buena guía es un contenedor entre seis empleados y uno al lado de cada fotocopiadora e impresora. Use tapas de resmas de papel como bandejas de recolección de escritorio adicionales.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Asegurar que el personal de limpieza apoye el plan de reciclaje y que vaciar los contenedores de reciclaje sea parte de su trabajo contratado.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Promover el plan entre el personal colocando carteles en las oficinas y en los contenedores que expliquen los tipos de papel que se pueden reciclar.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Proporcionar al personal comentarios continuos sobre el esquema, incluidas cifras sobre la cantidad de papel recolectado. Sugiera hacer una donación a la caridad o plantar un árbol cuando se cumplan los objetivos. 
                



     

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
