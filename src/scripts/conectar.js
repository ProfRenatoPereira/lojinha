async function productsList() {
  const promise = await fetch("https://vercel.com/profrenatopereira/lojinhaprodutos");
  const promiseConverted = await promise.json();

  return promiseConverted;
}

async function searchList(searchFieldValue) {
  const searchedProducts = await fetch(
    `https://vercel.com/profrenatopereira/lojinhaprodutos?q=${searchFieldValue}`
  );

  const convertedSearchedList = await searchedProducts.json();

  return convertedSearchedList;
}

export const conectApi = {
  productsList,
  searchList,
};
