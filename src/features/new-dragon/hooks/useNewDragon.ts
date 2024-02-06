import { ChangeEvent, FormEvent, useState } from "react";

import { NavigateFunction, useNavigate } from "react-router-dom";

import { UseNewDragonReturn } from "../types";
import { registerDragon } from "../api";
import { DragonBasicData, DragonStory } from "@/types";

const storyInitialValues: DragonStory = { title: "", story: "" };

const DRAGON_LIST_ROUTE: string = "/lista-dragoes";

export const useNewDragon = (): UseNewDragonReturn => {
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [storiesList, setStoriesList] = useState<DragonStory[]>([
    { ...storyInitialValues },
  ]);

  const navigate: NavigateFunction = useNavigate();

  const disabledSubmit: boolean = !name.length || !type.length || isSaving;

  const handleFormReset = () => {
    setName("");
    setType("");
    setStoriesList([storyInitialValues]);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newDragonPayload: DragonBasicData = {
      name,
      type,
      histories: storiesList,
    };

    setIsSaving(true);

    registerDragon(newDragonPayload)
      .then(() => {
        handleFormReset();
        navigate(DRAGON_LIST_ROUTE);
        alert("Sucesso ao cadastrar o dragão!");
      })
      .catch(() => alert("Erro ao cadastrar o dragão."))
      .finally(() => setIsSaving(false));
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
    setStoriesList([...storiesList, { ...storyInitialValues }]);

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
    isSaving,
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
