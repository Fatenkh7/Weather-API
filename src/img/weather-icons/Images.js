const IMAGES = {
  cloudy: require("./cloudy.svg").default,
  clear: require("./clear.svg").default,
  mostlycloudy: require("./mostlycloudy.svg").default,
  partlycloudy: require("./partlycloudy.svg").default,
  snow: require("./snow.svg").default,
  storm: require("./storm.svg").default,
  rain: require("./rain.svg").default,
  fog: require("./fog.svg").default,
  drizzle: require("./drizzle.svg").default,
};
function imageSrc(){
    if (this=="cloudy") return IMAGES.cloudy;
    else if (this=="clear") return IMAGES.clear;
    else if (this=="mostlycloudy") return IMAGES.mostlycloudy;
    else if (this=="partlycloudy") return IMAGES.partlycloudy;
    else if (this=="snow") return IMAGES.snow;
    else if (this=="storm") return IMAGES.storm;
    else if (this=="rain") return IMAGES.rain;
    else if (this=="fog") return IMAGES.fog;
    else if (this=="drizzle") return IMAGES.drizzle;
}
export default (IMAGES,imageSrc())