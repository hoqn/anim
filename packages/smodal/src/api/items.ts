// Dummy List Items

export type Item = {
  id: number;
  image: string;
  title: string;
  subline: string;
  description: string;
};

const dummyItems: Item[] = [
  {
    id: 1,
    image: import.meta.env.BASE_URL + "/midsommar.png",
    title: "미드소마",
    subline: "이런 축제는 처음이야",
    description: "한여름, 낮이 가장 긴 날 열리는 미드소마에 참석하게 된 친구들. 꽃길인 줄 알고 들어간 지옥길, 축제가 끝나기 전까지 절대 빠져나올 수 없다. 큰 상실을 겪은 대니가 남자친구 크리스티안과 비밀스러운 스웨덴의 한 마을에서 한여름 낮이 가장 긴 날 열리는 하지 축제에 참석해 기이한 경험을 겪고 점점 공포에 빠져들게 되는데..."
  },
  {
    id: 2,
    image: import.meta.env.BASE_URL + "/bob.webp",
    title: "미니언즈",
    subline: "귀여워...",
    description: "Velit velit adipisicing mollit deserunt anim eiusmod proident. Cupidatat ut exercitation exercitation proident tempor elit quis in sit laboris. Excepteur eu deserunt minim id velit magna sit excepteur mollit ipsum cupidatat ullamco laborum.",
  },
  {
    id: 3,
    image: import.meta.env.BASE_URL + "/bob.webp",
    title: "리액트",
    subline: "우주최강 라이브러리",
    description: "Velit velit adipisicing mollit deserunt anim eiusmod proident. Cupidatat ut exercitation exercitation proident tempor elit quis in sit laboris. Excepteur eu deserunt minim id velit magna sit excepteur mollit ipsum cupidatat ullamco laborum.",
  },
  {
    id: 4,
    image: import.meta.env.BASE_URL + "/bob.webp",
    title: "리액트",
    subline: "우주최강 라이브러리",
    description: "Velit velit adipisicing mollit deserunt anim eiusmod proident. Cupidatat ut exercitation exercitation proident tempor elit quis in sit laboris. Excepteur eu deserunt minim id velit magna sit excepteur mollit ipsum cupidatat ullamco laborum.",
  },
  {
    id: 5,
    image: import.meta.env.BASE_URL + "/bob.webp",
    title: "리액트",
    subline: "우주최강 라이브러리",
    description: "Velit velit adipisicing mollit deserunt anim eiusmod proident. Cupidatat ut exercitation exercitation proident tempor elit quis in sit laboris. Excepteur eu deserunt minim id velit magna sit excepteur mollit ipsum cupidatat ullamco laborum.",
  },
  {
    id: 6,
    image: import.meta.env.BASE_URL + "/bob.webp",
    title: "리액트",
    subline: "우주최강 라이브러리",
    description: "Velit velit adipisicing mollit deserunt anim eiusmod proident. Cupidatat ut exercitation exercitation proident tempor elit quis in sit laboris. Excepteur eu deserunt minim id velit magna sit excepteur mollit ipsum cupidatat ullamco laborum.",
  },
  {
    id: 7,
    image: import.meta.env.BASE_URL + "/bob.webp",
    title: "리액트",
    subline: "우주최강 라이브러리",
    description: "Velit velit adipisicing mollit deserunt anim eiusmod proident. Cupidatat ut exercitation exercitation proident tempor elit quis in sit laboris. Excepteur eu deserunt minim id velit magna sit excepteur mollit ipsum cupidatat ullamco laborum.",
  },
  {
    id: 8,
    image: import.meta.env.BASE_URL + "/bob.webp",
    title: "리액트",
    subline: "우주최강 라이브러리",
    description: "Velit velit adipisicing mollit deserunt anim eiusmod proident. Cupidatat ut exercitation exercitation proident tempor elit quis in sit laboris. Excepteur eu deserunt minim id velit magna sit excepteur mollit ipsum cupidatat ullamco laborum.",
  },
  {
    id: 9,
    image: import.meta.env.BASE_URL + "/bob.webp",
    title: "리액트",
    subline: "우주최강 라이브러리",
    description: "Velit velit adipisicing mollit deserunt anim eiusmod proident. Cupidatat ut exercitation exercitation proident tempor elit quis in sit laboris. Excepteur eu deserunt minim id velit magna sit excepteur mollit ipsum cupidatat ullamco laborum.",
  },
];

export function getItems(): Item[] {
  return dummyItems;
}
