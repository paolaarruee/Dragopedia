import {
  DragonFormContainer,
  DragonFormContainerProps,
  SectionContainer,
} from "@/components/Layout";
import { useNewDragon } from "./hooks";

export const NewDragon = () => {
  const dragonFormContainerProps: DragonFormContainerProps = useNewDragon();

  return (
    <SectionContainer title="Cadastrar Dragão">
      <DragonFormContainer {...dragonFormContainerProps} />
    </SectionContainer>
  );
};
