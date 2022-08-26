<template>
  <div class="tw-pb-14 tw-relative">
    <div class="tw-border-b tw-h-[50px] tw-relative tw-flex"
      :class="{
        'tw-border-orange': focused && !errorMessage,
        'tw-border-white': !focused && !errorMessage,
        'tw-border-negative': errorMessage
      }"
    >
      <div class="tw-flex-grow">
        <input v-bind="listeners" id="inp" class="tw-block tw-w-full tw-h-full full input" type="text" v-model="value">
        <label for="inp" class="label" :class="{ 'dirty': hasValue }">test</label>
      </div>
      <div class="tw-h-[50px] tw-leading-[50px]">hora</div>
    </div>
    <p v-if="errorMessage" class="errorMessage">{{ errorMessage }}</p>
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
    const input = useField(props.name, inputValue => !!inputValue, {
      initialValue: ''
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
    @apply tw-text-xs tw-text-secondary tw-leading-140;
  }

  .label {
    position: absolute;
    top: 0px;
    transform: translateY(15px);
    transition: transform 300ms, font-size 300ms;
  }

  .errorMessage {
    position: absolute;
    left: 0;
    bottom: 0;
    @apply tw-text-xs tw-text-negative tw-leading-100;
  }
</style>
