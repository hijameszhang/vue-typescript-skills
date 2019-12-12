// number
let sum: number = 6
let hexIteral: number = 0xf00d

// string
let nickname: string = 'james'
let templateStr: string = `Hello ${nickname}`

// undefined
let undef: undefined = undefined

// null
let n: null = null

// boolean
let isShow: boolean = true

// symbol
let s: symbol = Symbol('james')
Symbol('james') === Symbol('james') // false

// tuple, 赋值时必须与声明的预设类型一致, 否则TS会报错
const tuple: [number, string, string] = [30, 'hello', 'james']

// enum
enum Sex {
  man = 1,
  woman = 2
}
let sex: Sex = Sex.man

// void, 一般用于定义函数没有返回值
const a: void = undefined
function log(msg: string): void {
  window.console.log(msg)
}

// any, 当无法确定变量类型时使用
/**
 **慎用**
  可能会失去使用TS的意义

 主要应用场景:
  * 使用第三方库声明时
  * 重构/迁移旧项目时
 */
let fullname: any = 'jameszhang'
fullname = 20
fullname = { nickname: 'hello jameszhang' }

// unknown
/*
`unknown` 是TypeScript 3.0引入了新类型,是 any 类型对应的安全类型。

unknown 和 any 的主要区别是:
* `unknown` 类型会更加严格, 在对unknown类型的值执行大多数操作之前,我们必须进行某种形式的检查
* any 类型的值执行操作之前,不必进行任何检查。

unknown和any的相同点:
*/
let value: any
value = true // OK
value = 1 // OK
value = 'Hello World' // OK
value = Symbol('type') // OK
value = {} // OK
value = [] // OK

let value1: unknown

value1 = true // OK
value1 = 1 // OK
value1 = 'Hello World' // OK
value1 = Symbol('type') // OK
value1 = {} // OK
value1 = [] // OK
/*
unknown和any的不同点在于, 当unknown类型被确定是某个类型前, 它不能被进行任何操作, 如: 实例化、getter、函数执行等.
*/
let value2: any
value2.foo.bar // OK
value2() // OK
new value2() // OK
value2[0][1] // OK

let value3: unknown
value3.foo.bar // ERROR
value3() // ERROR
new value3() // ERROR
value3[0][1] // ERROR

function getString(val: unknown): string {
  if (val instanceof Date) {
    return val.toLocaleDateString()
  }
  return String(val)
}
// never, 适用于出错/永远得不到返回值的场景
function error(msg: string): never {
  throw new Error(msg)
}

// type assert, 类型断言

interface Person {
  name: string
  age: number
}
const person = {} as Person

person.name = 'james'
person.age = 30

// 类型守卫
class Cat {
  getName(): string {
    return 'hello world'
  }
}
class Dog {
  name: string = 'dog'
}
// instanceof
function getName(d: Dog | Cat): string {
  if (d instanceof Cat) {
    return d.getName()
  }
  if (d instanceof Dog) {
    return d.name
  }
  return ''
}
// in
function getName1(d: Dog | Cat): string {
  if ('getName' in d) {
    return d.getName()
  }
  if ('name' in d) {
    return d.name
  }
  return ''
}
