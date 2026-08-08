function sendToWhatsApp(event) {
    // Form ko default tarike se reload hone se rokenge
    event.preventDefault(); 

    // Inputs se data collect karna
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let date = document.getElementById('date').value;
    
    // Select box ke option ka Text (value nahi) nikalna taaki message me clear dikhe
    let guestsElement = document.getElementById('guests');
    let guests = guestsElement.options[guestsElement.selectedIndex].text;
    
    let serviceElement = document.getElementById('service');
    let service = serviceElement.options[serviceElement.selectedIndex].text;

    // Yahan apni company ka WhatsApp number daalein (Country code ke sath, bina + lagaye)
    // Example: 919876543210
    let targetPhoneNumber = "919632190350"; 

    // WhatsApp ke liye ek clean message format banana
    let message = `Hello, I would like to book a tour.\n\n` +
                  `👤 *Name:* ${name}\n` +
                  `📱 *Phone:* ${phone}\n` +
                  `📅 *Travel Date:* ${date}\n` +
                  `👥 *Guests:* ${guests}\n` +
                  `🚗 *Service:* ${service}`;

    // Message ko URL me bhejne ke liye format (encode) karna
    let encodedMessage = encodeURIComponent(message);

    // Final WhatsApp URL
    let whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodedMessage}`;

    alert("Opening WhatsApp to send your request...");

    // Naye tab me WhatsApp open karna
    window.open(whatsappUrl, '_blank');
}


//Book Now On Whatsapp
function BookNow(event) {
    // Form ko default tarike se reload hone se rokenge
    event.preventDefault(); 

    // Inputs se data collect karna
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let pickup = document.getElementById('pickup').value;
    let drop = document.getElementById('drop').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    
    
    // Select box ke option ka Text (value nahi) nikalna taaki message me clear dikhe
    let guestsElement = document.getElementById('passanger');
    let passanger = guestsElement.options[guestsElement.selectedIndex].text;
    
    let serviceElement = document.getElementById('vehicle');
    let vehicle = serviceElement.options[serviceElement.selectedIndex].text;

    // Basic Validation
    if (name.trim() === "" || number.trim() === "" || time.trim() === "") {
        alert("Please enter your Name , Phone Number and time.");
        return; 
    }else if(pickup.trim() === "" || drop.trim() === "" || date.trim() === ""){
        alert("Please enter pickup , drop and date.");
    }else if(passanger.trim() === "" || vehicle.trim() === ""){
        alert("Please enter passanger and vehicle and date.");
    }

    // Yahan apni company ka WhatsApp number daalein (Country code ke sath, bina + lagaye)
    // Example: 919876543210
    let targetPhoneNumber = "919632190350"; 

    // WhatsApp ke liye ek clean message format banana
    let message = `Hello, I would like to book a tour.\n\n` +
                  `👤 *Name:* ${name}\n` +
                  `📱 *Phone:* ${number}\n` +
                  `📧 *Email:* ${email}\n` +
                  `📍 *Pickup Point:* ${pickup}\n` +
                  `🚩 *Drop Point:* ${drop}\n` +
                  `📅 *Date:* ${date}\n` +
                  `⏰ *Time:* ${time}\n` +
                  `👥 *Passanger:* ${passanger}\n` +
                  `🚗 *Vehicle Type:* ${vehicle}`;

    // Message ko URL me bhejne ke liye format (encode) karna
    let encodedMessage = encodeURIComponent(message);

    // Final WhatsApp URL
    let whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodedMessage}`;

    alert("Opening WhatsApp to send your request...");

    // Naye tab me WhatsApp open karna
    window.open(whatsappUrl, '_blank');
}





//Book On Mail
function BookNowOnEmail(event) {
    // Page reload hone se rokna
    event.preventDefault();

    // 2. Check karne ke liye ek alert (Agar ye alert nahi aaya, matlab button click kaam nahi kar raha)
    console.log("Email button clicked!");

    // Inputs se data collect karna
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let pickup = document.getElementById('pickup').value;
    let drop = document.getElementById('drop').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    
    
    // Select box ke option ka Text (value nahi) nikalna taaki message me clear dikhe
    let guestsElement = document.getElementById('passanger');
    let passanger = guestsElement.options[guestsElement.selectedIndex].text;
    
    let serviceElement = document.getElementById('vehicle');
    let vehicle = serviceElement.options[serviceElement.selectedIndex].text;

    let sub = "Booking"

    // Basic Validation
    if (name.trim() === "" || number.trim() === "" || time.trim() === "") {
        alert("Please enter your Name , Phone Number and time.");
        return; 
    }else if(pickup.trim() === "" || drop.trim() === "" || date.trim() === ""){
        alert("Please enter pickup , drop and date.");
    }else if(passanger.trim() === "" || vehicle.trim() === ""){
        alert("Please enter passanger and vehicle and date.");
    }

    // 1. Apna Email Address yahan daalein (jis par email receive karna hai)
    const receiverEmail = "sachinchavan9632@gmail.com"; 

    // 2. Email ka Subject banana
    const emailSubject = `New Booking Inquiry from ${name} - ${sub}`;

    let emailBody = `Hello, I would like to book a tour.\n\n` +
                  `👤 *Name:* ${name}\n` +
                  `📱 *Phone:* ${number}\n` +
                  `📧 *Email:* ${email}\n` +
                  `📍 *Pickup Point:* ${pickup}\n` +
                  `🚩 *Drop Point:* ${drop}\n` +
                  `📅 *Date:* ${date}\n` +
                  `⏰ *Time:* ${time}\n` +
                  `👥 *Passanger:* ${passanger}\n` +
                  `🚗 *Vehicle Type:* ${vehicle}`;

    // 4. Data ko URL format mein encode karna
    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);

    // 4. SMART DEVICE DETECTION 
        // Pata lagana ki user Mobile par hai ya Desktop par
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            // MOBILE ACTION: 'mailto:' use hoga taaki phone ka Mail app khule
            const mailtoURL = `mailto:${receiverEmail}?subject=${encodedSubject}&body=${encodedBody}`;
            window.location.href = mailtoURL;
        } else {
            // DESKTOP ACTION: Browser me naya tab khulega direct Gmail compose box ke sath
            const gmailWebURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${receiverEmail}&su=${encodedSubject}&body=${encodedBody}`;
            window.open(gmailWebURL, '_blank');
        }
}








//contact
function sendToWhatsAppC(event) {
    // 1. Form submit hone par page ko reload hone se rokna
    event.preventDefault();

    // 2. Input fields se data (value) nikalna
    const name = document.getElementById("name").value;
    const phone = document.getElementById("number").value;
    const email = document.getElementById("mail").value;
    const sub = document.getElementById("sub").value;
    const msg = document.getElementById("msg").value;

    // 3. Basic Validation (Check karna ki Name aur Phone khali toh nahi hai)
    if (name.trim() === "" || phone.trim() === "") {
        alert("Please enter your Name and Phone Number.");
        return; // Agar khali hai toh function yahi ruk jayega
    }

    // 4. Message ka format tayar karna (Emojis ke sath)
    const whatsappText = `👤 *Name:* ${name}\n` +
                         `📱 *Phone:* ${phone}\n` +
                         `📧 *Email:* ${email}\n` +
                         `📌 *Subject:* ${sub}\n` +
                         `💬 *Message:* ${msg}`;

    // 5. Message ko URL format mein convert karna (spaces aur special characters ko fix karne ke liye)
    const encodedText = encodeURIComponent(whatsappText);

    // 6. Apna WhatsApp Number daalein (Country code ke sath, bina + sign ke)
    const whatsappNumber = "919632190350"; // Yahan apna actual number check kar lein

    // 7. WhatsApp API ka link banana
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // 8. Naye tab mein WhatsApp open karna
    window.open(whatsappURL, "_blank");
}


//Single Service
function bookSingleService(serviceName) {
    // 1. Image me diya gaya WhatsApp number (91 + number, bina space ke)
    let targetPhoneNumber = "919632190350"; 

    // 2. Single message format banana (Image ke hisaab se)
    let message = ` ${serviceName}`;

    // 3. Message ko URL format me convert karna
    let encodedMessage = encodeURIComponent(message);

    // 4. WhatsApp ka link generate karna
    let whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodedMessage}`;

    // 5. Pop-up (Alert) dikhana
    alert("Opening WhatsApp to send your request...");

    // 6. Naye tab me WhatsApp open karna
    window.open(whatsappUrl, '_blank');
}







//Book Now On Whatsapp
function northBookNow(event) {
    // Form ko default tarike se reload hone se rokenge
    event.preventDefault(); 

    // Inputs se data collect karna
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let pickup = document.getElementById('pickup').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    
    
    // Select box ke option ka Text (value nahi) nikalna taaki message me clear dikhe
    let guestsElement = document.getElementById('passanger');
    let passanger = guestsElement.options[guestsElement.selectedIndex].text;
    
    let serviceElement = document.getElementById('vehicle');
    let vehicle = serviceElement.options[serviceElement.selectedIndex].text;

    // Basic Validation
    if (name.trim() === "" || number.trim() === "" || time.trim() === "") {
        alert("Please enter your Name , Phone Number and time.");
        return; 
    }else if(pickup.trim() === "" || date.trim() === ""){
        alert("Please enter pickup and date.");
        return;
    }else if(passanger.trim() === "" || vehicle.trim() === ""){
        alert("Please enter passanger and vehicle and date.");
        return;
    }

    // Yahan apni company ka WhatsApp number daalein (Country code ke sath, bina + lagaye)
    // Example: 919876543210
    let targetPhoneNumber = "919632190350"; 

    // WhatsApp ke liye ek clean message format banana
    let message = `Hello, I would like to book a tour.\n\n` +
                  `👤 *Name:* ${name}\n` +
                  `📱 *Phone:* ${number}\n` +
                  `📧 *Email:* ${email}\n` +
                  `📍 *Pickup Point:* ${pickup}\n` +
                  `📅 *Date:* ${date}\n` +
                  `⏰ *Time:* ${time}\n` +
                  `👥 *Passanger:* ${passanger}\n` +
                  `🚗 *Vehicle Type:* ${vehicle}`;

    // Message ko URL me bhejne ke liye format (encode) karna
    let encodedMessage = encodeURIComponent(message);

    // Final WhatsApp URL
    let whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodedMessage}`;

    alert("Opening WhatsApp to send your request...");

    // Naye tab me WhatsApp open karna
    window.open(whatsappUrl, '_blank');
}






//Book On Mail
function northBookNowOnEmail(event) {
    // Page reload hone se rokna
    event.preventDefault();

    // 2. Check karne ke liye ek alert (Agar ye alert nahi aaya, matlab button click kaam nahi kar raha)
    console.log("Email button clicked!");

    // Inputs se data collect karna
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let pickup = document.getElementById('pickup').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    
    
    // Select box ke option ka Text (value nahi) nikalna taaki message me clear dikhe
    let guestsElement = document.getElementById('passanger');
    let passanger = guestsElement.options[guestsElement.selectedIndex].text;
    
    let serviceElement = document.getElementById('vehicle');
    let vehicle = serviceElement.options[serviceElement.selectedIndex].text;


    // Basic Validation
    if (name.trim() === "" || number.trim() === "" || time.trim() === "") {
        alert("Please enter your Name , Phone Number and time.");
        return; 
    }else if(pickup.trim() === "" || date.trim() === ""){
        alert("Please enter pickup and date.");
        return;
    }else if(passanger.trim() === "" || vehicle.trim() === ""){
        alert("Please enter passanger and vehicle and date.");
        return;
    }

    let sub = "Booking"


    // 1. Apna Email Address yahan daalein (jis par email receive karna hai)
    const receiverEmail = "sachinchavan9632@gmail.com"; 

    // 2. Email ka Subject banana
    const emailSubject = `New Booking Inquiry from ${name} - ${sub}`;

    let emailBody = `Hello, I would like to book a tour.\n\n` +
                  `👤 *Name:* ${name}\n` +
                  `📱 *Phone:* ${number}\n` +
                  `📧 *Email:* ${email}\n` +
                  `📍 *Pickup Point:* ${pickup}\n` +
                  `📅 *Date:* ${date}\n` +
                  `⏰ *Time:* ${time}\n` +
                  `👥 *Passanger:* ${passanger}\n` +
                  `🚗 *Vehicle Type:* ${vehicle}`;

    // 4. Data ko URL format mein encode karna
    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);

    // 4. SMART DEVICE DETECTION 
    // Pata lagana ki user Mobile par hai ya Desktop par
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        // MOBILE ACTION: 'mailto:' use hoga taaki phone ka Mail app khule
        const mailtoURL = `mailto:${receiverEmail}?subject=${encodedSubject}&body=${encodedBody}`;
        window.location.href = mailtoURL;
    } else {
        // DESKTOP ACTION: Browser me naya tab khulega direct Gmail compose box ke sath
        const gmailWebURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${receiverEmail}&su=${encodedSubject}&body=${encodedBody}`;
        window.open(gmailWebURL, '_blank');
    }
}