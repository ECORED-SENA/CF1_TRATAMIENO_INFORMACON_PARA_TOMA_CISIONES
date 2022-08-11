<template lang="pug">
.btns
  .row.justify-content-center
    .col-lg-12
      img(src='@/assets/curso/tema2/img11-0.png', alt='Las fases del proyecto')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    :class="[`btns_item--${index}`]"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.p-3(v-if="index === hover")  
      p {{boton.titulo}}
    

</template>

<script>
export default {
  name: 'BotonesB',
  data: () => ({
    indicador: true,
    hover: null,
    size: '6.6%',
    botones: [
      {
        img: require('@/assets/curso/tema2/img11-1.svg'),
        img_h: require('@/assets/curso/tema2/img12-1.svg'),
        pos_x: '9%',
        pos_y: '35.1%',
        titulo: 'Tener una buena postura y aplicar técnicas de digitación.',
      },
      {
        img: require('@/assets/curso/tema2/img11-2.svg'),
        img_h: require('@/assets/curso/tema2/img12-2.svg'),
        pos_x: '18%',
        pos_y: '35.1%',
        titulo: 'Cumplir con los plazos de entrada de datos.',
      },
      {
        img: require('@/assets/curso/tema2/img11-3.svg'),
        img_h: require('@/assets/curso/tema2/img12-3.svg'),
        pos_x: '27%',
        pos_y: '35.1%',
        titulo: 'Clasificación de la información.',
      },
      {
        img: require('@/assets/curso/tema2/img11-4.svg'),
        img_h: require('@/assets/curso/tema2/img12-4.svg'),
        pos_x: '36%',
        pos_y: '35.1%',
        titulo: 'Revisión de datos en busca de errores y corrección de estos.',
      },
      {
        img: require('@/assets/curso/tema2/img11-5.svg'),
        img_h: require('@/assets/curso/tema2/img12-5.svg'),
        pos_x: '45%',
        pos_y: '35.1%',
        titulo: 'Escaneo de documentos y otros archivos, cuando sea necesario.',
      },
      {
        img: require('@/assets/curso/tema2/img11-6.svg'),
        img_h: require('@/assets/curso/tema2/img12-6.svg'),
        pos_x: '54%',
        pos_y: '35.1%',
        titulo: 'Ayudar a construir sistemas de gestión de datos.',
      },
      {
        img: require('@/assets/curso/tema2/img11-7.svg'),
        img_h: require('@/assets/curso/tema2/img12-7.svg'),
        pos_x: '63%',
        pos_y: '35.1%',
        titulo:
          'Dar buen manejo a la información que debe digitar y mantener la confidencialidad de acuerdo con las políticas y regulaciones de la compañía.',
      },
      {
        img: require('@/assets/curso/tema2/img11-8.svg'),
        img_h: require('@/assets/curso/tema2/img12-8.svg'),
        pos_x: '72%',
        pos_y: '35.1%',
        titulo:
          'Generar informes y realizar operaciones de respaldo, cuando sea requerido.',
      },
      {
        img: require('@/assets/curso/tema2/img11-9.svg'),
        img_h: require('@/assets/curso/tema2/img12-9.svg'),
        pos_x: '81%',
        pos_y: '35.1%',
        titulo:
          'Contar con habilidades básicas de ofimática y manejo del software requerido.',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>

.btns
  position: relative
  height: 600px
  &__item
    position: absolute
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    cursor: pointer
    transition: background-image 0.2s ease-in-out
  &__text
    border-radius: 14px
    position: absolute
    top: 120%
    left: 70%
    background-color: #FFFFFF
    width: 280px
    height: 120px
    z-index: 100
    line-height: 1.2em
    transform: translate(-50%)
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
      width: 260px
    p
      line-height: 1.2em
@media (max-width: $bp-max-md)
  .btns__item
    width: 7% !important
    padding: 7%!important
  .btns_item--0
    top: 2% !important
    left: 7% !important
    .btns__text
      left: 300%
  .btns_item--1
    top: 2% !important
    left: 25% !important
    .btns__text
      left: 180%
  .btns_item--2
    top: 2% !important
    left: 43% !important
  .btns_item--3
    top: 2% !important
    left: 61% !important
    .btns__text
      left: -50%
  .btns_item--4
    top: 2% !important
    left: 79% !important
    .btns__text
      left: -200%
  .btns_item--5
    top: 12% !important
    left: 16% !important
    .btns__text
      left: 250%
  .btns_item--6
    top: 12% !important
    left: 35% !important
    .btns__text
      left: 100%
  .btns_item--7
    top: 12% !important
    left: 53% !important
    .btns__text
      left: -10%
  .btns_item--8
    top: 12% !important
    left: 71% !important
    .btns__text
      left: -150%
</style>
