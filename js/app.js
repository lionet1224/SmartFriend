// 人工智障一代
function AImsg1(str){
  return str.replace(/[?？]/g, '!')
            .replace(/[吗嘛]/g, '')
            .replace(/[你我]/g, (val) => {
              if(val === '我') return '你'
              else return '我'
            });
}

function getAImsg(str, type = 2){
  return new Promise(resolve => {
    if(type === 1){
      resolve(AImsg1(str))
    } else {
      AImsg2(str).then(res => {
        resolve(res)
      })
    }
  })
}

let inputMsg = document.querySelector('#input-msg')
let emitBtn = document.querySelector('#emit')
let wrapper = document.querySelector('.content');

// 用户发送信息，并且让AI也发送
function emitMsg(){
  let str = inputMsg.value;
  insertMsg(str, true);
  // 发送后清空输入框
  inputMsg.value = ''

  // 延迟一秒回复
  setTimeout(() => {
    getAImsg(str).then(res => {
      insertMsg(res);
    });
  }, 1000);
}

// 插入到页面中
function insertMsg(str, flag){
  let msg = document.createElement('div');
  msg.className = 'msg ' + (flag ? 'right' : '')
  msg.innerHTML = `<div>${str}</div>`;
  wrapper.appendChild(msg);

  wrapper.scrollTop = 100000;
}

emitBtn.onclick = () => {
  emitMsg();
};
inputMsg.addEventListener('keyup', ev => {
  if(ev.keyCode === 13) emitMsg();
})