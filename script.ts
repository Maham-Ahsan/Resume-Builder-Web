//   document.getElementById('FormResume')?.addEventListener('submit', function(event) {
//     event.preventDefault();

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

document.getElementById('FormResume')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get references to form elements using their IDs
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const firstnameElement = document.getElementById('firstName') as HTMLInputElement;
    const lastNameElement = document.getElementById('lastName') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLTextAreaElement;
    const genderElement = document.getElementById('gender') as HTMLSelectElement;
    const nationalityElement = document.getElementById('nationality') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const workExperienceElement = document.getElementById('workExperience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    const additionalInfoElement = document.getElementById('additionalInfo') as HTMLTextAreaElement;
    const personNameElement = document.getElementById('personName') as HTMLInputElement;

    // Check if all required elements exist
    if (
        profilePictureInput && firstnameElement && lastNameElement &&
        phoneElement && emailElement && addressElement && genderElement &&
        nationalityElement && educationElement && workExperienceElement &&
        skillsElement && personNameElement
    ) {
        const name = firstnameElement.value;
        const lastName = lastNameElement.value;
        const phone = phoneElement.value;
        const email = emailElement.value;
        const address = addressElement.value;
        const gender = genderElement.value;
        const nationality = nationalityElement.value;
        const education = educationElement.value;
        const workExperience = workExperienceElement.value;
        const skills = skillsElement.value;
        const additionalInfo = additionalInfoElement ? additionalInfoElement.value : '';

        // Handle profile picture
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        // Create resume output
        const resumeOutput = `
            <h2>Resume</h2>
            <h3>Personal Information</h3>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Nationality:</strong> ${nationality}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Work Experience</h3>
            <p>${workExperience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>

            <h3>Additional Information</h3>
            <p>${additionalInfo}</p>
        `;

        // Display the resume
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove('hidden');

            // Add download PDF button
            const downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download PDF';
            downloadButton.addEventListener('click', () => window.print());
            resumeOutputElement.appendChild(downloadButton);

            // Add share link button
            const shareLinkButton = document.createElement('button');
            shareLinkButton.textContent = 'Copy Shareable Link';
            shareLinkButton.addEventListener('click', async () => {
                const shareLink = `https://yourdomain.com/resumes/${personNameElement.value.replace(/\s+/g, '_')}_cv.html`;
                try {
                    await navigator.clipboard.writeText(shareLink);
                    alert('Shareable link copied to clipboard');
                } catch (error) {
                    console.error('Error copying link to clipboard:', error);
                    alert('Failed to copy shareable link');
                }
            });
            resumeOutputElement.appendChild(shareLinkButton);
        } else {
            console.error('Cannot find resume output element');
        }
    } else {
        console.error('Cannot find one or more form elements');
    }
});

