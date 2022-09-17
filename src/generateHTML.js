generateHTML = () => {}


// generate html page - HTML Page layout
const generatePage = function () {   
    console.log("Page has been created!")


    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
     
    </head>

    
    <body>

        <header>
            <h1>Team Profile</h1>
      
        </header>

        <main>
            <div>

            </div>
           
        </main>
        
    </body>
    
    </html>
  `;
  }

// export to index
module.exports = generateHTML; 