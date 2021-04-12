/*
 * (C) 2020 TekMonks. All rights reserved.
 * License: MIT - see enclosed LICENSE file.
 */

// Custom modules
const API_CONSTANTS = require(`${CONSTANTS.APPROOTDIR}/model1/apis/lib/constants`);
const connection = require(`${CONSTANTS.APPROOTDIR}/model1/conf/config`);

exports.doService = async (jsonReq) => {
  // Validate API request and check mandatory payload required
  if (!validateRequest(jsonReq)) return API_CONSTANTS.API_INSUFFICIENT_PARAMS;

  return new Promise((resolve, reject) => {
    try {
        //console.log(jsonReq.roll);
        connection.query(`insert into trailusers(name, email) values('${jsonReq.name}', '${jsonReq.email}')`, (err, result) => {
            if(!err) {
                return resolve(result);
            }
            else 
                return resolve(err);
        })
    } catch (error) {
        return false;
    }
  });
    
}

let validateRequest = (jsonReq) => jsonReq && jsonReq.name && jsonReq.email;
