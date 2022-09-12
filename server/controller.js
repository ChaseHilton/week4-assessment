module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        
    },

    getFortune: (req, res) => {
        const fortune = ["A beautiful, smart, and loving person will be coming into your life.",
        "A dubious friend may be an enemy in camouflage.",
        "A faithful friend is a strong defense.",
        "A feather in the hand is better than a bird in the air.",
        "A fresh start will put you on your way."]

        let randomIndex = Math.floor(Math.random() * fortune.length)
        let randomFortune = fortune[randomIndex]
        console.log(randomFortune)

        res.status(200).send(randomFortune);
    },

    getAdvice: (req, res) => {
        const advice = ["What you're supposed to do when you don't like a thing is change it. If you can't change it, change the way you think about it. Don't complain.", "Try to be a rainbow in someone's cloud.", "Never miss a good chance to shut up.", "We cannot change the cards we are dealt, just how we play the hand.", "Never ruin an apology with an excuse."]

        let randomIndex = Math.floor(Math.random() * advice.length)
        let randomAdvice = advice[randomIndex]
        console.log(randomAdvice)

        res.status(200).send(randomAdvice);
    }

}