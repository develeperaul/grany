<script>
import { h, computed } from 'vue';

export default {
  props: {
    name: {
      required: true,
      type: String
   },
   iconClass: {
    default: '',
    type: String
   },
   slim: {
    default: false,
    type: Boolean
   },
   size: {
    default: '24px',
    type: String
   },
   tag: {
    default: 'span',
    type: String
   },
   fill: {
    default: 'black',
    type: String
   }
  },
  setup(props) {

    const classes = computed(() => {
      return `app-icon tw-fill-${props.fill} ${props.iconClass}`
    });

    const styles = computed(() => {
      return {
        '--size': props.size
      }
    });

    return () => {
      const svg = h(
        'svg',
        { class: [ classes.value ], style: styles.value },
        h('use', { 'xlink:href': `/sprite.svg#${props.name}` })
      );

      return props.slim ? svg : h(props.tag, svg)
    };
  }
}
</script>

<style scoped>
  .app-icon {
    width: var(--size);
    height: var(--size);
  }
</style>
