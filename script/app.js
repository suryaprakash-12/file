function ok(){
var URL="https://script.google.com/macros/s/AKfycbw23Vv5ht6U8EaO06PdfyRKo_3DrT-Oy9izK6Me3r9z155S100zf3f_AUYceDBA7LIC/exec"
var form1 = document.forms['form1']

form1.addEventListener('submit',e =>{
    e.preventDefault()
    fetch(URL,{method: 'POST', body: new FormData(form1)})
    .then(response => console.log('success',response))
    .catch(error => console.error('error',error.message))
})
}