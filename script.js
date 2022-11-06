const ticketPrice = 9;
const discountArr = [5,7,9,11];
let totalCost;


document.write(`Actual cost per Ticket : $${ticketPrice}<br><br>`);

document.write(`Four Seats are eligible for festival discount!! <br><br>`);


let promptFun = () =>{

 
    
let bookedSeats;

bookedSeats = prompt(`Enter the numuber of seats to be booked :` );


let seats = parseInt(bookedSeats);

function calculateCost (){
    return (seats * ticketPrice);
}

let x = parseInt(calculateCost());

if (seats < 2){
    document.write("Total number of ticket you have Booked : 1 <br/><br/>" );
    document.write('Your Booked cost :' + ticketPrice + "<br/><br/>");
    document.write("Thank you for use our service!");
}

else if (seats > 6){
    document.write("Sorry !, Booking Is Not Available ");
}

else {
    let Cost;
    let totalAmount;
    let calculation;
    let number;
    switch (seats){
        case 3 :
            calculation = 3 * 9;
            Cost = parseInt(calculation);
            number = parseInt(discountArr[0]);
            totalAmount = (number/100)*ticketPrice;
            totalAmount = ticketPrice - totalAmount;

            document.write("Total number of ticket you have Booked : 3 <br/><br/>" );
            document.write("After applied the festival Discount : 5% <br/><br/>");
            
            
            
            document.write("Your Booked cost is : " + totalAmount + "<br/><br/>");

            document.write("Thank you for use our service!");

        case 4 :

            calculation = 4 * 9;
            Cost = parseInt(calculation);
            number = parseInt(discountArr[1]);
            totalAmount = (number/100)*ticketPrice;
            totalAmount = ticketPrice - totalAmount;
    
            document.write("Total number of ticket you have Booked : 4 <br/><br/>" );
            document.write("After applied the festival Discount : 7% <br/><br/>");
                
                
                
            document.write("Your Booked cost is : " + totalAmount + "<br/><br/>");
    
            document.write("Thank you for use our service!");
            break;

        case 5 :
            
            calculation =  5 * 9;
            Cost = parseInt(calculation);
            number = parseInt(discountArr[2]);
            totalAmount = (number/100)*ticketPrice;
            totalAmount = ticketPrice - totalAmount;
    
            document.write("Total number of ticket you have Booked : 5 <br/><br/>" );
            document.write("After applied the festival Discount : 9% <br/><br/>");
                
                
                
            document.write("Your Booked cost is : " + totalAmount + "<br/><br/>");
    
            document.write("Thank you for use our service!");
            break;


        case 6 :
            calculation = 6 * 9;
            Cost = parseInt(calculation);
            number = parseInt(discountArr[3]);
            totalAmount = (number/100)*ticketPrice;
            totalAmount = ticketPrice - totalAmount;
    
            document.write("Total number of ticket you have Booked : 6 <br/><br/>" );
            document.write("After applied the festival Discount : 11% <br/><br/>");
                
                
                
            document.write("Your Booked cost is : " + totalAmount + "<br/><br/>");
    
            document.write("Thank you for use our service!");
            break;
    }
}

}