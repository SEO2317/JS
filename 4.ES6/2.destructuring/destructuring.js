/**
 * destructuring Assignment('분해해서 '할당')은 객체의 프로퍼티나 배열의 요소들을 변수로 분해해주는 것을 못함
 * 코드를 더 간결하게 도와주는 기능
 * 
 * 1.object Destructing
 * 2.Array  Destructing
 */

//1.object Destructing

const book = {
    id : 1,
    title : 'The great Gatsby',
    pubDate : '10/04/1995'
};

//기존 방식
//const id = book.id;
//const title = book.title;

//in react, import { userState } from 'react'
//'react' : 설치한 react module을 node module에서 불러옴
//CDN 방식으로 console.log(React); -> React 객체 내에 수많은 프로퍼티들이 있었는데 useState라는 프로퍼티도 있었음
// const {id, title, pubDate} = book;
// console.log(id, title, pubDate);


//다른 이름으로 지정하고 싶을 경우
const {id : bookId, title: bookTitle, pubDate: bookPubDate} = book;
console.log(bookId, bookTitle, bookPubDate);

// 중첩 객체 destructuring 가능
const anotherBook = {
    id: 2,
    title: 'Story of Your Life',
    author: {
        firstName : 'Chang',
        lastNAME : 'Ted'
    },
};


// const { id, title, pubDate, author: { firstName, lastName } } = anotherBook;
// console.log(id);
// console.log(firstName, lastName);
// console.log(author);

const { author, author: { firstName, lastName }} = anotherBook;
console.log(author);
console.log(firstName, lastName);


