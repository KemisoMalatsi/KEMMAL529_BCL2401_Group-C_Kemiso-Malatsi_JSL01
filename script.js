function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation 
    
    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (/^pet_\d{4}\S+$/.test(input)) {
            result = 'Valid Syntax 🟢';
        } else {
            result = 'Invalid syntax 🔴';
        }

        document.getElementById('result').innerText = result;
}


