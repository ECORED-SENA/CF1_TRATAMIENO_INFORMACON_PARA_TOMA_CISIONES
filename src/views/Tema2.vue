<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas Tecnológicas

    | Afortunadamente, los avances tecnológicos en software y aplicaciones han permitido que hoy en día hay muchas herramientas digitales disponibles para ayudar a optimizar los negocios y hacer que el trabajo sea menos estresante. 
    span.etiqueta <b>Los beneficios de las herramientas tecnológicas son:</b>

    .row.justify-content-center.mb-5.mt-5
      .col-lg-8
        .bg_slyder.p-5
          SlyderA(tipo="b").color_slyder-a_botones
            .row.justify-content-center
              .col-lg-12.mb-5
                span.h3 En primer lugar, 
                | la tecnología puede ahorrar tiempo, permitiendo a las personas concentrarse en las actividades importantes, en lugar de trabajar en tareas administrativas manuales, como la entrada de datos y la facturación.
              .row.justify-content-center
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema2/img01.svg', alt='AvatarTop')

            .row.justify-content-center
              .col-lg-11.marginb-1
                span.h3 En segundo lugar, 
                | las herramientas tecnológicas pueden ahorrar dinero. 
                | Por ejemplo, una herramienta puede identificar automáticamente dónde podría estar "dejando dinero en la mesa" con un determinado grupo de clientes. 
                p Una solución de respaldo puede garantizar que nunca pierda datos o experimente un tiempo de inactividad no deseado que provoque la pérdida de ingresos o la pérdida de clientes. 
                p Una solución sólida de gestión de proyectos garantizará que no pierda inadvertidamente una fecha límite que resulte en un incumplimiento del acuerdo de nivel de servicio y las sanciones asociadas.
              
            .row.justify-content-center
              .col-lg-11.mb-3
                span.h3 En tercer lugar, 
                | las herramientas digitales respaldan el nuevo paradigma posterior a la pandemia en el que las personas y las empresas desean limitar las interacciones en persona debido a problemas y regulaciones de salud persistentes. 
                p La naturaleza digital de las herramientas tecnológicas permite a las personas realizar gran parte de sus actividades habituales desde cualquier lugar y dispositivo.
              .row.justify-content-center
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema2/img02.svg', alt='AvatarTop')

      p.mb-5.mt-5 Cuando se dirige un negocio, hay mucho que hacer a diario, desde la gestión de los empleados, hasta el balance de los libros, cada día se enfrenta a un sinfín de responsabilidades para mantener el negocio en funcionamiento. 

      .row.justify-content-center.align-items-center.mb-5         
        .col-lg-10 
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.m_bloque-imgreves.m_bloque-textoreves1(data-aos="flip-down")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema2/img03.svg')})`}"
            )
            .bloque-texto-g__texto.p-5
              p Afortunadamente, en la era digital, existen muchos programas y herramientas para ayudar a realizar un seguimiento de sus tareas y hacer que el flujo de trabajo y procesos sean más eficientes, por esto existen diferentes herramientas tecnológicas esenciales y cómo pueden aliviar parte del estrés de administrar un negocio.
              
      p.mb-5 <b>Una herramienta electrónica, digital o física puede ampliar la capacidad humana para realizar tareas o generar productos. Por ejemplo:</b> procesador de textos, programa de presentación, programa de hoja de cálculo, programa de edición de gráficos, editor de imágenes, editor de películas, convertidor de formato de video, editores de diseño web, programas y plataformas de diseño web, lenguajes de script de diseño web, applets web, grabadora de voz, cámara de video digital, etc.

      .row.mb-5
        .col-lg-3.col-xl-4.col-xxl-3
          .bg_1
            .row.align-items-center
              .col-lg-10
                ul.lista-ul
                  li
                    i.fas.fa-caret-right
                    h4.m_block.text-white.mt_1 Tipos y Características

      p.mb-5 Existen tantas opciones de tecnología, herramientas y plataformas que ayudan a hacer crecer los negocios, por eso es importante identificar cual es la mejor opción que se puede implementar en cada contexto organizacional.

      .row.justify-content-center
        .col-lg-8
          h5.text-center A continuación, se presentan los tipos herramientas tecnológicas que pueden ayudar al desarrollo y crecimiento de en los contextos empresariales, con el fin de ahorrar tiempo y dinero:

      .row.justify-content-center.mb-5
        .col-lg-6
          ImagenInfografica.color-secundario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/img04.svg', alt='Texto que describa la imagen')

            .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="25.8%" y="20%")
              p <b>Herramientas de gestión de tareas:</b> son una forma fácil y rentable para ahorrar tiempo y dinero, pues permite rastrear las tareas digitalmente. 
              p Las herramientas de administración de tareas en línea como Asana y Trello puede ayudar a gestionar las listas de tareas pendientes, el progreso del proyecto y los calendarios. Permite la configuración de recordatorios y actualizaciones automáticos, estas también sirven como herramientas de colaboración y trabajo en equipo, en el tablero se puede visualizar lo pendiente, lo asignado, los responsables y los avances.

            .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="42%" y="20%")
              p <b>Herramientas de gestión de tareas:</b> son una forma fácil y rentable para ahorrar tiempo y dinero, pues permite rastrear las tareas digitalmente. 
              p Las herramientas de administración de tareas en línea como Asana y Trello puede ayudar a gestionar las listas de tareas pendientes, el progreso del proyecto y los calendarios. Permite la configuración de recordatorios y actualizaciones automáticos, estas también sirven como herramientas de colaboración y trabajo en equipo, en el tablero se puede visualizar lo pendiente, lo asignado, los responsables y los avances.

            .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="58%" y="20%")
              p <b>Correo electrónico y marketing social:</b> los sistemas de marketing por correo electrónico permiten mantener informados a los suscriptores acerca de las noticias sobre el negocio e informar sobre las ofertas y promociones. También permiten enviar un boletín informativo por correo electrónico las redes sociales de forma automática. 

            .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="74.5%" y="20%")
              p <b>Herramientas de programación de redes sociales:</b> estas herramientas han tomado gran relevancia en los último tiempos, permitiendo la programación controlada en las redes sociales, programando las publicaciones con anticipación e indicando las fechas y horas deseadas, para que se publique de forma automática.
            
            .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="25.8%" y="40%")
              p <b>Programación de reuniones:</b> estas permiten establecer la programación de reuniones, algunas de estas herramientas pueden ayudar a la automatización en el proceso de configuración de reuniones, creando el enlace y donde los integrantes del la reunión pueden elegir entre los horarios disponibles para reunirse.

            .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="42%" y="40%")
              p <b>Obtención de firmas electrónicas:</b> estas son muy usadas actualmente, especialmente cuando se requiere la firma en contratos y acuerdos, permitiendo cargar el documento, realizar las firmas, agregar la dirección de correo electrónico correcta y quedando en el sistema el control y registro.

            .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="58%" y="40%")
              p <b>Gestión de relaciones con los clientes:</b> estas ayudan a realizar el seguimiento de los clientes potenciales, actuales y anteriores desde la primera interacción a través de embudos de marketing y ventas. También puede proporcionar herramientas para nutrir esas relaciones con los contactos por puntos de datos específicos, como la región o el tipo de producto que compraron. De esa manera, sabrá a quién dirigirse con mensajes de seguimiento para referencias o negocios. 

            .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="74.5%" y="40%")
              p <b>Colaboración de documentos:</b> permitiendo colaborar con otros, asegurando que todos trabajen desde la misma versión del mismo documento, trabajo en tiempo real con los demás, para sus interno o con los clientes.

            .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="25.8%" y="60%")
              p <b>Programa de contabilidad:</b> estos permiten realizar seguimiento de los ingresos y gastos, la mayoría incluye herramientas para manejar todas sus tareas financieras, como facturar, pagar a proveedores y crear informes de gastos. Algunos incluso pueden ayudar a presentar los impuestos y compartir documentos con el contador.
            
            .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="42%" y="60%")
              p <b>Aplicaciones para tomar notas:</b> El uso de aplicaciones para tomar notas le permite documentar sus tareas personales y profesionales en todos sus dispositivos. Puede escribirlos, establecer recordatorios y marcarlos como completos cuando hayan terminado. Estas herramientas también son excelentes para anotar ideas rápidas.

            .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="58%" y="60%")
              p <b>Plataformas de almacenamiento en la nube:</b> es un sistema de almacenamiento en la nube que permite que los archivos sean accesibles para todos los empleados, sin importar dónde se encuentren. Algunas plataformas son colaborativas, lo que le permitiendo editar archivos directamente en tiempo real juntos a través de la nube.
            
            .tarjeta.color-acento-botones.color_tar-imginfografica-t4.p-3(x="74.5%" y="60%")
              p <b>Colaboración de documentos:</b> permitiendo colaborar con otros, asegurando que todos trabajen desde la misma versión del mismo documento, trabajo en tiempo real con los demás, para sus interno o con los clientes.
   
      .row.mb-5
        .col-lg-3.col-xl-4.col-xxl-3
          .bg_1
            .row.align-items-center
              .col-lg-10
                ul.lista-ul
                  li
                    i.fas.fa-caret-right
                    h4.m_block.text-white.mt_1 Técnicas de digitación

      p La entrada de datos es un aspecto importante que requiere de técnica y práctica, con el fin de ingresar los datos de forma precisa, eficiente y rápida, lo primero que se debe tener es una buena postura cumpliendo las normas de ergonomía, y además reconocer el teclado con todos sus componentes, para adquirir la técnica adecuada de digitación se debe ser constante y para incrementar la habilidad, para lograrlo debe hacerse en tres etapas:

      .row
        .col-lg-4
          figure.mb-4
            img.img-num1(src='@/assets/curso/tema2/img05.svg')
        .col-lg-4
          figure.mb-4
            img.img-num1(src='@/assets/curso/tema2/img06.svg')
        .col-lg-4
          figure.mb-4
            img.img-num1(src='@/assets/curso/tema2/img07.svg')
         
    .row.justify-content-center.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img08.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5
              h3.text-center.my-4 Etapa 1
              p.text-center.mb-5 Reconocer el teclado y aprender una técnica apropiada de digitación
           

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img09.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5
              h3.text-center.my-4 Etapa 2
              p.text-center.mb-5 Enfocarse en la precisión.

      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img10.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5
              h3.text-center.my-4 Etapa 3
              p.text-center.mb-5 Alcanza velocidad y precisión.

    p.mb-5 La entrada de datos es el proceso de actualizar información en algún aplicativo, documento, página, formulario, registro o base de datos,  para esto también se puede requerir de otros componentes como la computadora, mouse, pantalla, escáner u otra herramienta de ingreso de datos, esto con el fin de ingresar, procesar o archivar la información requerida y valorada como activo en las organizaciones.  Por lo tanto, es importante que los empleados de entrada de datos posean ciertas habilidades y estén calificados para realizar las actividades diarias para hacer bien el trabajo, existen varias responsabilidades y habilidades duras y blandas que pueden ser requeridas, por eso se listan a continuación.

    .row.mb-5
      .col-lg-3.col-xl-4.col-xxl-3
        .bg_1
          .row.align-items-center
            .col-lg-10
              ul.lista-ul
                li
                  i.fas.fa-caret-right
                  h4.m_block.text-white.mt_1 Responsabilidades: 
    
    .row
      BotonesB

    .row.mb-4
      .col-lg-2.col-xl-3.col-xxl-2
        .bg_1
          .row.align-items-center
            .col-lg-12
              ul.lista-ul
                li
                  i.fas.fa-caret-right
                  h4.m_block.text-white.mt_1 Habilidades:

    .row.align-items-center
      .col-lg-6
        .bg_slyder.p-4.mb-5
          SlyderA(tipo="b").heigth_1.color_slyder-a_botones
            .row.justify-content-center.align-items-start
              .col-lg-10(data-aos="fade-right") 
                h4 Habilidades de comunicación verbal y escrita eficientes: 
                | Los profesionales de ingreso de datos deben comunicarse a menudo con equipos internos y externos y proporcionar comentarios sobre cualquier problema que puedan encontrar con datos incorrectos u otros problemas de bases de datos. Es importante que también empleen la escucha activa para que puedan ingresar y clasificar los datos de la forma que prefiera la empresa.

            .row.justify-content-center
              .col-lg-10
                h4  Velocidad de escritura rápida: 
                | Esta habilidad es esencial para el éxito de las personas en el ingreso de datos, ya que es necesario el ingreso de grandes cantidades de datos en un período de tiempo limitado. Muchos empleadores esperan una velocidad de escritura promedio de 30 a 40 palabras por minuto.

            .row.justify-content-center
              .col-lg-10
                h4 Habilidades de mecanografía competentes: 
                | Más allá de escribir rápido, también es importante escribir con precisión.     

            .row.justify-content-center
              .col-lg-10
                h4 Automotivación: 
                | La entrada de datos a menudo se realiza de forma remota o con poca supervisión o esfuerzo de equipo. Es importante que el profesional de entrada de datos tenga una fuerte motivación al repetir tareas a menudo repetitivas.
            
            .row.justify-content-center
              .col-lg-10
                h4 Atención a los detalles: 
                | Estos son la prioridad en un trabajo de entrada de datos.            
      .col-lg-5.mb-5
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema2/img14.svg') 

    .row.mb-5.justify-content-center
      .col-md-4
        figure
          img(src='@/assets/curso/tema2/img15.svg')
      .col-md-8.mb-5.mb-md-0
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Mejorar las habilidades de mecanografía actuales") Tomar nota de la estructura de escritura actual y lenguaje corporal. Verificar que la postura y el posicionamiento de la mano son adecuados para una precisión y comodidad. De esta manera, no será necesario cambiar de posición, ni levantarse con tanta frecuencia, lo que debería aumentar la velocidad de escritura y  eficiencia.
          
          p.text-small(numero="2" titulo="Mejore el espacio en el escritorio") La entrada de datos requiere largos períodos de tiempo en la misma posición, por eso es importante modificar el espacio del escritorio para que sea más ergonómico, contar con una silla cómoda con soporte lumbar que se pueda girar y tenga ajustes de altura. Los monitores de las computadoras deben estar a la altura de los ojos con un brillo mínimo y el monitor debe colocarse cerca del mouse. Los monitores duales también pueden ayudar con la verificación de hechos, la velocidad de entrada de datos, la eficiencia y la productividad.
          
          p.text-small(numero="3" titulo="Utilice herramientas de escritura en línea") Existen varios programas en línea permiten probar las habilidades de mecanografía actuales para que pueda identificar los aspectos de mejora, estas permiten practicar y aumentar la velocidad y eficiencia.    
          
          p.text-small(numero="4" titulo="Hacks de entrada de datos maestros") Se pueden usar atajos con el teclado en algunos programas, estos permiten ahorrar tiempo. Por ejemplo, puede usar las teclas TAB y ENTER en Excel para ingresar información que se ha escrito anteriormente. Se pueden encontrar muchos trucos de hojas de cálculo y teclados en línea o puede intentar pedir al supervisor otras recomendaciones.

          p.text-small(numero="5" titulo="Bloquea las distracciones") Cuando se está realizando entrada de datos, es un desafío mantenerse enfocado en las tareas, por eso es necesario  tener un horario estricto y dividir las tareas por prioridad. Es recomendable tener el teléfono fuera del alcance y ponerlo en silencio durante las horas de trabajo para limitar las distracciones.

          p.text-small(numero="6" titulo="Deje tiempo para corregir") Pueden ocurrir errores a lo largo de la jornada laboral y es importante tener tiempo para revisar el trabajo antes de enviarlo. Es recomendable hacer una pausa y al regresar a revisar, los ojos estarán frescos y la mente dispuesta.
    
                
        

</template>

<script>
export default {
  name: 'Tema2',
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
import BotonesB from '../components/BotonesB.vue'
export default {
  name: 'Tema2',
  components: {
    BotonesB,
  },
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
