function selection(ar){
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