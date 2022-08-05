# Wordy

A script to extra methods to the `String` object

## Installation

`YARN`
```sh
    yarn add @jace.dev/wordy
```

`NPM`
```sh
    npm i @jace.dev/wordy
```

`PNPM`
```sh
    pnpm i @jace.dev/wordy
```

## Usage
`Node JS`
```js
    require('@jace.dev/wordy');

    const str = 'Hello World';
    console.log(str.subWords(1)); // 'Hello'
```
`HTML`
```html
    <script src="https://raw.githubusercontent.com/Jace-Tech/Wordy/main/dist/wordy.js"></script>
    <script>
        const str = 'Hello World';
        console.log(str.subWords(1)); // 'Hello'
    </script>
```

## Features
It adds the following methods to the `String` object

- `.subWords(count: number)`: Returns the n number of words as specified in the `count` parameter and it has "..." appended to it.

### Example 
```js
const sentence = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit soluta ab exercitationem"
const shortWords = sentence.subWords(10)

console.log(shortWords)
// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit soluta...
```

- `.wordsInBetween(start: string, end: string)`: Returns the strings in between the `start` and `end` string parameters

### Example 
```js
const query = "SELECT email, salary, employee_id FROM employees"
const words = query.wordsInBetween("SELECT", "FROM")

console.log(words)
// email, salary, employee_id
```