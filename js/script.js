const input = document.getElementById("input");
const cidade = document.getElementById("cidade");
const temp = document.getElementById("temp");
const sensacao = document.getElementById("sensacaoTermica");
const tempMin = document.getElementById("tempMin");
const tempMax = document.getElementById("tempMax");
const ceu = document.getElementById("ceu");
const umidade = document.getElementById("umidade");

const appid = "0dbece72f691675949cf227685d41194";

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const nomeCidade = input.value.trim();

        if (nomeCidade) {
            buscarClima(nomeCidade);
        }
    }
});

function buscarClima(nomeCidade) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&appid=${appid}&units=metric&lang=pt`;

    fetch(url)
        .then(res => res.json())
        .then(dados => atualizarTela(dados))
        .catch(erro => console.error("Erro na requisição:", erro));
}

function atualizarTela(dados) {
    console.log(dados);

    cidade.innerText = dados.name;
    temp.innerText = `${dados.main.temp}°C`;
    sensacao.innerText = `Sensação Térmica: ${dados.main.feels_like}°C`;
    tempMin.innerText = `Mínima: ${dados.main.temp_min}°C`;
    tempMax.innerText = `Máxima: ${dados.main.temp_max}°C`;
    ceu.innerText = `Céu: ${dados.weather[0].description}`;
    umidade.innerText = `Umidade: ${dados.main.humidity}%`;
}