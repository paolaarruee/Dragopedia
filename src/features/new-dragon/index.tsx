import { DragonFormContainer, SectionContainer } from "@/components/Layout";
import { useNewDragon } from "./hooks";
import { UseNewDragonReturn } from "./types";

export const NewDragon = () => {
  const useNewDragonReturn: UseNewDragonReturn = useNewDragon();

  return (
    <SectionContainer title="Cadastrar Dragão">
      <DragonFormContainer {...useNewDragonReturn} />
    </SectionContainer>
  );
};
