export const fallbackLng = "en";
export const languages = [fallbackLng, "uz", "ru"];
export const cookieName = "i18next";

export function getOptions(lng = fallbackLng) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
  };
}
