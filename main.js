
function appel()
{

 
console.log("Bienvenue dans ma super pyramide! Combien d'etages veux-tu ?");

var d=prompt("Combien d'etages veux-tu ?");
console.log(d);
var dim=parseInt(d);
if(dim<26)
{
//dim=console.readline();}
var matrice= new Array(dim);
//matrice.length=parseInt(dim);


for(i=0;i<dim;i++)
{
matrice[i]=new Array((2*dim)-1);	


	for(j=0;j<(dim-i)-1;j++){
	
		matrice[i][j]="";
	}
	for(j=dim-i-1;j<dim+i;j++){
	
		matrice[i][j]="#";
	}
	for(j=dim+i;j<(2*dim)-1;j++){
	
		matrice[i][j]="";
	}

	}
	console.log("la pyramide est");
	for(var ligne=0; ligne<matrice.length; ++ligne)  
	{ 
 
console.log( matrice[ligne].join("   ")); 
   
   } 

}
else {console.log("Il faur saisir une valeur <=25");}
}

