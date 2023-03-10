type DefaultTools = 'task' | 'reader' | 'command' 
type ToolsType = {
  name: DefaultTools,
  icon: any
} & {
  name: string,
}
type WebSiteType = {
  name: string,
  src: string
}

export type { ToolsType, WebSiteType }