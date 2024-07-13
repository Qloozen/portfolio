export type Work = {
  id: number;
  company: string;
  location: string;
  start: number;
  end?: number;
  position: string;
  description: string;
};

export const workMapper = (json: any): Work => ({
  id: json.id,
  company: json.attributes.company,
  location: json.attributes.location,
  start: json.attributes.start,
  end: json.attributes.end,
  position: json.attributes.position,
  description: json.attributes.description,
});

export const workListMapper = (json: any): Work[] => json.data.map(workMapper);
