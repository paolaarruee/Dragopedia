import { Navigate, Params, useParams } from "react-router-dom";

import { DragonFormContainer, SectionContainer } from "@/components/Layout";
import { useEditDragon } from "./hooks";
import { UseEditDragonReturn } from "./types";
import { Loader } from "@/components/Elements";

export const EditDragon = () => {
  const { id }: Readonly<Params<string>> = useParams();

  if (!id) {
    return <Navigate to="/lista-dragoes" />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { editDragonRequest, fetchedData, isFetching }: UseEditDragonReturn = useEditDragon({
    id,
  });

  return (
    <SectionContainer title="Editar Dragão">
      <>
        {!isFetching && <DragonFormContainer data={fetchedData} saveRequest={editDragonRequest} />}

        {isFetching && <Loader size="100px" />}
      </>
    </SectionContainer>
  );
};
