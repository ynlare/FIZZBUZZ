for (var number = 1; number <= 100; number++) {
        var message = ""; 
          // Message to display, display empty
        if (number % 3 === 0) {
           // Number divisible by 3: add "Fizz" to the message
            message += 'Fizz';
        }
        if (number % 5 === 0) {
           // Number divisible by 5: add "Buzz" to the message
            message += 'Buzz';
        }
        if (message === "") {
            // If message is empty, the number is not divisible by 3 or 5:
            // the displayed message will be the number
            message = number;
        }
        console.log(message);
    }