const file = './JSONS/data.json';
const da1 = document.querySelector('#current1');
const da2 = document.querySelector('#current2');
const da3 = document.querySelector('#current3');
const da4 = document.querySelector('#current4');
const da5 = document.querySelector('#current5');
const da6 = document.querySelector('#current6');

const db1 = document.querySelector('#portable1');
const db2 = document.querySelector('#portable2');
const db3 = document.querySelector('#portable3');
const db4 = document.querySelector('#portable4');
const db5 = document.querySelector('#portable5');
const db6 = document.querySelector('#portable6');

const dailyremote = document.querySelector('#dailyremote');
const weeklyremote = document.querySelector('#weeklyremote');
const monthlyremote = document.querySelector('#monthlyremote');

const fetchdata = async()=>{
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error (`error! observe: ${response.status}`)
        }
        const data = await response.json()
        weeklyremote.classList.add('on');
    } catch (error) {
        return console.log(err)
    }
}


const loaddaily = async()=>{
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error (`error! observe: ${response.status}`)
        }
        const data = await response.json()
        dailyremote.classList.add('on');
        weeklyremote.classList.remove('on');
        monthlyremote.classList.remove('on');
        // start filling for previous
    db1.innerHTML = `Yesterday - ${data[0].timeframes.daily.previous}hrs`
    db2.innerHTML = `Yesterday - ${data[1].timeframes.daily.previous}hrs`
    db3.innerHTML = `Yesterday - ${data[2].timeframes.daily.previous}hr`
    db4.innerHTML = `Yesterday - ${data[3].timeframes.daily.previous}hrs`
    db5.innerHTML = `Yesterday - ${data[4].timeframes.daily.previous}hrs`
    db6.innerHTML = `Yesterday - ${data[5].timeframes.daily.previous}hrs`
    // start filling for present
    da1.innerHTML = `${data[0].timeframes.daily.current}hrs`
    da2.innerHTML = `${data[1].timeframes.daily.current}hrs`
    da3.innerHTML = `${data[2].timeframes.daily.current}hrs`
    da4.innerHTML = `${data[3].timeframes.daily.current}hrs`
    da5.innerHTML = `${data[4].timeframes.daily.current}hrs`
    da6.innerHTML = `${data[5].timeframes.daily.current}hrs`

    } catch (error) {
        return console.log(err)
    }
}
    
const loadweekly = async()=>{
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error (`error! observe: ${response.status}`)
        }
        const data = await response.json()
        weeklyremote.classList.add('on');
        dailyremote.classList.remove('on');
        monthlyremote.classList.remove('on');
        // start filling for previous
    db1.innerHTML = `Last Week - ${data[0].timeframes.weekly.previous}hrs`
    db2.innerHTML = `Last Week - ${data[1].timeframes.weekly.previous}hrs`
    db3.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous}hr`
    db4.innerHTML = `Last Week - ${data[3].timeframes.weekly.previous}hrs`
    db5.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous}hrs`
    db6.innerHTML = `Last Week - ${data[5].timeframes.weekly.previous}hrs`
    // start filling for present
    da1.innerHTML = `${data[0].timeframes.weekly.current}hrs`
    da2.innerHTML = `${data[1].timeframes.weekly.current}hrs`
    da3.innerHTML = `${data[2].timeframes.weekly.current}hrs`
    da4.innerHTML = `${data[3].timeframes.weekly.current}hrs`
    da5.innerHTML = `${data[4].timeframes.weekly.current}hrs`
    da6.innerHTML = `${data[5].timeframes.weekly.current}hrs`

    } catch (error) {
        return console.log(err)
    }
}

const loadmonthly = async()=>{
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error (`error! observe: ${response.status}`)
        }
        const data = await response.json()
        monthlyremote.classList.add('on');
        weeklyremote.classList.remove('on');
        dailyremote.classList.remove('on');
        // start filling for previous
    db1.innerHTML = `Last Month - ${data[0].timeframes.monthly.previous}hrs`
    db2.innerHTML = `Last Month - ${data[1].timeframes.monthly.previous}hrs`
    db3.innerHTML = `Last Month - ${data[2].timeframes.monthly.previous}hr`
    db4.innerHTML = `Last Month - ${data[3].timeframes.monthly.previous}hrs`
    db5.innerHTML = `Last Month - ${data[4].timeframes.monthly.previous}hrs`
    db6.innerHTML = `Last Month - ${data[5].timeframes.monthly.previous}hrs`
    // start filling for present
    da1.innerHTML = `${data[0].timeframes.monthly.current}hrs`
    da2.innerHTML = `${data[1].timeframes.monthly.current}hrs`
    da3.innerHTML = `${data[2].timeframes.monthly.current}hrs`
    da4.innerHTML = `${data[3].timeframes.monthly.current}hrs`
    da5.innerHTML = `${data[4].timeframes.monthly.current}hrs`
    da6.innerHTML = `${data[5].timeframes.monthly.current}hrs`

    } catch (error) {
        return console.log(err)
    }
}
fetchdata();
