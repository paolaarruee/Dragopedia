import { FormEvent, ChangeEvent } from "react";

import { DragonStory } from "@/types";

export interface DragonFormContainerProps {
  disabledSubmit: boolean;
  isSaving: boolean;
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
