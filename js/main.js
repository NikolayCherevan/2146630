document.getElementById('buttonSend').onclick = function (){
  var parentElement = document.getElementById('ul-code');
  parentElement.insertAdjacentHTML('beforeend',"<p>"+document.getElementById('otziv').value+"</p>");
  parentElement.insertAdjacentHTML('beforeend',"<Li>"+document.getElementById('imya').value+"</li>");
}
