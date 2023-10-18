export const fetchByISBN = async (isbn: string) => {
  return await fetch(
    `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getGoogleBookByISBN = async (isbn: string) => {
  return await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
};
