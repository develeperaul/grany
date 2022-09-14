<template>
  <div class="tw-pb-20 tw-relative">
    <div class="tw-border-b tw-h-[50px] tw-relative tw-flex"
      :class="{
        'tw-border-orange': focused && !errorMessage,
        'tw-border-white': !focused && !errorMessage,
        'tw-border-negative': errorMessage
      }"
    >
      <div class="tw-flex-grow tw-relative">
        <input v-bind="listeners" :id="name" class="tw-block tw-w-full tw-h-full full input" :type="type" v-model="value">
        <label :for="name" class="label" :class="{ 'dirty': hasValue }">{{ label }}</label>
      </div>
      <div v-if="$slots.append" class="tw-h-[50px] tw-shrink-0 tw-pl-8 tw-flex tw-items-center">
        <slot name="append" />
      </div>
      <div v-else-if="type === 'number'" class="tw-h-[50px] tw-shrink-0 tw-pl-8 tw-flex tw-items-center">
        <button type="button" class="tw-p-2">
          <AppIcon name="level-up" size="18px" @click="value = `${+value + 1}`" />
        </button>
        <button type="button" class="tw-p-2 tw-rotate-180">
          <AppIcon name="level-up" size="18px" @click="value = `${+value - 1}`" />
        </button>
      </div>
    </div>
    <p v-if="errorMessage" class="errorMessage" :title="errorMessage">{{ errorMessage }}</p>
    <div v-if="$slots.caption" class="caption">
      <slot name="caption" />
    </div>
  </div>
</template>

<script>
import { Field } from 'vee-validate'
import { useField } from 'vee-validate';
import { computed, ref } from 'vue';

export default {
  props: {
    type: {
      default: 'text',
      type: String
    },
    ...Field.props
  },
  setup(props) {
    const focused = ref(false);
    const input = useField(props.name, props.rules, {
      initialValue: '',
      label: props.label
    });

    const hasValue = computed(() => input.value.value !== '');

    const listeners = {
      onFocus: () => focused.value = true,
      onBlur: () => focused.value = false,
    }

    return {
      errorMessage: input.errorMessage,
      value: input.value,
      hasValue,
      listeners,
      focused
    }
  }
}
</script>

<style scoped>
  .input {
    background: transparent;
    outline: none;
    height: 100%;
  }

  .input::-webkit-outer-spin-button,
  .input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  .input[type=number] {
    -moz-appearance: textfield;
  }

  .input:focus + .label, .label.dirty {
    transform: translateY(0px);
    top: 0;
    bottom: auto;
    @apply tw-text-xs tw-text-secondary tw-leading-140;
  }

  .label {
    position: absolute;
    transition: transform 300ms, font-size 300ms;
    line-height: 50px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    top: 0;
    bottom: 0px;
    left: 0;
    right: 0;
  }

  .errorMessage, .caption {
    position: absolute;
    top: 100%;
    transform: translateY(-18px);
  }

  .errorMessage {
    @apply tw-text-xs tw-text-negative tw-leading-100;
  }
</style>
