const handleSumarTotal = (cart) =>{
  // Acumulator es la suma que se va incrementando
  // CurrentValue es el precio del  elemento del cart
  const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
  const sum = cart.reduce(reducer,0);
  return sum;
}

export default handleSumarTotal;