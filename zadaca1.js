// 1. Ispisati u konzoli svoje ime I prezime.
console.log("Djordje Nenadovic")

/* 2. Napraviti jednu varijablu I smjestiti u njoj svoje ime I prezime 
I nakon toga ispisati u konzoli vrijednost te varijable. */
var ImePrezime = "Djordje Nenadovic"
console.log(ImePrezime)

/* 3. Napraviti dve varijable I dati im vrijednosti cijelog broja po 
želji. Zatim u konzoli ispisati zbir, razliku, proizvod, količnik i 
ostatak ta dva broja. */
var broj1 = 5
var broj2 = 3
//zbir
console.log(broj1 + broj2)
//razlika
console.log(broj1 - broj2)
//proizvod
console.log(broj1 * broj2)
//kolicnik
console.log(broj1 / broj2)
//ostatak
console.log(broj1 % broj2)

/* 4. Napraviti pet varijabli I dati im vrijednosti cijelog broja po 
želji. Zatim u konzoli ispisati zbir, razliku i proizvod tih 
brojeva. */
var br1 = 1
var br2 = 2
var br3 = 3
var br4 = 4
var br5 = 5
//zbir
console.log(br1 + br2 + br3 + br4 + br5)
//razlika
console.log(br1 - br2 - br3 - br4 - br5)
//proizvod
console.log(br1 * br2 * br3 * br4 * br5)

/* 5. Napraviti 2 varijable jedna sadrži vaše ime, druga prezime. Provjeriti u konzoli šta će se desiti kada saberete/spojite te dve varijable. Vjerovatno je rezultat npr. “MarkoMarkovic”. Kako da dodamo razmak između “Marko” I “Marković” tako da ne mjenjamo varijable? */
var ime = "Djordje"
var prezime = "Nenadovic"
//spoj
console.log(ime + prezime)
//sa razmakom bez mijenjanja varijabli
console.log(ime + ' ' + prezime)

/* 6. Napraviti varijablu danUSedmici provjeriti da li ta varijabla odgovara rednom broju dana u sedmici I ispisati taj dan (napisati provjeru kroz if, else if, else I kroz switch). Npr. ako je varijabla 1 onda da ispiše u konzoli „Ponedeljak“, ako je 2 onda „Utorak“... Ako je varijabla broj koji ne predstavlja dan u sedmici onda da se ispiše „GREŠKA“. */
var danUSedmici = 8
//provjera sa if, else if i else
	if (danUSedmici == 1)
console.log("Ponedeljak")
	else if (danUSedmici == 2)
console.log("Utorak")
	else if (danUSedmici == 3)
console.log("Srijeda")
	else if (danUSedmici == 4)
console.log("Cetvrtak")
	else if (danUSedmici == 5)
console.log("Petak")
	else if (danUSedmici == 6)
console.log("Subota")
	else if (danUSedmici == 7)
console.log("Nedelja")
	else
console.log("GRESKA")
//provjera kroz switch
var danUSedmici = 7
switch(danUSedmici) {
  case 1:
console.log("Ponedeljak")
    break;
  case 2:
console.log("Utorak")
    break;
  case 3:
console.log("Srijeda")
    break;
  case 4:
console.log("Cetvrtak")
    break;
  case 5:
console.log("Petak")
    break;
  case 6:
console.log("Subota")
    break;
  case 7:
console.log("Nedelja")
    break;
  default:
console.log("GREŠKA")
}

/* 7.	Napraviti varijablu broj, dati joj vrijednost cijelog broja po želji I provjeriti da li je taj broj paran ili neparan. Ako je paran onda ispisati u konzoli “Broj je paran”. Ako je neparan da se ispiše “Broj je neparan”. */
var broj = 10
//provjera da li broj paran
if (broj % 2 == 0) {
  console.log("Broj je paran");
}
//u slucaju da je neparan:
else {
  console.log("Broj je neparan");
}

/* 8.	FizzBuzz – napraviti varijablu broj, ako je broj djeljiv sa 3 onda da ispiše u konzoli „Fizz“, ako je broj djeljiv sa 5 onda da ispiše u konzoli „Buzz“, ako je broj djeljiv sa 3 i sa 5 onda da ispiše „Fizz Buzz“, ako broj nijde djeljiv ni sa 3 ni sa 5 onda da vrati „Broj nije djeljiv ni sa 3 ni sa 5“ */
var broj = 4
//ako je broj djeljiv i sa 3 i sa 5
  if (broj % 3 == 0 && broj % 5 == 0) {
    console.log("Fizz Buzz");
//ako je broj djeljiv sa 3
  } else if (broj % 3 == 0) {
    console.log("Fizz");
//ako je broj djeljiv sa 5
  } else if (broj % 5 == 0) {
    console.log("Buzz");
//ako broj nije djeljiv ni sa 3 ni sa 5
  } else {
    console.log("Nije djeljiv ni sa 3 ni sa 5");
}

/* 9.	Napraviti varijablu sekunde, dati neku vrijednost. Pretvoriti te sekunde u dane, sate, minute I sekunde I ispisati dobijeni rezultat u konzoli. Npr. */
var sekunde = 888555
//dani
dani = parseInt( sekunde / (24 * 3600));
sekunde = sekunde % (24 * 3600);
console.log(dani + " " + "dana")
//sati
sati = parseInt(sekunde / 3600);
sekunde %= 3600;
console.log(sati + " " + "sati")
//minute
minute = sekunde / 60;
sekunde %= 60;
console.log(minute.toFixed() + " " + "minuta")
//sekunde
sekunde = sekunde;
console.log(sekunde.toFixed() + " " + "sekundi")
//ili sa jednim console.log
console.log(
        dani + " " + "dana " + sati + " " + "sati "
        + minute.toFixed() + " " + "minuta " +
        sekunde.toFixed() + " " + "sekundi ");

// 9. zadatak (po lanacu)
//Zadatak 9
var sekundeUnos = 90179

var dani = Math.floor(sekundeUnos / (60 * 60 * 24))
console.log(dani)
var sati = Math.floor((sekundeUnos % (60 * 60 * 24)) / 3600)
console.log(sati)
var minute = Math.floor((sekundeUnos % 3600) / 60)
console.log(minute)
var sekunde = Math.floor(sekundeUnos % 60)
console.log(sekunde)