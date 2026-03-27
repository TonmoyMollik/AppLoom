const getStoreBook = () => {
  const storeAppSTR = localStorage.getItem("readlist");
  if (storeAppSTR) {
    const storeAppData = JSON.parse(storeAppSTR);
    return storeAppData;
  } else {
    return [];
  }
};
const addToStoreDb = (id) => {
  const storeAppData = getStoreBook();
  if (storeAppData.includes(id)) {
    alert("App Allready Instolled");
  } else {
    storeAppData.push(id);
    const data = JSON.stringify(storeAppData);
    localStorage.setItem("readlist", data);
  }
};

export { addToStoreDb, getStoreBook };
