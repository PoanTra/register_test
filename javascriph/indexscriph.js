const form = document.querySelector('#Form')

form.addEventListener("submit" , (e) =>{ e.preventDefault()

    alert("ការស្នើរសុំធ្វើតេស្តទទួលបានជោគេជ័យ");

    var txtkhmer = document.querySelector("#NameKh").value;
    var txtenglish = document.querySelector("#NameEng").value;
    var txtlanguage = document.querySelector("#Language").value;
    var txtoldlevel = document.querySelector("#OldLevel").value;
    var txtlevel = document.querySelector("#Level").value;
    var txtdate = document.querySelector("#Date").value;
    var txtphone = document.querySelector("#Phone").value;

    var my_text = `- ឈ្មោះជាអក្សរខ្មែរ : ${txtkhmer}
    %0A - ឈ្មោះជាអក្សរឡាតាំង : ${txtenglish}
    %0A - តេស្តភាសា: ${txtlanguage}
    %0A - កម្រិតធ្លាប់សិក្សា: ${txtoldlevel}
    %0A ${txtlevel}
    %0A - ថ្ងៃធ្វើតេស្ត : ${txtdate}
    %0A - លេខទូរសព្ទ : ${txtphone}`

    var token = "7919041010:AAEqjFza-NSkZ8oVuZ46xqR6fkJ8HDV-bq0";

    var chat_id = "-4781733136";

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

})


function showMoreOption(){
    var select = document.getElementById('Language');
    var studentKnow = document.getElementById('hite');
    if(select.value === "បារាំង"){
        studentKnow.style.display = "block";
    }else{
        studentKnow.style.display = "none";
    }
}