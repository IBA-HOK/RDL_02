import {createApp} from "https://unpkg.com/vue@3.2.4/dist/vue.esm-browser.prod.js";


const app = createApp({
    setup() {
        const vocaloidBirthYear = 2004;
        const vocaloidBirthMonth = 3;
        let vocaloidAgeArray = toAge(vocaloidBirthYear, vocaloidBirthMonth)
        let vocaloidAge = vocaloidAgeArray[0] + "年と" + vocaloidAgeArray[1] + "か月前に生まれた"

        let synthesizervBirthYear = 2018;
        let synthesizervBirthMonth = 8;
        let synthesizervAgeArray = toAge(synthesizervBirthYear, synthesizervBirthMonth)
        let synthesizervAge = synthesizervAgeArray[0] + "年と" + synthesizervAgeArray[1] + "か月前に生まれた"

        let UTAUBirthYear = 2008;
        let UTAUBirthMonth = 3;
        let UTAUAgeArray = toAge(UTAUBirthYear, UTAUBirthMonth)
        let UTAUAge = UTAUAgeArray[0] + "年と" + UTAUAgeArray[1] + "か月前に生まれた"

        let CeVIOBirthYear = 2013;
        let CeVIOBirthMonth = 4;
        let CeVIOAgeArray = toAge(CeVIOBirthYear, CeVIOBirthMonth)
        let CeVIOAge = CeVIOAgeArray[0] + "年と" + CeVIOAgeArray[1] + "か月前に生まれた"

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
