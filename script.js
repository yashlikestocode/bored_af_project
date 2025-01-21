const input1 = document.querySelector('.city-input');

const apiKey="ab77f4a06ef0dfe6bf9d625e8fe8124e";
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=`;
const SearchBtn=document.querySelector(".magnifying-glass");


async function weather_data()
{
   const response =await fetch(apiUrl+`${input1.value}`+`&appid=${apiKey}`);

   var data=await response.json();

   console.log(data);

document.querySelector('.temp').innerHTML=`${(Math.round(data.main.temp-273.15))}°C`;
document.querySelector('.city').innerHTML=`${input1.value}`;
document.querySelector('.humidity').innerHTML=(data.main.humidity)+"%";
document.querySelector('.wind').innerHTML=(data.wind.speed)+"km/hr";
};

SearchBtn.addEventListener("click",()=>{
   weather_data();
});