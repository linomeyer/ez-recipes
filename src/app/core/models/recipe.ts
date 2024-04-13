import {Group} from "./group";

export interface Recipe {
  title: string;
  subtitle: string;
  persons: number;
  imgUrl: string;
  groups: Group[];
}
