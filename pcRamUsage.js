const os = require('os')
/*
* utiliza algumas funções do node para verificar o estado o SO
*/
const {arch, platform, totalmem, freemem} = os

const tRam = totalmem()/1024/1024 
const fRam = freemem()/1024/1024

const usage = (fRam / tRam) * 100

setInterval(() =>{

    const stats = {
        Os: platform(),
        Arch: arch(),
        TotalRam: `${parseInt(tRam)} MB`,
        FreeRam: `${parseInt(fRam)} MB`,
        Usage: `${usage.toFixed(2)} %`
    }
    console.clear()
    console.table(stats)
    exports.stats = stats

}, 1000)





