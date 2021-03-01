import { v1 as uuid } from 'uuid'

export const articleInitialState = [
  {
    id: `article_${uuid()}`,
    createdAt: new Date().toISOString(),
    lastEdited: '',
    author: 'Sam Arbid',
    imgUrl: 'https://picsum.photos/300/300',
    body: `This is an article place holder it will appear only when you first time run the application or when you clear your local storage data.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
    seen: true
  }
]
