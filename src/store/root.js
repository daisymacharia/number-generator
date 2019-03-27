import { observable, action, computed } from 'mobx'

export default class Store {
  @observable phoneNumbers = []
  @observable sortedNumbers = []
  @observable limit = 0
  @observable MinNumber = 0
  @observable MaxNumber = 0
  @observable messages = []

  @action
  generateRandomNumbers = () => {
    var numbers = new Array(this.limit)
    if (this.limit >= 10000) {
      this.messages = this.messages.concat(
        'You can only generate upto 10000 numbers at a time'
      )
    } else {
      for (var i = 0; i < this.limit; i++) {
        numbers[i] = this.addZero(Math.floor(Math.random() * 1000000000))
      }

      this.phoneNumbers = numbers
      this.messages = this.messages.concat(
        `You have generated ${this.limit} numbers`
      )

      this.getMaxMinNumbers()
      return this.phoneNumbers
    }
  }

  addZero = number => {
    var str = `${number}`
    var length = 10
    while (str.length < length) {
      str = `${0 + str}`
    }
    return str
  }
}
