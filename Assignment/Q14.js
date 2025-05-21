    let char = prompt("enter Character a-z")
    switch (char) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                document.getElementById("pera").innerHTML = "vowel";
                break;  

            default:
                  document.getElementById("pera").innerHTML = "consonant"
         }