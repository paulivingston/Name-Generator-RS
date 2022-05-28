const generateButtons = document.getElementById('generate-buttons');
generateButtons.addEventListener("click", nameGenerator());

function nameGenerator(){
    var brand = document.getElementById("brand").value;
    var adnumber = document.getElementById("ad-number").value;
    var adname = document.getElementById("ad-name").value;
    var intro = document.getElementById("intro").value.toUpperCase();
    var body = document.getElementById("body").value.toUpperCase();

    
    ///validations
    if(brand == "Select Brand Name") {
        document.getElementById("brand").style.borderColor = "red";
        document.getElementById("brand").focus();
        alert("Oops! Looks like you didn't choose a brand");
        return;
    }else{
        document.getElementById("brand").style.borderColor = "#ced4da";
    }
    
    if(brand == "Weight Watchers") {
        brand = "WW";
    }else if(brand == "Just Food For Dogs") {
        brand = "JFFD";
    }else if(brand == "Wide Alaskan Company") {
        brand = "WAC";
    }else if(brand == "Smart Direct Club") {
        brand = "SDC";
    }

    if(adnumber.length == 0) {
        document.getElementById("ad-number").style.borderColor = "red";
        document.getElementById("ad-number").focus();
        alert("No way! This surely has a delivery number! (No need to type the D, just the number)");
        return;
    }else{
        document.getElementById("ad-number").style.borderColor = "#ced4da";
    }

    if(size == "Choose Size") {
        document.getElementById("size").style.borderColor = "red";
        document.getElementById("size").focus();
        alert("I think this is either a post or a story… What size is it?!");
        return;
    }else{
        document.getElementById("size").style.borderColor = "#ced4da";
    }

    if(intro.length != 0) {
        if(intro.length <= 2) {
            var introval = intro.split('');
            if (isNaN(introval[0])) {
                document.getElementById("intro").style.borderColor = "red";
                document.getElementById("intro").focus();
                alert("Remember that intros always start with a one-digit number and, if the super changes, you follow it with a letter");
                return;
            }else{
                document.getElementById("intro").style.borderColor = "#ced4da";
            }
            if(isNaN(introval[1])) {
                document.getElementById("intro").style.borderColor = "#ced4da";
            }else{
                document.getElementById("intro").style.borderColor = "red";
                document.getElementById("intro").focus();
                alert("Remember that intros always start with a one-digit number and, if the super changes, you follow it with a letter");
                return;
            }
        }else{
            document.getElementById("intro").style.borderColor = "red";
            document.getElementById("intro").focus();
            alert("Sure? That many intro variations?");
            return;
        }
    }

    if(body.length != 0) {
        if(body.length <= 2) {
            var bodyval = body.split('');
            if (isNaN(bodyval[0])) {
                document.getElementById("body").style.borderColor = "red";
                document.getElementById("body").focus();
                alert("Remember that bodies always start with a one-digit number and, if the super changes, you follow it with a letter");
                return;
            }else{
                document.getElementById("body").style.borderColor = "#ced4da";
            }   
            if(isNaN(bodyval[1])) {
                document.getElementById("body").style.borderColor = "#ced4da";
            }else{
                document.getElementById("body").style.borderColor = "red";
                document.getElementById("body").focus();
                alert("Remember that bodies always start with a one-digit number and, if the super changes, you follow it with a letter");
                return;
            }
        }else{
            document.getElementById("body").style.borderColor = "red";
            document.getElementById("body").focus();
            alert("Sure? That many body variations?");
            return;
        }
    }

    var adnameval = adname.split('');
    adnameval[0] = adnameval[0].toUpperCase();
    for (var i=0;i<adname.length;i++) {
        if(adnameval[i]==" "){
            adnameval[i+1] = adnameval[i+1].toUpperCase();
            adnameval.splice(i, 1);
            adname = adnameval.join('');
        }
    }
    
    if(adname.length == 0) {
        if(intro.length == 0 && body.length == 0){
            var name = 'RS_' + brand + '_D' + adnumber + '_' + size;
            document.getElementById("name").value = name;
        }else if(body.length == 0){
            var name = 'RS_' + brand + '_D' + adnumber + '_IN' + intro + '_' + size;
            document.getElementById("name").value = name;
        }else if(intro.length == 0){
            var name = 'RS_' + brand + '_D' + adnumber + '_BO' + body + '_' + size;
            document.getElementById("name").value = name;
        }else{
            var name = 'RS_' + brand + '_D' + adnumber + '_IN' + intro + '_BO' + body + '_' + size;
            document.getElementById("name").value = name;
        }
    }else{
        if(intro.length == 0 && body.length == 0){
            var name = 'RS_' + brand + '_D' + adnumber + '_' + adname + '_' + size;
            document.getElementById("name").value = name;
        }else if(body.length == 0){
            var name = 'RS_' + brand + '_D' + adnumber + '_' + adname + '_IN' + intro + '_' + size;
            document.getElementById("name").value = name;
        }else if(intro.length == 0){
            var name = 'RS_' + brand + '_D' + adnumber + '_' + adname + '_BO' + body + '_' + size;
            document.getElementById("name").value = name;
        }else{
        var name = 'RS_' + brand + '_D' + adnumber + '_' + adname + '_IN' + intro + '_BO' + body + '_' + size;
        document.getElementById("name").value = name;
        }
    }

    if(size == "Choose Size") {
        document.getElementById("size").style.borderColor = "red";
        document.getElementById("size").focus();
        alert("I think this is either a post or a story… What size is it?!");
        return;
    }else{
        document.getElementById("brand").style.borderColor = "#ced4da";
    }

    location.href = 'keypad.html';
}

function copy(){
    var name = document.getElementById("name").value;
    navigator.clipboard.writeText(name)
    .then(() => {
        alert("Copied!");
    })
    .catch(err => {
        alert("Something went wrong :(");
    })
}