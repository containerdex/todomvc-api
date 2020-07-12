import BaseModel from './base-model'

class User extends BaseModel {
  constructor() {
    super()
    console.log('New User created')

    Object.assign(this, {
      data: [
        {
          id: 1,
          name: 'Ruben Klauck-Lopez',
          username: 'rubencklopez',
          password: 'welcome'
        }
      ]
    })
  }
}

export default User.getInstance()
