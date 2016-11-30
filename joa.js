function aaa1(donne,Fichier1AudioJo) {

var pas1; //variable du switch trie du nombre de fronts

var le1 = Number(donne[1]);//variation amplitude front1
function maFonction1() {
var xx1 = le1 - Number(donne[5]);
  return xx1;
}

var le2 = Number(donne[9]);//variation amplitude front2
function maFonction2() {
var xx2 = le2 + Number(donne[13]);
  return xx2;
}

var le3 = Number(donne[1]);//plateau amplitude front1
function maFonction3() {
var xx3= le1 -1;
  return xx3;
}

var le4 = Number(donne[9]);//plateau amplitude front2
function maFonction4() {
var xx4 = le2 -1;
  return xx4;
}

var le5 = Number(donne[2]);//variation durée front1
function maFonction5() {
var xx5 = le5 - Number(donne[7]);
  return xx5;
}

var le6 = Number(donne[10]);//variation durée front1
function maFonction6() {
var xx6 = le6 - Number(donne[15]);
  return xx6;
}


var nombi; //boucle generale de Number(donne[71])
var nomba;
var nombd;
var nombe  = Number(donne[20]);
if (nombe < 1) {
nombe = 1;
}
var nombf;

var waxx2 = 128 - Number(donne[54]);
var waxx1 = Number(donne[54]) - (-128);
function maFonction7() {
var xx7 = waxx2 - Number(donne[58]);
xx7 = (30 > xx7) ? 30 : xx7;
  return xx7;
}
function maFonction8() {
var xx8 = waxx1 - (-Number(donne[58]));
if(xx8 > 220){xx8 = 220;}
return xx8;
}

switch (Number(donne[53])) {

  case 0:


switch (Number(donne[11])) {


//zone 2 fronts

	case 2:

for (nombi = 0; nombi < Number(donne[71]); nombi++) 
	{//1
if ((Number(donne[5]) > 0)&&(Number(donne[7]) > 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	  { //3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(le5);

if (Number(donne[72]) > 0) 
	   {//4
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	    { //5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(Number(donne[4]));
	    } //5 fin fo nomba
	   }//4

le1 = maFonction1();
if (Number(donne[5]) > 0)
{
le1 = ((Number(donne[6]) < le1)&&(le1 < 220)) ? Number(donne[6]) : le1;//limit of the height variation
}
if (Number(donne[5]) < 0)
{
le1 = ((Number(donne[6]) > le1)&&(le1 > 29)) ? Number(donne[6]) : le1;//limit of the height variation
}

//if (le1<Number(donne[6])){le1=Number(donne[6]);}
le5 = maFonction5();
le5 = (Number(donne[8]) < le5) ? Number(donne[8]) : le5;//limit of the width variation


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(le6);

if (Number(donne[73]) > 0)
	   {//4
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(Number(donne[12]));
	    }//5 
	   }//4
le2 = maFonction2();
//if (Number(donne[14])<le2){le2=Number(donne[14]);} 
le2 = (Number(donne[14]) < le2) ? Number(donne[14]) : le2;//limit of the height variation
le6 = maFonction6();
le6 = (Number(donne[16]) < le6) ? Number(donne[16]) : le6;//limit of the width variation

	  }//3 fin fo nomb
	 }//2 fin if Number(donne[5])


if ((Number(donne[5]) > 0)&&(Number(donne[7]) == 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	  {//3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(Number(donne[2]));

if (Number(donne[72]) > 0)
	   {//4
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(Number(donne[4]));
	    }//5 fin fo nomba
	   }//4

le1 = maFonction1();
if (le1<Number(donne[6])){le1=Number(donne[6]);}


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(Number(donne[10]));

if (Number(donne[73]) > 0)
	   {//4
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(Number(donne[12]));
	    }//5 
	   }//4
le2 = maFonction2();
if (Number(donne[14])<le2){le2=Number(donne[14]);} //limit of the height variation


	  }//3 fin fo nomb
	 }//2 fin if Number(donne[5]) Number(donne[7])

else
	 {//2

if (Number(donne[7]) > 0)
	  {//3

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	   {//4
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(le5);

if (Number(donne[72]) > 0)
	    {//5
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(Number(donne[4]));
	     }//6 fin fo nomba
	    }//5


le5 = maFonction5();
le5 = (Number(donne[8]) < le5) ? Number(donne[8]) : le5;//limit of the width variation

Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(le6);
if (Number(donne[73]) > 0)
	    {//5
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(Number(donne[12]));
	     }//6 
	    }//5

le6 = maFonction6();
le6 = (Number(donne[16]) < le6) ? Number(donne[16]) : le6;//limit of the width variation
	   }//4 fin fo nombd
	  }//3 fin if Number(donne[7])

else
	  {//3

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	   {//4
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(Number(donne[2]));

if (Number(donne[72]) > 0)
	    {//5
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(Number(donne[4]));
	     }//6 fin fo nomba
	    }//5

Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(Number(donne[10]));

if (Number(donne[73]) > 0)
	    {//5
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(Number(donne[12]));
	     }//6 
	    }//5
	   }//4 fin fo nombd
	  }//3 fin else Number(donne[7])
	 }//2 fin else Number(donne[5])
	}//1 fin du for Number(donne[71])

        break;//fin Number(donne[11]) == 2

//fin zone 2 fronts

//zone 3 fronts
  case 3:

for (nombi = 0; nombi < Number(donne[71]); nombi++) 
	{//1
if ((Number(donne[5]) > 0)&&(Number(donne[7]) > 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	  { //3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(le5);

if (Number(donne[72]) > 0) 
	   {//4
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	    { //5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(Number(donne[4]));
	    } //5 fin fo nomba
	   }//4

le1 = maFonction1();
le1 = (Number(donne[6]) < le1) ? Number(donne[6]) : le1;//limit of the height variation
//if (le1<Number(donne[6])){le1=Number(donne[6]);}
le5 = maFonction5();
le5 = (Number(donne[8]) < le5) ? Number(donne[8]) : le5;//limit of the width variation


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(le6);

if (Number(donne[73]) > 0)
	   {//4
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(Number(donne[12]));
	    }//5 
	   }//4
le2 = maFonction2();
//if (Number(donne[14])<le2){le2=Number(donne[14]);} 
le2 = (Number(donne[14]) < le2) ? Number(donne[14]) : le2;//limit of the height variation
le6 = maFonction6();
le6 = (Number(donne[16]) < le6) ? Number(donne[16]) : le6;//limit of the width variation

	  }//3 fin fo nomb


Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));

	 }//2 fin if Number(donne[5])


if ((Number(donne[5]) > 0)&&(Number(donne[7]) == 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	  {//3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(Number(donne[2]));

if (Number(donne[72]) > 0)
	   {//4
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(Number(donne[4]));
	    }//5 fin fo nomba
	   }//4

le1 = maFonction1();
if (le1<Number(donne[6])){le1=Number(donne[6]);}


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(Number(donne[10]));

if (Number(donne[73]) > 0)
	   {//4
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(Number(donne[12]));
	    }//5 
	   }//4
le2 = maFonction2();
if (Number(donne[14])<le2){le2=Number(donne[14]);} //limit of the height variation


	  }//3 fin fo nomb

Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));


	 }//2 fin if Number(donne[5]) Number(donne[7])

else
	 {//2

if (Number(donne[7]) > 0)
	  {//3

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	   {//4
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(le5);

if (Number(donne[72]) > 0)
	    {//5
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(Number(donne[4]));
	     }//6 fin fo nomba
	    }//5


le5 = maFonction5();
le5 = (Number(donne[8]) < le5) ? Number(donne[8]) : le5;//limit of the width variation

Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(le6);
if (Number(donne[73]) > 0)
	    {//5
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(Number(donne[12]));
	     }//6 
	    }//5

le6 = maFonction6();
le6 = (Number(donne[16]) < le6) ? Number(donne[16]) : le6;//limit of the width variation
	   }//4 fin fo nombd


Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));


	  }//3 fin if Number(donne[7])

else
	  {//3
le3 = maFonction3();
le4 = maFonction4();
for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	   {//4
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(Number(donne[2]));

if (Number(donne[72]) > 0)
	    {//5
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(Number(donne[4]));
	     }//6 fin fo nomba
	    }//5

Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(Number(donne[10]));

if (Number(donne[73]) > 0)
	    {//5
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(Number(donne[12]));
	     }//6 fin fo nombd
	    }//5 fin plateau Number(donne[73])
	   }//4 fin fo nomb repetition

Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));


	  }//3 fin else Number(donne[7])
	 }//2 fin else Number(donne[5])
	}//1 fin du for Number(donne[71])

        break;//fin Number(donne[11]) == 3

//fin zone 3 fronts

//zone 4 fronts

  case 4:// Number(donne[11])
for (nombi = 0; nombi < Number(donne[71]); nombi++) 
	{//1
if ((Number(donne[5]) > 0)&&(Number(donne[7]) > 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	  { //3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(le5);

if (Number(donne[72]) > 0) 
	   {//4
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	    { //5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(Number(donne[4]));
	    } //5 fin fo nomba
	   }//4

le1 = maFonction1();
le1 = (Number(donne[6]) < le1) ? Number(donne[6]) : le1;//limit of the height variation
//if (le1<Number(donne[6])){le1=Number(donne[6]);}
le5 = maFonction5();
le5 = (Number(donne[8]) < le5) ? Number(donne[8]) : le5;//limit of the width variation


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(le6);

if (Number(donne[73]) > 0)
	   {//4
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(Number(donne[12]));
	    }//5 
	   }//4
le2 = maFonction2();
//if (Number(donne[14])<le2){le2=Number(donne[14]);} 
le2 = (Number(donne[14]) < le2) ? Number(donne[14]) : le2;//limit of the height variation
le6 = maFonction6();
le6 = (Number(donne[16]) < le6) ? Number(donne[16]) : le6;//limit of the width variation

	  }//3 fin fo nomb


Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));

Fichier1AudioJo.push(Number(donne[27])); //front4
Fichier1AudioJo.push(Number(donne[28]));

	 }//2 fin if Number(donne[5])


if ((Number(donne[5]) > 0)&&(Number(donne[7]) == 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	  {//3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(Number(donne[2]));

if (Number(donne[72]) > 0)
	   {//4
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(Number(donne[4]));
	    }//5 fin fo nomba
	   }//4

le1 = maFonction1();
if (le1<Number(donne[6])){le1=Number(donne[6]);}


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(Number(donne[10]));

if (Number(donne[73]) > 0)
	   {//4
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(Number(donne[12]));
	    }//5 
	   }//4
le2 = maFonction2();
if (Number(donne[14])<le2){le2=Number(donne[14]);} //limit of the height variation


	  }//3 fin fo nomb

Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));

Fichier1AudioJo.push(Number(donne[27])); //front4
Fichier1AudioJo.push(Number(donne[28]));

	 }//2 fin if Number(donne[5]) Number(donne[7])

else
	 {//2

if (Number(donne[7]) > 0)
	  {//3

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	   {//4
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(le5);

if (Number(donne[72]) > 0)
	    {//5
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(Number(donne[4]));
	     }//6 fin fo nomba
	    }//5


le5 = maFonction5();
le5 = (Number(donne[8]) < le5) ? Number(donne[8]) : le5;//limit of the width variation

Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(le6);
if (Number(donne[73]) > 0)
	    {//5
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(Number(donne[12]));
	     }//6 
	    }//5

le6 = maFonction6();
le6 = (Number(donne[16]) < le6) ? Number(donne[16]) : le6;//limit of the width variation
	   }//4 fin fo nombd


Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));

Fichier1AudioJo.push(Number(donne[27])); //front4
Fichier1AudioJo.push(Number(donne[28]));

	  }//3 fin if Number(donne[7])

else
	  {//3
le3 = maFonction3();
le4 = maFonction4();
for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	   {//4
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(Number(donne[2]));

if (Number(donne[72]) > 0)
	    {//5
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(Number(donne[4]));
	     }//6 fin fo nomba
	    }//5

Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(Number(donne[10]));

if (Number(donne[73]) > 0)
	    {//5
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(Number(donne[12]));
	     }//6 fin fo nombd
	    }//5 fin plateau Number(donne[73])
	   }//4 fin fo nomb repetition

Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));

Fichier1AudioJo.push(Number(donne[27])); //front4
Fichier1AudioJo.push(Number(donne[28]));

	  }//3 fin else Number(donne[7])
	 }//2 fin else Number(donne[5])
	}//1 fin du for Number(donne[71])

        break;//fin Number(donne[11]) == 4

//fin zone 4 fronts

//zone 5 fronts

  case 5:// Number(donne[11])

for (nombi = 0; nombi < Number(donne[71]); nombi++) 
	{//1
if ((Number(donne[5]) > 0)&&(Number(donne[7]) > 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	  { //3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(le5);

if (Number(donne[72]) > 0) 
	   {//4
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	    { //5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(Number(donne[4]));
	    } //5 fin fo nomba
	   }//4

le1 = maFonction1();
le1 = (Number(donne[6]) < le1) ? Number(donne[6]) : le1;//limit of the height variation
//if (le1<Number(donne[6])){le1=Number(donne[6]);}
le5 = maFonction5();
le5 = (Number(donne[8]) < le5) ? Number(donne[8]) : le5;//limit of the width variation


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(le6);

if (Number(donne[73]) > 0)
	   {//4
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(Number(donne[12]));
	    }//5 
	   }//4
le2 = maFonction2();
//if (Number(donne[14])<le2){le2=Number(donne[14]);} 
le2 = (Number(donne[14]) < le2) ? Number(donne[14]) : le2;//limit of the height variation
le6 = maFonction6();
le6 = (Number(donne[16]) < le6) ? Number(donne[16]) : le6;//limit of the width variation

	  }//3 fin fo nomb


Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));

Fichier1AudioJo.push(Number(donne[27])); //front4
Fichier1AudioJo.push(Number(donne[28]));

Fichier1AudioJo.push(Number(donne[36])); //front5
Fichier1AudioJo.push(Number(donne[37]));

	 }//2 fin if Number(donne[5])


if ((Number(donne[5]) > 0)&&(Number(donne[7]) == 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	  {//3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(Number(donne[2]));

if (Number(donne[72]) > 0)
	   {//4
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(Number(donne[4]));
	    }//5 fin fo nomba
	   }//4

le1 = maFonction1();
if (le1<Number(donne[6])){le1=Number(donne[6]);}


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(Number(donne[10]));

if (Number(donne[73]) > 0)
	   {//4
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(Number(donne[12]));
	    }//5 
	   }//4
le2 = maFonction2();
if (Number(donne[14])<le2){le2=Number(donne[14]);} //limit of the height variation


	  }//3 fin fo nomb

Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));

Fichier1AudioJo.push(Number(donne[27])); //front4
Fichier1AudioJo.push(Number(donne[28]));

Fichier1AudioJo.push(Number(donne[36])); //front5
Fichier1AudioJo.push(Number(donne[37]));

	 }//2 fin if Number(donne[5]) Number(donne[7])

else
	 {//2

if (Number(donne[7]) > 0)
	  {//3

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	   {//4
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(le5);

if (Number(donne[72]) > 0)
	    {//5
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(Number(donne[4]));
	     }//6 fin fo nomba
	    }//5


le5 = maFonction5();
le5 = (Number(donne[8]) < le5) ? Number(donne[8]) : le5;//limit of the width variation

Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(le6);
if (Number(donne[73]) > 0)
	    {//5
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(Number(donne[12]));
	     }//6 
	    }//5

le6 = maFonction6();
le6 = (Number(donne[16]) < le6) ? Number(donne[16]) : le6;//limit of the width variation
	   }//4 fin fo nombd


Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));

Fichier1AudioJo.push(Number(donne[27])); //front4
Fichier1AudioJo.push(Number(donne[28]));

Fichier1AudioJo.push(Number(donne[36])); //front5
Fichier1AudioJo.push(Number(donne[37]));

	  }//3 fin if Number(donne[7])

else
	  {//3
le3 = maFonction3();
le4 = maFonction4();
for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	   {//4
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(Number(donne[2]));

if (Number(donne[72]) > 0)
	    {//5
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(Number(donne[4]));
	     }//6 fin fo nomba
	    }//5

Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(Number(donne[10]));

if (Number(donne[73]) > 0)
	    {//5
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(Number(donne[12]));
	     }//6 fin fo nombd
	    }//5 fin plateau Number(donne[73])
	   }//4 fin fo nomb repetition

Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));

Fichier1AudioJo.push(Number(donne[27])); //front4
Fichier1AudioJo.push(Number(donne[28]));

Fichier1AudioJo.push(Number(donne[36])); //front5
Fichier1AudioJo.push(Number(donne[37]));

	  }//3 fin else Number(donne[7])
	 }//2 fin else Number(donne[5])
	}//1 fin du for Number(donne[71])

        break;//fin Number(donne[11]) == 4

        break;//fin Number(donne[11]) == 5

//fin zone 5 fronts

//zone 6 fronts

  case 6:// Number(donne[11])
for (nombi = 0; nombi < Number(donne[71]); nombi++) 
	{//1
if ((Number(donne[5]) > 0)&&(Number(donne[7]) > 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	  { //3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(le5);

if (Number(donne[72]) > 0) 
	   {//4
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	    { //5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(Number(donne[4]));
	    } //5 fin fo nomba
	   }//4

le1 = maFonction1();
le1 = (Number(donne[6]) < le1) ? Number(donne[6]) : le1;//limit of the height variation
//if (le1<Number(donne[6])){le1=Number(donne[6]);}
le5 = maFonction5();
le5 = (Number(donne[8]) < le5) ? Number(donne[8]) : le5;//limit of the width variation


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(le6);

if (Number(donne[73]) > 0)
	   {//4
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(Number(donne[12]));
	    }//5 
	   }//4
le2 = maFonction2();
//if (Number(donne[14])<le2){le2=Number(donne[14]);} 
le2 = (Number(donne[14]) < le2) ? Number(donne[14]) : le2;//limit of the height variation
le6 = maFonction6();
le6 = (Number(donne[16]) < le6) ? Number(donne[16]) : le6;//limit of the width variation

	  }//3 fin fo nomb


Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));

Fichier1AudioJo.push(Number(donne[27])); //front4
Fichier1AudioJo.push(Number(donne[28]));

Fichier1AudioJo.push(Number(donne[36])); //front5
Fichier1AudioJo.push(Number(donne[37]));

Fichier1AudioJo.push(Number(donne[45])); //front6
Fichier1AudioJo.push(Number(donne[46]));

	 }//2 fin if Number(donne[5])


if ((Number(donne[5]) > 0)&&(Number(donne[7]) == 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	  {//3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(Number(donne[2]));

if (Number(donne[72]) > 0)
	   {//4
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(Number(donne[4]));
	    }//5 fin fo nomba
	   }//4

le1 = maFonction1();
if (le1<Number(donne[6])){le1=Number(donne[6]);}


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(Number(donne[10]));

if (Number(donne[73]) > 0)
	   {//4
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(Number(donne[12]));
	    }//5 
	   }//4
le2 = maFonction2();
if (Number(donne[14])<le2){le2=Number(donne[14]);} //limit of the height variation


	  }//3 fin fo nomb

Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));

Fichier1AudioJo.push(Number(donne[27])); //front4
Fichier1AudioJo.push(Number(donne[28]));

Fichier1AudioJo.push(Number(donne[36])); //front5
Fichier1AudioJo.push(Number(donne[37]));

Fichier1AudioJo.push(Number(donne[45])); //front6
Fichier1AudioJo.push(Number(donne[46]));

	 }//2 fin if Number(donne[5]) Number(donne[7])

else
	 {//2

if (Number(donne[7]) > 0)
	  {//3

for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	   {//4
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(le5);

if (Number(donne[72]) > 0)
	    {//5
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(Number(donne[4]));
	     }//6 fin fo nomba
	    }//5


le5 = maFonction5();
le5 = (Number(donne[8]) < le5) ? Number(donne[8]) : le5;//limit of the width variation

Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(le6);
if (Number(donne[73]) > 0)
	    {//5
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(Number(donne[12]));
	     }//6 
	    }//5

le6 = maFonction6();
le6 = (Number(donne[16]) < le6) ? Number(donne[16]) : le6;//limit of the width variation
	   }//4 fin fo nombd


Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));

Fichier1AudioJo.push(Number(donne[27])); //front4
Fichier1AudioJo.push(Number(donne[28]));

Fichier1AudioJo.push(Number(donne[36])); //front5
Fichier1AudioJo.push(Number(donne[37]));

Fichier1AudioJo.push(Number(donne[45])); //front6
Fichier1AudioJo.push(Number(donne[46]));

	  }//3 fin if Number(donne[7])

else
	  {//3
le3 = maFonction3();
le4 = maFonction4();
for (var nomb = 0; nomb < (Number(donne[3]) + 1); nomb++)
	   {//4
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(Number(donne[2]));

if (Number(donne[72]) > 0)
	    {//5
for (nomba = 0; nomba < Number(donne[72]); nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(Number(donne[4]));
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(Number(donne[4]));
	     }//6 fin fo nomba
	    }//5

Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(Number(donne[10]));

if (Number(donne[73]) > 0)
	    {//5
for (nombd = 0; nombd < Number(donne[73]); nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(Number(donne[12]));
Fichier1AudioJo.push(Number(donne[9]));
Fichier1AudioJo.push(Number(donne[12]));
	     }//6 fin fo nombd
	    }//5 fin plateau Number(donne[73])
	   }//4 fin fo nomb repetition

Fichier1AudioJo.push(Number(donne[18])); //front3
Fichier1AudioJo.push(Number(donne[19]));

Fichier1AudioJo.push(Number(donne[27])); //front4
Fichier1AudioJo.push(Number(donne[28]));

Fichier1AudioJo.push(Number(donne[36])); //front5
Fichier1AudioJo.push(Number(donne[37]));

Fichier1AudioJo.push(Number(donne[45])); //front6
Fichier1AudioJo.push(Number(donne[46]));

	  }//3 fin else Number(donne[7])
	 }//2 fin else Number(donne[5])
	}//1 fin du for Number(donne[71])

        break;//fin Number(donne[11]) == 4
        break;	//fin zone 6 fronts			
}//fin switch Number(donne[11]) 

        break;	//Number(donne[53]) = 0	

  case 1:// Number(donne[53]) = 1

Fichier1AudioJo.push(Number(donne[54]) + 128);
Fichier1AudioJo.push(Number(donne[55]));
Fichier1AudioJo.push(128 - Number(donne[54])); 
Fichier1AudioJo.push(Number(donne[55]));

if(Number(donne[56]) == 0){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[55]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[55]));


} // fin for nombi
} // fin if Number(donne[56]) == 0

if((Number(donne[56]) > 0)&&(Number(donne[57])==0)){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < Number(donne[56]); nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[55]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[55]));
} // fin for Number(donne[56])


} // fin for nombi
} // fin if Number(donne[56]) > 0

if((Number(donne[56]) > 0)&&(Number(donne[57]) > 0)){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < Number(donne[56]); nombia++) {

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[55]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[55]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

} // fin for Number(donne[56])


} // fin for nombi
} // fin if Number(donne[56]) > 0


        break;	//Number(donne[53]) = 1

/*****************************************/

  case 2:// Number(donne[53]) = 2

Fichier1AudioJo.push(Number(donne[54]) + 128);
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(128 - Number(donne[54])); 
Fichier1AudioJo.push(Number(donne[10]));

if(Number(donne[56]) == 0){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));


} // fin for nombi
} // fin if Number(donne[56]) == 0

if((Number(donne[56]) > 0)&&(Number(donne[57])==0)){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < Number(donne[56]); nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));
} // fin for Number(donne[56])


} // fin for nombi
} // fin if Number(donne[56]) > 0

if((Number(donne[56]) > 0)&&(Number(donne[57]) > 0)){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < Number(donne[56]); nombia++) {

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

} // fin for Number(donne[56])


} // fin for nombi
} // fin if Number(donne[56]) > 0


        break;	//Number(donne[53]) = 2
/*****************************************/

  case 3:// Number(donne[53]) = 3

Fichier1AudioJo.push(Number(donne[54]) + 128); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(128 - Number(donne[54])); 
Fichier1AudioJo.push(Number(donne[10]));

if(Number(donne[56]) == 0){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));


} // fin for nombi
} // fin if Number(donne[56]) == 0

if((Number(donne[56]) > 0)&&(Number(donne[57])==0)){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < Number(donne[56]); nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));
} // fin for Number(donne[56])


} // fin for nombi
} // fin if Number(donne[56]) > 0

if((Number(donne[56]) > 0)&&(Number(donne[57]) > 0)){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < Number(donne[56]); nombia++) {

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

} // fin for Number(donne[56])


} // fin for nombi
} // fin if Number(donne[56]) > 0


        break;	//Number(donne[53]) = 3
/*****************************************/

  case 4:// Number(donne[53]) = 4

Fichier1AudioJo.push(Number(donne[54]) + 128);
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(128 - Number(donne[54])); 
Fichier1AudioJo.push(Number(donne[10]));

if(Number(donne[56]) == 0){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[19]));


} // fin for nombi
} // fin if Number(donne[56]) == 0

if((Number(donne[56]) > 0)&&(Number(donne[57])==0)){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < Number(donne[56]); nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[1]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[19]));
} // fin for Number(donne[56])


} // fin for nombi
} // fin if Number(donne[56]) > 0

if((Number(donne[56]) > 0)&&(Number(donne[57]) > 0)){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < Number(donne[56]); nombia++) {

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

} // fin for Number(donne[56])


} // fin for nombi
} // fin if Number(donne[56]) > 0


        break;	//Number(donne[53]) = 4

/*****************************************/

  case 5:// Number(donne[53]) = 5

Fichier1AudioJo.push(Number(donne[54]) + 128);
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(128 - Number(donne[54])); 
Fichier1AudioJo.push(Number(donne[10]));

if(Number(donne[56]) == 0){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[19]));


} // fin for nombi
} // fin if Number(donne[56]) == 0

if((Number(donne[56]) > 0)&&(Number(donne[57])==0)){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < Number(donne[56]); nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[19]));
} // fin for Number(donne[56])


} // fin for nombi
} // fin if Number(donne[56]) > 0

if((Number(donne[56]) > 0)&&(Number(donne[57]) > 0)){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < Number(donne[56]); nombia++) {

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

} // fin for Number(donne[56])


} // fin for nombi
} // fin if Number(donne[56]) > 0


        break;	//Number(donne[53]) = 5

/*****************************************/

  case 6:// Number(donne[53]) = 6

Fichier1AudioJo.push(Number(donne[54]) + 128);
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(128 - Number(donne[54])); 
Fichier1AudioJo.push(Number(donne[10]));

if(Number(donne[56]) == 0){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));

} // fin for nombi
} // fin if Number(donne[56]) == 0

if((Number(donne[56]) > 0)&&(Number(donne[57])==0)){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < Number(donne[56]); nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));

} // fin for Number(donne[56])


} // fin for nombi
} // fin if Number(donne[56]) > 0

if((Number(donne[56]) > 0)&&(Number(donne[57]) > 0)){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < Number(donne[56]); nombia++) {

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])


} // fin for Number(donne[56])


} // fin for nombi
} // fin if Number(donne[56]) > 0


        break;	//Number(donne[53]) = 6

/*****************************************/

  case 7:// Number(donne[53]) = 7

Fichier1AudioJo.push(Number(donne[54]) + 128);
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(128 - Number(donne[54])); 
Fichier1AudioJo.push(Number(donne[10]));

if(Number(donne[56]) == 0){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[37]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[37]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));

} // fin for nombi
} // fin if Number(donne[56]) == 0

if((Number(donne[56]) > 0)&&(Number(donne[57])==0)){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < Number(donne[56]); nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[37]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[37]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));
} // fin for Number(donne[56])


} // fin for nombi
} // fin if Number(donne[56]) > 0

if((Number(donne[56]) > 0)&&(Number(donne[57]) > 0)){

for (nombi = 0; nombi < Number(donne[71]); nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < Number(donne[56]); nombia++) {

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[37]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[37]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[28]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[19]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])

for (var nombiab = 0; nombiab < Number(donne[59]); nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(Number(donne[10]));
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])
for (var nombiab = 0; nombiab < Number(donne[59]); nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(Number(donne[2]));
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(Number(donne[57]));
} // fin for Number(donne[59])


} // fin for Number(donne[56])


} // fin for nombi
} // fin if Number(donne[56]) > 0


        break;	//Number(donne[53]) = 7

}//fin switch  Number(donne[53])

return Fichier1AudioJo;

}



