export interface INavbarItem {
  text: string;
  href?: string;
  isActive?: boolean;
  icon?: string;
  childs?: Array<INavbarItem>;
}