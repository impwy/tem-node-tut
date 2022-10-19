// package json npm의 사용
//lodash 사용 유틸리티라이브러리
//lodash 는 노드 모듈에만 의존성이 있다.

//lodash
const _ = require('lodash')  //lodash사용법

const items = [1,[2, [3, [4]]]];
const newItems = _.flatMapDeep(items);
console.log(newItems);