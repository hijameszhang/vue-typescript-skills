interface Email {
  domain: string
  address: string
}
interface Account {
  id: string
  firstName: string
  lastName: string
  getUserFullName(firstName: string, lastName: string): string
}

interface UserInfo extends Account, Email {
  nickName: string
}

export default class Person implements UserInfo {
  id: string
  firstName: string
  lastName: string
  domain: string
  address: string
  nickName: string
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    domain: string,
    address: string
  ) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.nickName = this.firstName
    this.domain = domain
    this.address = address
  }

  getUserFullName(firstName: string, lastName: string): string {
    return firstName + '_' + lastName
  }
}
