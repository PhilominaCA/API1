document.getElementById("occDate").value = "";

function handleKeypress(e) {
    //Enter Key Press
    if (e.keyCode === 13) {
        getChurchOc();
    }
};
//calender fetch function
async function getChurchOc() {
    let kuralNum = document.getElementById("occDate").value;

    //check for null value
    if (kuralNum == "") {
        alert("Please enter a Kural number");
    } else if (kuralNum > 1330 || kuralNum < 1 || isNaN(kuralNum)) {
        alert("Please enter a valid Kural number in range 1 to 1330");
        document.getElementById("occDate").value = "";

    } else {
        //fetch API data
        try {
            const calData = await fetch(`https://api-thirukkural.vercel.app/api?num=${parseInt(kuralNum)}`);
            const calJson = await calData.json();
            var calDataDisp = document.getElementById("cal_data_disp");
            var kuralcol = document.getElementsByTagName("td");
            kuralcol[1].innerHTML = calJson.line1 + "<br>" + calJson.line2;
            kuralcol[3].innerHTML = calJson.tam_exp;
            kuralcol[5].innerHTML = calJson.eng;
            kuralcol[7].innerHTML = calJson.eng_exp;
            document.getElementById("occDate").value = "";
        }

        //Error Handle
        catch (err) {
            document.getElementById("cal_data_disp").innerHTML = `<h2>Sorry! Can't fetch the data now! Please try agin Later..</h2>`;
            console.log(err);
        }
    }
}