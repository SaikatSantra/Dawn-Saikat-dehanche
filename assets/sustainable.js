var url = "https://dehanche-3.myshopify.com/admin/products/7039370428583.json";
 fetch(url).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
}).catch(function() {
  console.log("Booo");
});