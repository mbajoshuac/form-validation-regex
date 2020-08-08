// user inputs
var fullName = "Joshua Mba";
var email = "joshua.mba.g20@gmail.com";
var userName = "mbajoshuac";
var dob = "dd-mm-yyyy";
var website = "https://angelicinfo.com";
var streetAddress = "No 1, Eden Street, GloryLannd, Heaven.";

/* 
 * Regular expression for each field
 */
//Accepts Letter only and not less than 2 letter
var fullNameRegexp = /([a-zA-Z]+){2,}/

//This email regexp also accepts custom domain emails like joshua.com.ng
var emailRegexp = /^([a-zA-Z0-9\.\-_]+)@([a-zA-z]+)\.([a-z]{2,6}(.[a-z]{2})?)$/

// Username Regexp that accept alphnumeric
var userNameRegexp = /([a-zA-Z0-9]+)/

//Regexp validates dob for valide dd-mm-yyyy
var dobRegexp = /^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/

//Website url Validate website with any domain extension
var websiteRegexp = /^(https?:\/\/+)([a-z0-9]+)\.([a-z]{2,6}(.[a-z]{2})?)$/

//Validate street address in this format No 1, my address, state, country.
var streetAddressRegexp = /^([N|n]o\s\d+),\s?([\w+\s?\w?]+),\s?([A-z]+),\s?([A-z]+)\.?$/

//validating function
const validator = (fullName, email, userName, dob, website, streetAddress) => {
    fullNameResult = fullNameRegexp.test(fullName);
    emailResult = emailRegexp.test(email);
    userNameResult = userNameRegexp.test(userName);
    dobResult = dobRegexp.test(dob);
    websiteResult = websiteRegexp.test(website);
    streetAddressResult = streetAddressRegexp.test(streetAddress);

    if (fullNameResult, emailResult, userNameResult, dobResult, websiteResult, streetAddressResult) {
        console.log(true);
    } else {
        console.log(false);
    }

}

validator(fullName, email, userName, dob, website, streetAddress);