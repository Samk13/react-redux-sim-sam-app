import { v1 as uuid } from 'uuid'

// reason why I put initial state data in seperate file than store is https://en.wikipedia.org/wiki/Circular_dependency
// getting error in the cosole log  No reducer provided for key “articles”

export const articleInitialState = [
  {
    id: `article_${uuid()}`,
    createdAt: new Date().toISOString(),
    lastEdited: '',
    author: 'Sam',
    imgUrl: 'https://picsum.photos/300/300',
    body:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    seen: true
  }
]
