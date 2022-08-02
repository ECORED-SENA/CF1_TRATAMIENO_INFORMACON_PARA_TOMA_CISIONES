<template lang="pug">
.btns
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
  name: 'BotonesB3',
  data: () => ({
    indicador: true,
    hover: null,
    size: '15%',
    botones: [
      {
        img: require('@/assets/curso/tema7/img06.svg'),
        img_h: require('@/assets/curso/tema7/img06.svg'),
        pos_x: '1%',
        pos_y: '35.1%',
        titulo:
          'Asegurarse de que todas las fotocopias e impresiones se produzcan en formato de doble cara en papel reciclado.',
      },
      {
        img: require('@/assets/curso/tema7/img07.svg'),
        img_h: require('@/assets/curso/tema7/img07.svg'),
        pos_x: '18%',
        pos_y: '35.1%',
        titulo:
          'Utilizar las comunicaciones electrónicas cuando sea posible para reducir la impresión, preguntarse si realmente necesita copias o la impresión de este.',
      },
      {
        img: require('@/assets/curso/tema7/img08.svg'),
        img_h: require('@/assets/curso/tema7/img08.svg'),
        pos_x: '34%',
        pos_y: '35.1%',
        titulo:
          'Asegurarse de que el personal se sienta cómodo con los nuevos equipos y proporcione capacitación cuando sea necesario, animarlos a no imprimir correos electrónicos o documentos a menos que sea necesario.',
      },
      {
        img: require('@/assets/curso/tema7/img09.svg'),
        img_h: require('@/assets/curso/tema7/img09.svg'),
        pos_x: '51%',
        pos_y: '35.1%',
        titulo:
          'Reducir los costos de desechos confidenciales asegurándose de que la recolección de papel no confidencial sea segura y dar instrucciones claras al personal sobre qué material es estrictamente confidencial.',
      },
      {
        img: require('@/assets/curso/tema7/img10.svg'),
        img_h: require('@/assets/curso/tema7/img10.svg'),
        pos_x: '67%',
        pos_y: '35.1%',
        titulo:
          'Cuando no se pueda evitar la producción de papel de desecho, intentar reutilizarlo. Por ejemplo, puede usar papel impreso en un lado como papel borrador o blocs de mensajes. También se puede reutilizar los sobres, por ejemplo, para uso interno, y donar el papel excedente a escuelas o guarderías locales.',
      },
      {
        img: require('@/assets/curso/tema7/img11.svg'),
        img_h: require('@/assets/curso/tema7/img11.svg'),
        pos_x: '84%',
        pos_y: '35.1%',
        titulo: 'Reutilizar y reciclar papel en la oficina.',
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
  height: 300px
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
    top: 100%
    left: 50%
    background-color: #DEE4F0
    width: 250px
    height: 250px
    z-index: 100
    line-height: 1.2em
    border-radius: 7px
    transform: translate(-50%)
    p
      line-height: 1.2em
@media (max-width: $bp-max-md)
  .btns__item
    width: 13% !important
    padding: 50%
    position: unset
    margin-top: 1.5rem

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
</style>
