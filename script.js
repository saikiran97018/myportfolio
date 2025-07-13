// Function to show toast notifications
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    try {
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // In production, replace this with your Vercel API endpoint
        // For demo purposes, we'll simulate an API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Reset form
        form.reset();
        
        // Show success message
        showToast('Message sent successfully!', 'success');
        
    } catch (error) {
        showToast('Failed to send message. Please try again.', 'error');
    } finally {
        // Reset button state
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
});

// Handle resume download
document.getElementById('downloadResume').addEventListener('click', () => {
    // In a real application, this would point to your resume file
    // For now, we'll simulate the download
    showToast('Resume download started!', 'success');
    
    // Simulate download
    setTimeout(() => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1Bg39Df-9stRAsVutsjB08euq0ujkuYR7/view?usp=drive_link';
        link.download = 'Mahanthi_Saikiran_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 1000);
});