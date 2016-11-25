function lance15() {

function aaa1(donne) {

var pas1; //variable du switch trie du nombre de fronts

var le1 = donne[1];//variation amplitude front1
function maFonction1() {
var xx1 = le1 - donne[5];
  return xx1;
}

var le2 = donne[9];//variation amplitude front2
function maFonction2() {
var xx2 = le2 - (-donne[13]);
  return xx2;
}

var le3 = donne[1];//plateau amplitude front1
function maFonction3() {
var xx3= le1 -1;
  return xx3;
}

var le4 = donne[9];//plateau amplitude front2
function maFonction4() {
var xx4 = le2 -1;
  return xx4;
}

var le5 = donne[2];//variation durée front1
function maFonction5() {
var xx5 = le5 - donne[7];
  return xx5;
}

var le6 = donne[10];//variation durée front1
function maFonction6() {
var xx6 = le6 - donne[15];
  return xx6;
}


var nombi; //boucle generale de donne[71]
var nomba;
var nombd;
var nombe  = donne[20];
if (nombe < 1) {
nombe = 1;
}
var nombf;

var waxx2 = 128 - donne[54];
var waxx1 = donne[54] - (-128);
function maFonction7() {
var xx7 = waxx2 - donne[58];
xx7 = (30 > xx7) ? 30 : xx7;
  return xx7;
}
function maFonction8() {
var xx8 = waxx1 - (-donne[58]);
if(xx8 > 220){xx8 = 220;}
return xx8;
}

switch (donne[53]) {

  case "0":


switch (donne[11]) {


//zone 2 fronts

	case "2":

for (nombi = 0; nombi < donne[71]; nombi++) 
	{//1
if ((donne[5] > 0)&&(donne[7] > 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (donne[3] - (-1)); nomb++)
	  { //3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(le5);

if (donne[72] > 0) 
	   {//4
for (nomba = 0; nomba < donne[72]; nomba++)
	    { //5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(donne[4]);
	    } //5 fin fo nomba
	   }//4

le1 = maFonction1();
if (donne[5] > 0)
{
le1 = ((donne[6] < le1)&&(le1 < 220)) ? donne[6] : le1;//limit of the height variation
}
if (donne[5] < 0)
{
le1 = ((donne[6] > le1)&&(le1 > 29)) ? donne[6] : le1;//limit of the height variation
}

//if (le1<donne[6]){le1=donne[6];}
le5 = maFonction5();
le5 = (donne[8] < le5) ? donne[8] : le5;//limit of the width variation


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(le6);

if (donne[73] > 0)
	   {//4
for (nombd = 0; nombd < donne[73]; nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(donne[12]);
	    }//5 
	   }//4
le2 = maFonction2();
//if (donne[14]<le2){le2=donne[14];} 
le2 = (donne[14] < le2) ? donne[14] : le2;//limit of the height variation
le6 = maFonction6();
le6 = (donne[16] < le6) ? donne[16] : le6;//limit of the width variation

	  }//3 fin fo nomb
	 }//2 fin if donne[5]


if ((donne[5] > 0)&&(donne[7] == 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	  {//3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(donne[2]);

if (donne[72] > 0)
	   {//4
for (nomba = 0; nomba < donne[72]; nomba++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(donne[4]);
	    }//5 fin fo nomba
	   }//4

le1 = maFonction1();
if (le1<donne[6]){le1=donne[6];}


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(donne[10]);

if (donne[73] > 0)
	   {//4
for (nombd = 0; nombd < donne[73]; nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(donne[12]);
	    }//5 
	   }//4
le2 = maFonction2();
if (donne[14]<le2){le2=donne[14];} //limit of the height variation


	  }//3 fin fo nomb
	 }//2 fin if donne[5] donne[7]

else
	 {//2

if (donne[7] > 0)
	  {//3

for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	   {//4
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(le5);

if (donne[72] > 0)
	    {//5
for (nomba = 0; nomba < donne[72]; nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(donne[4]);
	     }//6 fin fo nomba
	    }//5


le5 = maFonction5();
le5 = (donne[8] < le5) ? donne[8] : le5;//limit of the width variation

Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(le6);
if (donne[73] > 0)
	    {//5
for (nombd = 0; nombd < donne[73]; nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(donne[12]);
	     }//6 
	    }//5

le6 = maFonction6();
le6 = (donne[16] < le6) ? donne[16] : le6;//limit of the width variation
	   }//4 fin fo nombd
	  }//3 fin if donne[7]

else
	  {//3

for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	   {//4
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(donne[2]);

if (donne[72] > 0)
	    {//5
for (nomba = 0; nomba < donne[72]; nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(donne[4]);
	     }//6 fin fo nomba
	    }//5

Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(donne[10]);

if (donne[73] > 0)
	    {//5
for (nombd = 0; nombd < donne[73]; nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(donne[12]);
	     }//6 
	    }//5
	   }//4 fin fo nombd
	  }//3 fin else donne[7]
	 }//2 fin else donne[5]
	}//1 fin du for donne[71]

        break;//fin donne[11] == 2

//fin zone 2 fronts

//zone 3 fronts
  case "3":

for (nombi = 0; nombi < donne[71]; nombi++) 
	{//1
if ((donne[5] > 0)&&(donne[7] > 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	  { //3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(le5);

if (donne[72] > 0) 
	   {//4
for (nomba = 0; nomba < donne[72]; nomba++)
	    { //5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(donne[4]);
	    } //5 fin fo nomba
	   }//4

le1 = maFonction1();
le1 = (donne[6] < le1) ? donne[6] : le1;//limit of the height variation
//if (le1<donne[6]){le1=donne[6];}
le5 = maFonction5();
le5 = (donne[8] < le5) ? donne[8] : le5;//limit of the width variation


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(le6);

if (donne[73] > 0)
	   {//4
for (nombd = 0; nombd < donne[73]; nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(donne[12]);
	    }//5 
	   }//4
le2 = maFonction2();
//if (donne[14]<le2){le2=donne[14];} 
le2 = (donne[14] < le2) ? donne[14] : le2;//limit of the height variation
le6 = maFonction6();
le6 = (donne[16] < le6) ? donne[16] : le6;//limit of the width variation

	  }//3 fin fo nomb


Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);

	 }//2 fin if donne[5]


if ((donne[5] > 0)&&(donne[7] == 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	  {//3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(donne[2]);

if (donne[72] > 0)
	   {//4
for (nomba = 0; nomba < donne[72]; nomba++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(donne[4]);
	    }//5 fin fo nomba
	   }//4

le1 = maFonction1();
if (le1<donne[6]){le1=donne[6];}


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(donne[10]);

if (donne[73] > 0)
	   {//4
for (nombd = 0; nombd < donne[73]; nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(donne[12]);
	    }//5 
	   }//4
le2 = maFonction2();
if (donne[14]<le2){le2=donne[14];} //limit of the height variation


	  }//3 fin fo nomb

Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);


	 }//2 fin if donne[5] donne[7]

else
	 {//2

if (donne[7] > 0)
	  {//3

for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	   {//4
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(le5);

if (donne[72] > 0)
	    {//5
for (nomba = 0; nomba < donne[72]; nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(donne[4]);
	     }//6 fin fo nomba
	    }//5


le5 = maFonction5();
le5 = (donne[8] < le5) ? donne[8] : le5;//limit of the width variation

Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(le6);
if (donne[73] > 0)
	    {//5
for (nombd = 0; nombd < donne[73]; nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(donne[12]);
	     }//6 
	    }//5

le6 = maFonction6();
le6 = (donne[16] < le6) ? donne[16] : le6;//limit of the width variation
	   }//4 fin fo nombd


Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);


	  }//3 fin if donne[7]

else
	  {//3
le3 = maFonction3();
le4 = maFonction4();
for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	   {//4
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(donne[2]);

if (donne[72] > 0)
	    {//5
for (nomba = 0; nomba < donne[72]; nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(donne[4]);
	     }//6 fin fo nomba
	    }//5

Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(donne[10]);

if (donne[73] > 0)
	    {//5
for (nombd = 0; nombd < donne[73]; nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(donne[12]);
	     }//6 fin fo nombd
	    }//5 fin plateau donne[73]
	   }//4 fin fo nomb repetition

Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);


	  }//3 fin else donne[7]
	 }//2 fin else donne[5]
	}//1 fin du for donne[71]

        break;//fin donne[11] == 3

//fin zone 3 fronts

//zone 4 fronts

  case "4":// donne[11]
for (nombi = 0; nombi < donne[71]; nombi++) 
	{//1
if ((donne[5] > 0)&&(donne[7] > 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	  { //3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(le5);

if (donne[72] > 0) 
	   {//4
for (nomba = 0; nomba < donne[72]; nomba++)
	    { //5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(donne[4]);
	    } //5 fin fo nomba
	   }//4

le1 = maFonction1();
le1 = (donne[6] < le1) ? donne[6] : le1;//limit of the height variation
//if (le1<donne[6]){le1=donne[6];}
le5 = maFonction5();
le5 = (donne[8] < le5) ? donne[8] : le5;//limit of the width variation


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(le6);

if (donne[73] > 0)
	   {//4
for (nombd = 0; nombd < donne[73]; nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(donne[12]);
	    }//5 
	   }//4
le2 = maFonction2();
//if (donne[14]<le2){le2=donne[14];} 
le2 = (donne[14] < le2) ? donne[14] : le2;//limit of the height variation
le6 = maFonction6();
le6 = (donne[16] < le6) ? donne[16] : le6;//limit of the width variation

	  }//3 fin fo nomb


Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);

Fichier1AudioJo.push(donne[27]); //front4
Fichier1AudioJo.push(donne[28]);

	 }//2 fin if donne[5]


if ((donne[5] > 0)&&(donne[7] == 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	  {//3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(donne[2]);

if (donne[72] > 0)
	   {//4
for (nomba = 0; nomba < donne[72]; nomba++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(donne[4]);
	    }//5 fin fo nomba
	   }//4

le1 = maFonction1();
if (le1<donne[6]){le1=donne[6];}


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(donne[10]);

if (donne[73] > 0)
	   {//4
for (nombd = 0; nombd < donne[73]; nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(donne[12]);
	    }//5 
	   }//4
le2 = maFonction2();
if (donne[14]<le2){le2=donne[14];} //limit of the height variation


	  }//3 fin fo nomb

Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);

Fichier1AudioJo.push(donne[27]); //front4
Fichier1AudioJo.push(donne[28]);

	 }//2 fin if donne[5] donne[7]

else
	 {//2

if (donne[7] > 0)
	  {//3

for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	   {//4
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(le5);

if (donne[72] > 0)
	    {//5
for (nomba = 0; nomba < donne[72]; nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(donne[4]);
	     }//6 fin fo nomba
	    }//5


le5 = maFonction5();
le5 = (donne[8] < le5) ? donne[8] : le5;//limit of the width variation

Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(le6);
if (donne[73] > 0)
	    {//5
for (nombd = 0; nombd < donne[73]; nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(donne[12]);
	     }//6 
	    }//5

le6 = maFonction6();
le6 = (donne[16] < le6) ? donne[16] : le6;//limit of the width variation
	   }//4 fin fo nombd


Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);

Fichier1AudioJo.push(donne[27]); //front4
Fichier1AudioJo.push(donne[28]);

	  }//3 fin if donne[7]

else
	  {//3
le3 = maFonction3();
le4 = maFonction4();
for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	   {//4
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(donne[2]);

if (donne[72] > 0)
	    {//5
for (nomba = 0; nomba < donne[72]; nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(donne[4]);
	     }//6 fin fo nomba
	    }//5

Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(donne[10]);

if (donne[73] > 0)
	    {//5
for (nombd = 0; nombd < donne[73]; nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(donne[12]);
	     }//6 fin fo nombd
	    }//5 fin plateau donne[73]
	   }//4 fin fo nomb repetition

Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);

Fichier1AudioJo.push(donne[27]); //front4
Fichier1AudioJo.push(donne[28]);

	  }//3 fin else donne[7]
	 }//2 fin else donne[5]
	}//1 fin du for donne[71]

        break;//fin donne[11] == 4

//fin zone 4 fronts

//zone 5 fronts

  case "5":// donne[11]

for (nombi = 0; nombi < donne[71]; nombi++) 
	{//1
if ((donne[5] > 0)&&(donne[7] > 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	  { //3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(le5);

if (donne[72] > 0) 
	   {//4
for (nomba = 0; nomba < donne[72]; nomba++)
	    { //5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(donne[4]);
	    } //5 fin fo nomba
	   }//4

le1 = maFonction1();
le1 = (donne[6] < le1) ? donne[6] : le1;//limit of the height variation
//if (le1<donne[6]){le1=donne[6];}
le5 = maFonction5();
le5 = (donne[8] < le5) ? donne[8] : le5;//limit of the width variation


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(le6);

if (donne[73] > 0)
	   {//4
for (nombd = 0; nombd < donne[73]; nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(donne[12]);
	    }//5 
	   }//4
le2 = maFonction2();
//if (donne[14]<le2){le2=donne[14];} 
le2 = (donne[14] < le2) ? donne[14] : le2;//limit of the height variation
le6 = maFonction6();
le6 = (donne[16] < le6) ? donne[16] : le6;//limit of the width variation

	  }//3 fin fo nomb


Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);

Fichier1AudioJo.push(donne[27]); //front4
Fichier1AudioJo.push(donne[28]);

Fichier1AudioJo.push(donne[36]); //front5
Fichier1AudioJo.push(donne[37]);

	 }//2 fin if donne[5]


if ((donne[5] > 0)&&(donne[7] == 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	  {//3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(donne[2]);

if (donne[72] > 0)
	   {//4
for (nomba = 0; nomba < donne[72]; nomba++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(donne[4]);
	    }//5 fin fo nomba
	   }//4

le1 = maFonction1();
if (le1<donne[6]){le1=donne[6];}


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(donne[10]);

if (donne[73] > 0)
	   {//4
for (nombd = 0; nombd < donne[73]; nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(donne[12]);
	    }//5 
	   }//4
le2 = maFonction2();
if (donne[14]<le2){le2=donne[14];} //limit of the height variation


	  }//3 fin fo nomb

Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);

Fichier1AudioJo.push(donne[27]); //front4
Fichier1AudioJo.push(donne[28]);

Fichier1AudioJo.push(donne[36]); //front5
Fichier1AudioJo.push(donne[37]);

	 }//2 fin if donne[5] donne[7]

else
	 {//2

if (donne[7] > 0)
	  {//3

for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	   {//4
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(le5);

if (donne[72] > 0)
	    {//5
for (nomba = 0; nomba < donne[72]; nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(donne[4]);
	     }//6 fin fo nomba
	    }//5


le5 = maFonction5();
le5 = (donne[8] < le5) ? donne[8] : le5;//limit of the width variation

Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(le6);
if (donne[73] > 0)
	    {//5
for (nombd = 0; nombd < donne[73]; nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(donne[12]);
	     }//6 
	    }//5

le6 = maFonction6();
le6 = (donne[16] < le6) ? donne[16] : le6;//limit of the width variation
	   }//4 fin fo nombd


Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);

Fichier1AudioJo.push(donne[27]); //front4
Fichier1AudioJo.push(donne[28]);

Fichier1AudioJo.push(donne[36]); //front5
Fichier1AudioJo.push(donne[37]);

	  }//3 fin if donne[7]

else
	  {//3
le3 = maFonction3();
le4 = maFonction4();
for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	   {//4
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(donne[2]);

if (donne[72] > 0)
	    {//5
for (nomba = 0; nomba < donne[72]; nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(donne[4]);
	     }//6 fin fo nomba
	    }//5

Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(donne[10]);

if (donne[73] > 0)
	    {//5
for (nombd = 0; nombd < donne[73]; nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(donne[12]);
	     }//6 fin fo nombd
	    }//5 fin plateau donne[73]
	   }//4 fin fo nomb repetition

Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);

Fichier1AudioJo.push(donne[27]); //front4
Fichier1AudioJo.push(donne[28]);

Fichier1AudioJo.push(donne[36]); //front5
Fichier1AudioJo.push(donne[37]);

	  }//3 fin else donne[7]
	 }//2 fin else donne[5]
	}//1 fin du for donne[71]

        break;//fin donne[11] == 4

        break;//fin donne[11] == 5

//fin zone 5 fronts

//zone 6 fronts

  case "6":// donne[11]
for (nombi = 0; nombi < donne[71]; nombi++) 
	{//1
if ((donne[5] > 0)&&(donne[7] > 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	  { //3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(le5);

if (donne[72] > 0) 
	   {//4
for (nomba = 0; nomba < donne[72]; nomba++)
	    { //5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(donne[4]);
	    } //5 fin fo nomba
	   }//4

le1 = maFonction1();
le1 = (donne[6] < le1) ? donne[6] : le1;//limit of the height variation
//if (le1<donne[6]){le1=donne[6];}
le5 = maFonction5();
le5 = (donne[8] < le5) ? donne[8] : le5;//limit of the width variation


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(le6);

if (donne[73] > 0)
	   {//4
for (nombd = 0; nombd < donne[73]; nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(donne[12]);
	    }//5 
	   }//4
le2 = maFonction2();
//if (donne[14]<le2){le2=donne[14];} 
le2 = (donne[14] < le2) ? donne[14] : le2;//limit of the height variation
le6 = maFonction6();
le6 = (donne[16] < le6) ? donne[16] : le6;//limit of the width variation

	  }//3 fin fo nomb


Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);

Fichier1AudioJo.push(donne[27]); //front4
Fichier1AudioJo.push(donne[28]);

Fichier1AudioJo.push(donne[36]); //front5
Fichier1AudioJo.push(donne[37]);

Fichier1AudioJo.push(donne[45]); //front6
Fichier1AudioJo.push(donne[46]);

	 }//2 fin if donne[5]


if ((donne[5] > 0)&&(donne[7] == 0))
	 {//2

le3 = maFonction3();
le4 = maFonction4();

for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	  {//3 height repeat
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(donne[2]);

if (donne[72] > 0)
	   {//4
for (nomba = 0; nomba < donne[72]; nomba++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(le1);
Fichier1AudioJo.push(donne[4]);
	    }//5 fin fo nomba
	   }//4

le1 = maFonction1();
if (le1<donne[6]){le1=donne[6];}


Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(donne[10]);

if (donne[73] > 0)
	   {//4
for (nombd = 0; nombd < donne[73]; nombd++)
	    {//5 number of stays in place
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(le2);
Fichier1AudioJo.push(donne[12]);
	    }//5 
	   }//4
le2 = maFonction2();
if (donne[14]<le2){le2=donne[14];} //limit of the height variation


	  }//3 fin fo nomb

Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);

Fichier1AudioJo.push(donne[27]); //front4
Fichier1AudioJo.push(donne[28]);

Fichier1AudioJo.push(donne[36]); //front5
Fichier1AudioJo.push(donne[37]);

Fichier1AudioJo.push(donne[45]); //front6
Fichier1AudioJo.push(donne[46]);

	 }//2 fin if donne[5] donne[7]

else
	 {//2

if (donne[7] > 0)
	  {//3

for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	   {//4
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(le5);

if (donne[72] > 0)
	    {//5
for (nomba = 0; nomba < donne[72]; nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(donne[4]);
	     }//6 fin fo nomba
	    }//5


le5 = maFonction5();
le5 = (donne[8] < le5) ? donne[8] : le5;//limit of the width variation

Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(le6);
if (donne[73] > 0)
	    {//5
for (nombd = 0; nombd < donne[73]; nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(donne[12]);
	     }//6 
	    }//5

le6 = maFonction6();
le6 = (donne[16] < le6) ? donne[16] : le6;//limit of the width variation
	   }//4 fin fo nombd


Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);

Fichier1AudioJo.push(donne[27]); //front4
Fichier1AudioJo.push(donne[28]);

Fichier1AudioJo.push(donne[36]); //front5
Fichier1AudioJo.push(donne[37]);

Fichier1AudioJo.push(donne[45]); //front6
Fichier1AudioJo.push(donne[46]);

	  }//3 fin if donne[7]

else
	  {//3
le3 = maFonction3();
le4 = maFonction4();
for (var nomb = 0; nomb < (donne[3] -(- 1)); nomb++)
	   {//4
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(donne[2]);

if (donne[72] > 0)
	    {//5
for (nomba = 0; nomba < donne[72]; nomba++)
	     {//6
Fichier1AudioJo.push(le3);
Fichier1AudioJo.push(donne[4]);
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(donne[4]);
	     }//6 fin fo nomba
	    }//5

Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(donne[10]);

if (donne[73] > 0)
	    {//5
for (nombd = 0; nombd < donne[73]; nombd++)
	     {//6
Fichier1AudioJo.push(le4);
Fichier1AudioJo.push(donne[12]);
Fichier1AudioJo.push(donne[9]);
Fichier1AudioJo.push(donne[12]);
	     }//6 fin fo nombd
	    }//5 fin plateau donne[73]
	   }//4 fin fo nomb repetition

Fichier1AudioJo.push(donne[18]); //front3
Fichier1AudioJo.push(donne[19]);

Fichier1AudioJo.push(donne[27]); //front4
Fichier1AudioJo.push(donne[28]);

Fichier1AudioJo.push(donne[36]); //front5
Fichier1AudioJo.push(donne[37]);

Fichier1AudioJo.push(donne[45]); //front6
Fichier1AudioJo.push(donne[46]);

	  }//3 fin else donne[7]
	 }//2 fin else donne[5]
	}//1 fin du for donne[71]

        break;//fin donne[11] == 4
        break;	//fin zone 6 fronts			
}//fin switch donne[11] 

        break;	//donne[53] = 0	

  case "1":// donne[53] = 1

Fichier1AudioJo.push(Number(donne[54]) + 128);
Fichier1AudioJo.push(donne[55]);
Fichier1AudioJo.push(128 - donne[54]); 
Fichier1AudioJo.push(donne[55]);

if(donne[56] == 0){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[55]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[55]);


} // fin for nombi
} // fin if donne[56] == 0

if((donne[56] > 0)&&(donne[57]==0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[55]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[55]);
} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0

if((donne[56] > 0)&&(donne[57] > 0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[55]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[55]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0


        break;	//donne[53] = 1

/*****************************************/

  case "2":// donne[53] = 2

Fichier1AudioJo.push(Number(donne[54]) + 128);
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(128 - donne[54]); 
Fichier1AudioJo.push(donne[10]);

if(donne[56] == 0){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);


} // fin for nombi
} // fin if donne[56] == 0

if((donne[56] > 0)&&(donne[57]==0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0

if((donne[56] > 0)&&(donne[57] > 0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0


        break;	//donne[53] = 2
/*****************************************/

  case "3":// donne[53] = 3

Fichier1AudioJo.push(Number(donne[54]) + 128); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(128 - donne[54]); 
Fichier1AudioJo.push(donne[10]);

if(donne[56] == 0){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);


} // fin for nombi
} // fin if donne[56] == 0

if((donne[56] > 0)&&(donne[57]==0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0

if((donne[56] > 0)&&(donne[57] > 0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0


        break;	//donne[53] = 3
/*****************************************/

  case "4":// donne[53] = 4

Fichier1AudioJo.push(Number(donne[54]) + 128);
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(128 - donne[54]); 
Fichier1AudioJo.push(donne[10]);

if(donne[56] == 0){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);


} // fin for nombi
} // fin if donne[56] == 0

if((donne[56] > 0)&&(donne[57]==0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0

if((donne[56] > 0)&&(donne[57] > 0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0


        break;	//donne[53] = 4

/*****************************************/

  case "5":// donne[53] = 5

Fichier1AudioJo.push(Number(donne[54]) + 128);
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(128 - donne[54]); 
Fichier1AudioJo.push(donne[10]);

if(donne[56] == 0){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);


} // fin for nombi
} // fin if donne[56] == 0

if((donne[56] > 0)&&(donne[57]==0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0

if((donne[56] > 0)&&(donne[57] > 0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0


        break;	//donne[53] = 5

/*****************************************/

  case "6":// donne[53] = 6

Fichier1AudioJo.push(Number(donne[54]) + 128);
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(128 - donne[54]); 
Fichier1AudioJo.push(donne[10]);

if(donne[56] == 0){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);

} // fin for nombi
} // fin if donne[56] == 0

if((donne[56] > 0)&&(donne[57]==0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);

} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0

if((donne[56] > 0)&&(donne[57] > 0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]


} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0


        break;	//donne[53] = 6

/*****************************************/

  case "7":// donne[53] = 7

Fichier1AudioJo.push(Number(donne[54]) + 128);
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(128 - donne[54]); 
Fichier1AudioJo.push(donne[10]);

if(donne[56] == 0){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);

} // fin for nombi
} // fin if donne[56] == 0

if((donne[56] > 0)&&(donne[57]==0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0

if((donne[56] > 0)&&(donne[57] > 0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]


} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0


        break;	//donne[53] = 7

}//fin switch  donne[53]

}



			var Fichier1AudioJo=[];
			var Fichier1AudioJox=[];
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
lenommeur1= "base25wave";
lenommeur = lenommeur1.concat(levariateur);
var mon_audio1 = null;
var nouveauaudio1 = null;
var nouveauaudio1a = null;
function ajouteElement() {
  nouveauaudio1 =  document.createElement("audio");
nouveauaudio1.setAttribute("id", "25wav");
nouveauaudio1.setAttribute("autobuffer", " ");
 nouveauaudio1a = document.createElement("source");
  nouveauaudio1a.setAttribute("src", "data:audio/wav;base25wave2,");
   nouveauaudio1.appendChild(nouveauaudio1a);
  mon_audio1 = document.getElementById(lenommeur);
  document.body.insertBefore(nouveauaudio1, mon_audio1);
}  

ajouteElement();

//fin zone 1
// zone 2
alenommeur1= "abase25wave";
alenommeur = alenommeur1.concat(levariateur);
var amon_audio1 = null;
var anouveauaudio1 = null;
var anouveauaudio1a = null;
function ajouteElementa() {
  anouveauaudio1 =  document.createElement("audio");
anouveauaudio1.setAttribute("id", "25awav");
anouveauaudio1.setAttribute("autobuffer", " ");
 anouveauaudio1a = document.createElement("source");
  anouveauaudio1a.setAttribute("src", "data:audio/wav;abase25wave2,");
   anouveauaudio1.appendChild(anouveauaudio1a);
  amon_audio1 = document.getElementById(alenommeur);
  document.body.insertBefore(anouveauaudio1, amon_audio1);
}
ajouteElementa();
//fin zone 2
// zone 3
blenommeur1= "bbase25wave";
blenommeur = blenommeur1.concat(levariateur);
var bmon_audio1 = null;
var bnouveauaudio1 = null;
var bnouveauaudio1a = null;
function ajouteElementb() {
  bnouveauaudio1 =  document.createElement("audio");
bnouveauaudio1.setAttribute("id", "25bwav");
bnouveauaudio1.setAttribute("autobuffer", " ");
 bnouveauaudio1a = document.createElement("source");
  bnouveauaudio1a.setAttribute("src", "data:audio/wav;bbase25wave2,");
   bnouveauaudio1.appendChild(bnouveauaudio1a);
  bmon_audio1 = document.getElementById(blenommeur);
  document.body.insertBefore(bnouveauaudio1, bmon_audio1);
}  

ajouteElementb();
//fin zone 3
// zone 4
clenommeur1= "cbase25wave";
clenommeur = clenommeur1.concat(levariateur);
var cmon_audio1 = null;
var cnouveauaudio1 = null;
var cnouveauaudio1a = null;
function ajouteElementc() {
  cnouveauaudio1 =  document.createElement("audio");
cnouveauaudio1.setAttribute("id", "25cwav");
cnouveauaudio1.setAttribute("autobuffer", " ");
 cnouveauaudio1a = document.createElement("source");
  cnouveauaudio1a.setAttribute("src", "data:audio/wav;cbase25wave2,");
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
var audio = document.getElementById("25wav");
var source = document.createElement("source");
source.setAttribute("src", lenommeur);
audio.appendChild(source);

alenommeur = wave1.generate1();
var aaudio = document.getElementById("25awav");
var asource = document.createElement("source");
asource.setAttribute("src", alenommeur);
aaudio.appendChild(asource);

blenommeur = wave1.generate1();
var baudio = document.getElementById("25bwav");
var bsource = document.createElement("source");
bsource.setAttribute("src", blenommeur);
baudio.appendChild(bsource);

clenommeur = wave1.generate1();
var caudio = document.getElementById("25cwav");
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
var basedeconstruc = "da13n";
for(var pui= 1; pui < 74; pui++)
{
	donne[pui] = document.getElementById(basedeconstruc.concat("1n",pui )).value;
}

aaa1(donne);

Fichier1AudioJo = Fichier1AudioJo.map(Number);

lecjoa1(Fichier1AudioJo);

    }

    lecjo1adn();

}
/****************************fin premier niveau qui ouvre le fichier*****************************************************/

 document.addEventListener("DOMContentLoaded", function(event) {
    lance15();
  });


