<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-right") Datos e Información

    p.mb-5 Los datos pueden representarse en un número, una imagen, una declaración que no se procesa, puede ser un nombre, el contenido de un correo electrónico, una dirección, una cifra de ventas, cualquier elemento de esa naturaleza. Por ejemplo, si imprime un paquete de recibos de las últimas transacciones y observa el valor total, tendría un conjunto de datos.

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p Las empresas necesitan de los datos y la información, pudiendo aprovecharlos para procesarlos y tomar decisiones que marquen la diferencia, cambiando por completo el crecimiento, con un buen análisis de datos se pueden encontrar nuevos clientes,  hallar la manera para reducir los costos, mejorar la gestión cada día.

    p.mb-5 Se debe tener presente que los datos recopilados deben ser fiables y válidos, esto es parte de un proceso profundo y complejo, en el que los analistas separan los datos malos de los buenos, los importantes de los no importantes; el trigo de la paja, en otras palabras.      

    .row.mb-5
      .col-lg-6
        .color-fondo.bg-color(data-aos="fade-down")
          .color-fondo__texto   
            span.etiqueta <b>Solo trabajando con datos "buenos"</b>
            | puede esperar crear información "buena", la piedra angular de cualquier estrategia comercial sólida, cada empresa genera datos, ya sea a través de la caja registradora, una lista de correo electrónico, una tarjeta de fidelización o incluso conversaciones casuales con los clientes. No son solo números en un sistema, puede obtener tanto datos estructurados (números) como datos no estructurados (imágenes, audio, escritura, conversaciones). Es bastante similar a la diferencia entre datos cuantitativos y cualitativos. 
        p.mt-5 Los datos en su forma normal sin procesar, como puede imaginar, no son particularmente útiles. Saber que algún cliente en cualquier lugar y en un momento pagó $10 por algo solo le dice una cosa: cuánto pagaron. Una vez que comience a recopilar otros puntos de datos, como quién, cuándo, dónde, por qué y para qué, y los amplíe a toda la base de clientes, comenzará a obtener algo más útil para la estrategia.
      .col-lg-6
        .row.justify-content-center
          .col-lg-8
            figure
              img(src='@/assets/curso/tema1/img02.svg')
    
    span.etiqueta <b>Con los datos se construye la información, y con la información se construye el éxito estratégico en las empresas,</b>
    | sin el primero, no puedes tener el segundo o el tercero. Un buen negocio se basa en una gran investigación de mercado, que puede analizar todos los datos que su empresa está recopilando actualmente, separando lo útil de lo inútil.

    .row.justify-content-center.mb-5
      .col-lg-5.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img.img120(src='@/assets/curso/tema1/img03.svg' alt='AvatarTop')
          .tarjeta.color_tarjeta1-t1 
            .p-5
              p <b>Los datos son esencialmente los hechos simples y las estadísticas recopiladas durante las operaciones de una empresa,</b> que se pueden utilizar para medir/registrar una amplia gama de actividades empresariales, tanto internas como externas, si bien los datos en sí mismos pueden no ser muy informativos, son la base de todos los informes y, como tales, son cruciales en los negocios.

      .col-lg-5.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img.img120(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido
            .p-5
              p <b>Los datos son las métricas que se relacionan con la interacción del cliente,</b> la cantidad de trabajos, la cantidad de consultas, los ingresos recibidos, los gastos incurridos, etc. para conocer las interacciones con el cliente, son necesarios los datos, por esto no se puede subestimar, ya que proporcionan la base para reportar la información requerida en las operaciones comerciales.
    
    .row.justify-content-center.align-items-center.mb-lg-5
      .col-lg-4
        figure.mb-4.mb-lg-0
          img(src='@/assets/curso/tema1/img05.svg')
      .col-lg-6
        p <b>Para saber cuál es la diferencia entre datos e información,</b> es necesario saber que los datos son hechos y estadísticas en bruto, mientras que la información son datos precisos y oportunos, se organiza con un propósito, se presenta dentro de un contexto que le da significado y relevancia; y puede conducir a un aumento en la comprensión y una disminución en la incertidumbre. La información se crea al interpretar los datos, para ser presentados en un contexto más significativo, permitiendo a una empresa tomar decisiones a partir de estos, permitiendo que la gerencia pueda interpretar la información, proporcionando métricas para determinar mejores formas de interactuar o trabajar con sus clientes. 
        hr

    p.mb-5 Además, es importante señalar que el valor de la información no radica en sí misma, sino en las acciones que surgen de esta. Por ejemplo, si se presenta un informe donde la información entrega alertas sobre la baja satisfacción del cliente, solo es útil si crea un cambio en la forma como la empresa se relaciona con los clientes. Por lo tanto, la información debe formar parte de un proceso de revisión más amplio dentro del negocio para obtener mejores resultados y aportar al logro de los objetivos estratégicos.

    .row.mb-4
      .col-lg-2.col-xl-3.col-xxl-2
        .bg_1
          .row.align-items-center
            .col-lg-2
               ul.lista-ul
                li
                  i.fas.fa-caret-right
                  h4.text-white.m_block.mt_1 Características
    
    p.mb-5 <b>Es necesario reconocer las siguientes características de los datos, las cuales se detalla a continuación:</b>

    .row.mb-0
      BotonesB2
    
    .row.mb-4
      .col-lg-2.col-xl-3.col-xxl-2
        .bg_1
          .row.align-items-center
            .col-lg-2
               ul.lista-ul
                li
                  i.fas.fa-caret-right
                  h4.text-white.m_block.mt_1 Tipos

    p La información entra y sale de una empresa en muchas direcciones diferentes, y los tipos de datos que recopilan son la base de las metas y para el logro de los objetivos estratégicos, es aquí donde los sistemas informáticos también aportan y pueden soportar el proceso de recopilación, una vez se determine dónde y cómo se pueden recopilar los datos. 
    
    p.mb-5 <b>Los tipos de datos que recopilan las empresas se pueden dividir en las siguientes categorías:</b>

  
    .bg_slyder.p-5.mb-5
      SlyderA(tipo="b").color_slyder-a_botones
        .row.justify-content-around
          .col-lg-8(data-aos="fade-right") 
            h4 Datos de procesos comerciales
            p Para mejorar continuamente sus operaciones, las empresas recopilan datos sobre sus procesos comerciales, los cuales pueden ir desde la cantidad de días que tardan sus clientes en pagar las facturas hasta el tiempo que tardan en ensamblar y empaquetar un producto.  
            p Para recopilar este tipo de datos, muchas empresas emplean sistemas de planificación de recursos empresariales, los cuales rastrean los recursos comerciales (efectivo, materias primas, capacidad de producción) y el estado de los compromisos comerciales: pedidos, órdenes de compra y nómina. 
            p Las aplicaciones que componen el sistema comparten datos entre varios departamentos (fabricación, compras, ventas, contabilidad, etc.) que proporcionan los datos. 
            p Los sistemas de punto de venta, mediante el escaneo recopila datos que se pueden usar en la gestión de inventario, programas de fidelización, registros de proveedores, contabilidad, emisión de órdenes de compra, cotizaciones y transferencias de existencias, informes de ventas y, en algunos casos, conexión en red con centros de distribución.
     
          .col-lg-4(data-aos="fade-left") 
            figure
              img(src='@/assets/curso/tema1/img06.svg', alt='AvatarTop')

        .row.justify-content-around.align-items-center
          .col-lg-6
            h4 Observaciones del mundo físico
            p La tecnología ha hecho posible que las empresas capturen datos en tiempo real sobre el mundo físico, estos se recopilan mediante el uso de dispositivos como identificación por radiofrecuencia, cámaras remotas inalámbricas, GPS, tecnología de sensores y puntos de acceso inalámbricos.
            p Al insertar chips de computadora en casi cualquier objeto, las empresas pueden rastrear los movimientos de ese artículo y, en algunos casos, controlar el objeto. 
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img07.svg', alt='AvatarTop')

        .row.justify-content-around
          .col-lg-6
            h4 Datos biológicos
            p Si tiene un teléfono inteligente más nuevo, es posible que pueda desbloquearlo simplemente mirando la pantalla, esto es posible gracias al software de reconocimiento facial. Desbloquear su computadora portátil con su huella digital es otro ejemplo. Aunque cosas como el reconocimiento de voz y rostro, los escaneos de retina y las firmas biométricas se utilizan actualmente principalmente con fines de seguridad, es posible que en el futuro este tipo de datos permita la personalización de productos y servicios.     
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img08.svg', alt='AvatarTop')

        .row.justify-content-around
          .col-lg-6
            h4 Datos Públicos
            p Las empresas tienen una fuente casi infinita de datos disponibles gratuitamente de fuentes públicas, cada vez que inicia sesión en Internet, utiliza la mensajería instantánea, envía correos electrónicos, se deja una huella electrónica. 
            p Por ahora, estos datos se consideran "públicos" y las empresas recopilan, comparten e incluso venden este tipo de datos todos los días.      
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img09.svg', alt='AvatarTop')

        .row.justify-content-around
          .col-lg-6
            h4 Información personal
            p Al igual que los datos que se consideran datos "públicos", a medida que usamos la tecnología proporcionamos una gran cantidad de datos personales que las empresas pueden usar para revelar mucho sobre nuestras preferencias personales, hábitos y pasatiempos.     
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img10.svg', alt='AvatarTop')
   
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 1.1	Procedimientos técnicos y de registro

    
    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img11.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p El procesamiento de datos, es el proceso informático que convierte los datos en información, por lo general, se supone que el procesamiento está automatizado y se ejecuta en una computadora central, mini computadora, microcomputadora o computadora personal.

    .row.justify-content-center.mb-4         
      .col-lg-10 
        p.mb-5 Los sistemas de procesamiento de datos suelen manipular los datos sin procesar para convertirlos en información y, del mismo modo, los sistemas de información suelen tomar datos sin procesar como entrada para producir información como salida. En el contexto del procesamiento de datos, los datos se definen como números o caracteres que representan mediciones del mundo real.

    .row.justify-content-center.mb-5         
      .col-lg-10 
        .cajon.color-acento-contenido.p-5.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-9 
              .h4.mb-4 Los tipos de datos que las computadoras almacenan y procesan son: 
              ul.lista-ul
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Texto que consta de cadenas de caracteres.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Números.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Audio, es decir, voz y música.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Imágenes: monocromáticas y en color.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Video, que es una secuencia de imágenes como películas o animación. Por lo general, los datos de video tienen una banda sonora que se sincroniza con las imágenes. 
            .col-lg-2
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema1/img12.svg')

    .row.mb-5
      .col-lg-4.col-xl-5.col-xxl-4
        .bg_1
          .row.align-items-center
            .col-lg-10
              ul.lista-ul
                li
                  i.fas.fa-caret-right
                  h4.m_block.text-white.mt_1 Ciclo de procesamiento de datos

    | El procesamiento de datos es la reestructuración o reordenamiento para aumentar su utilidad y agregar valores para un propósito particular y son necesarias para transformar los datos en información, 
    span.etiqueta <b>estas actividades de procesamiento son en los sistemas manuales hasta los electrónicos y se pueden agrupar en cuatro categorías funcionales:</b>

    .row.justify-content-center.mt-5.mb-4
      .col-lg-10.col-xl-11
        figure.mb-5
          img.img-t.mx-auto(src='@/assets/curso/tema1/img13.svg')
        h4 Con el transcurso del tiempo, el hombre ha ideado ciertas herramientas para ayudarlo en el procesamiento de datos. Estos incluyen:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        .bg_2.p-4
          .row.justify-content-center.mb-3
            .col-10
              p.mt-3 <b>Herramientas manuales:</b> como lápiz y papel.
          img.img-t.mx-auto.mt_2(src='@/assets/curso/tema1/img14.svg' alt='AvatarTop')
      .col-lg-3.mb-4.mb-lg-0
        .bg_3.p-4
          .row.justify-content-center.mb-3
            .col-10
              p.mt-3 <b>Herramientas mecánicas:</b> como archivadores.
          img.img-t.mx-auto.mt_2(src='@/assets/curso/tema1/img15.svg' alt='AvatarTop')
      .col-lg-3.mb-4.mb-lg-0
        .bg_2.p-4
          .row.justify-content-center.mb-3
            .col-12
              p.mt-3 <b>Herramientas electromecánicas:</b> como sumadoras y máquinas de escribir.
          img.img-t.mx-auto(src='@/assets/curso/tema1/img16.svg' alt='AvatarTop')
      .col-lg-3
        .bg_3.p-4
          .row.justify-content-center.mb-3
            .col-10
              p.mt-3 <b>Herramientas electrónicas:</b> como calculadoras y computadoras.
          img.img-t.mx-auto(src='@/assets/curso/tema1/img17.svg' alt='AvatarTop')

    p.mb-5 Muchas personas asocian inmediatamente el procesamiento de datos con las computadoras, pero esta no es la única herramienta utilizada para el procesamiento de datos; también se puede hacer sin computadoras. Sin embargo, las computadoras han superado a las personas en estas tareas.

    .row.mb-5
      .col-lg-3.col-xl-4.col-xxl-3
        .bg_1
          .row.align-items-center
            .col-lg-12
              ul.lista-ul
                li
                  i.fas.fa-caret-right
                  h4.m_block.text-white.mt_1 Instrumentos archivísticos 
    
    p.mb-5 El archivo es uno de los elementos básicos para ordenar, clasificar, conservar y gestionar los documentos, las necesidades del sistema de archivo de una oficina comercial pueden variar dependiendo el tipo de documentación que se maneje. Un buen sistema de archivo tiene las siguientes características y elementos esenciales:

    .row
      .col-lg-6
        .bg_slyder.p-4.mb-5
          SlyderA(tipo="b").heigth_1.color_slyder-a_botones
            .row.justify-content-center.align-items-start
              .col-lg-10(data-aos="fade-right") 
                h4 Compacidad
                | El sistema de archivo compacto debe ser adoptado por todas las oficinas comerciales, esto significa que el sistema de archivo no debería requerir ningún espacio innecesario.

            .row.justify-content-center
              .col-lg-10
                h4  Simplicidad
                | El sistema de archivo debe ser simple y no demasiado elaborado.

            .row.justify-content-center
              .col-lg-10
                h4 Accesibilidad
                | Un buen sistema de archivo debe organizarse de tal manera que los registros estén fácilmente disponibles cuando sea necesario. El sistema de archivo debe permitir la inserción de documentos adicionales sin alterar el orden existente de los archivos.     

            .row.justify-content-center
              .col-lg-10
                h4 Economía 
                | El sistema de archivo debe ser económico en tiempo, espacio, dinero y operaciones. El costo de instalación y operación del sistema de llenado debe ser lo más bajo posible. El equipo de archivo seleccionado debe ocupar un espacio mínimo, pero puede acomodar un número máximo de archivos. El costo del equipo de archivo debe ser muy bajo. El equipo de archivo ahorra tiempo de operación, es decir, ubicar, insertar y colocar documentos y papeles en un archivo. Los registros no deseados pueden eliminarse para ahorrar espacio.
            
            .row.justify-content-center
              .col-lg-10
                h4 Flexibilidad
                | El sistema de archivo puede ampliarse si aumenta el volumen de transacciones comerciales. Un sistema inflexible no es útil después de cruzar un cierto límite.

            .row.justify-content-center
              .col-lg-10
                h4  Clasificación
                | El sistema de archivo debe estar respaldado por un sistema adecuado de clasificación. La clasificación adecuada reduce la cantidad de archivos que se deben mantener y ayuda a insertar y ubicar los documentos en los archivos.

            .row.justify-content-center
              .col-lg-10
                h4 Seguridad 
                | Los documentos y registros archivados deben estar en condiciones seguras y disponibles cuando se requieran. Los documentos y registros deben protegerse de insectos, lluvia, polvo o mal manejo.

            .row.justify-content-center
              .col-lg-10
                h4  Referencia cruzada 
                | Se debe dar una referencia cruzada siempre que un documento pueda archivarse en más de un encabezado para evitar confusiones y facilitar la ubicación de los archivos. Ahorrar tiempo y recursos humanos.

            .row.justify-content-center
              .col-lg-10
                h4 Fácil ubicación 
                | Los documentos y registros deben mantenerse de tal manera que puedan ubicarse fácilmente cuando sea necesario con la mínima demora posible. Al mismo tiempo, no requiere grandes gastos para lograr este propósito.
 
            .row.justify-content-center
              .col-lg-10
                h4  Indexación 
                | También se utiliza un índice bien diseñado para complementar el sistema de archivo. Ayudará a localizar el archivo rápidamente cuando sea necesario.

            .row.justify-content-center
              .col-lg-10
                h4 Retención 
                | Todos los documentos y registros se mantienen por un período mínimo de tiempo. Entonces, los registros y documentos muertos se pueden desechar sin demasiada perturbación. Los documentos y registros restantes se conservan incluso después de un período de almacenamiento.
            
            .row.justify-content-center
              .col-lg-10
                h4 Guías de salida 
                | Se debe mantener una referencia en los archivos de que la lista de documentos o registros son retirados por el personal de la oficina o departamento y devueltos los documentos con fecha. Las reglas y los procedimientos se pueden enmarcar y seguir para evitar errores de archivo.             

            .row.justify-content-center
              .col-lg-10
                h4 Mínimo desarchivo 
                | La principal dificultad no tiene que ver con el archivo sino con la búsqueda de los documentos. El archivo incorrecto causa retrasos en la ubicación del documento deseado. Por lo tanto, solo el personal autorizado puede tener acceso a los archivos.
      .col-lg-5
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema1/img19.png')

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 1.2 Control de la información 

    p.mb-5 La información es uno de los activos más importantes en las empresas, por esto es necesario implementar controles a esta, la mayoría de los departamentos de donde están los sistemas de información permanecen centralizados, con el fin de brindar servicios a las unidades de negocios de forma organizada y protegiendo la información. Para esto existen métodos que ayudan a proteger y evaluar las vulnerabilidades asociadas, tales como:

    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-5.mb-4.mb-sm-0.border_tar-t1-2
        .tarjeta.tarjeta-slide.derecha.color_tarjeta1-t1-2.p-5(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img20.svg')})`}")
            .tarjeta-slide__contenido.p-0.p-xl-4
              h3 Procedimiento de evaluación de riesgos
              p Es una evaluación metódica de la probabilidad de pérdidas debido a exposiciones de valores y el alcance de estas pérdidas. El riesgo se define como el producto de la cantidad que se puede perder debido a la exposición de un valor y la probabilidad de que tal pérdida ocurra. Esta probabilidad se puede estimar por la frecuencia de tales ocurrencias en el pasado.

      .col-sm-6.col-xl-5
        .tarjeta.tarjeta-slide.izquierda.color-primario.p-5(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img21.svg')})`}")
            .tarjeta-slide__contenido.padding_1
              h3.text-white.mb_1 Análisis de escenarios
              p.text-white Es un método de control del sistema que involucra ataques simulados al sistema para determinar su vulnerabilidad.

    p.mb-5.mt-5.mt-lg-0 Los controles en los sistemas de información se implementan para garantizar operaciones seguras, para así salvaguardar los activos y los datos almacenados en estos sistemas, asegurando que las aplicaciones logren sus objetivos de manera eficiente, para esto las empresas deben implementar un conjunto de políticas, procedimientos y medidas tecnológicas, que aporten esquemas de control, que pueden diseñarse para:
      
    .row.justify-content-center.mb-5         
      .col-lg-8
        .cajon.color-acento-contenido.p-5.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-9 
              ul.lista-ul
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Evitar que un error o ataque surta efecto.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Detectar una infracción.
                li
                  i.fas.far.fa-check
                  p.m-0.ms-3 Detectar y corregir una situación excepcional. 
            .col-lg-2
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema1/img22.svg')

    p.mb-5 <b>Los controles de los sistemas de información se clasifican en:</b>

    .row.mb-5.justify-content-center
      .col-md-8.mb-5.mb-md-0
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Controles generales") Son los que se aplican a la totalidad de la actividad de sistemas de información de una organización, cubren todos los sistemas de una organización o una de sus subunidades.
          
          p.text-small(numero="2" titulo="Controles administrativos") Tienen como objetivo garantizar que se instituye todo el marco de control, que la gerencia lo respalde continuamente y que se haga cumplir con los procedimientos adecuados, incluidas las auditorías. Los controles de administración incluyen, la política de controles publicada, procedimientos formales, selección de personal, supervisión continua del personal y separación de funciones.
          
          p.text-small(numero="3" titulo="Controles de desarrollo y mantenimiento de sistemas") Los auditores internos de los sistemas e información deben participar en todo el proceso de desarrollo de sistemas con el fin de asegurarse que el sistema sea seguro y también auditable. Además en la organización se debe realizar la revisión posterior a la implementación que sigue a la puesta en funcionamiento del sistema.  Verificar que se desarrolle y mantenga la documentación adecuada del sistema y que durante el mantenimiento de los sistemas solo se realicen cambios autorizados en el sistema y para tener en funcionamiento la versión adecuada del sistema.
          
          p.text-small(numero="4" titulo="Controles de operaciones") Son las políticas, los procedimientos y la tecnología establecidos para garantizar que los centros de datos se operen de manera confiable. Entre estos controles se incluyen: los controles sobre el acceso al centro de datos, control al personal de operaciones, control al mantenimiento de los equipos informáticos y control sobre el almacenamiento de archivos.

          p.text-small(numero="5" titulo="Controles de aplicación") Son los controles específicos a las aplicaciones clave del negocio. 
        
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
import BotonesB2 from '../components/BotonesB2.vue'
export default {
  name: 'Tema1',
  components: {
    BotonesB2,
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
