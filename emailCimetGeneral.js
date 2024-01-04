function emailCimetGeneral(teljesNev, szuletesiEv=1970) {  
    let emailCim = "";                      

    const nevek = teljesNev.split(" "); 

    for (let nev of nevek)                  
        emailCim += nev.substr(0, 3).toLowerCase();

    emailCim += szuletesiEv % 10; 
    emailCim += "@duck.com";        

    return emailCim;
}