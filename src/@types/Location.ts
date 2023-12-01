interface LocalNames {
    en: string;
    ru: string;
  }
  
  interface Location {
    country: string;
    lat: number;
    local_names: LocalNames;
    lon: number;
    name: string;
    state: string;
  }

  type LocationResponse = Location[]