(function(){

    var countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antigua", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire (Netherlands Antilles)", "Bosnia Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic of", "Cook Islands", "Costa Rica", "Croatia", "Curacao (Netherlands Antilles)", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iraq", "Ireland (Republic of)", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kosrae Island", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macau", "Macedonia (FYROM)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Moldova", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Ponape", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Rota", "Russia", "Rwanda", "Saba (Netherlands Antilles)", "Saipan", "Samoa", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "South Africa", "South Korea", "Spain", "Sri Lanka", "St. Barthelemy", "St. Croix", "St. Eustatius (Netherlands Antilles)", "St. John", "St. Kitts and Nevis", "St. Lucia", "St. Maarten (Netherlands Antilles)", "St. Thomas", "St. Vincent and the Grenadines", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tinian", "Togo", "Tonga", "Tortola", "Trinidad and Tobago", "Truk", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos", "Tuvalu", "US Virgin Islands", "Uganda", "Ukraine", "Union Island", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Gorda", "Wallis and Futuna", "Yap", "Yemen", "Zambia", "Zimbabwe"];

    var textArea = document.getElementById("text");
    var counter=0;
    var addCountry="";
    var targetText;
    var targetElement=null;
    var index;
    var height = document.getElementById("results").offsetHeight;
    var results = document.getElementById("results");
    textArea.addEventListener("input", function(){

        index=0;
        targetElement=null;
        //targetText=null;

        height = 0;


        for (var j=0;j<counter+1;j++){
            results.innerHTML = "";
        }


        var matchCountries = countries.filter(function(name){
            return (name.slice(0, textArea.value.length).toLowerCase()===textArea.value.toLowerCase());
        });

        if(matchCountries.length===0) {
            results.style.height = "40px";
            results.innerHTML="<p>"+"No results"+"<p>";
            counter = 1;
        }


        //    for (var j=0;j<counter;j++) {
        //        var a = document.getElementById("body");
        //      console.log(document.getElementsByClassName("country")[j]);
        //    }



        if(textArea.value.length===0) {
            results.innerHTML = "";
            matchCountries=[];
            results.style.height = "0";
        }


        counter=0;
        for (var i=0;i<4;i++){
            if(i===matchCountries.length) {break;}
            counter+=1;
            addCountry=results.innerHTML;

            results.innerHTML = addCountry + "<p>" + matchCountries[i] +"</p>";
            height+=40;
            results.style.height = height + "px";


            //    var newP = document.createElement("p");
            //    var option = document.createTextNode(matchCountries[i]);


            //    newP.appendChild(option);
            //    document.body.appendChild(newP);
            //    newP.classList.add("country");
        }

        document.addEventListener("click", function(e){
            e.stopPropagation();
            results.innerHTML = "";
            results.style.height = "0";
        });

        results.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        results.addEventListener('mouseover', function(e) {
            if(e.target.tagName=="P"){
                targetText = e.target.innerHTML;

                e.target.style.color = "blue";
                e.target.style.backgroundColor = "yellow";
                targetElement = e.target;
            }

            results.addEventListener('mouseout', function(e) {
                if(e.target.tagName=="P"){
                    e.target.style.color = "black";
                    e.target.style.backgroundColor = "white";
                }});




            });




        })


        document.addEventListener('keydown', function(e) {

            if (e.keyCode===40) {



                if (targetElement===null){



                    index=0;
                    targetElement = document.getElementsByTagName("P")[0];
                    targetText = document.getElementsByTagName("P")[0].innerHTML;
                    document.getElementsByTagName("P")[index].style.color = "blue";
                    document.getElementsByTagName("P")[index].style.backgroundColor = "yellow";
                    //    index = matchCountries.indexOf(targetText);
                    console.log(targetText);



                }
                else {

                    document.getElementsByTagName("P")[index].style.color = "black";
                    document.getElementsByTagName("P")[index].style.backgroundColor = "white";

                    document.getElementsByTagName("P")[index+1].style.color = "blue";
                    document.getElementsByTagName("P")[index+1].style.backgroundColor = "yellow";
                    index+=1;
                    if(index>3) {index=0;}
                    targetText = document.getElementsByTagName("P")[index].innerHTML;
                    console.log(targetText);


                };
            };


            if (e.keyCode===38) {

                document.getElementsByTagName("P")[index].style.color = "black";
                document.getElementsByTagName("P")[index].style.backgroundColor = "white";
                document.getElementsByTagName("P")[index-1].style.color ="blue";
                document.getElementsByTagName("P")[index-1].style.backgroundColor = "yellow";
                index-=1;
                if(index<0) {index=0;}
                targetText = document.getElementsByTagName("P")[index].innerHTML;

            }
            if (e.keyCode===13) {
                textArea.value = targetText;

                for (var j=0;j<counter+1;j++){
                    results.innerHTML = "";
                }
                results.style.height="0px";

            }


        });


    results.addEventListener('click', function(e) {
        if(e.target.tagName=="P"){
            textArea.value = e.target.innerHTML;

            for (var j=0;j<counter+1;j++){
                results.innerHTML = "";
            }
            results.style.height="0px";            }

    });



    })();
