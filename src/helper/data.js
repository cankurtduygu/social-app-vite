import { faker } from '@faker-js/faker';

const generatePost = (id) => ({
  id: id.toString(),
  authorName: faker.person.fullName(),
  authorAvatar: faker.image.avatar(),
  timestamp: faker.date.recent().toLocaleDateString(),
  content: faker.lorem.paragraph(5),
  image: `https://picsum.photos/600/400?random=${id}`,
  likes: faker.number.int({ min: 10, max: 500 }),
  liked:false
});

export const mockPosts = Array.from({ length: 10 }, (_, i) => generatePost(i + 1));

const generateMessage = (id) => ({
  id,
  name: faker.person.firstName(),
  avatar: faker.image.avatar(),
  message: faker.lorem.sentence(),
  timeAgo: `${faker.number.int({ min: 1, max: 59 })}m ago`,
});

export const messages = Array.from({ length: 4 }, (_, i) => generateMessage(i + 1));



  