import { defineStore } from 'pinia'
import type { ToolsType, WebSiteType } from './type'
import { CarryOutOutlined } from '@ant-design/icons-vue'

const useConfigStore = defineStore('config', {
  state: () => {
    return {
      downloadUrl: '',
      defaultTools: [{ name: "task", icon: CarryOutOutlined }] as ToolsType[],
      customTools: [],
      defaultWebSite: [] as WebSiteType[],
      customWebSite: []
    }
  },
  getters: {
    getDownloadUrl: (state) => state.downloadUrl,
    getTools: (state) => [...state.defaultTools, ...state.customTools],
    getWebSite: (state) => [...state.defaultWebSite, ...state.customWebSite]
  },
  actions: {
    setDefaultTools(defaultTools: ToolsType[]) {
      this.defaultTools = defaultTools
    },
    setDefaultWebSite(defaultWebSite: WebSiteType[]) {
      this.defaultWebSite = defaultWebSite
    }
  }
})