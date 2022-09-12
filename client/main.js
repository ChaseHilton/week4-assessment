const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const adviceBtn = document.getElementById("adviceButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const getAdvice = () => {
    axios.get("http://localhost:4000/api/advice/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};





complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
adviceBtn.addEventListener('click', getAdvice)