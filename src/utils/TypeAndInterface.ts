// TypeAndInterface.ts
interface Person {
  name: string
  age: number
  getName(): string
}
type Person1 = {
  name: string
  age: number
  getName(): string
}
// type继承type声明的接口
type Person2 = {
  firstName: string
  lastName: string
}
type User = Person2 & { age: number }

// interface继承type声明的接口
interface User1 extends Person2 {
  age: number
}

// type继承interface声明的接口
type User2 = User1 & { getFullName(): void }

/**
 type可以声明基本类型别名, 联合类型, 元组等类型, 也可以通过使用typeof获取实例的类型进行赋值
 */
// 基本数据类型的别名
type Str = string

// 联合类型
type StrOrNumber = string | number
type Message = string | { text: string }
type Tree<T> = T | { left: Tree<T>; right: Tree<T> }

// 元组
// 具体指定UserArr的每个位置的数据类型
type UserArr = [string, number]
let demo: UserArr = ['hello', 30] // 只可以被依次赋值为: string, number, 否则会报错

type Arr<T> = [T, T]
type Coords = Arr<number>

// 使用typeof获取实例的类型, 并进行赋值
const img = window.document.createElement('img')
type ImgElement = typeof img

// interfact可以声明合并
interface Man {
  name: string
  age: number
}

interface Man {
  sex: string
}

/**
 * 等价于:
 interface Man{
   name: string;
   age: number;
   sex: string;
 }
 */
