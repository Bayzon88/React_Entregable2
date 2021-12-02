const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
];
function contarOvejas(ovejas) {
  // aquí tu magia
  ovejas = ovejas.filter((oveja) => {
    return (
      oveja.color === "rojo" &&
      oveja.name.toLowerCase().search("n") >= 0 &&
      oveja.name.toLowerCase().search("a") >= 0
    );
  });

  return ovejas;
}

console.log(contarOvejas(ovejas));
export default contarOvejas;
