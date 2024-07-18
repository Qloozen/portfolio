export type Work = {
  id: number;
  company: string;
  location: string;
  start: string;
  end: string;
  durationYears: number;
  durationMonths: number;
  position: string;
  description: string;
};

export const workMapper = (json: any): Work => {
  const startDate = new Date(json.attributes.start);
  const endDate = json.attributes.end ? new Date(json.attributes.end) : new Date();
  let durationYears = endDate.getFullYear() - startDate.getFullYear();
  let durationMonths = 1 + (endDate.getMonth() - startDate.getMonth());

  if (durationMonths < 0) {
    durationYears -= 1;
    durationMonths += 12;
  }

  return {
    id: json.id,
    company: json.attributes.company,
    location: json.attributes.location,
    start: `${startDate.toLocaleString('default', { month: 'short' })}. ${startDate.getFullYear()}`,
    end: endDate ? `${endDate.toLocaleString('default', { month: 'short' })}. ${endDate.getFullYear()}` : 'Present',
    durationYears,
    durationMonths,
    position: json.attributes.position,
    description: json.attributes.description,
  };
};

export const workListMapper = (json: any): Work[] => json.data.map(workMapper);
