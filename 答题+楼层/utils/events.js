class Events {
  constructor() {
    this.event = {}
  }
  on(eventName,ck) {
    if (this.event[eventName] instanceof Array) {
      this.event[eventName].push(ck)
    } else {
      this.event[eventName] = [ck]
    }
  }
  emit(eventName,{...arg}) {
    this.event[eventName].map(item => {
     return item(...arg)
    })
  }
  off(eventName,ck) {
    let i = this.event[eventName].findIndex(item => item.ck === ck);
    this.event[eventName].forEach(val => {
      this.event[eventName].splice(i,1);
    })
  }
  once(eventName,ck) {
    
  }
}