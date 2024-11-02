interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    skills: string;
    experience?: string;
  }
  
function displayResume(data: ResumeData) {
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
    
    if (resumeOutput) {
      resumeOutput.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Education:</strong> ${data.education}</p>
        <p><strong>Skills:</strong> ${data.skills}</p>
        ${data.experience ? `<p><strong>Experience:</strong> ${data.experience}</p>` : ''}
      `;
    }
  }
  
  function handleSubmit(event: Event) {
    event.preventDefault(); 
  
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  
    const resumeData: ResumeData = {
      name,
      email,
      phone,
      education,
      skills,
      experience
    };
  
    displayResume(resumeData);
  }
  
const form = document.getElementById('resumeForm') as HTMLFormElement;
  if (form) {
    form.addEventListener('submit', handleSubmit);
  }
  