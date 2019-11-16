db.books.insert({
    "title" : "Creative Selection",
    "author" : "Ken Kocienda",
    "cover" : "https://s3.us-east-2.amazonaws.com/dev.kevinzaworski/images/41%2BncOv1ekL.jpg"
})


db.books.insert({
    "title" : "Comedy Sex God",
    "author" : "Pete Holmes",
    "cover" : "https://s3.us-east-2.amazonaws.com/dev.kevinzaworski/images/816A5yoA4TL.jpg"
})

db.projects.insert({
    "projectTitle" : "Guitar Tech",
    "projectDescription" : "I built this web application to track and log the maintence of my guitars since I kept forgetting when I changed my strings last or the last time I took it into to get serviced. The front end was built using React and the back end runs ontop of a Node.js Express server.",
    "links" : [{
        "backend" : "https://github.com/kevinnnz/Guitarapp_Backend",
        "frontend" : "https://github.com/kevinnnz/GuitarApp_Frontend",
        "demo" : "https://guitar-tech-app-demo.netlify.com/"
    }]
})

db.projects.insert({
    "projectTitle" : "kevinnnz.github.io",
    "projectDescription" : "This is my portfolio site. I orignally built it ontop of Jekyll but switched over to a Vue.js front end with a Nodejs Express back end to make it easier to update and maintain as a whole.",
    "links" : [{
        "frontend" : "https://github.com/kevinnnz/kevinnnz.github.io"
    }]
})