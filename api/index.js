//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios')

// Syncing all the models at once.
conn.sync({ force: false }).then(() => { //true=borra //false=guarda
  server.listen(3001, async () => {
    const allCountries = await Country.findAll();
    if(allCountries.length){
      console.log('Ya Existe BD')
    }else{
      const countriesRes = await axios.get('https://restcountries.com/v3/all');
      var apiCountries = countriesRes.data.map((api) => {
        return {
          id: api.cca3,
          name: api.translations.spa.common, 
          image: api.flags[0],
          region: api.continents[0],
          capital: api.capital ? api.capital[0] : 'No Posee Capital', 
          subregion: api.subregion,
          area: api.area, 
          population: api.population  
        }
      })
          await Country.bulkCreate(apiCountries);
          console.log('BD Creada')
    }
    console.log('server corriendo en el puerto',3001); // eslint-disable-line no-console
  });
});
