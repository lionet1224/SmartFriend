// 这里是放弃的想法
// 想通过识别词的种类，然后根据词语词之间的联系，最后总结出一句话
// 这种方法过于复杂，所以放弃

// 文字的基本定义
class Word{
  constructor(){

  }
}

// 名词，如：天、老大、马车、日本、学生、上午、过去
// 表示人或事物名称的词
class Noun extends Word{
  constructor(){

  }
}

// 动词，如：跑、唱、喝、喜欢、消失
// 表示动作行为，发展变化，可能意愿及心理活动的词
class Verb extends Word{
  constructor(){

  }
}

// 形容词，如：冰冷、蓝色、公开、明白、听话、胖
// 表示事物性质、状貌特征的词
class Ajective extends Word{
  constructor(){

  }
}

// 数词，如：1/2/3/4/5，一、二、三、几、一些
// 表示事物数目的词
class Numeral extends Word{
  constructor(){

  }
}

// 量词，如：尺、里、公里、斤、天、年、秒
// 表示事物或动作的单位
class Classifier extends Word{
  constructor(){

  }
}

// 代词，如：我们，另外，怎么，为什么，怎么样，他，它，这，那
// 能代替事物名称的词
class Pronoun extends Word{
  constructor(){

  }
}

// 副词，如：非常、很、快、更、共同、确实、不、没有、又
// 起修饰或限制动词或形容词作用、表程度或范围的词
class Adverb extends Word{
  constructor(){

  }
}

// 连词，如：和、同、跟、不但、并且、只要、并且
// 连接短语或句子的词
class Conjunction extends Word{
  constructor(){

  }
}

// 助词，如：呢、吧、吗、哟
// 附着在别的词后面、独立性差、无实义的一种特殊的虚词
class Auxiliary extends Word{
  constructor(){

  }
}

// 叹词，如：啊、哎、哦、噢、哼
// 表示感叹或者呼唤答应的词，通常独立使用
class Interjection extends Word{
  constructor(){

  }
}

// 拟声词，如：哗哗、轰隆隆、淅淅沥沥
// 模拟事物的声音的词
class Onomatopoeia extends Word{
  constructor(){

  }
}
