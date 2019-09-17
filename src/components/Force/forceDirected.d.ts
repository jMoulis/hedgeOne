export interface ConfigState {
  series: object[];
  context: any;
}

export interface MenuProps {
  label: string;
  link: string;
  path: string;
  tab: boolean;
  tabId: string;
}
