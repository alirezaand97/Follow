export interface MenuModel {
  label: string;
  link?: string;
  children?: {
    label: string;
    link: string;
  }[];
}

export interface OptionModel {
  label: string;
  value: string | number;
}
