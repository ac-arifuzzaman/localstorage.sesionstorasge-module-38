console.log('hello')

// alert('mais comming');

const maComming = () => {
    alert('Ammu !! is comming?')
}

const confirma = () => {
    const shara = confirm('give me taka on mmy bkash');
    // console.log(shara)
    if (shara === true) {
        alert('taka ta de amay');
    }
    else {
        alert('go to hell')
    }
}

const askName = () => {
    const namBol = prompt(
        'tor name ta bol amay'
    )
    console.log(namBol);
    if (namBol === '') {
        alert('kisu ekta lekho input field a')
    }
    // else if (namBol === '') {
    //     alert('valo hoise kisu koro nai')
    // }
}