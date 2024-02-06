import { useDragonList } from "./hooks/useDragonList";

export const DragonList = () => {
  //   return <DragonListTable></DragonListTable>;

  const { getAllDragons } = useDragonList();

  console.log(getAllDragons().then(({ data }) => console.log(data)));
};