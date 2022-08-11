<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="fade-right") Introducción

    p.mb-5 En este componente de formación se abordarán los conceptos básicos que permitirán el tratamiento de la información y la toma de decisiones, de acuerdo con las necesidades, seguridad e impacto dentro de la organización y la normatividad legal vigente.
  
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ux4QU1qbCaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
