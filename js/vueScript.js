import {createApp} from "https://unpkg.com/vue@3.2.4/dist/vue.esm-browser.prod.js";


const app = createApp({
    setup() {
        const vocaloidBirthYear = 2004;
        const vocaloidBirthMonth = 3;
        const synthesizervBirthYear = 2018;
        const synthesizervBirthMonth = 8;
        const UTAUBirthYear = 2008;
        const UTAUBirthMonth = 3;
        const CeVIOBirthYear = 2013;
        const CeVIOBirthMonth = 4;

        let vocaloidAge =  toAgeText(vocaloidBirthYear, vocaloidBirthMonth)
        let synthesizervAge = toAgeText(synthesizervBirthYear, synthesizervBirthMonth)
        let UTAUAge = toAgeText(UTAUBirthYear, UTAUBirthMonth)
        let CeVIOAge = toAgeText(CeVIOBirthYear, CeVIOBirthMonth)
        return {
            vocaloidAge,
            synthesizervAge,
            UTAUAge,
            CeVIOAge
        };
    },
});
app.mount("#app");

function toAge(birthYear, birthMonth) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    let ageYear = currentYear - birthYear;
    let ageMonth = currentMonth - birthMonth;
    if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
    }
    return [ageYear, ageMonth]
}
function toAgeText(birthYear, birthMonth) {
    let ageArray = toAge(birthYear, birthMonth);
    return ageArray[0] + "年と" + ageArray[1] + "か月前に生まれた"
}
