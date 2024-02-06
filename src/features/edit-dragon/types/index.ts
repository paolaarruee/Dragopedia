import { FormEvent, ChangeEvent } from "react";

import { DragonStory } from "@/types";

export interface UseEditDragonParams {
  id?: string;
}

export interface UseEditDragonReturn {
  disabledSubmit: boolean;
  isSaving: boolean;
  isFetching: boolean;
  name: string;
  type: string;
  storiesList: DragonStory[];
  handleStoryDelete: (index: number) => () => void;
  handleNewStory: () => void;
  handleFormReset: () => void;
  handleFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleStoryNameChange: (
    index: number
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  handleStoryDescriptionChange: (
    index: number
  ) => (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
