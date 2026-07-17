import countries from "../data/countries";


let vpnState={
status:"disconnected",
country:null,
ip:null
};


function createIP(){

return `10.${random()}.${random()}.${random()}`;

}


function random(){

return Math.floor(
Math.random()*255
);

}


// GET /api/vpn/countries
export function vpnCountries(){

return Promise.resolve(countries);

}


// POST /api/vpn/connect
export function vpnConnect(country){

vpnState={
status:"connected",
country,
ip:createIP()
};

return Promise.resolve(vpnState);

}


// POST /api/vpn/disconnect
export function vpnDisconnect(){

vpnState={
status:"disconnected",
country:null,
ip:null
};

return Promise.resolve(vpnState);

}


// GET /api/vpn/status
export function vpnStatus(){

return Promise.resolve(vpnState);

}
