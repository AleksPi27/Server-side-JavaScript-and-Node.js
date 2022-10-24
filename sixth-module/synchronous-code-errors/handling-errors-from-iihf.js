try{
((age)=>{
    if (age<0){
        throw new Error('Age is invalid');
    } else if (age>=0 && age<18){
        throw new Error('Age is not eligible for voting');
    } 
    console.log('The vote is counted');
    
})(-17);
} catch(err){
    console.log(err);
    console.log(err.trace);
}