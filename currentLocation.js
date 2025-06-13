const button=document.getElementById('get-location-button');
async function getData(lat,long)
{
   const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=b87412454b6c41b4a9c91750251206&q=${lat},${long}&aqi=yes`);
    return await promise.json();
}
async function gotLocation(position){
  const result= await getData(position.coords.latitude,position.coords.longitude);
  console.log(result);
}
function failedToGet()
{
    console.log("there was some issue");
}
button.addEventListener("click",async()=>
{
    navigator.geolocation.getCurrentPosition(gotLocation,failedToGet)
});