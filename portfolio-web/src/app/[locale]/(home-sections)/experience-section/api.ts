import { Work, workListMapper } from 'shared/types/work';

export const fetchWork = async (): Promise<Work[]> => {
  const res = await fetch(`${process.env.NEXT_BASE_API_URL}/works?sort=start`);
  const json = await res.json();
  return workListMapper(json);
};
