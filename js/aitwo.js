// 句子
class Sentence{
  constructor(keys, answer){
    // 一条句子应该有变通性，所以应该包含基本回答和变通回答
    // 变通回答由种类来分别

    // 关键词
    this.keys = keys || [];
    // 基本回答
    this.answer = answer;
    // 种类变量存储
    // 将对应种类的数据存储起来，以便计算对应的回答
    this.typeVariable = {};
  }

  // 获取用户发送的语句与定义的句子的匹配程度
  match(arr){
    this.typeVariable = {};
    let userArr = [...arr];
    let matchNum = this.keys.reduce((val, item) => {
      let flag = userArr.find((v, i) => {
        let isType = /^%(.*)%$/.exec(item);
        
        if(isType){
          let matchType = types[isType[1]].match(v)

          if(matchType){
            if(!this.typeVariable[isType[1]]) this.typeVariable[isType[1]] = [];
            this.typeVariable[isType[1]].push(v);
            // 匹配过后，这个存入的数据应该删除，不然后面匹配的时候会将第一个数据重复输入
            userArr.splice(i, 1)
          }

          return matchType;
        } else {
          return item === v;
        }
      })
      return val += flag ? 1 : 0;
    }, 0)


    return matchNum;
  }

  // 获取一个合适的回复
  get(){
    return this.answer(this.typeVariable);
  }
}

// 种类，为一个系列的文字，如颜色的赤橙黄绿青蓝紫、时间的今天明天后天
class Type{
  // key是关键词
  // arr是这个种类下的词
  // exclude 排除关键词
  constructor(key, arr, exclude){
    this.key = key;
    this.arr = arr;
    this.exclude = exclude || [];
  }

  // 判断是否匹配
  match(str){
    return this.arr.find(item => {
      return str.indexOf(item) > -1;
    }) && this.exclude.indexOf(str) <= -1
  }
}

// 匹配最适合的句子
// 低于30%的匹配当做不匹配
function matchSentence(arr){
  let result = [];
  sentences.map(item => {
    let matchNum = item.match(arr);
    if(matchNum >= item.keys.length / 3) result.push({
      sentence: item,
      searchNum: matchNum / item.keys.length
    })
  })
  result = result.sort((a, b) => b.searchNum - a.searchNum);
  return result;
}

// 人工智障二代
function  AImsg2(str){
  return new Promise(resolve => {
    axios.get(`http://localhost:3005/word?word=${str}`).then(res => {
      console.log(res.data)
      let sentences = matchSentence(res.data);

      if(sentences.length <= 0){
        resolve('emm，你在说什么呀，没看懂呢')
      } else {
        resolve(sentences[0].sentence.get())
      }
    })
  })
}
