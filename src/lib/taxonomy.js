let taxonomyvar = [
  { id: 9595, name: "Gorilla gorilla gorilla" },
  { id: 10090, name: "Mus musculus" },
  { id: 9606, name: "Homo sapiens"},
  { id: 9615, name: "Canis lupus familiaris"}
]
/**
* @param {int} id NCBI taxonomy ID
* @returns {string} Species name
*/
function getspeciesfromid(id) {
  let index = taxonomyvar.findIndex((idc) => idc.id === parseInt(id));
  if (index == -1) return "Not found"; //No species
  return taxonomyvar[index].name
}
export default { getspeciesfromid }