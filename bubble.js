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