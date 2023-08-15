// -----------------------------subhanAllah-------------------------
const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn');


let subhanAllahEneshialValue = 0;

subhanAllahIncrimentBtn.addEventListener('click', function()
{
    if(subhanAllahEneshialValue == 33)
    {
        return alert('pls complete this subhanAllah onther try')
    }
    subhanAllahEneshialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahEneshialValue;

})
subhanAllahDecrimentBtn.addEventListener('click', function()
{
    if(subhanAllahEneshialValue == 0)
    {
        return alert('sorry not avilelavle naegative value');
    }
    subhanAllahEneshialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahEneshialValue;

})



// ------------------------alhamdulillah-----------------------------



const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');

let alhamdulillahEnishialVlue = 0;
alhamdulillahIncrimentBtn.addEventListener('click', function()
{
    if(alhamdulillahEnishialVlue == 33)
    {
        return alert('pls complete this alhamdulillah onther try')

    }
    alhamdulillahEnishialVlue += 1;
    alhamdulillahDisplay.innerText =  alhamdulillahEnishialVlue;

})
alhamdulillahDecrimentBtn.addEventListener('click', function()
{
    if(alhamdulillahEnishialVlue == 0)
    {
        return alert('sorry not avilelavle naegative value');
    }
    alhamdulillahEnishialVlue -= 1;
    alhamdulillahDisplay.innerText =  alhamdulillahEnishialVlue;

    
})






// ---------------------------------Allahuakber---------------------------

const allahAkberDisplay = document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn');

let allahAkberIneshialVlaue = 0;


allahAkberIncrimentBtn.addEventListener('click', function()
{
    if(allahAkberIneshialVlaue == 33)
    {
        return alert('pls complete this allahAkber onther try');
    }
    allahAkberIneshialVlaue += 1;
    allahAkberDisplay.innerText = allahAkberIneshialVlaue;

})

allahAkberDecrimentBtn.addEventListener('click', function()
{
    if(allahAkberIneshialVlaue == 0)
    {
        return alert('sorry not avilelavle naegative value');
    }
    allahAkberIneshialVlaue -= 1;
    allahAkberDisplay.innerText = allahAkberIneshialVlaue;

})

//----------------------- resetBtn--------------------------------

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', function()
{
    subhanAllahEneshialValue = 0;
    subhanAllahDisplay.innerText = subhanAllahEneshialValue;
    alhamdulillahEnishialVlue = 0;
    alhamdulillahDisplay.innerText = alhamdulillahEnishialVlue;
    allahAkberIneshialVlaue = 0;
    allahAkberDisplay.innerText = allahAkberIneshialVlaue;
    

})
