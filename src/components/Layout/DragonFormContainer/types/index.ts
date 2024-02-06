import { ChangeEvent, FormEvent } from "react";

import { AxiosResponse } from "axios";

import { Dragon, DragonBasicData, DragonStory } from "@/types";

export interface UseDragonFormContainerParams {
  saveRequest: (data: DragonBasicData) => Promise<AxiosResponse<void>>;
  data?: Dragon;
}

export interface UseDragonFormContainerReturn {
  disabledSubmit: boolean;
  isSaving: boolean;
  name: string;
  type: string;
  storiesList: DragonStory[];
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleStoryDelete: (index: number) => () => void;
  handleNewStory: () => void;
  handleFormReset: () => void;
  handleNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleStoryNameChange: (
    index: number
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  handleStoryDescriptionChange: (
    index: number
  ) => (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface DragonFormContainerProps {
  saveRequest: (data: DragonBasicData) => Promise<AxiosResponse<void>>;
  data?: Dragon;
}
