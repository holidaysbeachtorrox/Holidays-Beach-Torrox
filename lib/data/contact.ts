// lib/data/contact.ts
// Fuente única de los datos de contacto. Si cambia un teléfono o un email,
// se cambia aquí y no hay que buscarlo por todo el proyecto.

export const contact = {
  phone: "+34 683 11 77 11",
  phoneHref: "tel:+34683117711",
  whatsapp: "34683117711", // solo dígitos, con prefijo de país y sin "+"
  email: "holidaysbeachtorrox@gmail.com",
} as const
