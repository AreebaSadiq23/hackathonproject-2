document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value.split(',');

    const resumePreview = document.getElementById('resume-preview');
    resumePreview.innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
        <button id="download-btn">Download Resume</button>
    `;

    document.getElementById('download-btn')?.addEventListener('click', function() {
        const resumeContent = `
            Name: ${name}\n
            Email: ${email}\n
            Phone: ${phone}\n
            Skills: ${skills.join(', ')}
        `;
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.txt';
        a.click();
        URL.revokeObjectURL(url);
    });
});
function displayResume(data) {
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = "\n        <h2>".concat(data.name, "</h2>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <p><strong>Education:</strong> ").concat(data.education, "</p>\n        <p><strong>Skills:</strong> ").concat(data.skills, "</p>\n        ").concat(data.experience ? "<p><strong>Experience:</strong> ".concat(data.experience, "</p>") : '', "\n      ");
    }
}
// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        skills: skills,
        experience: experience
    };
    displayResume(resumeData);
}
// Adding event listener to the form
var form = document.getElementById('resumeForm');
if (form) {
    form.addEventListener('submit', handleSubmit);
}
