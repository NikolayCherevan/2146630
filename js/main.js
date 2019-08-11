document.getElementById('buttonSend').onclick = function (){
  var parentElement = document.getElementById('ul-code');
  parentElement.insertAdjacentHTML('beforeend',"<li>"+document.getElementById('otziv').value+"</li>");
  
}
