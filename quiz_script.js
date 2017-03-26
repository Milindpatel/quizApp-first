

var currentQuestion = 0;
var score = 0;
var questions = [{
	"question": " Why so JavaScript and Java have similar name? ",
	"option1": "JavaScript is a stripped-down version of Java",
	"option2": "JavaScript's syntax is loosely based on Java's",
	"option3": "They both originated on the island of Java",
	"option4": "None of the above",
	"answer": "2"
}, {
	"question": "When a user views a page containing a JavaScript program, which machine actually executes the script?",
	"option1": "The User's machine running a Web browser",
	"option2": "The Web server",
	"option3": "A central machine deep within Netscape's corporate offices",
	"option4": "None of the above",
	"answer": "1"
}, {
	"question": " ______ JavaScript is also called client-side JavaScript. ",
	"option1": "Microsoft",
	"option2": "Navigator",
	"option3": "LiveWire",
	"option4": "Native",
	"answer": "2"
}, {
	"question": "__________ JavaScript is also called server-side JavaScript. ",
	"option1": "Microsoft",
	"option2": "Navigator",
	"option3": "LiveWire",
	"option4": "Native",
	"answer": "3"
}, {
	"question": "What are variables used for in JavaScript Programs? ",
	"option1": "Storing numbers, dates, or other values",
	"option2": "Varying randomly",
	"option3": "Causing high-school algebra flashbacks",
	"option4": "None of the above",
	"answer": "1"
}, {
	"question": "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation. ",
	"option1": "Client-side",
	"option2": "Server-side",
	"option3": "Local",
	"option4": "Native",
	"answer": "1"
}, {
	"question": "Which of the following can't be done with client-side JavaScript? ",
	"option1": "Validating a form",
	"option2": "Sending a form's contents by email",
	"option3": "Storing the form's contents to a database file on the server",
	"option4": "None of the above",
	"answer": "3"
}, {
	"question": "Which of the following are capabilities of functions in JavaScript? ",
	"option1": "Return a value",
	"option2": "Accept parameters and Return a value",
	"option3": "Accept parameters",
	"option4": "None of the above",
	"answer": "3"
}, {
	"question": "Which of the following is not a valid JavaScript variable name?  ",
	"option1": "2names",
	"option2": "_first_and_last_names",
	"option3": "FirstAndLast",
	"option4": "None of the above",
	"answer": "1"
}, {
	"question": "______ tag is an extension to HTML that can enclose any number of JavaScript statements. ",
	"option1": "<SCRIPT>",
	"option2": "<BODY>",
	"option3": "<HEAD>",
	"option4": "<TITLE>",
	"answer": "1"
},{
	"question": "How does JavaScript store dates in a date object? ",
	"option1": "The number of milliseconds since January 1st, 1970",
	"option2": "The number of days since January 1st, 1900",
	"option3": "The number of seconds since Netscape's public stock offering.",
	"option4": "None of the above",
	"answer": "1"
}, {
	"question": "Which of the following attribute can hold the JavaScript version?",
	"option1": "LANGUAGE",
	"option2": "SCRIPT",
	"option3": "VERSION",
	"option4": "None of the above",
	"answer": "1"
}, {
	"question": "What is the correct JavaScript syntax to write 'Hello World'?",
	"option1": "System.out.println('Hello World')",
	"option2": "println ('Hello World')",
	"option3": "document.write('Hello World')",
	"option4": "response.write('Hello World')",
	"answer": "3"
}, {
	"question": "Choose the client-side JavaScript object: ",
	"option1": "Database",
	"option2": "Cursor",
	"option3": "Client",
	"option4": "FileUpLoad",
	"answer": "4"
}, {
	"question": " Inside which HTML element do we put the JavaScript? ",
	"option1": "<js>",
	"option2": "<scripting>",
	"option3": "<script>",
	"option4": "<javascript>",
	"answer": "3"
}, {
	"question": "Which types of image maps can be used with JavaScript?  ",
	"option1": "Server-side image maps",
	"option2": "Client-side image maps",
	"option3": "Server-side image maps and Client-side image maps",
	"option4": "None of the above",
	"answer": "2"
}, {
	"question": "Which of the following navigator object properties is the same in both   Netscape and IE? ",
	"option1": "navigator.appCodeName",
	"option2": "navigator.appName",
	"option3": "navigator.appVersion",
	"option4": "None of the above",
	"answer": "1"
}, {
	"question": "What does the <noscript> tag do? ",
	"option1": "Enclose text to be displayed by non-JavaScript browsers.",
	"option2": "Prevents scripts on the page from executing.",
	"option3": "Describes certain low-budget movies.",
	"option4": "None of the above",
	"answer": "1"
}, {
	"question": "JavaScript entities start with _______ and end with _________. ",
	"option1": "Semicolon, colon",
	"option2": "Semicolon, Ampersand",
	"option3": "Ampersand, colon",
	"option4": "Ampersand, semicolon",
	"answer": "4"
}, {
	"question": "Which of the following best describes JavaScript? ",
	"option1": "a low-level programming language.",
	"option2": "a scripting language precompiled in the browser.",
	"option3": "a compiled scripting language.",
	"option4": "an object-oriented scripting language.",
	"answer": "4"
}
];



var container = $("#quizContainer");
var questionEl = $("#question");
var opt1 = $("#opt1");
var opt2 = $("#opt2");
var opt3 = $("#opt3");
var opt4 = $("#opt4");
var nextButton = $("#nextButton");
var resultCont = $("#result1");
var startCont = $("#startQuiz");


		var index;
        var questions;
        for (var i = questions.length - 1; i > 0; i--) {
            //get random number
            index = Math.floor((Math.random() * i));
            //swapping
            temp = questions[index];
            questions[index] = questions[i];
            questions[i] = temp;
        }



//for quiz-main-second

function startQuiz(){

			var firstName = $("#txtFirstName").val();
			var lastName = $("#txtLastName").val();
			var email = $("#txtEmail").val();
			var phone = $("#txtPhone").val();
			var address = $("#txtAddress").val();
			var password = $("txtPass").val();

			var isValid = true;

			if(password == ""){
				$("#passError").text(":(Password is required.)");
				isValid = false;
			}else{
				$("#passError").text("*");
			}

 			if (firstName == "") { 
				$("#firstNameError").text(":(First Name is required.)");
				isValid = false;
			} else {
				$("#firstNameError").text("*");
			} 
			
			
			if (lastName == "") { 
				$("#lastNameError").text(":(Last Name is required.)");
				isValid = false; 
			}  else {
				$("#lastNameError").text("*");
			}
			
			  
			if (email == "") {
				$("#emailError").text(":(Email is required.)");
				isValid = false;
			} 
			else {
				$("#emailError").text("*");
			}
			
			if (address == "") {
				$("#addressError").text(":(Address is required.)");
				isValid = false;
			} 
			else {
				$("#addressError").text("*");
			}

			if (phone == "") {
				$("#phoneError").text(":(Phone number is required.)");
				isValid = false;
			} 
			else {
				$("#phoneError").text("*");
			}
			// submit the form if all entries are valid
			if (isValid) {
				window.location.href = "selectOption.html"; 
			}
	
}




//for Quiz-main-start

function loadQuestion (questionIndex) {

	
	var q = questions[questionIndex];
	questionEl.text((questionIndex + 1) + ". " + q.question);
	opt1.text(q.option1);
	opt2.text(q.option2);
	opt3.text(q.option3);
	opt4.text(q.option4);
};

function loadNextQuestion () {
	var selectedOption = $("input[type*=radio]:checked").each(function (){});
	if(!selectedOption.val()){
		alert("Please select your answer!");
		return;
	}
	var answer = selectedOption.val();
	
	if(questions[currentQuestion].answer == answer){
		score += 1;
	}
	$("input[type='radio']").attr("checked",false).checkboxradio("refresh");
	currentQuestion++;
	if(currentQuestion == 10 - 1){
		nextButton.text("Finish");
	}
	if(currentQuestion == 10){
		$("#quizContainer").hide();
		$("#result").show();
		if(score == 8|| score == 9 || score == 10){
			resultCont.show();	
			resultCont.text("You have successfully passed the test. You are now certified in JavaScript Trainning, your score is: " + score);
		}else{
			resultCont.text("Unfortunately you did not pass the test. Please try again later!");
		}
		
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
