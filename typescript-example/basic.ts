// Primitives: number, string, boolean
// arrays, objects
// Function types, parameters


// Primitives

let age: number 
age = 32

let username: string 
username= 'Username'

let isStudent: boolean
isStudent = false

// More complex types

// Arrays
let hobbies: string[]
hobbies = ['Sports', 'Cooking']

// Objects
let person: { name: string, age: number }

// Type alias
type Person = { name: string, age: number }

person = {
    name: 'Me',
    age: 21
}

// Array of objects
let people: Person[]

// Type inference
let course = 'Some course'
// course = 1234

// Union
let courseUnion : string | number = 'Some other course'
courseUnion = 12

// Functions and types

const add2 = (a: number, b: number): number => {
    return a + b
}

const print2 = (value: any) => {
    console.log(value)
}

// Generics
// Typescript looks at the concrete values of the arguments and infers type
// T indicates that the values should be the same
const insertAtBeginning = <T>(array: T[], value: T) => {
    const newArray = [value, ...array]
    return newArray
}

const demoArray = [1, 2, 4]

// These functions are flexible and type safe
const updatedArray = insertAtBeginning(demoArray, -1) // -1, 1, 2, 4

const stringarr = insertAtBeginning(['a', 'b', 'c'], '-a')

// updatedArray[0].split('')