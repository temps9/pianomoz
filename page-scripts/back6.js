function lance6() {


			var Fichier1AudioJo=[];

var text1={};
var choixjojoa = 1;
var levariateur = 1;
var lenommeur ;
var lenommeur1 ;



/***********troisieme partie génère la balise et lance la lecture**************/



function genereLaFin()
{

/**************genere balise*******/
levariateur = levariateur + 1;
// zone 1
lenommeur1= "base10wave";
lenommeur = lenommeur1.concat(levariateur);
var mon_audio1 = null;
var nouveauaudio1 = null;
var nouveauaudio1a = null;
function ajouteElement() {
  nouveauaudio1 =  document.createElement("audio");
nouveauaudio1.setAttribute("id", "10wav");
nouveauaudio1.setAttribute("autobuffer", " ");
 nouveauaudio1a = document.createElement("source");
  nouveauaudio1a.setAttribute("src", "data:audio/wav;base10wave2,");
   nouveauaudio1.appendChild(nouveauaudio1a);
  mon_audio1 = document.getElementById(lenommeur);
  document.body.insertBefore(nouveauaudio1, mon_audio1);
}  

ajouteElement();

//fin zone 1
// zone 2
alenommeur1= "abase10wave";
alenommeur = alenommeur1.concat(levariateur);
var amon_audio1 = null;
var anouveauaudio1 = null;
var anouveauaudio1a = null;
function ajouteElementa() {
  anouveauaudio1 =  document.createElement("audio");
anouveauaudio1.setAttribute("id", "10awav");
anouveauaudio1.setAttribute("autobuffer", " ");
 anouveauaudio1a = document.createElement("source");
  anouveauaudio1a.setAttribute("src", "data:audio/wav;abase10wave2,");
   anouveauaudio1.appendChild(anouveauaudio1a);
  amon_audio1 = document.getElementById(alenommeur);
  document.body.insertBefore(anouveauaudio1, amon_audio1);
}
ajouteElementa();
//fin zone 2
// zone 3
blenommeur1= "bbase10wave";
blenommeur = blenommeur1.concat(levariateur);
var bmon_audio1 = null;
var bnouveauaudio1 = null;
var bnouveauaudio1a = null;
function ajouteElementb() {
  bnouveauaudio1 =  document.createElement("audio");
bnouveauaudio1.setAttribute("id", "10bwav");
bnouveauaudio1.setAttribute("autobuffer", " ");
 bnouveauaudio1a = document.createElement("source");
  bnouveauaudio1a.setAttribute("src", "data:audio/wav;bbase10wave2,");
   bnouveauaudio1.appendChild(bnouveauaudio1a);
  bmon_audio1 = document.getElementById(blenommeur);
  document.body.insertBefore(bnouveauaudio1, bmon_audio1);
}  

ajouteElementb();
//fin zone 3
// zone 4
clenommeur1= "cbase10wave";
clenommeur = clenommeur1.concat(levariateur);
var cmon_audio1 = null;
var cnouveauaudio1 = null;
var cnouveauaudio1a = null;
function ajouteElementc() {
  cnouveauaudio1 =  document.createElement("audio");
cnouveauaudio1.setAttribute("id", "10cwav");
cnouveauaudio1.setAttribute("autobuffer", " ");
 cnouveauaudio1a = document.createElement("source");
  cnouveauaudio1a.setAttribute("src", "data:audio/wav;cbase10wave2,");
   cnouveauaudio1.appendChild(cnouveauaudio1a);
  cmon_audio1 = document.getElementById(clenommeur);
  document.body.insertBefore(cnouveauaudio1, cmon_audio1);
}
ajouteElementc();
//fin zone 4

/**reglage force de l'amplitude***/
var volume = Math.floor(65535 / 8);

durerentete=NbPtTotal*2;

samples = durerentete*16;
var data = {};

 data = {leraw1: leraw1.join(''), samples: samples};

var wave1 = new app1.wave1(data);

/*********met en memoire l'audio*****/

 lenommeur = wave1.generate1();
var audio = document.getElementById("10wav");
var source = document.createElement("source");
source.setAttribute("src", lenommeur);
audio.appendChild(source);

alenommeur = wave1.generate1();
var aaudio = document.getElementById("10awav");
var asource = document.createElement("source");
asource.setAttribute("src", alenommeur);
aaudio.appendChild(asource);

blenommeur = wave1.generate1();
var baudio = document.getElementById("10bwav");
var bsource = document.createElement("source");
bsource.setAttribute("src", blenommeur);
baudio.appendChild(bsource);

clenommeur = wave1.generate1();
var caudio = document.getElementById("10cwav");
var csource = document.createElement("source");
csource.setAttribute("src", clenommeur);
caudio.appendChild(csource);
}

function lecjoa1(Fichier1AudioJo)
{

 leraw1 = [];

var ludion = 32768, amplitude = 32768, nbdepoints = 5;

	function actiontotale(amplitude, nbdepoints, ludion)

	{

				var samples = 0, ote, ote1, reste, boucle;
			      var ideb, j, p, avec1, avec2, avec3;


/****debut front descend****/
		function frontdescend(amplitude, nbdepoints, ludion)
		{
				var ote1;

			      boucle = Math.round(nbdepoints *0.5);

			      reste = nbdepoints - boucle;

			      ote = Math.round( (ludion-amplitude)*0.5 );

				avec1 = boucle-1;
				p = table[avec1];

			function calcul1 (ludion, ote, ote1)
			{
			codebash = Math.round(ludion + ote1 - ote);
			

			 var volume = Math.floor(65535);
			monhexa = Math.floor(codebash -32767);
			  var total = leraw1.push(app1.utility.pack("v", monhexa));

			 }//fin calcul1


			for (ideb = boucle-1; ideb >= 0; ideb--) {
			ote1 = Math.floor((ote * 0.00001 * p[ideb]));
   			calcul1 (ludion, ote, ote1);
			}// fin frontdescend partie1 et fin for


/********deuxieme partie front descend****************/

			function sens2inverse(amplitude, nbdepoints, ludion)
			{
			var ote1;

			 boucle = Math.round(nbdepoints *0.5);
			 reste = nbdepoints - boucle;
			 ote = Math.round( (ludion-amplitude)*0.5 );

			avec1 = boucle-1;
			p = table[avec1];

			function calcul2 (ludion, ote, ote1)
			{
			codebash = Math.round(amplitude + ote - ote1);
			

			  var volume = Math.floor(65535);
			monhexa = Math.floor(codebash -32767);
			  var total = leraw1.push(app1.utility.pack("v", monhexa));

			 }// fin calcul2

			 for (ideb = 0; ideb < reste; ideb++) {
			 ote1 = Math.floor((ote * 0.00001 * p[ideb]));
   			 calcul2 (amplitude, ote, ote1);
			 } // fin du for

			 } // fin sens2inverse

			sens2inverse(amplitude, nbdepoints, ludion);		 

			ludion = amplitude
			return ludion;
			}// fin frontdescend

/********fin front descend *************************/


/****debut front montant*********************/
		function frontmontant(amplitude, nbdepoints, ludion)
		{
		ote = Math.round( (amplitude-ludion)*0.5 );			     
		 boucle = Math.round(nbdepoints * 0.5);
		reste = nbdepoints - boucle;
		
		var iee, j, p;
		avec1 = boucle-1;
		p = table[avec1];
		
			function calcul3 (ludion, ote, ote1)
			{
  			codebash = Math.round(ludion + ote - ote1);
			

			var volume = Math.floor(65535 );
			monhexa = Math.floor(codebash -32767);
			  var total = leraw1.push(app1.utility.pack("v", monhexa));

			}// fin calcul3



			for (ideb = boucle-1; ideb >= 0; ideb--) {
			ote1 = Math.floor(ote * 0.00001 * p[ideb]);
   			calcul3 (ludion, ote, ote1);
			}// fin premiere partie du fron et du for



				
			function sensinverse(amplitude, nbdepoints, ludion)
			{

			boucle = Math.round(nbdepoints * 0.5);
			reste = nbdepoints - boucle;
			ote = Math.round((amplitude-ludion)*0.5 );


			function calcul4 (ludion, ote, ote1)
			{
  			codebash = Math.round(ludion + ote + ote1);
			

			var volume = Math.floor(65535 );
			monhexa = Math.floor(codebash -32767);
			var total = leraw1.push(app1.utility.pack("v", monhexa));

			}// fin calcul4

/******/
				for (ideb = 0; ideb < reste; ideb++) {
				    ote1 = Math.round(ote * 0.00001 * p[ideb]);
   					calcul4 (ludion, ote, ote1);
				}
/********/






}

/* debut montant inverse du sens 1 */
sensinverse(amplitude, nbdepoints, ludion);

			ludion = amplitude
			return ludion;

			} //fin frontmontant





/****fin front montant***/







/*choix du sens du front*/

		  if (ludion > amplitude)
		    {
		 frontdescend(amplitude, nbdepoints, ludion);
		    }
		  else
		    {
		frontmontant(amplitude, nbdepoints, ludion);
		    }

/* fin choix du sens du front*/



}
/****fin action totale****/

for(var idejo= 0; idejo < Fichier1AudioJo.length; idejo++)
{//1

if (idejo/2 == Math.round(idejo/2)) {
	ludion = amplitude;
	amplitude = Fichier1AudioJo[idejo] * 256;
} else {//2
	nbdepoints = Fichier1AudioJo[idejo];
NbPtTotal += nbdepoints; /*44100 nbdepoints = 1 seconde*/
	actiontotale(amplitude, nbdepoints, ludion);




}//  fin du else de trie de récpération de données (amplitude et nbpoints)
}// fin de la boucle for de trie de récpération de données (amplitude et nbpoints)

genereLaFin();


return NbPtTotal;





}// fin fonction lecjoa1



/**************************premiere partie ouvre le fichier audio************************/

function lecjo1adn() {

var donne = [];
var basedeconstruc = "da4n";
for(var pui= 1; pui < 74; pui++)
{
	donne[pui] = document.getElementById(basedeconstruc.concat("1n",pui )).value;
}

aaa1(donne,Fichier1AudioJo);

Fichier1AudioJo = Fichier1AudioJo.map(Number);

lecjoa1(Fichier1AudioJo);

    }

    lecjo1adn();

}
/****************************fin premier niveau qui ouvre le fichier*****************************************************/

 document.addEventListener("DOMContentLoaded", function(event) {
    lance6();
  });


