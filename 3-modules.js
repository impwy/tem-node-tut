//다른 파일의 함수나 객체를 module과 module.exports를 이용해서 공유할수있다.
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
