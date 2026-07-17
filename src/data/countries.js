const data = [
["United States","US"],["Canada","CA"],["Mexico","MX"],
["Brazil","BR"],["Argentina","AR"],["Chile","CL"],
["United Kingdom","GB"],["France","FR"],["Germany","DE"],
["Italy","IT"],["Spain","ES"],["Portugal","PT"],
["Netherlands","NL"],["Belgium","BE"],["Switzerland","CH"],
["Austria","AT"],["Poland","PL"],["Sweden","SE"],
["Norway","NO"],["Denmark","DK"],["Finland","FI"],
["Ireland","IE"],["Greece","GR"],["Turkey","TR"],
["Ukraine","UA"],["Romania","RO"],["Bulgaria","BG"],
["India","IN"],["China","CN"],["Japan","JP"],
["South Korea","KR"],["Singapore","SG"],["Malaysia","MY"],
["Thailand","TH"],["Vietnam","VN"],["Indonesia","ID"],
["Philippines","PH"],["Australia","AU"],["New Zealand","NZ"],
["South Africa","ZA"],["Egypt","EG"],["Nigeria","NG"],
["Kenya","KE"],["Morocco","MA"],["Israel","IL"],
["Saudi Arabia","SA"],["UAE","AE"],["Qatar","QA"],
["Pakistan","PK"],["Bangladesh","BD"],["Sri Lanka","LK"],
["Nepal","NP"],["Iceland","IS"],["Estonia","EE"],
["Latvia","LV"],["Lithuania","LT"],["Czech Republic","CZ"],
["Hungary","HU"],["Croatia","HR"],["Serbia","RS"],
["Slovenia","SI"],["Slovakia","SK"],["Georgia","GE"],
["Armenia","AM"],["Kazakhstan","KZ"],["Uzbekistan","UZ"],
["Mongolia","MN"],["Taiwan","TW"],["Hong Kong","HK"],
["Cambodia","KH"],["Myanmar","MM"],["Laos","LA"],
["Brunei","BN"],["Peru","PE"],["Colombia","CO"],
["Ecuador","EC"],["Uruguay","UY"],["Paraguay","PY"],
["Bolivia","BO"],["Venezuela","VE"],["Costa Rica","CR"],
["Panama","PA"],["Guatemala","GT"],["Honduras","HN"],
["Jamaica","JM"],["Cuba","CU"],["Tunisia","TN"],
["Algeria","DZ"],["Ghana","GH"],["Uganda","UG"],
["Tanzania","TZ"],["Ethiopia","ET"],["Senegal","SN"],
["Botswana","BW"],["Zimbabwe","ZW"],["Albania","AL"],
["Azerbaijan","AZ"],["North Macedonia","MK"]
];


const makeFlag=(code)=>
code.replace(/./g,char =>
String.fromCodePoint(127397+char.charCodeAt())
);


export default data.map(([name,code])=>({
name,
code,
flag:makeFlag(code)
}));
