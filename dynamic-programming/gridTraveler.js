function gridTraveler(m,n){
    if(m===1 && n===1) return 1;
    if(m ===0 || n ===0) return 0;

    return gridTraveler(m,n-1) + gridTraveler(m-1, n);
}

console.log(gridTraveler(3,2))