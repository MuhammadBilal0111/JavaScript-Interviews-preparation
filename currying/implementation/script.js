function updateElementTax(id) {
  return (content) => {
    document.getElementById(id).innerHTML = content;
  };
}
const updateTax = updateElementTax("tax");
// Due to currying we donot need to select the specific element using the id only use the inner function to manipulate the function again and again
updateTax("1000");
