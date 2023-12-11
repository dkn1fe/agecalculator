const inputDay = document.querySelector('[data-day]');
const inputMonth = document.querySelector('[data-month]');
const inputYear = document.querySelector('[data-year]');
const inputParents = document.querySelector('.block-inputs');


function showError(target,message){
    target.classList.add('error');
    document.querySelector(`.${message}`).classList.remove('hide');
    setTimeout(()=>{
        document.querySelector(`.${message}`).classList.add('hide');
        target.classList.remove('error');
    },3000)
}

function getZero(num){
    if(num > 10){
        return `0${num}`;
    }
   else if(num == 0){
     return `00`;
   }
}

function valueData(){
    const t = new Date()
    let flag = false;
    const valueDay = inputDay.value;
    const valueMonth = inputMonth.value;
    const valueYear = inputYear.value; 

    inputDay.classList.remove('error');
    inputMonth.classList.remove('error');
    inputYear.classList.remove('error');

        if(valueDay > 31 || valueDay <= 0 ){
            showError(inputDay,'days')
            flag = true;
        }
        if(valueMonth > 12 || valueMonth <= 0 ){
            showError(inputMonth,'months')
            flag = true;
        }
        if(valueYear > t.getFullYear() || valueYear <= 0 ){
            showError(inputYear,'years')
            flag = true;
        }

        function updateTime(){
            if(!flag){
            document.querySelector('.year').innerHTML = t.getFullYear() - valueYear;
            document.querySelector('.month').innerHTML = (t.getMonth() + 1) - valueMonth;
            document.querySelector('.day').innerHTML = valueDay - t.getDate();
            
         }
        }
         updateTime()

}
document.querySelector('.btn').addEventListener('click',()=>{
    valueData();
})



