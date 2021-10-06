import { build, fake } from '@jackfranklin/test-data-bot'

export type User = {
  username: string
  email: string
  password: string
}

export const createUser = build<User>('User', {
  fields: {
    username: fake(f => f.internet.userName()),
    password: 'Test@1234',
    email: ''
  },
  postBuild: user => ({
    ...user,
    email: `${user.username.toLowerCase()}+e2e@wongames.com`
  })
})