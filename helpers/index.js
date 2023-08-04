// export const formatMoney = (ammount) => {
//     return ammount.toLocaleString("en-US", {
//         style: "currency",
//         currency: "USD",
//     })
// }
//Puedo poner elija moneda y consultar una appi para hacer el cambio de moneda a la cotizacion actual.
export const formatMoney = (ammount) => {
  return ammount.toLocaleString("fr-Fr", {
    style: "currency",
    currency: "EUR",
  })
}

export const formatDate = (date) => {
  return new Date(parseInt(date)).toLocaleString()
}
