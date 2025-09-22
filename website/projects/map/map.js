var subjectObject = {
    "New Jersey": {
      "Monmouth County": ["Freehold"],
    },
    "New York": {
      "Rensselaer County": ['Troy']
    },
    "Pennsylvania":{
      "Lackawanna County" : ['Scranton'],
    },
}


window.onload = function(){
    var first = document.getElementById('first')
    var second = document.getElementById('second')
    var third = document.getElementById('third')

    for(var x in subjectObject){
        // console.log(x);
        first.options[first.options.length] = new Option(x)
    }

    first.onchange = function(){
        second.length = 1
        third.length = 1

        second.style.display = 'block'
        third.style.display = 'none'

        for(var y in subjectObject[this.value]){
            // console.log(y);
            second.options[second.options.length] = new Option(y)
        }
    }


    second.onchange = function(){
        third.length = 1

        third.style.display = 'block'
        z = subjectObject[first.value][this.value]
        console.log(z);
        for(let i=0; i<z.length; i++){
            third.options[third.options.length] = new Option(z[i])
        }
    }
}