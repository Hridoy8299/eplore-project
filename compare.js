const first = { a:2};
const second ={a:2} ;

// const first = { a:2, b:6, c:15};
// const second ={a:2. c:15, b:6} ;
// erpkom thakle different dekhabe

const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

if(firstString === secondString){
    console.log('same');
}
else{
    console.log('different');
}

function compareObject ( first, second){
    const firstKeys= Object.keys(first);
    const secondKeys =Object.keys(second);
    if( firstKeys.length == secondKeys.length){
        return true;
    }
    else{
        return false;
    }
}

const isSame = compareObject(first, second);
console.log(isSame);