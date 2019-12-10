// ExtendsDemo.ts
class Animal {
  // 类的静态属性
  static clsName: string
}

interface Dog extends Animal {
  wangwang(): void
}

// 第一种方法, 实现Dog接口
class WangCai1 implements Dog {
  // Dog接口继承至Animal类, 因此规范了 clsName 属性
  static clsName: '旺财'
  // Dog接口有对wowo方法进行描述
  wangwang() {
    window.console.log('旺旺旺...')
  }
}

// 第二种方法, 继承Animal类, 实现Dog接口
class WangCai2 extends Animal implements Dog {
  static clsName: 'Wang Cai'
  wangwang() {
    window.console.log('旺旺旺...')
  }
}
