

export function Insertion(ar){
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


