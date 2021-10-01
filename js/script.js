//calender fetch function
async function getChurchOc() {
    let kuralNum = document.getElementById("occDate").value;

    //check for null value
    if (kuralNum == "") {
        alert("Please enter a Kural number");
    } else if (kuralNum > 1330 || kuralNum < 1) {
        alert("Please enter a valid Kural number in range 1 to 1330");
    } else {

        //fetch API data
        try {
            const calData = await fetch(`https://api-thirukkural.vercel.app/api?num=${kuralNum}`);
            const calJson = await calData.json();
            var calDataDisp = document.getElementById("cal_data_disp");
            var kuralcol = document.getElementsByTagName("td");
            kuralcol[1].innerHTML = calJson.line1 + "<br>" + calJson.line2;
            kuralcol[3].innerHTML = calJson.tam_exp;
            kuralcol[5].innerHTML = calJson.eng;
            kuralcol[7].innerHTML = calJson.eng_exp;
            /*
                        //API data manipulation
                        const calJson = await calData.json();
                        var calDataDisp = document.getElementById("cal_data_disp");

                        //clear the data before each reqeust
                        calDataDisp.innerHTML = "";

                        for (let i = 0; i < calJson.length; i++) {
                            var dateDiv = document.createElement("div");
                            dateDiv.id = "dateDiv";
                            var dateSpan = document.createElement("span");
                            dateSpan.id = "date";
                            dateSpan.innerHTML = i + 1;
                            var occSpan = document.createElement("span");
                            occSpan.id = "occSpan";
                            dateDiv.appendChild(dateSpan);
                            dateDiv.appendChild(occSpan);
                            calDataDisp.appendChild(dateDiv);

                            for (let j = 0; j < calJson[i].celebrations.length; j++) {
                                let occSpan = document.querySelectorAll("#occSpan");
                                let occDiv = document.createElement("div");
                                occDiv.innerHTML = calJson[i].celebrations[j].title;
                                occDiv.style.background = calJson[i].celebrations[j].colour;
                                occDiv.id = "occDiv";
                                occSpan[i].appendChild(occDiv);
                            }
                        }*/
        }

        //Error Handle
        catch (err) {
            document.getElementById("cal_data_disp").innerHTML = `<h2>Sorry! Can't fetch the data now! Please try agin Later..</h2>`;
            console.log(err);
        }
    }
}