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
      default: undefined,
      type: String
    },
    fillHex: {
      default: undefined,
      type: String
    },
  },
  setup(props) {

    const classes = computed(() => {
      let color = !props.fillHex ? `tw-fill-${props.fill || 'black'}` : '';
      return `app-icon ${props.iconClass} ${color}`;
    });

    const styles = computed(() => {
      return {
        '--size': props.size,
        'fill': props.fillHex
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
