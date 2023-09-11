export interface Disquette {
  author: Person
  isOc: boolean
  isPublic: boolean
  name: string
  slug: string
  tags: string[]
  uuid: string
  content: string
}

export interface Person {
  uuid: string
  username: string
  avatarUrl: string
}
