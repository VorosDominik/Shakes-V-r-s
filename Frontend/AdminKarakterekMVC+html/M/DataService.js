

class DataService {
    constructor() {
        // Itt inicializálhatók a szolgáltatással kapcsolatos alapvető beállítások
    }

    getAxiosData(url, callback, errorCallback) {
        axios.get(url)
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

    postAxiosData(url, data, callback, errorCallback) {
        axios.post(url, data)
            .then((response) => {
                if (callback) {
                    callback(response.data);
                }
            })
            .catch((error) => {
                if (errorCallback) {
                    errorCallback(error);
                } else {
                    console.error("Hiba történt az adatküldés során", error);
                }
            });
    }
}

export default DataService;
