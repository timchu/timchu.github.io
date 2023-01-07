function imgHtml(src) {
  return '<div><div class="image-container"><div class="close-button" onclick=removeImage(this)>X</div><img src="' +
      src + '"></div><br/></div>';
};

function showImage(imgId) {
  var sidePanel = document.getElementById('side-panel')
  var src = document.getElementById(imgId).src;
  sidePanel.innerHTML = imgHtml(src) + sidePanel.innerHTML;
};

function showCaptioned(captionedId) {
  var sidePanel = document.getElementById('side-panel')
  var captioned = document.getElementById(captionedId);
  console.log(captioned)
  sidePanel.innerHTML =
      '<div><div class="captioned"><br><div class="close-button" onclick=removeImage(this)>X</div>' +
      captioned.cloneNode(captioned).outerHTML + '</div><br/></div>' +
      sidePanel.innerHTML;
};
function removeImage(element) {
  element.parentNode.parentNode.remove();
};
