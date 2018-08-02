// 15 de junio 1994

//15 06 1990

const nacimiento =new Date(1994,5,15);//declara un objeto nacimiento de tipo fecha
const hoy =new Date();//si no se le envian argumentos, js lo tomara como la fecha actual
const tiempo = hoy - nacimiento;// tiempo en milisegundos
const tiempoSegundos = tiempo/1000;
const tiempoMin= tiempoSegundos/60;
const tiempoHoras=tiempoMin/60;


const proximo =new Date(hoy.getFullYear(),nacimiento.getMonth(),nacimiento.getDate());
                //metodo para obtener el año     //obtiene el mes       //obtiene el numero de la fecha que corresponde al dia
const dias=[
"Domingo",//0
"Lunes",//1
"Martes",//2
"Miércoles",//3
"Jueves",//4
"Viernes",//5
"Sábado"//6
];

dias[proximo.getDay()];
//obtiene el numero que corresponde al dia
