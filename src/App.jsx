import {useEffect,useState} from "react";
import {
vpnCountries,
vpnConnect,
vpnDisconnect,
vpnStatus
} from "./api/vpn";


export default function App(){

const [countries,setCountries]=useState([]);
const [country,setCountry]=useState("");
const [status,setStatus]=useState({});


useEffect(()=>{

vpnCountries()
.then(setCountries);

vpnStatus()
.then(setStatus);

},[]);


async function connect(){

const result=
await vpnConnect(country);

setStatus(result);

}


async function disconnect(){

const result=
await vpnDisconnect();

setStatus(result);

}


return (

<div style={{padding:40}}>

<h1>🌍 React VPN</h1>


<h2>
Status: {status.status}
</h2>


<p>
VPN IP: {status.ip || "None"}
</p>


<select
onChange={e=>setCountry(e.target.value)}
>

<option>Select Country</option>

{
countries.map(c=>

<option key={c.code}>
{c.flag} {c.name}
</option>

)
}

</select>


<br/><br/>


<button onClick={connect}>
Connect VPN
</button>


<button onClick={disconnect}>
Disconnect VPN
</button>


<p>
Countries: {countries.length}
</p>


</div>

);

}
