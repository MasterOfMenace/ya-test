interface BookSnippet {
  coverId?: number;
  coverEditionKey?: string; // по этому ключу поиск в букс апи
  editionKey: Array<string>;
  editionCount: number;
  title: string;
  author: Array<string>;
}

interface Book extends BookSnippet {
  publishYear: number;
  publisher: string;
  isbn10: string;
  isbn13: string;
}

type Action = {
  type: string;
  payload: any;
};
