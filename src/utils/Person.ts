// PersonConstructor => 用以检查静态属性或方法
interface PersonConstructor {
  new (name: string, age: number): void
  typename: string // 静态属性
  getType(): string // 静态方法
}

interface PersonInterface {
  log(msg: string): void
}

// 不可写成:  class Person implements PersonInterface, PersonInterface
const Person: PersonConstructor = class Person implements PersonInterface {
  name: string
  age: number
  static typename = 'Person type'
  static getType(): string {
    return this.typename
  }

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  log(msg: string): void {
    window.console.log(msg)
  }
}

export default Person
