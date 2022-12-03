interface MenuModel {
  label: string;
  link?: string;
  children?: {
    label: string;
    link: string;
  }[];
}

export default MenuModel;
