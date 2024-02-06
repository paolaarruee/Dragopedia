import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { NavigateFunction, useNavigate } from "react-router-dom";

import {
  UseDragonFormContainerParams,
  UseDragonFormContainerReturn,
} from "../types";
import { DragonBasicData, DragonStory } from "@/types";

const storyInitialValues: DragonStory = { title: "", story: "" };

const DRAGON_LIST_ROUTE: string = "/lista-dragoes";

export const useDragonFormContainer = ({
  saveRequest,
  data,
}: UseDragonFormContainerParams): UseDragonFormContainerReturn => {
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [storiesList, setStoriesList] = useState<DragonStory[]>([
    { ...storyInitialValues },
  ]);

  useEffect(() => {
    if (!data) {
      return;
    }

    setName(data.name);
    setType(data.type);
    setStoriesList(data.histories);
  }, [data]);

  const navigate: NavigateFunction = useNavigate();

  const disabledSubmit: boolean = !name.length || !type.length || isSaving;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSaving(true);

    const data: DragonBasicData = { name, type, histories: storiesList };

    saveRequest(data)
      .then(() => {
        handleFormReset();
        navigate(DRAGON_LIST_ROUTE);
        alert("Sucesso ao salvar os dados do dragão!");
      })
      .catch(() => alert("Erro ao salvar os dados do dragão."))
      .finally(() => setIsSaving(false));
  };

  const handleFormReset = () => {
    setName("");
    setType("");
    setStoriesList([{ ...storyInitialValues }]);
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
    handleSubmit,
    handleNewStory,
    handleFormReset,
    handleNameChange,
    handleTypeChange,
    handleStoryNameChange,
    handleStoryDescriptionChange,
    handleStoryDelete,
  };
};
