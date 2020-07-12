export default class BaseModel {
  static instance = null

  index = 1

  constructor() {
    console.log('New base created')
  }

  find(id) {
    id = +id
    let arrIndex = 0

    for (const datum of this.data) {
      if (datum.id === id) {
        return [datum, arrIndex]
      }

      arrIndex++
    }

    return [null]
  }

  findAll() {
    return this.data
  }

  create(obj) {
    this.index++

    Object.assign(obj, { id: this.index })
    this.data.push(obj)

    return obj
  }

  update(id, obj) {
    const [user, idx] = this.find(id)

    Object.assign(user, obj)

    return user
  }

  destroy(id) {
    const [user, idx] = this.find(id)

    if (user) {
      this.data.splice(idx, 1)
    }

    return idx
  }

  static getInstance() {
    if (this.instance) { return this.instance }

    this.instance = new this()

    return this.instance
  }
}

