import { Locale } from "../config";
import { commonMessages } from "./common";
import { homeMessages } from "./home";
import { aboutMessages } from "./about";
import { contactMessages } from "./contact";
import { solutionsUiMessages } from "./solutionsUi";
import { productsUiMessages } from "./productsUi";
import { projectsUiMessages } from "./projectsUi";
import { resourcesUiMessages } from "./resourcesUi";

export function getCommonMessages(locale: Locale) {
  return commonMessages[locale];
}

export function getHomeMessages(locale: Locale) {
  return homeMessages[locale];
}

export function getAboutMessages(locale: Locale) {
  return aboutMessages[locale];
}

export function getContactMessages(locale: Locale) {
  return contactMessages[locale];
}

export function getSolutionsUiMessages(locale: Locale) {
  return solutionsUiMessages[locale];
}

export function getProductsUiMessages(locale: Locale) {
  return productsUiMessages[locale];
}

export function getProjectsUiMessages(locale: Locale) {
  return projectsUiMessages[locale];
}

export function getResourcesUiMessages(locale: Locale) {
  return resourcesUiMessages[locale];
}

export * from "./types";
