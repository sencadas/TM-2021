// Your JS Script here

function readInputFromText(){
    const textFromInput = document.getElementById("inputText").value
    //debugger;
    //console.log(textFromInput)
    if(textFromInput){
        document.getElementById("viewText").innerText = textFromInput
    } else {
        alert("Escreva algo no input")
    }
        
}