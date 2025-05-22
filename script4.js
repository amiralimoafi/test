/*
let carname = prompt("نام ماشین مورد نظر خود را وارد کنید");
let tern = prompt('اگر قصد روشن کردن ماشین دارید عدد 1 و در غیر این صورت عدد 2 را وارد نمایید')

let stat;

if (tern ==='1'){
    stat ='tern on'
}else if (tern ==='2'){
    stat ='tern off'
}else{
  alert('عدد وارد شده صحیح نمباشد')
}

let state = [
  {name:'pride', Enginepower:'1.4', Manufacturercountry:'The U.S.A',state: stat},
  {name:'pride111', Enginepower:'1.3', Manufacturercountry:'Iran',state: stat},    
  {name:'persia', Enginepower:'1.8', Manufacturercountry:'French',state: stat},
  {name:'changancs35+', Enginepower:'1.4T', Manufacturercountry:'China',state: stat},
  {name:'changancs55', Enginepower:'1.6T', Manufacturercountry:'China',state: stat},
  {name:'tiba', Enginepower:'1.6', Manufacturercountry:'Iran',state: stat},
  {name:'tiba2', Enginepower:'1.6', Manufacturercountry:'Iran',state: stat}
];

let carExists = false;
let car;
state.forEach(item => {
  if(item.name === carname) {
    carExists = true;
    car = item
  }
});


if(carExists) {
  alert('name: ' + car.name + '\n' + ' Enginepower: ' + car.Enginepower + '\n' + 'Manufacturercountry: ' + car.Manufacturercountry +'\n' + 'state: ' + car.state );
} else {
  alert('ماشین وارد شده وجود ندارد');
}
*/