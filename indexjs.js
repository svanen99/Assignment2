document.querySelector("h1").textContent = "Hero or Villain";

function welcomeSlide() {
    console.log("Psst! If you have a bad memory, then you can look here to see all of the choices you've made!");
}
welcomeSlide();

let userName;
let lastDecision;
let gotRobbed;
let walletDecision;
let necklaceDecision;
let playAgain = true;

while (playAgain) {
    const wantToPlay = prompt("Welcome! I have a little game for you. Type 'yes' to begin the game.");

    if (wantToPlay.toLowerCase() === "yes") {
        alert("How fun, let's start!");
        userName = prompt("What is your name?")
        console.log(userName);
        pickHeroOrVillain();
    } else {
        alert("You must enter yes :/")
    }
}

function pickHeroOrVillain() {
    let yourChoice = false;


    while (!yourChoice) {
        const villainOrHero = prompt("Okay " + userName + ", you will have 2 options to move forward in your story. Do you want to be a hero or villain?");

        if (villainOrHero.toLowerCase() === "hero") {
            alert("So you want to be a hero " + userName + "? Then let us begin your story as a hero!");
            console.log(userName + " picked hero");
            yourChoice = true;
            startHeroStory();
        } else if (villainOrHero.toLowerCase() === "villain") {
            alert("Interesting choice " + userName + ". Let us see where this goes!");
            console.log(userName + " picked villain");
            yourChoice = true;
            startVillainStory();
        } else {
            alert("Please enter hero or villain.");
        }
    }
}


    
function startVillainStory() {
    let optionTwo = false;

    while (!optionTwo) {
        const villainDecision = prompt("Let the villain story begin... Once upon a time there was a villain, a villain named " + userName + ". This villain was the worst of the worst, the most evil of all evil, and blablabla. Anyways... " + userName + " was out in the town, looking for some trouble, when this super sweet lady walks by. You see that she is on her way to the bank, do you rob her? (ofcourse/nope)");

        if (villainDecision.toLowerCase() === "ofcourse") {
            alert("You picked to rob the old lady, and you took all her money! You run away as fast as you can in a cartoon-looking way. You run, laughing, but just for a moment you decide to stop and look back. BIG MISTAKE! There is a big crowd of people running after you! What do you do?!");
            optionTwo = true;
            
            let robLady;
            while (true) {
                robLady = prompt("You have 2 choices, you can either take a left and rob a hat from a small shop and try to blend into the crowd, or you can run down the alley, and hope you will find your way as you go. So, hat or alley?");
                
                if (robLady.toLowerCase() === "hat") {
                    alert("You decided to rob a hat, the hat you took was small, and red. You hide behind a small man, and when the crowd arrives you jump in. You realize pretty quick that the hat is not really working when a girl points at you and yells loud enough for a few people in the crowd to hear. BUSTED! You have nowhere to escape. And the girl has already started kicking your legs... :/");
                    alert("GAME OVER >:D ");
                    console.log(userName + " tried to blend into the crowd with a silly small hat, that, of course, didn't work. Better luck next time!");
                    gotRobbed = true;
                    break;
                } else if (robLady.toLowerCase() === "alley") {
                    alert("You decide to run down the alley, the alley is narrow and you almost don't fit. You run and run as fast as you can and you throw yourself behind a trash bin. The noises from the crowd get closer, but when you peek out from behind the bin, you can see that they are all running past, and didn't see you run in here. VICTORY!");
                    alert("Congrats! You robbed an innocent old lady :D ");
                    console.log("I don't support it, but you successfully robbed an old lady, congrats :/");
                    gotRobbed = false;
                    break;
                } else {
                    alert("I am not sure what you meant, but since we are running from a crowd and you're not making a decision, they have now caught up on you... game over :/");
                    console.log("Maybe you will win next time? <3");
                    optionTwo = true;
                    break;
                }
            }

        } else if (villainDecision.toLowerCase() === "nope") {
            alert("You decided not to rob the lady. Okay... umm.. Anyways, I guess you decide to keep on walking down town when all of a sudden you see the town hero helping the lady cross the road to the bank. Lucky you didn't rob the lady; that could have turned ugly really quick since you have the strength of a paper straw.");
            console.log(userName + " decided not to rob the lady..?");
            alert("You walk down to the town square and find yourself in the middle of a market. BINGO! Here, you can easily rob a few things. Maybe a wallet? Or some necklaces from a stand? wallet or necklace?");
            optionTwo = true;

            let otherOption;
            while (true) {
                otherOption = prompt("Wallet or necklace?");
            
                if (otherOption.toLowerCase() === "wallet") {
                    alert("You picked wallet. Now you start to look around for some open handbags, and you quickly find one. You make your way over and pretend to trip into this woman; you apologize, and she quickly says it's all right. Just in that split second, you took her wallet. That was almost too easy?");
                    alert("VICTORY! You robbed a very kind lady who probably needed that money more than you! :D ");
                    console.log(userName + " robbed a sweet woman and is probably on their way to buy something unnecessary..")
                    break;
                } else if (otherOption.toLowerCase() === "necklace") {
                    alert("You picked the necklace. You feel very comfortable in your choice and quickly make your way over to the busy necklace stand. You take a few that look the most expensive and pretend to look at them, and before you let one quickly slip into your pocket. You probably should have looked at them a bit more since you totally missed the tiny alarm that is placed on the price tag. You probably won't even make it 2m from the stand.. Oh well :)");
                    alert("GAME OVER! You necklace-stealing little thief");
                    console.log(userName + " got what they asked for >:(");
                    break;
                } else {
                    alert("Not a valid response, try again! Wallet or necklace? :)")
                }
            }

        } else {
            alert("I did not understand, try again? :)");
        }
    }
}

startVillainStory();

    

function startHeroStory() {
    let yourChoice = false;

    while (!yourChoice) {
        const heroDecision = prompt("Let the hero story begin... Once upon a time, there was this suuuuuuuuper nice hero named " + userName + ". This hero was so kind and was loved by everyone! One day, the hero " + userName + " was out and about in town, enjoying the weather when they spot a sweet old lady on their way to the bank. Do you help her walk to the bank? yes/no");

        if (heroDecision.toLowerCase() === "yes") {
            alert("You decided to help the old lady, how kind of you! Meanwhile, you grab a hold of the lady. You can see one of the town troublemakers walking by. You give them a quick, but stern look before you keep attending to the lady. When you said goodbye to the lady, you start walking up town. The weather is nice and you feel like taking a quick walk when all of a sudden, a big crowd comes running behind you. They point and scream for you to help them find a criminal. You ask no questions and run with the crowd. You have no idea who you are looking for, but the whole scenery feels exciting! BUT THEN there is a stop, and a girl is screaming. You make your way over and see that she is kicking someone with a very small and silly red hat. What do you do?");
            yourChoice = true;

            let girlDecision;
            while (true) {
                girlDecision = prompt("Do you intervene in the girl's kicking or ignore it? cheer/intervene");

                if (girlDecision.toLowerCase() === "cheer") {
                    alert("What is going on?! no! GAME OVER!");
                    console.log("I am a little disappointed..");
                    lastDecision = true;
                    break; 
                } else if (girlDecision.toLowerCase() === "intervene") {
                    alert("You picked to stop the girl, well done! The person in the hat thanks you and runs away in super speed. You feel happy, but wait.. No one is happy? You look around confused and in a few seconds a man comes up to you and tells you that the person that ran away was the criminal.. Oppsie...");
                    alert("Game over I guess :/")
                    console.log("This feels little wrong but I don´t make the rules :/");
                    lastDecision = false;
                    break;
                } else {
                    alert("Invalid choice. Please enter intervene or cheer.");
                }
            }
        } else if (heroDecision.toLowerCase() === "no") {
            alert("You picked not to help the lady? Alright... I am sure you have your reasons! You continue walking down to the town square; there is a market taking place today! You get there with a big smile on your face. You wonder which stall you´re going to visit first, the chocolate stand or maybe the stand with homemade wallets?");
            yourChoice = true;

            let marketDecision;
            while (true) {
                marketDecision = prompt("Which stall will you visit first? chocolate/wallets");

                if (marketDecision.toLowerCase() === "chocolate") {
                    alert("You picked the chocolate stand, how delightful! You buy a variety of chocolates and enjoy them as you stroll through the market. What a sweet day! You walk along, saying hello to some people before you stumble upon a small boy, he looks at you, snot running down his nose as he is trying to catch your bag of chocolates. You pull your bag away in disgust and tell the boy 'You can't just take something from someone without asking!' The kid starts screaming and crying and tries to kick your leg. What do you do?");

                    let giveOrLeave;
                    while (true) {
                        giveOrLeave = prompt("You can either give the kid some chocolates or you can walk away to prove your point. So, give or leave?");

                        if (giveOrLeave.toLowerCase() === "give") {
                            alert("VICTORY! You sure are a town hero! Maybe just a small town hero, but at least it is something!");
                            console.log("Victory!!! Even in the hardest of battles, you stay true to your kindness, good on you!");
                            break;
                        } else if (giveOrLeave.toLowerCase() === "leave") {
                            alert("You picked to leave. You, for some reason, let out a mean laugh while looking back at the crying kid once in a while. I am not really sure why you did that...");
                            alert("GAME OVER! You can always try and play again, maybe this time as the villain? :/");
                            console.log("I am not really sure what happened but GAME OVER!");
                            break;
                        } else {
                            alert("Invalid choice. Please enter give or leave.");
                        }
                    }

                    break; 
                } else if (marketDecision.toLowerCase() === "wallets") {
                    alert("You picked the wallet stand. You see a variety of wallets, from plain to fancy ones, all handmade! They all look so nice and you decide to buy two, one for yourself and one just to support the salesman! As you pay for your stuff, you hear a woman cry behind you and she tells the other person that her wallet has been stolen. You turn around and smile at her, and here you can decide if you want to give her one of your wallets or walk away? give/walk");

                    let giveOrWalk;
                    while (true) {
                        giveOrWalk = prompt("Do you give her one of your wallets or walk away? give/walk");

                        if (giveOrWalk.toLowerCase() === "give") {
                            alert("VICTORY! You sure are a generous hero! The woman thanks you with tears in her eyes.");
                            console.log("Victory!!! You've made someone's day brighter!");
                            break;
                        } else if (giveOrWalk.toLowerCase() === "walk") {
                            alert("You picked to walk. You smile and walk away, leaving the woman in distress. Perhaps not the most heroic move...");
                            alert("GAME OVER! You can always try and play again, maybe this time as the villain? :/");
                            console.log("I am not really sure what happened but GAME OVER!");
                            break;
                        } else {
                            alert("Invalid choice. Please enter give or walk.");
                        }
                    }

                    break; 
                } else {
                    alert("Invalid choice. Please enter chocolate or wallets.");
                }
            }
        } else {
            alert("Invalid choice. Please enter yes or no");
        }
    }
}

startHeroStory();