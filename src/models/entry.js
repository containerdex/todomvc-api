import BaseModel from './base-model'

class Entry extends BaseModel {
  constructor() {
    super()
    console.log('New TodoList created')

    Object.assign(this, {
      data: [
        {
          id: 1,
          entry: 'Clean up the garage'
        },
        {
          id: 2,
          entry: 'Take garbage out'
        },
        {
          id: 3,
          entry: 'Buy groceries for the weekend'
        }
      ]
    })
  }
}

export default Entry.getInstance()
