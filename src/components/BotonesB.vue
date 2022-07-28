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
        titulo: 'Cumplir con los plazos de entrada de datos',
      },
      {
        img: require('@/assets/curso/tema2/img11-3.svg'),
        img_h: require('@/assets/curso/tema2/img12-3.svg'),
        pos_x: '27%',
        pos_y: '35.1%',
        titulo: 'Clasificación de la información',
      },
      {
        img: require('@/assets/curso/tema2/img11-4.svg'),
        img_h: require('@/assets/curso/tema2/img12-4.svg'),
        pos_x: '36%',
        pos_y: '35.1%',
        titulo: 'Revisión de datos en busca de errores y corrección de estos',
      },
      {
        img: require('@/assets/curso/tema2/img11-5.svg'),
        img_h: require('@/assets/curso/tema2/img12-5.svg'),
        pos_x: '45%',
        pos_y: '35.1%',
        titulo: 'Tener una buena postura y aplicar técnicas de digitación.',
      },
      {
        img: require('@/assets/curso/tema2/img11-6.svg'),
        img_h: require('@/assets/curso/tema2/img12-6.svg'),
        pos_x: '54%',
        pos_y: '35.1%',
        titulo: 'Cumplir con los plazos de entrada de datos',
      },
      {
        img: require('@/assets/curso/tema2/img11-7.svg'),
        img_h: require('@/assets/curso/tema2/img12-7.svg'),
        pos_x: '63%',
        pos_y: '35.1%',
        titulo: 'Clasificación de la información',
      },
      {
        img: require('@/assets/curso/tema2/img11-8.svg'),
        img_h: require('@/assets/curso/tema2/img12-8.svg'),
        pos_x: '72%',
        pos_y: '35.1%',
        titulo: 'Revisión de datos en busca de errores y corrección de estos',
      },
      {
        img: require('@/assets/curso/tema2/img11-9.svg'),
        img_h: require('@/assets/curso/tema2/img12-9.svg'),
        pos_x: '81%',
        pos_y: '35.1%',
        titulo: 'Revisión de datos en busca de errores y corrección de estos',
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
.btns_item--0 .li2e
  display: none
.btns_item--1 .li1c, .btns_item--1 .li2e
  display: none
.btns_item--2 .li1b, .btns_item--2 .li1c
  display: none
.btns_item--3 .li1c, .btns_item--3 .li2e
  display: none
.btns_item--4 .li1c, .btns_item--4 .li2e
  display: none
.btns_item--5 .li1c, .btns_item--5 .li2e
  display: none
.btns_item--6 .li1b, .btns_item--6 .li1c
  display: none
.btns_item--7 .li1c, .btns_item--7 .li2e
  display: none
.btns_item--8 .li1b, .btns_item--8 .li1c
  display: none
.btns_item--9 .li2e
  display: none

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
    width: 300px
    height: 80px
    z-index: 100
    line-height: 1.2em
    border-radius: 14px
    transform: translate(-50%)
    p
      line-height: 1.2em
@media (max-width: $bp-max-md)
  .btns__item
    width: 13% !important
    padding: 13%

  .btns_item--0
    top: 0.5% !important
    left: 2.5% !important
  .btns_item--1
    top: 0.5% !important
    left: 15.5% !important
  .btns_item--2
    top: 0.5% !important
    left: 18.3% !important
  .btns_item--3
    top: 0.5% !important
    left: 21.5% !important
  .btns_item--4
    top: 0.5% !important
    left: 31.1% !important
  .btns_item--5
    top: 0.5% !important
    left: 45.3% !important
  .btns_item--6
    top: 0.5% !important
    left: 58.3% !important
  .btns_item--7
    top: 0.5% !important
    left: 61.5% !important
  .btns_item--8
    top: 0.5% !important
    left: 78.3% !important
  .btns_item--9
    top: 0.5% !important
    left: 91.5% !important
</style>
