const baseSize = 16
function setRem() {
  const scale = document.documentElement.clientWidth / 1920
  document.documentElement.style.fontSize = baseSize * scale + 'px'
  // let designWidth = 1920;//设计稿的宽度，根据实际项目调整
  // let designHeight = 1080;//设计稿的高度，根据实际项目调整
  // var fontSize = 
  //     document.documentElement.clientWidth/document.documentElement.clientHeight < designWidth/designHeight ? 
  //     (document.documentElement.clientWidth / designWidth) * baseSize:
  //     (document.documentElement.clientHeight / designHeight) * baseSize;
  // document.querySelector('html').style.fontSize = fontSize + 'px';

}
setRem()
window.onresize = function () {
  setRem()
}
