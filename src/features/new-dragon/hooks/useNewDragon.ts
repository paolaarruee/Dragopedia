import { ChangeEvent, FormEvent, useState } from "react";

import { DragonBasicData, UseNewDragonReturn } from "../types";
import { registerDragon } from "../api";
import { DragonStory } from "@/types";

const storyInitialValues: DragonStory = { title: "", story: "" };

export const useNewDragon = (): UseNewDragonReturn => {
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [storiesList, setStoriesList] = useState<DragonStory[]>([
    storyInitialValues,
  ]);

  const disabledSubmit = !name.length || !type.length || isLoading;

  const handleFormReset = () => {
    setName("");
    setType("");
    setStoriesList([]);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleFormReset();

    const newDragonPayload: DragonBasicData = {
      name,
      type,
      histories: storiesList,
    };

    setIsLoading(true);

    registerDragon(newDragonPayload)
      .then(() => alert('Sucesso ao cadastrar o dragão!'))
      .catch(() => alert('Erro ao cadastrar o dragão!'))
      .finally(() => setIsLoading(false));
  };

  const handleNameChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setName(value);
  };

  const handleTypeChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setType(value);
  };

  const handleNewStory = () =>
    setStoriesList([...storiesList, storyInitialValues]);

  const handleStoryDelete = (index: number) => () => {
    const toUpdateStories: DragonStory[] = [...storiesList];

    toUpdateStories.splice(index, 1);

    setStoriesList(toUpdateStories);
  };

  const handleStoryNameChange =
    (index: number) =>
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      const toUpdateStories: DragonStory[] = [...storiesList];

      toUpdateStories[index].title = value;

      setStoriesList(toUpdateStories);
    };

  const handleStoryDescriptionChange =
    (index: number) =>
    ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
      const toUpdateStories: DragonStory[] = [...storiesList];

      toUpdateStories[index].story = value;

      setStoriesList(toUpdateStories);
    };

  return {
    disabledSubmit,
    isLoading,
    name,
    type,
    storiesList,
    handleNewStory,
    handleFormReset,
    handleFormSubmit,
    handleNameChange,
    handleTypeChange,
    handleStoryNameChange,
    handleStoryDescriptionChange,
    handleStoryDelete,
  };
};
