function generateHTML(profile) {

  const colors = {
    Green: {
      wrapperBackground: "#E6E1C3",
      headerBackground: "#C1C72C",
      headerColor: "black",
      photoBorderColor: "black"
    },
    Blue: {
      wrapperBackground: "#5F64D3",
      headerBackground: "#26175A",
      headerColor: "white",
      photoBorderColor: "#73448C"
    },
    Pink: {
      wrapperBackground: "#879CDF",
      headerBackground: "#FF8374",
      headerColor: "white",
      photoBorderColor: "#FEE24C"
    },
    Red: {
      wrapperBackground: "#DE9967",
      headerBackground: "#870603",
      headerColor: "white",
      photoBorderColor: "white"
    }
  }

    return `<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>Document</title>
        <style>
            @page {
              margin: 0;
            }
          *,
          *::after,
          *::before {
          box-sizing: border-box;
          }
          html, body {
          padding: 0;
          margin: 0;
          }
          html, body, .wrapper {
          height: 100%;
          }
          .wrapper {
          background-color: ${colors[profile.color].wrapperBackground};
          padding-top: 100px;
          }
          body {
          background-color: white;
          -webkit-print-color-adjust: exact !important;
          font-family: 'Cabin', sans-serif;
          }
          main {
          background-color: #E9EDEE;
          height: auto;
          padding-top: 30px;
          }
          h1, h2, h3, h4, h5, h6 {
          font-family: 'BioRhyme', serif;
          margin: 0;
          }
          h1 {
          font-size: 3em;
          }
          h2 {
          font-size: 2.5em;
          }
          h3 {
          font-size: 2em;
          }
          h4 {
          font-size: 1.5em;
          }
          h5 {
          font-size: 1.3em;
          }
          h6 {
          font-size: 1.2em;
          }
          .photo-header {
          position: relative;
          margin: 0 auto;
          margin-bottom: -50px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          background-color: ${colors[profile.color].headerBackground};
          color: ${colors[profile.color].headerColor};
          padding: 10px;
          width: 95%;
          border-radius: 6px;
          }
          .photo-header img {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          object-fit: cover;
          margin-top: -75px;
          border: 6px solid ${colors[profile.color].photoBorderColor};
          box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
          }
          .photo-header h1, .photo-header h2 {
          width: 100%;
          text-align: center;
          }
          .photo-header h1 {
          margin-top: 10px;
          }
          .links-nav {
          width: 100%;
          text-align: center;
          padding: 20px 0;
          font-size: 1.1em;
          }
          .nav-link {
          display: inline-block;
          margin: 5px 10px;
          }
          .workExp-date {
          font-style: italic;
          font-size: .7em;
          text-align: right;
          margin-top: 10px;
          }
          .container {
          padding: 50px;
          padding-left: 100px;
          padding-right: 100px;
          }

          .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 20px;
            margin-bottom: 20px;
          }

          .card {
            padding: 20px;
            border-radius: 6px;
            background-color: ${colors[profile.color].headerBackground};
            color: ${colors[profile.color].headerColor};
            margin: 20px;
          }
          
          .col {
          flex: 1;
          text-align: center;
          }

          a, a:hover {
          text-decoration: none;
          color: inherit;
          font-weight: bold;
          }

          @media print { 
            body { 
              zoom: .75; 
            } 
          }
        </style>
        <body>
          
        <div class="wrapper">
      
        <div class="photo-header">
          <img src="${profile.avatar_url}" alt="Profile Picture">
          <h1>Hi!</h1>
          <h1>My name is ${profile.name}</h1>
          <h2>I currently work at ${profile.company || "an undetermined place."}</h2>
          <ul class="links-nav">
            <li class="nav-link"><a href="https://www.google.com/maps/place/${
              profile.location || 'No location provided in GitHub'
            }"><i class="fas fa-map" aria-hidden="true"></i> ${
      profile.location
    }</a></li>
            <li class="nav-link"><a href="${
              profile.html_url
            }"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a></li>
            <li class="nav-link"><a href="${
              profile.blog
            }"><i class="fab fa-blogger"></i> Blog</a></li>
          </ul>        
        </div>
        <main>
        <div class="container">
          <h4>${profile.bio || "I have no Bio in GitHub."}</h4>
          <div class="row">
          <div class="col">
          <div class="card">
          <h4>Public Repositories</h4>
          <p>${profile.public_repos}</p>
          </div>
          </div>
          <div class="col">
          <div class="card">
          <h4>Followers</h4>
          <p>${profile.followers}</p>
          </div>
          </div>
          </div>
          
          <div class="row">
          <div class="col">
          <div class="card">
          <h4>GitHub Stars</h4>
          <p>${profile.starCount}</p>
          </div>
          </div>
          <div class="col">
          <div class="card">
          <h4>Following</h4>
          <p>${profile.following}</p>
          </div>
          </div>
          </div>
        </div>
        </main>
        </div>
      </body>`;
}

module.exports = generateHTML;