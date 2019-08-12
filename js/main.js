document.getElementById('buttonSend').onclick = function (){
  var parentElement = document.getElementById('ul-code');
  parentElement.insertAdjacentHTML('beforeend',"<p style='color:#333333;font-size: 14px;font-weight: 700;line-height:19px;padding-top:10px;'>"+document.getElementById('imya').value+"</p>");
  parentElement.insertAdjacentHTML('beforeend',"<li style='font-size: 14px;color: #333333;border:1px solid gray;list-style-type:none;margin-top:10px;background-color: #f2fbff;border:1px solid rgba(0, 0, 0, 0.19);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);word-wrap: break-word;'>"+document.getElementById('otziv').value+"</li>");
}
