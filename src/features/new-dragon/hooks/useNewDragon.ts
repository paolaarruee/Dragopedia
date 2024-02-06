import { ChangeEvent, FormEvent, useState } from "react";

import { DragonBasicData, UseNewDragonReturn } from "../types";
import { registerDragon } from "../api";

export const useNewDragon = (): UseNewDragonReturn => {
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [storyName, setStoryName] = useState<string>("");
  const [storyDescription, setStoryDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const disabledSubmit = !name.length || !type.length || isLoading;

  const handleFormReset = () => {
    setName("");
    setType("");
    setStoryName("");
    setStoryDescription("");
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    handleFormReset();

    const newDragon: DragonBasicData = {
      name,
      type,
      histories: [
        {
          title: storyName,
          story: storyDescription,
        },
      ],
    };

    setIsLoading(true);

    registerDragon(newDragon)
      .then()
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

  const handleStoryNameChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setStoryName(value);
  };

  const handleStoryDescriptionChange = ({
    target: { value },
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setStoryDescription(value);
  };

  return {
    disabledSubmit,
    isLoading,
    handleFormReset,
    handleFormSubmit,
    handleNameChange,
    name,
    handleTypeChange,
    type,
    handleStoryNameChange,
    storyName,
    handleStoryDescriptionChange,
    storyDescription,
  };
};
