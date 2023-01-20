function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        massage: document.getElementById('message').value
    }
    const serviceID = "service_jm74axt";
    const templateID = "template_369yl7p";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";
                console.log(res, "Your message sent successfully 🚀🎉")
                alert("Your message sent successfully 🚀🎉")
            }
        ).catch(
            (err) => {
                console.log(err)
            })
}