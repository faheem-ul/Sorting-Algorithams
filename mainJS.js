function show(){
    let abc;


    let data=document.getElementById("sort").value;






    let data1=data.split(",");




    let choose=document.getElementsByName("sort");
    for(let i=0;i<choose.length;i++)
    {
        if(choose[i].checked)
        {
            abc=choose[i].value;
        }
    }
    console.log(abc);



    Insertion(data1);
    Selection(data1);
    Bubble(data1);
    QuickSort(data1)




if(abc== "Insertion")
{
Insertion(data1);
}
else if (abc== "Selection")
{
Selection(data1);
}

else if (abc== "Bubble")
{
Bubble(data1);
}
else if (abc == "QuickSort")
{
QuickSort(data1);
}

document.getElementById("output").innerHTML = data1;







//// Insertion Sorting Algoritham Function


function Insertion(ar){
    for(i=1; i,i<ar.length; i++)
    {
let a = ar[i];

let j = i-1;

while (j>=0 && a<ar[j])
{
    ar[j+1] = ar[j];
    ar[j] = ar[j+1]
    j--;
};
ar[j+1] = a;

}

}
console.log(data1);
    









///Selection Sorting Algoritham


    
function Selection(ar){
let temp;
for (let i=0; i<ar.length; i++)
{
let min = i;
for (let j = i+1; j<ar.length; j++)
{
    if (ar[j]<ar[min]) // THE OPERATOR ASSIGNED HERE WILL DECIDE THAT WHETHER THE ARRAY IS TO BE SORTED IN ASCENDING OR DESCENDING ORDER.
    {
        min = j;
       
    }

}
temp = ar[i];
ar[i] = ar[min];
ar[min] = temp;

}
// console.log(data1);
}















////  Bubble Sorting Algoritham Function

function Bubble(ar){
let temp;
for(i=0; i<ar.length-1; i++)
{

for(j=0; j<ar.length-1-i; j++)
{
    if (ar[j]<ar[j+1])
    {
        temp = ar[j];
        ar[j] = ar[j+1];
        ar[j+1] = temp;
    }
}
}



}








/////  Quick Sorting Algoritham Function



function QuickSort(arr) {
if (arr.length <= 1) {
    return arr;
}

const pivot = arr[Math.floor(arr.length / 2)];
const left = [];
const right = [];
const middle = [];

for (let i =0; i<arr.length; i++) {
    if (arr[i] < pivot) {
        left.push(arr[i]);
    } else if (arr[i] > pivot) {
        right.push(arr[i]);
    } else {
        middle.push(arr[i]);
    }
}

return [...QuickSort(left), ...middle, ...QuickSort(right)];
}






}

