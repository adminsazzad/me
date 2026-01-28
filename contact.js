document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contactForm');
    const confirmation = document.getElementById('confirmation');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        // Required fields validation
        const name = form.name.value.trim();
        const phone = form.phone.value.trim();
        const message = form.message.value.trim();

        if(name === "" || phone === "" || message === ""){
            alert("দয়া করে সমস্ত * চিহ্নিত ফিল্ড পূরণ করুন।");
            return;
        }

        // Google Form submit URL
        const googleFormURL = "https://forms.gle/Cjc7Lbubi9HBnTUYA";

        // Map your form inputs to Google Form entry IDs
        const formData = new FormData();
        formData.append("entry.2005620554", name);      // Name*
        formData.append("entry.1166974658", phone);     // Phone Number*
        formData.append("entry.1045781291", form.email.value.trim()); // Email (Optional)
        formData.append("entry.839337160", message);    // Your Questions*

        // Submit data via fetch
        fetch(googleFormURL, {
            method: "POST",
            mode: "no-cors",
            body: formData
        })
        .then(() => {
            confirmation.style.display = "block";
            confirmation.textContent = "আপনার বার্তা সফলভাবে পাঠানো হয়েছে। ধন্যবাদ!";
            form.reset();
            setTimeout(() => confirmation.style.display="none", 5000);
        })
        .catch(err => {
            alert("বার্তা পাঠানো যায়নি। আবার চেষ্টা করুন।");
            console.error(err);
        });

    });

});