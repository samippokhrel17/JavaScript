const band={
    bandName:"Guns&Roses",
    famousSong:"November Rain",
    year:1999,
    yoyo:"okok",
}

// const bandName = band.bandName
// const famousSong = band.famousSong
// console.log(band.bandName," is"  , band.famousSong);

// let{bandName,famousSong}= band
// bandName="Queen"
// console.log(bandName);

let{bandName:var1,year:date,...restProp}=band
console.log(var1,date);
console.log(restProp);