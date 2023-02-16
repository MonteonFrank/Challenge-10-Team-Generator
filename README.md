# Challenge-10-Team-Generator

<h1>Team Generator ReadMe File<h1>

<h2><strong>Description</strong></h2>

<p>Challenge 10 consisted of using Object Oriented Programming to create an application that generated a team by using the input provided by the user. A file called "employee" was created and was used to create the other roles such as Manager, Engineer and Intern, along with a few minor adjustments with the role name. </p>
  
<p> Inquierer module was used in order to ask the user the role they would like to add. Depending the role, there are slight changes in the questions since the Engineer role asks for a Github account, the Manager role asks for a phone number and the Intern role asks for the school name.</p> 
  
<p>Additionally, Jest was used to test extending the employee class into the engineer, intern and manager clases. In these classes, there were functions which assisted in validating that the classes were extended correctly</p>
  
 <p>Once the user finishes setting up their team, the option Finish Team is displayed and the information added by the user is rendered in an HTML page. The link for the email account has the "mailto" option which opens the browser and the email default provider to send an email and for the Github account, it sends the user to the Github Account. </p>
  
 
<h2><strong>Programming Logic</strong></h2>

<p>I created the Employee class and extended it for the Manager, Engineer and Intern roles and overrided the role accordingly. I also added in each one, functions to return the name, ID, email, role, Github and phone number and used these for the testing. You will find the classes in one folder and the tests in another one but each class has a test to ensure they are working correctly. If a test is ran, all will pass, meaning their function and new objects are created successfully. </p>
  
<p>The main file is the index.js, in here, you will find an object with the questions used through the inquirer module and also they are separted by each role and summoned depending on the role tue user wants to create. Below, you will also find functions depending on the role the user selected, and the answers are stored in different arrays based on the role, this to show the specific information from each role (Engineer shows Github account, Intern shows the schoool and the Manager shows the number).</p>

<p>Apart from the 3 functions per role, there is another function to finish the team and render the information. For this section, we call the object arrays and add the content into a constant called HTML where we use literals to add the information obtained from this fuction.</p>

 <p>Lastly, we create the HTML file by using the File System module where Bootstrap was used to show the information in a specific format.</p>
  
  
<h2><strong>What did I learn?</strong></h2>

 <p>For this challenge, I spefically lerned how to use the reduce method a bit more since I struggled in showing the information the way I wanted to. Additionally, I learned about Object Oriented Programming and the great use we can have from it. </p>

<h2><strong>Video of how the ReadMe Generator works:</strong></h2>
<p>Classes and Test</p>
  
Video:[Challenge10ClassesandTest.webm](https://user-images.githubusercontent.com/112662397/219383275-ec7c0a63-134a-4473-beac-4cd0d0ba7db3.webm)
  
  
  
<p>Inputing Data and Rendering Team</p>
  
Video:[Challenge10InquirerandRenderPage.webm](https://user-images.githubusercontent.com/112662397/219384203-a6572ebd-81ff-436e-8810-83d3d863f5b6.webm)

