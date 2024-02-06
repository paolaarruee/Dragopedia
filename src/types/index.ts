export interface UserCredentials {
  username: string;
  password: string;
}

export interface Dragon {
  createdAt: string;
  name: string;
  type: string;
  histories: DragonStory[];
  id: string;
}

export interface DragonStory {
  title: string;
  story: string;
}

export interface DragonBasicData {
  name: string;
  type: string;
  histories?: DragonStory[];
}
