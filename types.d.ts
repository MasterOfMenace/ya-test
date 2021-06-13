/*
"cover_i": 258027, // обложка
"title": "The Lord of the Rings", // название
"author_name": [ //автор
    "J. R. R. Tolkien"
],
"first_publish_year": 1954, //дата публикации
"key": "OL27448W", // ключ для поиска в books api
*/

interface Book {
  coverId: number;
  title: string;
  author: Array<string>;
  firstPuplishYear: number;
  key: string;
}

type Action = {
  type: string;
  payload: any;
};
