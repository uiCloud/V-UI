<template>
  <div :class="bem.b()" :style="style">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { createNamespace } from '@qiubw-vui-test/utils/create'
import { iconProps } from '@qiubw-vui-test/components/icon/src/icon'
import type { CSSProperties } from 'vue'

const bem = createNamespace('icon')

defineOptions({
  name: 'VIcon',
})

const props = defineProps(iconProps)

const style = computed<CSSProperties>(() => {
  if (!props.color && !props.size) {
    return {}
  }
  return {
    ...(props.size ? { 'font-size': `${props.size}px` } : {}),
    ...(props.color ? { color: props.color } : {}),
  }
})
</script>
