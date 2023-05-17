const ageElement = document.querySelector('#age');
let age = getAge('2003-04-08')
ageElement.innerHTML = age;

function getAge(dateString) {
    /**
     * Calculate the age based on a given birth date.
     * https://stackoverflow.com/a/7091965
     * 
     * @param {string} dateString - A string representing the birth date in the format yyyy-mm-dd.
     * @returns {number} - The age calculated from the birth date.
     */

    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}