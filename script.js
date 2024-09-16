//   document.getElementById('FormResume')?.addEventListener('submit', function(event) {
//     event.preventDefault();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
//     // Get references to form elements using their IDs
//     const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
//     const firstnameElement = document.getElementById('firstName') as HTMLInputElement;
//     const lastNameElement = document.getElementById('lastName') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const addressElement = document.getElementById('address') as HTMLInputElement;
//     const genderElement = document.getElementById('gender') as HTMLInputElement;
//     const nationalityElement = document.getElementById('nationality') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLInputElement;
//     const companyElement = document.getElementById('company') as HTMLInputElement;
//     const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
//     const personNameElement = document.getElementById('personName') as HTMLInputElement;
//     const hobbiesElement = document.getElementById('hobbies') as HTMLInputElement;
//     const languagesElement = document.getElementById('languages') as HTMLInputElement;
//     const referencesElement = document.getElementById('references') as HTMLTextAreaElement;
//     // Check if all elements exist
//     if (
//         profilePictureInput &&
//         firstnameElement &&
//         lastNameElement &&
//         phoneElement &&
//         emailElement &&
//         addressElement &&
//         genderElement &&
//         nationalityElement &&
//         educationElement &&
//         companyElement &&
//         skillsElement &&
//         personNameElement &&
//         hobbiesElement &&
//         languagesElement &&
//         referencesElement
//     ) {
//         const name = firstnameElement.value;
//         const lastName = lastNameElement.value;
//         const phone = phoneElement.value;
//         const email = emailElement.value;
//         const address = addressElement.value;
//         const gender = genderElement.value;
//         const nationality = nationalityElement.value;
//         const education = educationElement.value;
//         const company = companyElement.value;
//         const skills = skillsElement.value;
//         const personName = personNameElement.value;
//         const hobbies = hobbiesElement.value;
//         const languages = languagesElement.value;
//         const references = referencesElement.value;
//         const uniquePath = `${personName.replace(/\s+/g, '_')}_cv.html`;
//         // Handle profile picture
//         const profilePictureFile = profilePictureInput.files?.[0];
//         const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
//         // Create resume output
//         const resumeOutput = `
//             <h2>Resume</h2>
//             <h3>Personal Information</h3>
//             ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Last Name:</strong> ${lastName}</p>
//             <p><strong>Phone:</strong> ${phone}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Address:</strong> ${address}</p>
//             <p><strong>Gender:</strong> ${gender}</p>
//             <p><strong>Nationality:</strong> ${nationality}</p>
//             <h3>Education</h3>
//             <p><strong>education:</strong> ${education}</p>
//             <h3>Work Experience</h3>
//             <p><strong>Company:</strong> ${company}</p>
//             <h3>Skills</h3>
//             <p>${skills}</p>
//             <h3>Additional Information</h3>
//             <p><strong>Hobbies:</strong> ${hobbies}</p>
//             <p><strong>Languages:</strong> ${languages}</p>
//             <p><strong>References:</strong> ${references}</p>
//         `;
//     //Display the resume in the output file
//     const resumeOutputElement = document.getElementById ('resumeOutput');
//     if (resumeOutputElement) {
//         resumeOutputElement.innerHTML=  references;
//         resumeOutputElement.classList.remove("hiddeen");
//     //create container for buttons
//     const buttonContainer = document.createElement('div');
//     buttonContainer.id = "buttonContainer"
//     resumeOutputElement.appendChild(buttonContainer);
//     //add download PDF button
//     const downloadButton = document.createElement("button");
//     downloadButton.textContent = "Download PDF";
//     downloadButton.addEventListener("click", () =>{
//         window.print();
//     });
//     buttonContainer.appendChild(downloadButton);
//     //add share button
//     const shareLinkButton = document.createElement("button");
//     shareLinkButton.textContent = "copy shareable link";
//     shareLinkButton.addEventListener("click", async () => {
//         try {
//             const shareLink = `https://yourdomain.com/resumes/${name.replace(/\s+/g, "_" )}_cv.html`;
//         //use clipboard API to create a copy of the link
//         await navigator.clipboard.writeText(shareLink);
//         alert("Shareable link has been copied to your clipboard");
//         }catch (error){
//             console.error("Error copying link to clipboard: ", error);
//             alert("Failed to copy shareable link to clipboard");
//         }
//     });
//     buttonContainer.appendChild(shareLinkButton);
// } else {
//     console.error('Cannot find resume output element');
// }
// } else {
//     console.error('Cannot find one or more form elements');
//  }
// });
(_a = document.getElementById('FormResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    // Get references to form elements using their IDs
    var profilePictureInput = document.getElementById('profilePicture');
    var firstnameElement = document.getElementById('firstName');
    var lastNameElement = document.getElementById('lastName');
    var phoneElement = document.getElementById('phone');
    var emailElement = document.getElementById('email');
    var addressElement = document.getElementById('address');
    var genderElement = document.getElementById('gender');
    var nationalityElement = document.getElementById('nationality');
    var educationElement = document.getElementById('education');
    var workExperienceElement = document.getElementById('workExperience');
    var skillsElement = document.getElementById('skills');
    var additionalInfoElement = document.getElementById('additionalInfo');
    var personNameElement = document.getElementById('personName');
    // Check if all required elements exist
    if (profilePictureInput && firstnameElement && lastNameElement &&
        phoneElement && emailElement && addressElement && genderElement &&
        nationalityElement && educationElement && workExperienceElement &&
        skillsElement && personNameElement) {
        var name_1 = firstnameElement.value;
        var lastName = lastNameElement.value;
        var phone = phoneElement.value;
        var email = emailElement.value;
        var address = addressElement.value;
        var gender = genderElement.value;
        var nationality = nationalityElement.value;
        var education = educationElement.value;
        var workExperience = workExperienceElement.value;
        var skills = skillsElement.value;
        var additionalInfo = additionalInfoElement ? additionalInfoElement.value : '';
        // Handle profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Create resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            <h3>Personal Information</h3>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n            <p><strong>Name:</strong> ").concat(name_1, "</p>\n            <p><strong>Last Name:</strong> ").concat(lastName, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            <p><strong>Gender:</strong> ").concat(gender, "</p>\n            <p><strong>Nationality:</strong> ").concat(nationality, "</p>\n\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n\n            <h3>Work Experience</h3>\n            <p>").concat(workExperience, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n\n            <h3>Additional Information</h3>\n            <p>").concat(additionalInfo, "</p>\n        ");
        // Display the resume
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove('hidden');
            // Add download PDF button
            var downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download PDF';
            downloadButton.addEventListener('click', function () { return window.print(); });
            resumeOutputElement.appendChild(downloadButton);
            // Add share link button
            var shareLinkButton = document.createElement('button');
            shareLinkButton.textContent = 'Copy Shareable Link';
            shareLinkButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                var shareLink, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            shareLink = "https://yourdomain.com/resumes/".concat(personNameElement.value.replace(/\s+/g, '_'), "_cv.html");
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, navigator.clipboard.writeText(shareLink)];
                        case 2:
                            _a.sent();
                            alert('Shareable link copied to clipboard');
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.error('Error copying link to clipboard:', error_1);
                            alert('Failed to copy shareable link');
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            resumeOutputElement.appendChild(shareLinkButton);
        }
        else {
            console.error('Cannot find resume output element');
        }
    }
    else {
        console.error('Cannot find one or more form elements');
    }
});
