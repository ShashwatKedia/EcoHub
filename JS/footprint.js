let household_arr_ef = ['0.7','0.59','3.1','1.3'];
let household_arr_name = ['electricity','water','fuel_oil','waste'];
let travel_arr_ef = ['0.27','0.53','0.07','0.31'];
let travel_arr_name = ['vehicle','bus','train','airplane'];

function calculate(){
    var sub_total_household=0, sub_total_travel=0;
    for(let i=0;i<household_arr_name.length;i++){
        let name = household_arr_name[i];
        let amount = document.getElementById(`${name}`).value;
        let ef = household_arr_ef[i];
        sub_total_household = sub_total_household + (amount * ef);
        
        console.log(sub_total_household)

    }

    for(let i=0;i<travel_arr_name.length;i++){
        let name = travel_arr_name[i];
        let amount = document.getElementById(`${name}`).value;
        let ef = travel_arr_ef[i];
        var sub_total_travel = sub_total_travel + (amount * ef);
        console.log(sub_total_travel)
    }
    let total = sub_total_household + sub_total_travel;
    if(total<=6000){
        alert(`Congratulations!! Your annual CO2 emmission is ${total} kg/yr, which is below standard average`);
    }
    else if(total>6000 && total<=10000){
        alert(`Your annual CO2 emmission is ${total} kg/yr, which lies in standard average range`);
    }
    else{
        alert(`Be alert!! Your annual CO2 emmission is ${total} kg/yr, which is above the standard average`);
    }

}
