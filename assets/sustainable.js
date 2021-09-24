var url = "/products/demo-1-red.js";
 fetch(url).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
}).catch(function() {
  console.log("Booo");
});



// jQuery.getJSON('/products/demo-1-red.js', function(product) {
//   alert('The title of this product is ' + product.title);
// } );

