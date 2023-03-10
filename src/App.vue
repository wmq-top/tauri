<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Greet from "./components/Greet.vue";
import { useI18n } from "vue-i18n";
const { t: translate } = useI18n()
</script>

<template>
  <div class="container">
    {{ translate('home') }}
    <h1>Welcome to Tauri!</h1>

    <div class="row">
      <a href="https://vitejs.cn/" target="_self">
        <img src="/vite.svg" class="logo vite" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_self">
        <img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_self">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_self">Volar</a>
      +
      <a href="https://github.com/tauri-apps/tauri-vscode" target="_self">Tauri</a>
      +
      <a href="https://github.com/rust-lang/rust-analyzer" target="_self">rust-analyzer</a>
    </p>

    <Greet />
  </div>
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>
