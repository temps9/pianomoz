function aaa1(donne,Fichier1AudioJo) {

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

return Fichier1AudioJo;

}



