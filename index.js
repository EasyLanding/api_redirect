// API ключ
let apiKey = "cb2d5698af724c7d94bad5840dcd7efd";

// Формируем url для GET запроса
let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`;


fetch(url)
    .then(function (data)
    {
        return data.json()
    }).then(function (dataInfo)
    {
        if (dataInfo.city === "Saint Petersburg")
        {
            return location.href = "https://autonan.ru/nyurba";
        }
        if (dataInfo.city === "Vilyuisk")
        {
            return location.href = "https://autonan.ru/vilyuisk";
        }
        if (dataInfo.city === "Churapcha")
        {
            return location.href = "https://autonan.ru/churapcha";
        }
    })