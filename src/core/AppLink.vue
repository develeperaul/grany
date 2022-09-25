<script>
import { RouterLink } from 'vue-router';
import { h, getCurrentInstance, resolveComponent } from 'vue';

export default {
  inheritAttrs: false,
  props: {
    ...RouterLink.props,
    sizeClasses: {
      default: 'tw-text-sm md:tw-text-base',
      type: String
    },
    external: {
      default: false,
      type: Boolean
    },
    native: {
      default: false,
      type: Boolean
    }
  },
  setup(props, { slots, attrs }) {
    return () => {
      // const opts = getCurrentInstance();

      let slot = [ slots.default() ];
      if(props.external) {
        const icon = h(
          'svg',
          { class: 'tw-w-12 tw-h-12 tw-fill-orange' },
          [ h('use', { 'xlink:href': '#link' }) ]
        );

        slot = [
          h('span', { class: 'tw-mr-10 tw-underline' }, slots.default()),
          icon
        ];
      }

      let tag;
      const linkClass = props.external ? `tw-text-orange tw-flex tw-items-center lg:hover:tw-opacity-90 ${props.sizeClasses}` : 'tw-underline';
      if(props.native) {
        tag = h('a', { ...attrs, class: [linkClass, attrs?.class], href: props.to }, slot)
      } else {
        tag = h(
          resolveComponent('router-link'),
          { to: props.to, custom: true },
          {
            default: ({ href, navigate}) => {
              return h('a', { ...attrs, href, onClick: navigate, class: [linkClass, attrs?.class] }, slot)
            }
          }
        )
      }

      return tag;
    }
  }
}
</script>

<style>

</style>
