/*
* (C) 2020 TekMonks. All rights reserved.
* License: MIT - see enclosed license.txt file.
*/
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";
import { APP_CONSTANTS } from "../../js/constants.mjs";


function register() {
 // convert this all into a WebComponent so we can use it
 monkshu_component.register("home-body",
`${APP_CONSTANTS.APP_PATH}/components/home-body/home-body.html`, home_body);
}
const trueWebComponentMode = false; // making this false renders the component without using Shadow DOM
export const home_body = { trueWebComponentMode, register }
