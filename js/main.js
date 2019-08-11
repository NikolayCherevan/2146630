document.getElementById('buttonSend').onclick = function (){
  var parentElement = document.getElementById('ul-code');
var elemdiv = parentElement.insertAdjacentHTML('beforeend',"<li>"+document.getElementById('otziv').value+"</li>");

}
