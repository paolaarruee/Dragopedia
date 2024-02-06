import { FormEvent, ChangeEvent } from "react";

import { DragonStory } from "@/types";

export interface UseNewDragonReturn {
  disabledSubmit: boolean;
  isLoading: boolean;
  name: string;
  type: string;
  storyName: string;
  storyDescription: string;
  handleFormReset: () => void;
  handleFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleStoryNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleStoryDescriptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface DragonBasicData {
  name: string;
  type: string;
  histories?: DragonStory[];
}
