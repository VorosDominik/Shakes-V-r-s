class DataService {
  constructor() {
    // Itt inicializálhatók a szolgáltatással kapcsolatos alapvető beállítások
  }

  getAxiosData(url, callback, errorCallback) {
    axios
      .get(url)
      .then(function (response) {
        // Logolás helyett lehet, hogy jobb lenne a választ közvetlenül feldolgozni
        callback(response.data);
      })
      .catch(function (error) {
        if (errorCallback) {
          errorCallback(error);
        } else {
          console.error("Hiba történt az adatlekérés során", error);
        }
      })
      .finally(function () {
        // Itt lehet végezni olyan műveleteket, amik minden esetben szükségesek
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
    axios
      .delete(`${url}/${id}`)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      });
  }
  putAxiosData(url, data) {
    console.log(data);
    console.log(`${url}/${data.id}`);
    axios
      .put(`${url}/${data.id}`, data)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      });
  }
}

export default DataService;
