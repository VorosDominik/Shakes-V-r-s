class DataService {
  constructor() {
    // Itt inicializálhatók a szolgáltatással kapcsolatos alapvető beállítások
  }

  getAxiosData(url, callback, errorCallback) {
    axios.get(url)
        .then(function (response) {
         
          callback(response.data)
        })
        .catch(function (error) {
          
        errorCallback(error);
        })
        .finally(function () {
          // always executed
        });
  }

  postAxiosData(url, data) {
    axios
      .post(url, data)
      .then((response) => {
            console.log(response)
      })
      .catch((error) => {
        console.log("Hibaüzenet:", error.message); // Hibaüzenet kiírása
        console.log("Státuszkód:", error.response.status); // Státuszkód kiírása (pl. 500)
        console.log("Válasz szövege:", error.response.statusText); // Válasz szövegének kiírása (pl. "Internal Server Error")
        console.log("Válasz adat:", error.response.data); // Válasz adatának kiírása (ha van)
    });
      
  }
  deleteAxiosData(url, id) {
    return axios.delete(`${url}/${id}`)
        .then((response) => {
            console.log("RESP", response);
            // További logika, ha szükséges
        })
        .catch((error) => {
            console.log("hiba", error);
            // Hiba kezelése
        });
}
putAxiosData(url, data) {
  console.log(data);
  console.log(`${url}`);
  return new Promise((resolve, reject) => {
    axios.put(`${url}`, data)
      .then((response) => {
        console.log("RESP", response);
        resolve(response);
      })
      .catch((error) => {
        console.log("hiba", error);
        reject(error);
      });
  });
}
}

export default DataService;
