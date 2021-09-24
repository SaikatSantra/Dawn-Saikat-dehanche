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


var getJSON = function(url, callback) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function() {

    var status = xhr.status;

    if (status == 200) {
      callback(null, xhr.response);
    } else {
      callback(status);
    }
  };

  xhr.send();
};

getJSON('/products/demo-1-red.js',  function(err, data) {

  if (err != null) {
    console.error(err);
  } else {

    var text = `Date: ${data.date}
Time: ${data.time}
Unix time: ${data.milliseconds_since_epoch}`

    console.log(text);
  }
});