import { Navigate, Params, useParams } from "react-router-dom";

import { DragonFormContainer, SectionContainer } from "@/components/Layout";
import { useEditDragon } from "./hooks";
import { UseEditDragonReturn } from "./types";
import { Loader } from "@/components/Elements";

export const EditDragon = () => {
  const { id }: Readonly<Params<string>> = useParams();

  const useEditDragonReturn: UseEditDragonReturn = useEditDragon({
    id,
  });

  if (!id) {
    return <Navigate to="/lista-dragoes" />;
  }

  return (
    <SectionContainer title="Editar Dragão">
      <>
        {!useEditDragonReturn.isFetching && (
          <DragonFormContainer {...useEditDragonReturn} />
        )}

        {useEditDragonReturn.isFetching && <Loader size="100px" />}
      </>
    </SectionContainer>
  );
};
