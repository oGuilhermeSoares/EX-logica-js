function criaObjeto(data) {

    let temp = data.split('/')

    let obj = {
        dia: temp[0],
        mes: temp[1],
        ano: temp[2]
    }
    return obj
}
criaObjeto('12/09/2023')
module.exports = criaObjeto;
  // let temp = new Date(data)