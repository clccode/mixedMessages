// Mixed message creator

// Assign quotes to arrays
let quotes1 = ['He dribbles the ball up the floor...', 'They dump the puck in...', 'The QB hands the ball off...',
'The batter steps up to the plate...', 'They boot the ball up the pitch...'];
let quotes2 = ['and he passes the ball to the forward...', 'and the winger gets it out of the corner...', 
'the RB hits the line...', 'he takes a swing at it...', 'and the forward drives toward the goal...'];
let quotes3 = ['he shoots!...', 'and passes it to the center who shoots!...', 'and he breaks through the line!...', 
'and he connects with the ball!...', 'and dribbles past a defender and shoots!...'];
let quotes4 = ['and drains it for 2 points!', 'and he scores!!!', 'and the linebacker tackles him.', 
'and the ball drops into center field for a single!', 'and he beats the keeper to the top corner!'];

// Function to select a quote from an array
const selectQuote = (arr) => {
    return(arr[Math.floor(Math.random()*arr.length)]);
}

// Create the mixed message using the selectQuote function on each array
let mixedMessage = selectQuote(quotes1) + selectQuote(quotes2) + selectQuote(quotes3) + selectQuote(quotes4);

// Print the quote to the console
console.log(mixedMessage);