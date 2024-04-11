
let name = 'Edmonton';
let population = 1.5;
let is_capital = true;
let my_city = [
{
  communities: ['edmonton', 'calgary', 'edson', 'yellowhead', 'toronto']
}

]

let city = [

  {
    name: 'Edmonton',
    population: 500,
  },

  {
    name: 'Clagary',
    population: 700,
  },

{
    name: 'Edson',
    population: 100,
  },

  {
    name: 'Yellowhaed',
    population: 850,
  },

  {
    name: 'Toronto',
    population: 920,
  }

] 
if(is_capital === true){
    console.log(`city_name:${name}, population: ${population}`);
}else{
    console.log('Not important enough')
}


let i = 0;
while(i < my_city.length){
  let city = my_city[i]
  console.log(city);

  console.log(`name: ${city.communities[0]}`);
  console.log(`name: ${city.communities}`);
 
  i++
}

let counter = 0;

while(i < city.length){

let cities = city[i];
if(cities.population >=100){
  console.log(`name: ${cities.name}, ${cities.population}`);

}

  i++

}

let totalpopulation = 0;
for(let i = 0; i < city.length; i++){
    totalpopulation += city.population;
}

if(totalpopulation === city.population){
  console.log('The math checks out');
}else{
  console.log('We must be missing some people');
}
