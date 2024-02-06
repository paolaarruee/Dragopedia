import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { NavigateFunction, useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";

import { UseEditDragonParams, UseEditDragonReturn } from "../types";
import { Dragon, DragonBasicData, DragonStory } from "@/types";
import { editDragon } from "../api";
import { getDragonDetails } from "@/features/dragons-list/api";

const storyInitialValues: DragonStory = { title: "", story: "" };

const DRAGON_LIST_ROUTE: string = "/lista-dragoes";

export const useEditDragon = ({
  id,
}: UseEditDragonParams): UseEditDragonReturn => {
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [storiesList, setStoriesList] = useState<DragonStory[]>([
    storyInitialValues,
  ]);

  const navigate: NavigateFunction = useNavigate();
  
  const disabledSubmit: boolean = !name.length || !type.length || isSaving;

  const fetchDragonDetails = () => {
    if (!id) {
      return;
    }

    setIsFetching(true);

    getDragonDetails(id)
      .then(setFormData)
      .catch(() => alert("Erro ao buscar os detalhes do dragão."))
      .finally(() => setIsFetching(false));
  };

  const setFormData = ({
    data: { name, type, histories },
  }: AxiosResponse<Dragon>) => {
    setName(name);
    setType(type);
    setStoriesList(histories);
  };

  const handleFormReset = () => {
    setName("");
    setType("");
    setStoriesList([storyInitialValues]);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!id) {
      return;
    }

    const editDragonPayload: DragonBasicData = {
      name,
      type,
      histories: storiesList,
    };

    setIsSaving(true);

    editDragon(id, editDragonPayload)
      .then(() => {
        handleFormReset();
        navigate(DRAGON_LIST_ROUTE);
        alert("Sucesso ao editar o dragão!");
      })
      .catch(() => alert("Erro ao editar o dragão."))
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

  useEffect(fetchDragonDetails, [id]);

  return {
    disabledSubmit,
    isSaving,
    isFetching,
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
