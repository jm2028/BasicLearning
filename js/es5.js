"use strict"

// ref: https://ko.javascript.info/array-methods
(() => {

})
// 메서드 정리
// #region Array

// 기본 추가, 제거 메서드
(() => {
    let arr = ['b', 'c', 'd'];
    arr.push('e') // 맨 끝에 요소 추가 b,c,d,e
    arr.pop() // 맨 끝 요소 제거 b,c,d
    arr.shift() // 맨 앞 요소 제거 c,d,
    arr.unshift('a') // 맨 앞에 요소 추가 a,c,d
});

/** delete
 * 해당하는 인덱스의 value만 제거
 * 배열공간은 유지되므로 배열의 길이는 유지됨
 */
(() => {
    let arr = ['a', 'b', 'c'];
    delete arr[1]; // a, ,c
});

/** splice
 * 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가함
 * Array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
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
 * 인자의 begin부터 end까지(end 미포함)에 대한 얕은복사된 배열을 return해줌 (원본 배열에 영향 X)
 * end 값은 미포함입니다 (end -1 까지 반환)
 * Array.slice(begin, end)
 */
(() => {
    let arr = ["t", "e", "s", "t"];

    arr.slice(1, 3) // e,s (인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사(인덱스가 3인 요소는 제외))

    arr.slice(-2) // s,t (인덱스가 -2인 요소부터 제일 끝 요소까지를 복사)

    arr.slice(-3, -1) // e, s (인덱스가 -3인 요소부터  인덱스가 -2인 요소 까지 복사)
})

// #endregion