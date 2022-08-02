<template lang="pug">
.tarjeta.color-primario__claro.p-4
  .row.align-items-center.justify-content-between
    .col-lg-6.mb-4.mb-md-0
      .botones
        img(src='@/assets/curso/tema5/img04.svg')
        .botones__item(
          v-for="(boton, index) in botones"
        )
          .botones__btn(
            :style="getStyles(boton, index)"
            @mouseover="hover = index"
            @mouseleave="hover = null"
            @click="selected = index"
          )
            .indicador--click(v-if="index === 1 && indicador")
    .col-lg-6(:style="{'z-index':'2'}")
      
      .tarjeta-botones.bg-acento-botones.p-5(v-if="selected === 0")
        img.img-t.mb-4(src='@/assets/curso/tema5/img14.svg')
        h4 Tecnológico
        p Los servicios de soporte tecnológico se refieren a las tecnologías de información y comunicación, incluyendo lo relacionado con la protección y manejo de datos, mantenimiento preventivo y correctivo, la asesoría para el uso adecuado de equipos y herramientas.

      .tarjeta-botones.bg-acento-botones.p-5(v-else-if="selected === 1")
        img.img-t.mb-4(src='@/assets/curso/tema5/img15.svg')
        h4 Control
        p Las áreas de control buscan identificar los riesgos relacionados con el negocio, la estrategia y el logro de los objetivos, con el fin de detectar y prevenir conductas ilícitas o prácticas indebidas que deban ser corregidas oportunamente.

      .tarjeta-botones.bg-acento-botones.p-5(v-else-if="selected === 2")
        img.img-t.mb-4(src='@/assets/curso/tema5/img16.svg')
        h4 Legal
        p Las empresas de control normativo o legal son las responsables de los identificar oportunamente los fallos e incumplimientos en los proceso, servicios y contratos, con el fin de controlar el riesgo operativo, todas las organizaciones requieren operar bajo controles de acción legal, para evitar sanciones o gestiones legales.

      .tarjeta-botones.bg-acento-botones.p-5(v-else-if="selected === 3")
        img.img-t.mb-4(src='@/assets/curso/tema5/img17.svg')
        h4 Mercadeo
        p Las áreas de mercadeo o marketing son clave para todos los negocios, permitiendo que puedan crecer, por lo cual es necesario el apoyo creativo y la ejecución de estrategias orientadas a buscar nuevos clientes o consumidores, a través de la compra y fidelización. 



</template>

<script>
export default {
  name: 'Botones',
  data: () => ({
    indicador: true,
    selected: 0,
    hover: null,

    botones: [
      {
        pos_x: '48%',
        pos_y: '12%',
        size: '45%',
      },
      {
        pos_x: '26%',
        pos_y: '2.5%',
        size: '45%',
      },
      {
        pos_x: '48%',
        pos_y: '59%',
        size: '45%',
      },
      {
        pos_x: '59%',
        pos_y: '36.5%',
        size: '45%',
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
      const image =
        this.hover === index || this.selected === index
          ? boton.img_h
          : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: boton.size,
        'padding-top': boton.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.botones
  position: relative
.botones__btn
  background-size: contain
  background-repeat: no-repeat
  position: absolute
  cursor: pointer
  transition: background-image 0.2s ease-in-out

.tarjeta-botones
  z-index: 3
  border-radius: 29px
  background-color: #F3F9FF
  display: block
  position: relative
.tarjeta-botones:before
  content: ""
  display: block
  top: 50%
  left: -2%
  width: 12%
  height: 2px
  position: absolute
  transform: translate(-85%)
  z-index: -1

@media (max-width: $bp-max-md)
  .tarjeta-botones:before
    display: none
</style>
