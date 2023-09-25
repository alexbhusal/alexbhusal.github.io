var i = 0;
var txt='Alex Bhusal'
// var txt = ' Om deva deva om deva deva namah Namaho namah om Om deva deva Om deva deva namah Namaho namah om Mehsoos khud ko maine kiya Jab tu ne chhua Om deva deva Om deva deva namah Namaho namah om Ishq humara nahi ye fitoor hai Rishta purana koi toh zaroor hai Aake mile hain usi ke toh vaaste Ye raaste, ye raaste Tu hai hawaon ka jhonka Main aag hoon Tu raagdaari hai meri Main raag hoon Main jee raha hoon tere intezar mein Aawaaz de, aawaaz de Teri saraaye dhoondh raha tha Mera banjaara mann Sab such mera karke fanaa Karta hoon main hawan Om deva deva Om deva deva namah Namaho namah om Om deva deva Om deva deva namah Namaho namah om';
var speed = 400;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

}
