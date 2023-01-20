const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', addDays)
form.addEventListener('change', saveDays)

function addDays(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert("Dia já incluso")
        return
    }else{

    }
    alert("Dia Adicionado")
    nlwSetup.addDay(today)
}

function saveDays(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
    localStorage.getItem('NLWSetup@habits')
    JSON.parse(localStorage.getItem('NLWSetup@habits'))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()