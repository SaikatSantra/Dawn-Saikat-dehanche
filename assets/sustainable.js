window.onload=function(){
  const form = document.getElementById('searchForm_sus');
  form.addEventListener('submit', function (event){
    // handle the form data

    event.preventDefault();
    var inputValue = document.getElementById('find_number').value;
    console.log(inputValue);
    searchFunc(inputValue);
  });
}       

function searchFunc (inputValue) {
  fetch("/search/suggest.json?q="+inputValue+"&resources[type]=product&resources[options][unavailable_products]=hide&resources[options][fields]=tag,variants.sku,variants.barcode")
  .then((response) => response.json())
  .then((suggestions) => {
    const productSuggestions = suggestions.resources.results.products;

    if (productSuggestions.length > 0) {
      const firstProductSuggestion = productSuggestions[0];

      document.getElementById('batchNumber').innerHTML = "Batch number </br>"+inputValue;
      var tags = firstProductSuggestion.tags;
      tags.forEach(tagCheck);
      function tagCheck(item, index) {
        var substring = "hand craft on";
        if (item.includes(substring)){
          const tagSplitValue = item.split(":")[1];
          const date = tagSplitValue.split(" ")[0]+' '+tagSplitValue.split(" ")[1] +' '+tagSplitValue.split(" ")[2];
          const year = tagSplitValue.split(" ")[3];
          
           document.getElementById('date').innerHTML = date;
          document.getElementById('year').innerHTML = year;
        }
      }
      
    }
  }
       );
}