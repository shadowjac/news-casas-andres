import React from "react";
import { News } from "../components/pages/News";
import { categories } from "../constants/categories";

const createComponent = (props, category) => (
  <News {...props} category={category} />
);
export const NewsRoutes = [
  {
    path: "/deportes",
    text: 'Deportes',
    component: (props) => createComponent(props, categories.sports),
  },
  {
    path: "/espectaculo",
    text: 'Espectaculo',
    component: (props) => createComponent(props, categories.show),
  },
  {
    path: "/tecnologia",
    text: 'Tecnologia',
    component: (props) => createComponent(props, categories.technology),
  },
  {
    path: "/internacional",
    text: 'Internacional',
    component: (props) => createComponent(props, categories.international),
  },
  {
    path: "/politica",
    text: 'Politica',
    component: (props) => createComponent(props, categories.politics),
  },
  {
    path: "/diseno",
    text: 'Diseño',
    component: (props) => createComponent(props, categories.design),
  },
];
