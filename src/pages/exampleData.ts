import { faker } from "@faker-js/faker";

faker.seed(1);

export const exampleData = [
  {
    title: faker.name.fullName(),
    imageSrc: "",
    lastUpdatedDate: faker.date.recent(100),
    previewContent: faker.lorem.words(5),
  },
  {
    title: faker.name.fullName(),
    imageSrc: "",
    lastUpdatedDate: faker.date.recent(100),
    previewContent: faker.lorem.words(5),
  },
  {
    title: faker.name.fullName(),
    imageSrc: "",
    lastUpdatedDate: faker.date.recent(14),
    previewContent: faker.lorem.words(5),
  },
  {
    title: faker.name.fullName(),
    imageSrc: "",
    lastUpdatedDate: faker.date.recent(100),
    previewContent: faker.lorem.words(5),
  },
  {
    title: faker.name.fullName(),
    imageSrc: "",
    lastUpdatedDate: faker.date.recent(100),
    previewContent: faker.lorem.words(5),
  },
  {
    title: faker.name.fullName(),
    imageSrc: "",
    lastUpdatedDate: faker.date.recent(100),
    previewContent: faker.lorem.words(5),
  },
  {
    title: faker.name.fullName(),
    imageSrc: "",
    lastUpdatedDate: faker.date.recent(100),
    previewContent: faker.lorem.words(5),
  },
];
