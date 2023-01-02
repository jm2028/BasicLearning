"use strict"
// Array 관련 메서드 정리
// ref: https://ko.javascript.info/array-methods

// 배열 요소 추가, 제거
(() => {
    let arr = ['b', 'c', 'd'];
    arr.push('e') // 맨 끝에 요소 추가 b,c,d,e
    arr.pop() // 맨 끝 요소 제거 b,c,d
    arr.shift() // 맨 앞 요소 제거 c,d,
    arr.unshift('a') // 맨 앞에 요소 추가 a,c,d
});

/** splice
 * array.splice(pos, deleteCount, ...items)
 * pos부터 deleteCount개의 요소를 지우고, items 추가하기
 * 원본 배열을 변경함
 * 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가함
 */
(() => {
    let arr = ['a', 'b', 'c', 'd'];
    arr.splice(1, 2) // a, d (인덱스 1부터 요소 두개를 지움)

    let arrb = ['a', 'b', 'c'];
    arrb.splice(2, 0, 'HERE', 'MERGE') // a, b, HERE, MERGE, c (인덱스 2부터 아무것도 안지우고 그 자리에 HERE, MERGE 삽입)
    
    let arrc = ['a', 'b', 'c', 'd'];
    let spliced = arrc.splice(0, 2); // a, b, c (splice는 삭제된 요소를 배열로 return해줌)
});

/** slice
 * array.slice(start, end)
 * start부터 end 바로 앞까지의 요소를 복사해 새로운 배열을 만듦
 * end 값은 미포함입니다 (end -1 까지 반환)
 */
(() => {
    let arr = ["t", "e", "s", "t"];

    arr.slice(1, 3) // e,s (인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사(인덱스가 3인 요소는 제외))

    arr.slice(-2) // s,t (인덱스가 -2인 요소부터 제일 끝 요소까지를 복사)

    arr.slice(-3, -1) // e, s (인덱스가 -3인 요소부터  인덱스가 -2인 요소 까지 복사)
})

/** concat
 * array.concat(...items)
 * 배열의 모든 요소를 복사하고 items를 추가해 새로운 배열을 만든 후 이를 반환함. items가 배열이면 이 배열의 인수를 기존 배열에 더해줌
 */
 (() => {
    let arr = [1, 2];

    // arr의 요소 모두와 [3,4]의 요소 모두를 한데 모은 새로운 배열이 만들어집니다.
    alert( arr.concat([3, 4]) ); // 1,2,3,4

    // arr의 요소 모두와 [3,4]의 요소 모두, [5,6]의 요소 모두를 모은 새로운 배열이 만들어집니다.
    alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

    // arr의 요소 모두와 [3,4]의 요소 모두, 5와 6을 한데 모은 새로운 배열이 만들어집니다.
    alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
})

// 배열 탐색
/** indexOf, lastIndexOf
 * array.indexOf(item, pos) / array.lastIndexOf(item, pos)
 * pos부터 원하는 item을 찾음. 찾게 되면 해당 요소의 인덱스를, 아니면 -1을 반환함
 * 완전 항등 연산자로 (===) 검색함
*/
(() => {
    let arr = [1, 2, 3, 4];
    arr.indexOf(2); // 1
})
/** inlcudes
 * array.includes(value)
 * 배열에 value가 있으면 true를, 그렇지 않으면 false를 반환함
 */
(() => {
    let arr = [1, 2, 3, 4];
    arr.includes(3) // true
})
/** find ( ES5 )
 * array.find(func(item, index, array){}) // array.findIndex(func(item, index, array){})
 * func의 반환 값을 true로 만드는 첫 번째 요소를 반환함 
 * 요소가 없다면 undefined 가 반환됨
 * array.findIndex는 find와 동일하게 작동하나 조건에 맞는 요소의 인덱스를 반환함
 * 특정 조건에 부합하는 객체를 배열 내에서 찾을때 유용함
 */
(() => {
    let users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"}
      ];
      
    let user = users.find(item => item.id == 1);
      
    console.log(user.name); // John
})
/** filter ( ES5 )
 * arr.filter(function(item, index, array){})
 * func의 조건에 맞는 요소 전체를 담은 배열을 반환
 * 조건을 충족하는 요소가 한개면 find 여러개면 filter를 사용
 */
 (() => {
    let users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"}
      ];
      
      // 앞쪽 사용자 두 명을 반환합니다.
      let someUsers = users.filter(item => item.id < 3);
      
      console.log(someUsers.length); // 2
})
/** some
 * arr.some(func(item, index, array){})
 * 배열 안의 어떤 요소중 하나라도 true 이면 true를 반환해줌
 */
(() => {
    let arr = [1, 2, 3, 4, 5];
    arr.some(item => item == 1) // true
    arr.some(item => item == 6) // false
})
/** every
 * arr.every(func(item, index, array){})
 * 배열 안의 모든 요소가 true이면 true를 반환해줌
 */
 (() => {
    let arr = [1, 2, 3, 4, 5];
    arr.some(item => item < 6) // true
    arr.some(item => item < 5) // false
})

// 배열 전체 순회
/** forEach
 * arr.forEach(function(item, index, array){})
 * 원본배열을 변경하지 않음
 * 주어진 함수를 배열 요소 각각에 대해 실행할 수 있게 해줌 (return값 없음)
 */
(() => {
    let arr = [1, 2, 3, 4];
    let sum;
    arr.forEach(function(item, index, array) {
        sum += item;
    })
    console.log(sum) // 1 + 2 + 3 + 4 = 10
})

// 배열 변형
/** map
 * arr.map(function(item, index, array){})
 * 모든 요소에 func을 호출하고, return 결과를 가지고 새로운 배열을 만듦
 */
 (() => {
    let arr = ["Bilbo", "Gandalf", "Nazgul"];
    let lengths = arr.map(item => item.length);
    console.log(lengths); // 5,7,6
})
/** sort
 * arr.sort(compareFunction)
 * 배열 정렬 메서드
 * 원본 배열을 변경함
 * compareFunction없이 사용하면 문자열 변환에 따라 각 문자의 유니코드 코드 포인트 값에 따라 정렬해줌
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
(() => {
    const months = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort();
    console.log(months);
    // expected output: Array ["Dec", "Feb", "Jan", "March"]
    
    const array1 = [1, 30, 4, 21, 100000];
    array1.sort();
    console.log(array1);
    // expected output: Array [1, 100000, 21, 30, 4]
})
/** reverse
 * arr.reverse()
 * 배열의 순서를 반전함
 * 원본 배열을 변경함
 */
(() => {
    let arr = [1, 2, 3, 4, 5];
    arr.reverse();

    console.log( arr ); // 5,4,3,2,1
})
/** split
 * string.split(separator, limit);
 * 문자열을 지정한 구분자를 이용하여 여러개의 문자열로 나눈 후 배열로 반환해줌
 * limit 으로 배열의 길이를 제한할 수 있음
 * 구분자로 "" 을 제공하면 UTF-16 으로 나누게 되어 원하는 값이 나오지 않을수 있음 (https://stackoverflow.com/questions/4547609/how-to-get-character-array-from-a-string/34717402#34717402)
 */
(() => {
    let str = 'Bilbo, Gandalf, Nazgul, Saruman';
    let arr = str.split(', ', 2);

    console.log(arr); // Bilbo, Gandalf
})
/** reduce
 * arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
accumulator – 이전 함수 호출의 결과.
item – 현재 배열 요소
index – 요소의 위치
array – 배열
[initial] - 함수 최초 호출 시 사용되는 초깃값을 나타냄(옵션) / 빈 배열일 경우 초깃값이 없으면 에러
 * 요소를 차례로 돌면서 func을 호출함. 반환값은 다음 함수 호출에 전달함
 * 마지막 요소까지 함수 호출되면 reduce의 반환값이 됨
 */
(() => {
    let arr = [1, 2, 3, 4, 5];

    let result = arr.reduce((sum, current) => sum + current, 100);

    alert(result); // 115
})

// 배열
/** isArray
 * Array.isArray(arr)
 * type of 로는 {} 와 [] 둘다 object가 반환됨
 * isArray 사용시 배열은 true 반환
 */
(() => {
    console.log(Array.isArray({})); // false

    console.log(Array.isArray([])); // true
})
/** thisArg
 * 배열메서드의 인자에 thisArg가 들어간다면 해당 배열의 함수실행에 thisArg의 컨텍스트 정보를 넘겨줌
 */