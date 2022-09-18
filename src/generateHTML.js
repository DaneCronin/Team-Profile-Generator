// Generate Cards for each team member for the team profile

// Build Manager card
const managerCard = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class= "card">
            <div class= "card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>

            <div class="card-body">
                <p class= "id">ID: ${manager.id}</p>
                <p class= "email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class= "officeNumber">Office Number: ${manager.officeNumber}</p>
            </div>

        </div>
    </div>
    `;
}


// Build Engineer card
const engineerCard = function(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class= "card">
            <div class= "card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>

            <div class="card-body">
                <p class= "id">ID: ${engineer.id}</p>
                <p class= "email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class= "github">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>

        </div>
    </div>
    `;
}

// Build Intern card
const internCard = function(intern) {
    return `
    <div class="col-4 mt-4">
        <div class= "card">
            <div class= "card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>

            <div class="card-body">
                <p class= "id">ID: ${intern.id}</p>
                <p class= "email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class= "school">School: ${intern.school}</p>
            </div>

        </div>
    </div>
    `;
}

//Function to push all generated team array data to page.
generateHTML = (data) => {
      // array for cards 
      pageArray = []; 

      for (let i = 0; i < data.length; i++) {
          const employee = data[i];
          const role = employee.getRole(); 
  
  
          // call manager function
          if (role === 'Manager') {
              const generateManager = managerCard(employee);
  
              pageArray.push(generateManager);
          }
  
          // call engineer function
          if (role === 'Engineer') {
              const generateEngineer = engineerCard(employee);
  
              pageArray.push(generateEngineer);
          }
  
          // call intern function 
          if (role === 'Intern') {
              const generateIntern = internCard(employee);
  
              pageArray.push(generateIntern);
          }
          
      }
  
      // joining strings 
      const employeeCards = pageArray.join('')
  
      // return to generated page
      const generateTeam = generatePage(employeeCards); 
      return generateTeam;
  
  }



// generate html page - HTML Page layout
const generatePage = function (employeeCards) {   
    console.log("Page has been created!")


    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
     
    </head>


    <body>

        <header>
            <h1>Team Profile</h1>
      
        </header>

        <main>
            <div>
                <div>
                 ${employeeCards}
                 </div>
            </div>
           
        </main>
        
    </body>
   <script src="https://code.jquery.com/jquery-3.6.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  `;
  }

// export to index
module.exports = generateHTML; 