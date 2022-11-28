const data =[
    {
        name: "Sara",
        Maths:"78",
        Physics:"91",
        Chemistry:"82",
        Percentage : "83%",
        Result:"PASS"

    },
    {
        name: "Mathew",
        Maths:"90",
        Physics:"97",
        Chemistry:"94",
        Percentage : "93%"  ,
         Result:"PASS"
    },
    {
        name: "Rishi",
        Maths:"85",
        Physics:"91",
        Chemistry:"79",
        Percentage : "85%",
        Result:"PASS"
    },
    {
        name: "Ishitha",
        Maths:"75",
        Physics:"61",
        Chemistry:"59",
        Percentage : "65%",
        Result:"PASS"
    },
    {
        name: "Mukesh",
        Maths:"35",
        Physics:"41",
        Chemistry:"31",
        Percentage : "35%",
        Result:"FAIL"
        
    },
    {
        name: "Minie",
        Maths:"55",
        Physics:"71",
        Chemistry:"79",
        Percentage : "68%",
        Result:"PASS"
    },

    {
        name: "Sharvani",
        Maths:"95",
        Physics:"91",
        Chemistry:"99",
        Percentage : "95%",
        Result:"PASS"
    },
    {
        name: "Yash",
        Maths:"25",
        Physics:"41",
        Chemistry:"59",
        Percentage : "48%",
        Result:"PASS"
        
    }

]
const results = document.getElementById('result')
const Subbutton = document.getElementById('sub-button')
Subbutton.addEventListener("click",function(){
    const name = document.getElementById('name').value;
    for(let i=0;i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML = "<h3>" + "Maths: " + data[i].Maths + "</h3>" + "<h3>" + "Physics : "+ data[i].Physics + "</h3>"+"<h3>" +
        "Chemistry : " +data[i].Chemistry + "</h3>"+ "Percentage : " + data[i].Percentage + "</h3>"    
    return;
    }
    }
    results.innerHTML = "<h3>"+"No Data"+"</h3>"
})