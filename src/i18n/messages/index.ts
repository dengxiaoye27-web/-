import { Locale } from "../config";
import { commonMessages } from "./common";
import { homeMessages } from "./home";
import { aboutMessages } from "./about";
import { contactMessages } from "./contact";
import { solutionsUiMessages } from "./solutionsUi";

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

export * from "./types";
