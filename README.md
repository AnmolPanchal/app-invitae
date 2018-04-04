# MERN Tech Stack
* MongoDB, Express, Reactjs, Node  

# To-Do
[x] - Create App & DNA Components  
[x] - Implement Search  
[x] - Implement Autosuggestion functionality  
[x] - Create table rendering  
[x] - Basic CSS Styling  
[x] - Convert TSV to JSON (Ruby script) --> Populate MongoDB collection   
[x] - Connect MongoDB Backend  
[x] - Create Routes/API  
[x] - Deploy to Heroku  
[x] - Connect Heroku with mLab Mongo  
[x] - Finish!  

# Improvements ahead
[ ] Autocomplete drop-down is not 100% responsive    
[x] Pagination & drop-down limit the results  
[x] Improve CSS Styling / Implementing more responsive transitions   
[ ] Implement React-Router to render different divs dynamically  
[ ] Write unit tests for application

Assignment
-----------------
Create a genomic variant web application that allows a user to search for genomic variants based on a gene name and display the results in a tabular view.

Features
-------------  
1) A user will enter a gene name and hit a search button which will result in a list of genomic variants for that gene being displayed.  The display of the list of genomic variants will be in a tabular view that allows the user to see the various attributes associated with each genomic variant.

2) To assist the user with entering the gene name to search for, provide a type-ahead or auto-suggest feature such that upon typing the first two or more letters of a gene name, a list of gene names that start with those characters is available for the user to choose from. 

3) Provide two API endpoints supporting the functionality listed in steps 1 and 2 so that it can be easily consumed by other applications such as command-line apps or reused by the genomic variant web application itself if it is implemented as a single-page app.

Datasource
-----------------
A zipped TSV file containing over 120K variants should serve as the list of genomic variants that the web application would search on.  Each row in the TSV file represents a genomic variant and contains a gene column that represents the gene name that this variant is associated with.  A genomic variant will have one and only one gene name that it belongs to, but multiple genomic variants can belong to the same gene name.

Implementation 
----------------------
Feel free to use any application server, web framework, programming languages, database technologies, third-party libraries, etc. that you think would be appropriate to build the genomic variant web application.

Our expectation is that you will be writing some server code, client code, and applying some basic styling to display the results in a functional web application.  The goal is to have a working app that spans the full stack INSTEAD of coming up with a design-winning UI that is beautiful but not functional.  With that said, feel free to be creative in any aspect of the application that you feel like would reveal your strengths or interests to us as your time permits.  

A more, full-featured version of a genomic variant web application that we have developed here at Invitae can be found at http://clinvitae.invitae.com.
