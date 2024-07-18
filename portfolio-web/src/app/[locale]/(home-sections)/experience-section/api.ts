import { getLocale } from 'next-intl/server';
import { Work, workListMapper } from 'shared/types/work';

export const fetchWork = async (): Promise<Work[]> => {
  const locale = await getLocale();

  const res = await fetch(`${process.env.NEXT_BASE_API_URL}/works?sort[0]=end:desc&sort[1]=start&locale=${locale}`);
  const json = await res.json();
  return workListMapper(json);
};
