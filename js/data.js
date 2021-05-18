let sentences = [
  new Sentence(['天', '天空', '是', '%color%', '颜色'], type => {
    let str = '嗯嗯，天空是蓝色滴';

    if(type.color && type.color[0].indexOf('蓝') < 0){
      str = `不对喔，天空不是${type.color[0]}的，是蓝色的噢`
    }

    return str;
  }),
  new Sentence(['%family%', '的', '%family%', '叫', '是', '什么'], type => {
    let data = {
      '爸爸': {
        '爸爸': '爷爷',
        '妈妈': '奶奶'
      },
      '妈妈': {
        '爸爸': '姥爷',
        '妈妈': '姥姥'
      },
    }

    let result = data[type.family[0]] && data[type.family[0]][type.family[1]]

    if(result){
      return `${type.family[0]}的${type.family[1]}叫${result}喔`
    } else {
      return '咳咳，我不知道诶'
    }
  }),
  new Sentence(['你', '还', '会', '啥', '什么'], type => {
    return '其实我什么都不会呢，我是个小笨蛋~，你还可以让我说说今天明天的天气，嘿嘿'
  }),
  new Sentence(['你', '叫', '啥', '什么', '名字'], type => {
    return '咱也不知道诶，开发者没给我取，说是不会取名字。。。'
  }),
  new Sentence(['%time%', '%time%', '%time%', '天气', '是', '什么'], type => {
    // 这里可以开发一个获取api天气信息，为了方便，我就随便生成一个
    if(type.time[0]){
      return `${type.time.join('')}的天气是${['阴天', '下雨天', '晴天'][~~(Math.random() * 3)]}哟`
    } else {
      return `这个时间不知道什么天气诶`
    }
  }),
  // 更好的功能：实现匹配喜欢关键词后面指定位置的词，然后就可以回复出如：我喜欢vue - 这种句子
  new Sentence(['%point%', '喜欢', '%point%'], type => {
    let data = {
      '你': {
        '我': '呃，我也不是很喜欢你叭，就亿点点啦',
        '你': '我没有那么自恋啦'
      },
      '我': {
        '你': '嘿嘿，谢谢你的喜欢，我也喜欢你',
        '我': '哇，你好自恋呀',
        '自己': '哇，你好自恋呀'
      }
    }

    let result = data[type.point[0]] && data[type.point[0]][type.point[1]]

    if(result){
      return result;
    } else {
      return '没看懂你喜欢什么呢'
    }
  }),
  new Sentence(['你好'], type => {
    return '你好呀'
  })
]

let types = {
  color: new Type('color', ['蓝', '黑', '灰', '赤', '橙', '黄', '绿', '青', '紫', '白', '彩']),
  family: new Type('family', ['爸爸', '妈妈', '哥哥', '姐姐', '妹妹', '弟弟', '外公', '外婆', '婆婆', '爷爷']),
  time: new Type('time', ['天', '年', '月', '号', '星期'], ['天气']),
  point: new Type('point', ['你', '我', '他', '它', '自己'])
}
