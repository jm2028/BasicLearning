"use strict"
// Array 관련 메서드 정리
// ref: https://ko.javascript.info/array-methods

// 배열 요소 추가, 제거
{
    let arr = ['b', 'c', 'd'];
    arr.push('e') // 맨 끝에 요소 추가 b,c,d,e
    arr.pop() // 맨 끝 요소 제거 b,c,d
    arr.shift() // 맨 앞 요소 제거 c,d,
    arr.unshift('a') // 맨 앞에 요소 추가 a,c,d
}

/** splice
 * array.splice(pos, deleteCount, ...items)
 * pos부터 deleteCount개의 요소를 지우고, items 추가하기
 * 원본 배열을 변경함
 * 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가함
 */
{
    let arr = ['a', 'b', 'c', 'd'];
    arr.splice(1, 2) // a, d (인덱스 1부터 요소 두개를 지움)

    let arrb = ['a', 'b', 'c'];
    arrb.splice(2, 0, 'HERE', 'MERGE') // a, b, HERE, MERGE, c (인덱스 2부터 아무것도 안지우고 그 자리에 HERE, MERGE 삽입)
    
    let arrc = ['a', 'b', 'c', 'd'];
    let spliced = arrc.splice(0, 2); // a, b, c (splice는 삭제된 요소를 배열로 return해줌)
}

/** slice
 * array.slice(start, end)
 * start부터 end 바로 앞까지의 요소를 복사해 새로운 배열을 만듦
 * end 값은 미포함입니다 (end -1 까지 반환)
 */
{
    let arr = ["t", "e", "s", "t"];

    arr.slice(1, 3) // e,s (인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사(인덱스가 3인 요소는 제외))

    arr.slice(-2) // s,t (인덱스가 -2인 요소부터 제일 끝 요소까지를 복사)

    arr.slice(-3, -1) // e, s (인덱스가 -3인 요소부터  인덱스가 -2인 요소 까지 복사)
}

/** concat
 * array.concat(...items)
 * 배열의 모든 요소를 복사하고 items를 추가해 새로운 배열을 만든 후 이를 반환함. items가 배열이면 이 배열의 인수를 기존 배열에 더해줌
 */
 {
    let arr = [1, 2];

    // arr의 요소 모두와 [3,4]의 요소 모두를 한데 모은 새로운 배열이 만들어집니다.
    alert( arr.concat([3, 4]) ); // 1,2,3,4

    // arr의 요소 모두와 [3,4]의 요소 모두, [5,6]의 요소 모두를 모은 새로운 배열이 만들어집니다.
    alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

    // arr의 요소 모두와 [3,4]의 요소 모두, 5와 6을 한데 모은 새로운 배열이 만들어집니다.
    alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
}

// 배열 탐색
/** indexOf, lastIndexOf
 * array.indexOf(item, pos) / array.lastIndexOf(item, pos)
 * pos부터 원하는 item을 찾음. 찾게 되면 해당 요소의 인덱스를, 아니면 -1을 반환함
 * 완전 항등 연산자로 (===) 검색함
*/
{
    let arr = [1, 2, 3, 4];
    arr.indexOf(2); // 1
}
/** inlcudes
 * array.includes(value)
 * 배열에 value가 있으면 true를, 그렇지 않으면 false를 반환함
 */
{
    let arr = [1, 2, 3, 4];
    arr.includes(3) // true
}
/** find ( ES5 )
 * array.find(func(item, index, array){}) // array.findIndex(func(item, index, array){})
 * func의 반환 값을 true로 만드는 첫 번째 요소를 반환함 
 * 요소가 없다면 undefined 가 반환됨
 * array.findIndex는 find와 동일하게 작동하나 조건에 맞는 요소의 인덱스를 반환함
 * 특정 조건에 부합하는 객체를 배열 내에서 찾을때 유용함
 */
{
    let users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"}
      ];
      
    let user = users.find(item => item.id == 1);
      
    console.log(user.name); // John
}
/** filter ( ES5 )
 * arr.filter(function(item, index, array){})
 * func의 조건에 맞는 요소 전체를 담은 배열을 반환
 * 조건을 충족하는 요소가 한개면 find 여러개면 filter를 사용
 */
 {
    let users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"}
      ];
      
      // 앞쪽 사용자 두 명을 반환합니다.
      let someUsers = users.filter(item => item.id < 3);
      
      console.log(someUsers.length); // 2
}
/** some
 * arr.some(func(item, index, array){})
 * 배열 안의 어떤 요소중 하나라도 true 이면 true를 반환해줌
 */
{
    let arr = [1, 2, 3, 4, 5];
    arr.some(item => item == 1) // true
    arr.some(item => item == 6) // false
}
/** every
 * arr.every(func(item, index, array){})
 * 배열 안의 모든 요소가 true이면 true를 반환해줌
 */
 {
    let arr = [1, 2, 3, 4, 5];
    arr.some(item => item < 6) // true
    arr.some(item => item < 5) // false
}

// 배열 전체 순회
/** forEach
 * arr.forEach(function(item, index, array){})
 * 원본배열을 변경하지 않음
 * 주어진 함수를 배열 요소 각각에 대해 실행할 수 있게 해줌 (return값 없음)
 */
{
    let arr = [1, 2, 3, 4];
    let sum;
    arr.forEach(function(item, index, array) {
        sum += item;
    })
    console.log(sum) // 1 + 2 + 3 + 4 = 10
}

// 배열 변형
/** map
 * arr.map(function(item, index, array){})
 * 모든 요소에 func을 호출하고, return 결과를 가지고 새로운 배열을 만듦
 */
 {
    let arr = ["Bilbo", "Gandalf", "Nazgul"];
    let lengths = arr.map(item => item.length);
    console.log(lengths); // 5,7,6
}
/** sort
 * arr.sort(compareFunction)
 * 배열 정렬 메서드
 * 원본 배열을 변경함
 * compareFunction없이 사용하면 문자열 변환에 따라 각 문자의 유니코드 코드 포인트 값에 따라 정렬해줌
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
{
    const months = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort();
    console.log(months);
    // expected output: Array ["Dec", "Feb", "Jan", "March"]
    
    const array1 = [1, 30, 4, 21, 100000];
    array1.sort();
    console.log(array1);
    // expected output: Array [1, 100000, 21, 30, 4]
}
/** reverse
 * arr.reverse()
 * 배열의 순서를 반전함
 * 원본 배열을 변경함
 */
{
    let arr = [1, 2, 3, 4, 5];
    arr.reverse();

    console.log( arr ); // 5,4,3,2,1
}
/** split
 * string.split(separator, limit);
 * 문자열을 지정한 구분자를 이용하여 여러개의 문자열로 나눈 후 배열로 반환해줌
 * limit 으로 배열의 길이를 제한할 수 있음
 * 구분자로 "" 을 제공하면 UTF-16 으로 나누게 되어 원하는 값이 나오지 않을수 있음 (https://stackoverflow.com/questions/4547609/how-to-get-character-array-from-a-string/34717402#34717402)
 */
{
    let str = 'Bilbo, Gandalf, Nazgul, Saruman';
    let arr = str.split(', ', 2);

    console.log(arr); // Bilbo, Gandalf
}
/** fill
 * arr.fill(value, start, end)
 * start 부터 end까지를 value값으로 덮어씀
 */
{
    let arr = [1, 2, 3, 4];

    console.log(array1.fill(0, 2, 4)); // 1, 2, 0, 0
}

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
{
    let arr = [1, 2, 3, 4, 5];

    let result = arr.reduce((sum, current) => sum + current, 100);

    alert(result); // 115
}

// 배열
/** isArray
 * Array.isArray(arr)
 * type of 로는 {} 와 [] 둘다 object가 반환됨
 * isArray 사용시 배열은 true 반환
 */
{
    console.log(Array.isArray({})); // false

    console.log(Array.isArray([])); // true
}
/** thisArg
 * 배열메서드의 인자에 thisArg가 들어간다면 해당 배열의 함수실행에 thisArg의 컨텍스트 정보를 넘겨줌
 */



// 예제
/** border-left-width를 borderLeftWidth로 변경하기
"my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.
대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다. 
*/ 
{
    function camelize(str) {
        return str.split('-').map((word, idx) => idx == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
    }
    console.log(camelize('border-left-width')); // borderLeftWidth
}

/** 특정 범위에 속하는 요소 찾기 
배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해봅시다.
새로 작성하는 함수는 기존 배열 arr을 변경하면 안 되고, 반환되는 함수는 새로운 배열이어야 합니다.
*/
{
    function filterRange(arr, a, b) {
        return arr.filter(item => (a <= item && item <= b));
    }
    let arrRange = [5, 3, 8, 1];
    let filteredRange = filterRange(arrRange, 1, 5); // 5, 3, 1
}

/** 내림차순으로 정렬하기 
 * compareFunction(a, b)의 return이 0미만 이면 a가 먼저 0이면 다른요소에 대해 정렬 0보다 크면 b가 먼저옴
*/
{
    let arr = [5, 2, 1, -11, -10, 8];
    arr.sort(function(a, b) {
        console.log(`a: ${a}, b: ${b} return: b - a = ${b - a}`);
        return b - a;
    }); //
}

/** 배열 복사본을 정렬하기
문자열이 담긴 배열 arr을 복사한 다음 해당 배열을 정렬해봅시다. 단 이때 arr은 변경되면 안 됩니다.
함수 copySorted(arr)는 복사 후 정렬된 배열을 반환해야 합니다.
*/
{
    function copySorted(arr) {
        return arr.slice().sort();
    }
    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);
    console.log(arr, sorted); //['HTML', 'JavaScript', 'CSS'] ['CSS', 'HTML', 'JavaScript']
}

/** 확장 가능한 계산기
기능을 "확장"할 수 있는 계산기 객체를 만들어 주는 생성자 함수 Calculator를 작성해봅시다.
Calculator는 두 단계를 거쳐 만들 수 있습니다.
첫 번째 단계는 "1 + 2"와 같은 문자열을 받아서 “숫자 연산자 숫자” 형태(공백으로 구분)로 바꿔주는 메서드 calculate(str)를 구현하는 것입니다. 
이 함수는 +와 -를 처리할 수 있어야 하고, 연산 결과를 반환해야 합니다.

예시:
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10

두 번째 단계는 계산기가 새로운 연산을 학습할 수 있도록 해주는 메서드 addMethod(name, func)를 추가해 주는 것입니다. 
연산자 이름을 나타내는 name과 인수가 두개인 익명 함수 func(a,b)를 받는 새 메서드를 구현해야 하죠.
구현된 메서드를 이용해 곱셈 *과 나눗셈 /, 거듭제곱 **연산자를 추가해주는 예시는 아래와 같습니다.

예시:
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
*/
{
    function Calculator() {
        this.methods = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b
        };

        this.calculate = function (str) {
            let split = str.split(' ');
            let a = +split[0];
            let op = split[1];
            let b = +split[2];
            
            if (!this.methods[op] || isNaN(a) || isNaN(b)) {
                return NaN;
            }

            return this.methods[op](a, b);
        };

        this.addMethods = function (name, func) {
            this.methods[name] = func;
        }
    }

    let calc = new Calculator;
    console.log(calc.calculate("1 + 2"));
    calc.addMethods("*", (a, b) => a * b);
    console.log(calc.methods);
}

/** 이름 매핑하기
name을 나타내는 프로퍼티를 가진 객체 user가 담긴 배열이 있습니다. name의 값만 담은 새로운 배열을 만들어주는 코드를 작성해보세요. 
*/
{
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let users = [john, pete, mary];

    let names = users.map(item => item.name);
    console.log(names) // ['john', 'Pete', 'Mary']
}

/** 객체 매핑하기
세 개의 프로퍼티 name과 surname, id를 가진 객체 user가 담긴 배열이 있습니다.
name과 surname을 조합해 fullName을 만들고, 이를 이용해 두 개의 프로퍼티 id와 fullName을 가진 객체를 담은 새로운 배열을 반환해주는 코드를 작성해보세요. 
*/
{
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [john, pete, mary];
    let userMapped = users.map(item => ({
        fullName: `${item.name} ${item.surname}`, 
        id: item.id
    }));
    console.log(userMapped);
}

/** 나이를 기준으로 객체 정렬하기
프로퍼티 age가 있는 객체가 담긴 배열이 있습니다. 이 배열을 age를 기준으로 정렬해주는 함수 sortByAge(users)를 만들어보세요.
*/
{
    function sotrByAge(users) {
        users.sort((a, b) => a.age - b.age);
    }

    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [pete, john, mary];

    sotrByAge(arr); // john, mary, pete
}

/** 배열 요소 무작위로 섞기
배열의 요소를 무작위로 섞어주는 함수 shuffle(array)을 작성해 보세요.
shuffle을 여러 번 실행하면 요소의 정렬 순서가 달라야 합니다. 예시를 살펴봅시다.
*/
{
    function shuffle(arr) {
        arr.sort(() => Math.random() - 0.5);
        for (let i = arr.length - 1; i > 0; i --) {
            let j = Math.floor(Math.random() * (i + 1));

            console.log(i, j);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    let arr = [1, 2, 3];
    shuffle(arr)
    console.log(arr)
    shuffle(arr)
    console.log(arr)
    shuffle(arr)
    console.log(arr)
    shuffle(arr)
    console.log(arr)
}

/** 평균 나이 구하기
age를 나타내는 프로퍼티를 가진 객체가 여러 개 담긴 배열이 있습니다. 평균 나이를 반환해주는 함수 getAverageAge(users)를 작성해보세요.
평균을 구하는 공식은 (age1 + age2 + ... + ageN) / N 입니다. 
*/
{
    function getAverageAge(users) {
        return users.reduce((prev, user) => prev + user.age, 0) / users.length;
    }
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [john, pete, mary];

    console.log(getAverageAge(arr));
}

/** 중복 없는 요소 찾아내기
arr은 배열입니다.
배열 내 유일한 요소를 찾아주는 함수 unique(arr)를 작성해보세요. 
*/
{
    function unique(arr) {
        let result = [];
      
        for (let str of arr) {
          if (!result.includes(str)) {
            result.push(str);
          }
        }
      
        return result;
      }

    let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    console.log(unique(strings));
}