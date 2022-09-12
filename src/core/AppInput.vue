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
        <input v-bind="listeners" :id="name" class="tw-block tw-w-full tw-h-full full input" type="text" v-model="value">
        <label :for="name" class="label" :class="{ 'dirty': hasValue }">{{ label }}</label>
      </div>
      <div v-if="$slots.append" class="tw-h-[50px] tw-shrink-0 tw-pl-8 tw-flex tw-items-center">
        <slot name="append" />
      </div>
    </div>
    <p v-if="errorMessage" class="errorMessage" :title="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { Field } from 'vee-validate'
import { useField } from 'vee-validate';
import { computed, ref } from 'vue';

export default {
  props: {
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

  .errorMessage {
    position: absolute;
    top: 100%;
    transform: translateY(-18px);
    @apply tw-text-xs tw-text-negative tw-leading-100;
  }
</style>
