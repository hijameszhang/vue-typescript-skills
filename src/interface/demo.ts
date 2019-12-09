// 定义接口
export default interface Person{
  id: number, // 必选属性
  name: string, // 必选属性
  age: number, // 必选属性
  job?: string, // 可选属性，表示不是必须的参数，
  readonly salary: number, // 只读属性, 表示是只读的属性,但是在初始化之后不能重新赋值，否则会报错
  [ propName : string ] : any, // 任意属性, 所有属性的属性名必须为string类型, 值可以是 任意类型

}
// 定义一个变量，它的类型为接口Person，这样即可约束接口的内容了.
let person: Person = {
  name: 'james',
  age: 30,
  job: 'IT dog',
  id: 9527,
  salary: 1000000000,
  // 注意, hello, demo是显式定义的属性, 适用于[propName:string]: any规则, 因此值类型为: any
  hello: 'world',
  demo: [1, 3, 'world']
}

function printMan (person:Person) {
  window.console.log(`My name is: ${person.name}, my job is: ${person.job}`)
}
