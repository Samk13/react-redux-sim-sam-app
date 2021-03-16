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
    type: ['articleType_2fecceb4-86a0-11eb-9630-6392c62eae2f'],
    seen: true
  }
]

export const articleTypes = [
  {
    id: `articleType_2fecceb4-86a0-11eb-9630-6392c62eae2f`,
    title: 'Research',
    selected: false,
    key: 'research',
    logo: 'https://picsum.photos/300/300'
  },
  {
    id: `articleType_2fecceb3-86a0-11eb-9630-6392c62eae2f`,
    title: 'Observations',
    selected: false,
    key: 'observations',
    logo: 'https://picsum.photos/300/300'
  },
  {
    id: `articleType_2fecceb2-86a0-11eb-9630-6392c62eae2f`,
    title: 'Hypotheses',
    selected: false,
    key: 'Hypotheses',
    logo: 'https://picsum.photos/300/300'
  },
  {
    id: `articleType_2fecceb6-86a0-11eb-9630-6392c62eae2f`,
    title: 'Commentaries',
    selected: false,
    key: 'commentaries',
    logo: 'https://picsum.photos/300/300'
  },
  {
    id: `articleType_2fecceb5-86a0-11eb-9630-6392c62eae2f`,
    title: 'Perspectives',
    selected: false,
    key: 'Perspectives',
    logo: 'https://picsum.photos/300/300'
  },
  {
    id: `articleType_2fecceb1-86a0-11eb-9630-6392c62eae2f`,
    title: 'Editorials',
    selected: false,
    key: 'editorials',
    logo: 'https://picsum.photos/300/300'
  },
  {
    id: `articleType_2fecceb1-8612-11eb-9630-6392c62eae2f`,
    title: 'Other',
    selected: false,
    key: 'other',
    logo: 'https://picsum.photos/300/300'
  }
]
