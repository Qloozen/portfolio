export type Technology = {
  id: number;
  name: string;
  lastWorkedWith: string;
};

export const technologyMapper = (json: any): Technology => ({
  id: json.id,
  name: json.attributes.name,
  lastWorkedWith: json.attributes.lastWorkedWith,
});

export const technologyListMapper = (json: any): Technology[] => json.data.map(technologyMapper);
