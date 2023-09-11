<!--
 * @Author: wangguixing
 * @Date: 2023-09-08 18:10:07
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-09-11 10:30:16
 * @FilePath: \src\App.vue
-->
<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: currColor
      }
    }"
  >
    <demoPage @handleUpdateColor="handleUpdateColor" />
  </a-config-provider>
</template>

<script setup lang="ts">
import demoPage from './demoPage.vue'
import { ref } from 'vue'

const currColor = ref('#00b96b')

const handleUpdateColor = (color: string): void => {
  currColor.value = color
}
</script>
