
const content = fetchProducts();

const main = ()=>{
  const container = document.querySelector(".products_grid_container");

  setTimeout(() => {
    console.log({ "arrayToString": content.join('') });
    container.innerHTML = content.join('')
  }, 1000);
}

window.addEventListener('load',main)
// window.onload = ()=>main();
// document.addEventListener('DOMContentLoaded',main)
