export enum Language {
  CZECH = "czech",
  ENGLISH = "english",
  SLOVAK = "slovak",    
}

export const languageOptions = [
  { value: Language.CZECH, label: "Čeština" },
  { value: Language.ENGLISH, label: "English" },
  { value: Language.SLOVAK, label: "Slovenčina" },
];

export const getLanguageLabel = (language: Language) => {
  return languageOptions.find((option) => option.value === language)?.label;
}