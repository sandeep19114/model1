/*
* (C) 2020 TekMonks. All rights reserved.
* License: MIT - see enclosed license.txt file.
*/
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";
import { APP_CONSTANTS } from "../../js/constants.mjs";

const freeTrail = async () => {
    var params = {
        name : home_body.shadowRoot.getElementById("name").value,
        email : home_body.shadowRoot.getElementById("email").value
    }
    console.log(params);
    // calling api to store params value in db
    let respObj = await apiman.rest(APP_CONSTANTS.API_ADD_USER, "POST", params, false, true);
    console.log(respObj);
    if(respObj.affectedRows)
        alert("You can proceed to trail version now");
}

function register() {
 // convert this all into a WebComponent so we can use it
 monkshu_component.register("home-body",
`${APP_CONSTANTS.APP_PATH}/components/home-body/home-body.html`, home_body);
}
const trueWebComponentMode = false; // making this false renders the component without using Shadow DOM
export const home_body = { trueWebComponentMode, register, freeTrail }
