// var url = "https://dehanche-3.myshopify.com/admin/products/7039370428583.json";
//  fetch(url).then(function(response) {
//   return response.json();
// }).then(function(data) {
//   console.log(data);
// }).catch(function() {
//   console.log("Booo");
// });



// jQuery.getJSON('/products/demo-1-red.js', function(product) {
//   alert('The title of this product is ' + product.title);
// } );


fetch('/products/demo-1-red.js')
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out);
}).catch(err => console.error(err));


