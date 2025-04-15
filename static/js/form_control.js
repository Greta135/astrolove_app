const user_name = document.getElementById('name');
const sex = document.getElementById('sex');
const social = document.getElementById('social');
const day_of_birth = document.getElementById('day');
const month_of_birth = document.getElementById('month');
const year_of_birth = document.getElementById('year');
const time_of_birth = document.getElementById('birthtime');
const place_of_birth = document.getElementById('birthplace');
const sign = document.getElementById('sign');
const place = document.getElementById("place");
const distance = document.getElementById("distance");
const orientation_field = document.getElementById("orientation");
const searching = document.getElementById("searching");
const status_field = document.getElementById("status")
const older_gap = document.getElementById("gapage");
const youger_gap = document.getElementById("agegap");

const gives = document.querySelector(".give");
const my_appearance = document.querySelector(".my-appearance");
const height = document.querySelector(".height");
const physique = document.querySelector(".physique");
const hair_color = document.querySelector(".hair_color");
const hair_type = document.querySelector(".hair_type");
const eye_color = document.querySelector(".eye_color");
const skin_color = document.querySelector(".skin_color");
const face_type = document.querySelector(".face_type");
const tattoos = document.querySelector(".tattoos");

const my_character = document.querySelector(".my-character");
const char = document.querySelector(".char");
const fun = document.querySelector(".fun");
const introextra = document.querySelector(".introextra");
const achieve = document.querySelector(".achieve");
const lifestyle = document.querySelector(".lifestyle");
const energy = document.querySelector(".energy");
const temperament = document.querySelector(".temperament");
const personality = document.querySelector(".personality");
const charisma = document.querySelector(".charisma");
const depend = document.querySelector(".depend");

const gets = document.querySelector(".get");
const partner_appearance = document.querySelector(".partner-appearance");
const partner_height = document.querySelector(".partner_height");
const partner_physique = document.querySelector(".partner_physique");
const partner_hair_color = document.querySelector(".partner_hair_color");
const partner_hair_type = document.querySelector(".partner_hair_type");
const partner_eye_color = document.querySelector(".partner_eye_color");
const partner_skin_color = document.querySelector(".partner_skin_color");
const partner_face_type = document.querySelector(".partner_face_type");
const partner_tattoos = document.querySelector(".partner_tattoos");

const partner_character = document.querySelector(".partner-character");
const partner_char = document.querySelector(".partner_char");
const partner_fun = document.querySelector(".partner_fun");
const partner_introextra = document.querySelector(".partner_introextra");
const partner_achieve = document.querySelector(".partner_achieve");
const partner_lifestyle = document.querySelector(".partner_lifestyle");
const partner_energy = document.querySelector(".partner_energy");
const partner_temperament = document.querySelector(".partner_temperament");
const partner_personality = document.querySelector(".partner_personality");
const partner_charisma = document.querySelector(".partner_charisma");
const partner_depend = document.querySelector(".partner_depend");



function save_form(){
    
    // что я могу предложить другому человеку
    let give_checkbox = gives.querySelectorAll('input[type=checkbox]:checked');
    
    // моя внешность
    let height_radio = height.querySelector('input[type=radio]:checked');
    let physique_radio = physique.querySelector('input[type=radio]:checked');
    let hair_color_radio = hair_color.querySelector('input[type=radio]:checked');
    let hair_type_radio = hair_type.querySelector('input[type=radio]:checked');
    let eye_color_radio = eye_color.querySelector('input[type=radio]:checked');
    let skin_color_radio = skin_color.querySelector('input[type=radio]:checked');
    let face_type_radio = face_type.querySelector('input[type=radio]:checked');
    let tattoos_radio = tattoos.querySelector('input[type=radio]:checked');

    // мой характер
    let char_radio = char.querySelector('input[type=radio]:checked');
    let fun_radio = fun.querySelector('input[type=radio]:checked');
    let introextra_radio = introextra.querySelector('input[type=radio]:checked');
    let achieve_radio = achieve.querySelector('input[type=radio]:checked');
    let lifestyle_radio = lifestyle.querySelector('input[type=radio]:checked');
    let energy_radio = energy.querySelector('input[type=radio]:checked');
    let temperament_radio = temperament.querySelector('input[type=radio]:checked');
    let personality_radio = personality.querySelector('input[type=radio]:checked');
    let charisma_radio = charisma.querySelector('input[type=radio]:checked');
    let depend_radio = depend.querySelector('input[type=radio]:checked');

    // что я хочу получить от другого человека
    let get_checkbox = gets.querySelectorAll('input[type=checkbox]:checked');

    // внешность другого человека
    let partner_height_radio = partner_height.querySelector('input[type=radio]:checked');
    let partner_physique_radio = partner_physique.querySelector('input[type=radio]:checked');
    let partner_hair_color_radio = partner_hair_color.querySelector('input[type=radio]:checked');
    let partner_hair_type_radio = partner_hair_type.querySelector('input[type=radio]:checked');
    let partner_eye_color_radio = partner_eye_color.querySelector('input[type=radio]:checked');
    let partner_skin_color_radio = partner_skin_color.querySelector('input[type=radio]:checked');
    let partner_face_type_radio = partner_face_type.querySelector('input[type=radio]:checked');
    let partner_tattoos_radio = partner_tattoos.querySelector('input[type=radio]:checked');

    // характер другого человека
    let partner_char_radio = partner_char.querySelector('input[type=radio]:checked');
    let partner_fun_radio = partner_fun.querySelector('input[type=radio]:checked');
    let partner_introextra_radio = partner_introextra.querySelector('input[type=radio]:checked');
    let partner_achieve_radio = partner_achieve.querySelector('input[type=radio]:checked');
    let partner_lifestyle_radio = partner_lifestyle.querySelector('input[type=radio]:checked');
    let partner_energy_radio = partner_energy.querySelector('input[type=radio]:checked');
    let partner_temperament_radio = partner_temperament.querySelector('input[type=radio]:checked');
    let partner_personality_radio = partner_personality.querySelector('input[type=radio]:checked');
    let partner_charisma_radio = partner_personality.querySelector('input[type=radio]:checked');
    let partner_depend_radio = partner_depend.querySelector('input[type=radio]:checked');

    // if (user_name && sex && social && day_of_birth && month_of_birth && year_of_birth && time_of_birth && place_of_birth &&
    //     sign && place && distance && orientation_field && searching && status_field && older_gap && youger_gap && height_radio &&
    //     give_checkbox && physique_radio && hair_color_radio && hair_type_radio && eye_color_radio && skin_color_radio && face_type_radio &&
    //     tattoos_radio && char_radio && fun_radio && introextra_radio && achieve_radio && lifestyle_radio && energy_radio && temperament_radio &&
    //     personality_radio && charisma_radio && depend_radio && get_checkbox && partner_height_radio && partner_physique_radio && 
    //     partner_hair_color_radio && partner_hair_type_radio && partner_eye_color_radio && partner_skin_color_radio && partner_face_type_radio &&
    //     partner_tattoos_radio && partner_char_radio && partner_fun_radio && partner_introextra_radio && partner_achieve_radio && 
    //     partner_lifestyle_radio && partner_energy_radio && partner_temperament_radio && partner_personality_radio && partner_charisma_radio &&
    //     partner_depend_radio
    // ){

    let error = false;

    let my_appearance_str = "";
    if (height_radio && physique_radio && hair_color_radio && hair_type_radio && 
        eye_color_radio && skin_color_radio && face_type_radio && tattoos_radio){
        let my_appearance_list = [];
        let my_appearance_choice = my_appearance.querySelectorAll('input[type=radio]:checked');
        
        my_appearance_choice.forEach((ma) => {
            my_appearance_list.push(ma.value);
        });

        my_appearance_str = my_appearance_list.join(",")
    } else {
        // alert("Заполните все поля в разделе - описание своей внешности");
        error = true;
    }


    let my_character_str = "";
    if (char_radio && fun_radio && introextra_radio && achieve_radio && lifestyle_radio &&
        energy_radio && temperament_radio && personality_radio && charisma_radio && depend_radio){
        let my_character_list = [];
        let my_character_choice = my_character.querySelectorAll('input[type=radio]:checked');
        
        my_character_choice.forEach((mc) => {
            my_character_list.push(mc.value);
        });

        my_character_str = my_character_list.join(",")
    } else {
        // alert("Заполните все поля в разделе - описание своего характера");
        error = true;
    }

    let partner_appearance_str = "";
    if (partner_height_radio && partner_physique_radio && partner_hair_color_radio && partner_hair_type_radio &&
        partner_eye_color_radio && partner_skin_color_radio && partner_face_type_radio && partner_tattoos_radio){
        let partner_appearance_list = [];
        let partner_appearance_choice = partner_appearance.querySelectorAll('input[type=radio]:checked');
        
        partner_appearance_choice.forEach((pa) => {
           partner_appearance_list.push(pa.value);
        });

        partner_appearance_str = partner_appearance_list.join(",")
    } else {
        // alert("Заполните все поля в разделе - описание внешности другого человека");
        error = true;
    }

    let partner_character_str = "";
    if (partner_char_radio && partner_fun_radio && partner_introextra_radio && partner_achieve_radio && partner_lifestyle_radio && 
        partner_energy_radio && partner_temperament_radio && partner_personality_radio && partner_charisma_radio && partner_depend_radio){
        let partner_character_list = [];
        let partner_character_choice = partner_character.querySelectorAll('input[type=radio]:checked');
        
        partner_character_choice.forEach((pc) => {
            partner_character_list.push(pc.value);
        });

        partner_character_str = partner_character_list.join(",")
    } else {
        // alert("Заполните все поля в разделе - описание характера другого человека");
        error = true;
    }

    let give_str = "";
    if (give_checkbox.length){
        let give_list = [];

        give_checkbox.forEach((gv) => {
            give_list.push(gv.value);
        });

        console.log(give_list);
        give_str = give_list.join(",")
    }else{
        error = true;
    }

    let get_str = "";
    if (get_checkbox.length){
        let get_list = [];
        
        get_checkbox.forEach((gt) => {
            get_list.push(gt.value);
        });

        get_str = get_list.join(",")
    }else{
        error = true;
    }

    if (!error){
        data = [];
        
        data.push({
            user_name: user_name.value,
            sex: sex.value,
            social: social.value,
            day_of_birth: day_of_birth.value,
            month_of_birth: month_of_birth.value,
            year_of_birth: year_of_birth.value,
            time_of_birth: time_of_birth.value,
            place_of_birth: place_of_birth.value,
            sign: sign.value,
            place: place.value,
            distance: distance.value,
            orientation_field: orientation_field.value,
            searching: searching.value,
            status_field: status_field.value,
            older_gap: older_gap.value,
            youger_gap: youger_gap.value,
            height_radio: height_radio.value,
            give_str: give_str,
            my_appearance_str: my_appearance_str,
            my_character_str: my_character_str,
            get_str: get_str,
            partner_appearance_str: partner_appearance_str,
            partner_character_str: partner_character_str
        });

        console.log(JSON.stringify(data))
    } else {
        alert("Заполните все поля!");
    }

        // fetch('/save', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(reg_data),
        // })
        // .then((data) => {
        //     // window.location.reload();
        //     console.log(data);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
}


document.getElementById('next1').addEventListener('click', save_form);
