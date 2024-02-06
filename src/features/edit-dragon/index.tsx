import { Params, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faClose } from "@fortawesome/free-solid-svg-icons";

import { Button, Input, TextArea } from "@/components/Elements";
import { SectionContainer } from "@/components/Layout";
// import * as S from "./components";
// import { useEditDragon } from "./hooks";
// import { DragonStory } from "@/types";
// import { UseEditDragonReturn } from "./types";

export const EditDragon = () => {
  const { id }: Readonly<Params<string>> = useParams();

  //   const {
  //     disabledSubmit,
  //     name,
  //     handleTypeChange,
  //     type,
  //     storiesList,
  //     isLoading,
  //     handleFormReset,
  //     handleFormSubmit,
  //     handleNameChange,
  //     handleStoryNameChange,
  //     handleStoryDescriptionChange,
  //     handleNewStory,
  //     handleStoryDelete,
  //   }: UseEditDragonReturn = useEditDragon();

  return <SectionContainer title="Editar Dragão"><>{id}</></SectionContainer>;
};
