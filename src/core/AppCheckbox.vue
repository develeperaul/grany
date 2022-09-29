<template>
  <Field v-bind="$props" v-slot="{ handleChange, value, errorMessage }">
    <div class="tw-pb-20 tw-relative" v-bind="$attrs">
      <div class="tw-flex tw-items-center" @click="handleChange(!value)">
        <div
          class="tw-w-14 tw-h-14 tw-rounded-full tw-border tw-border-white tw-leading-[12px] tw-text-center tw-cursor-pointer"
          :class="{ 'tw-border-negative': errorMessage }"
          role="checkbox"
        >
          <svg v-show="value" class="tw-inline-block" width="5px" height="6px">
            <use xlink:href="/sprite.svg#romb"></use>
          </svg>
        </div>
        <div class="tw-leading-100 tw-ml-10" role="label">
          <slot />
        </div>
      </div>
      <div v-if="errorMessage" class="tw-absolute tw-top-full tw-translate-y-[-18px]" :class="{ 'tw-text-negative': errorMessage }">
        {{ errorMessage }}
      </div>
    </div>
  </Field>
</template>

<script>
import { Field } from 'vee-validate';

export default {
  inheritAttrs: false,
  props: {
    ...Field.props,
    value: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style>

</style>
