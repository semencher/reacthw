
/*
Доработайте функцию, написанную на практической части занятия:
- добавьте ленивый filter;
- замените итераторы на генераторы;
- добавьте поддержку работы с промисами - асинхронные генераторы.
*/

'use strict'

const getLazy = (obj) => {
  const iterator = typeof obj.next === 'function'
    ? obj
    : obj[Symbol.iterator]()

  return new Proxy(
    obj,
    {
      get(_, prop) {
        switch (prop) {
          case 'map': 
            return predicate => getLazy({
                [Symbol.iterator]: function *genMap() {
                    let index = 0
                    while (true) {
                        const { value, done } = iterator.next()
                        if (!done) {
                            yield predicate(value, this.index++)
                        } else {
                            return
                        }
                    }
                }
            })
          case 'filter':
              return predicate => getLazy({
                  [Symbol.iterator]: function *genFilt() {
                        let index = 0
                        while (true) {
                            const { value, done } = iterator.next()
                            if (done) {
                                return
                            } else if (predicate(value, this.index++)) {
                                yield value
                            }
                        }
                    }
              })
          case 'take':
            return (count) => getLazy({
              [Symbol.iterator]: function *genTake() {
                    while (true) {
                        if (count--) {
                            const { value, done } = iterator.next()
                            if (!done) {
                                yield value
                            } else {
                                return
                            }
                        } else {
                            return
                        }
                    }
                }
            })
          default:
            return Reflect.get(...arguments)
        }
      }
    }
  )

}

let promise = (num) => new Promise((resolve) => setTimeout(() => resolve(num), 1000));

const list = [1, 2, 3, 4, 5]
const lazyIterator = getLazy((async function *genList() {
        for (let item = 1; item <= 5; ++item) {
            yield await promise(item);
        }
    })())
  .map(x => { console.log('map 1'); return x + 10 })
  .map(x => console.log('map 2') || (x + 1) )
  .map((x, i) => {
    if (i == 3) { throw 'Oops!!'} else return x
  })
  .take(3)
  .map(x => (console.log('map 3'), x ** 2))

console.log(...lazyIterator)


const endlessIterator = {
  value: 0,
  next() {
    return { value: this.value++, done: false }
  }
}
console.log(...getLazy(endlessIterator).map(x => x ** 2).take(10))

const lazyIteratorF = getLazy(list)
    .filter(x => console.log("filter 1") || x != 2)
    .take(3)

console.log(...lazyIteratorF);