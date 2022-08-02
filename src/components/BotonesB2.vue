<template lang="pug">
.btns
  .row.justify-content-center
    .col-lg-10
      img(src='@/assets/curso/tema1/img23-1.svg', alt='Las fases del proyecto')
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
  name: 'BotonesB2',
  data: () => ({
    indicador: true,
    hover: null,
    size: '6.6%',
    botones: [
      {
        img: require('@/assets/curso/tema1/img24.svg'),
        img_h: require('@/assets/curso/tema1/img24-1.svg'),
        pos_x: '38%',
        pos_y: '18%',
        titulo:
          'Los datos deben ser lo suficientemente precisos para el uso previsto y deben capturarse una sola vez, aunque pueden tener múltiples usos.',
      },
      {
        img: require('@/assets/curso/tema1/img25.svg'),
        img_h: require('@/assets/curso/tema1/img25-1.svg'),
        pos_x: '47%',
        pos_y: '18%',
        titulo:
          'Los datos deben registrarse y utilizarse de conformidad con los requisitos pertinentes, incluida la aplicación correcta de cualquier regla o definición, esto asegurará la consistencia entre periodos y con organizaciones similares, midiendo lo que se pretende medir.',
      },
      {
        img: require('@/assets/curso/tema1/img26.svg'),
        img_h: require('@/assets/curso/tema1/img26-1.svg'),
        pos_x: '56%',
        pos_y: '18%',
        titulo:
          'Los datos deben reflejar procesos de recopilación estables y coherentes a lo largo del tiempo. Debe reflejar calidad en los enfoques o métodos de recopilación de datos, además los datos de origen deben estar claramente identificados y fácilmente disponibles a partir de sistemas y registros manuales, automatizados u otros.',
      },
      {
        img: require('@/assets/curso/tema1/img27.svg'),
        img_h: require('@/assets/curso/tema1/img27-1.svg'),
        pos_x: '65%',
        pos_y: '18%',
        titulo:
          'Los datos deben capturarse lo más rápido posible después del evento o actividad y deben estar disponibles para el uso previsto dentro de un período de tiempo razonable. Deben obtenerse con la frecuencia suficiente para respaldar las necesidades de información e influir en las decisiones de servicio o gestión.',
      },
      {
        img: require('@/assets/curso/tema1/img28.svg'),
        img_h: require('@/assets/curso/tema1/img28-1.svg'),
        pos_x: '74%',
        pos_y: '18%',
        titulo:
          'Los datos capturados deben ser relevantes para los fines para los que se van a utilizar. Esto requerirá una revisión periódica de los requisitos para reflejar las necesidades cambiantes.',
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

.btns
  position: relative
  height: 600px
  @media (max-width: $bp-max-md)
    height: 226px
  &__item
    position: absolute
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    cursor: pointer
    transition: background-image 0.2s ease-in-out
  &__text
    position: absolute
    top: 120%
    left: 70%
    background-color: #90FACC
    width: 350px
    height: 180px
    z-index: 100
    line-height: 1.2em
    border-radius: 0px
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
    @media (max-width: $bp-max-md)
      top: 1.5% !important
      left: 29% !important
  .btns_item--1
    top: 0.5% !important
    left: 15.5% !important
    @media (max-width: $bp-max-md)
      top: 1.5% !important
      left: 50% !important
  .btns_item--2
    top: 0.5% !important
    left: 18.3% !important
    @media (max-width: $bp-max-md)
      top: 1.5% !important
      left: 71% !important
  .btns_item--3
    top: 0.5% !important
    left: 21.5% !important
    @media (max-width: $bp-max-md)
      top: 37% !important
      left: 39% !important
  .btns_item--4
    top: 0.5% !important
    left: 31.1% !important
    @media (max-width: $bp-max-md)
      top: 37% !important
      left: 60% !important
  .btns_item--5
    top: 0.5% !important
    left: 45.3% !important
</style>

@media (max-width: $bp-max-md) top: 37% !important left: 35% !important
