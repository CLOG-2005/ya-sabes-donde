export const siteConfig = {
  name: "Ya Sabes Donde!",
  city: "Manta, Ecuador",
  address: "Av. 26, Manta",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || "593999999999",
  mapsUrl:
    import.meta.env.VITE_MAPS_URL ||
    "https://maps.google.com/?q=Av.+26+Manta+Ecuador",
  instagram:
    import.meta.env.VITE_INSTAGRAM_URL ||
    "https://www.instagram.com/yasabesdonde.ec/",
};
