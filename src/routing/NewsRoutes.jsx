import React from "react";
import { News } from "../components/pages";
import { categories } from "../constants/categories";

const createComponent = (props, category) => {
  console.log('props :>> ', props);
  return(
  <News {...props} category={category} />
)};
export const NewsRoutes = [
  {
    path: "/deportes",
    text: "Deportes",
    visible: true,
    component: (props) => createComponent(props, categories.sports),
  },
  {
    path: "/espectaculo",
    text: "Espectaculo",
    visible: true,
    component: (props) => createComponent(props, categories.show),
  },
  {
    path: "/tecnologia",
    text: "Tecnologia",
    visible: true,
    component: (props) => createComponent(props, categories.technology),
  },
  {
    path: "/internacional",
    text: "Internacional",
    visible: true,
    component: (props) => createComponent(props, categories.international),
  },
  {
    path: "/politica",
    text: "Politica",
    visible: true,
    component: (props) => createComponent(props, categories.politics),
  },
  {
    path: "/diseno",
    text: "Diseño",
    visible: true,
    component: (props) => createComponent(props, categories.design),
  },
  {
    path: "/search/:query",
    visible: false,
    component: (props) => createComponent(props, categories.search)
  }
];
