export interface SourcesNewsInterface {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  country: string;
  language: string;
}

export interface ResponseSourcesNewsDataInterface {
  status: string;
  sources: SourcesNewsInterface[];
}


