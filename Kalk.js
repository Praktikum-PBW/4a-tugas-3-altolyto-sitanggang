const tambah=(...index)=>{    
    let results = index[0]+index[1];
    return results;
}
const kurang=(...index)=>{
    let results = index[0]-index[1];
    return results;
}
const kali=(...index)=>{
    let results = index[0]*index[1];
    return results;
}
const bagi=(...index)=>{
    let results = index[0]/index[1];
    return results;
}
const modulus=(...index)=>{
    let results = index[0]%index[1];
    return results;
}

const tambahBT = document.getElementById("tambah");
tambahBT.addEventListener("click", function(){
    let bil1= parseInt(document.getElementById("Bilangan1").value);
    let bil2= parseInt(document.getElementById("Bilangan2").value);
    let results = tambah(bil1,bil2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",results);
    console.log(results);
});
const kurangBT = document.getElementById("kurang");
kurangBT.addEventListener("click", function(){
    let bil1= parseInt(document.getElementById("Bilangan1").value);
    let bil2= parseInt(document.getElementById("Bilangan2").value);
    let results = kurang(bil1,bil2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",results);
    console.log(results);
});
const kaliBT = document.getElementById("kali");
kaliBT.addEventListener("click", function(){
    let bil1= parseInt(document.getElementById("Bilangan1").value);
    let bil2= parseInt(document.getElementById("Bilangan2").value);
    let results = kali(bil1,bil2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",results);
    console.log(results);
    
});
const bagiBT = document.getElementById("bagi");
bagiBT.addEventListener("click", function(){
    let bil1= parseInt(document.getElementById("Bilangan1").value);
    let bil2= parseInt(document.getElementById("Bilangan2").value);
    let results = bagi(bil1,bil2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",results);
    console.log(results);
});
const modulusBT = document.getElementById("modulus");
modulusBT.addEventListener("click", function(){
    let bil1= parseInt(document.getElementById("Bilangan1").value);
    let bil2= parseInt(document.getElementById("Bilangan2").value);
    let results = modulus(bil1,bil2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",results);
    console.log(results);
});
const clearBT = document.getElementById("clear");
clearBT.addEventListener("click", function(){
    document.getElementById("Bilangan1").value="";
    document.getElementById("Bilangan2").value="";
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value"," ");
});