
function greeting() {

if (document.getElementById('quickName').value) { document.getElementById('newGreeting').innerHTML = 
  "Greetings " + document.getElementById("quickName").value + ", You are an inspiration to me!  I am honored to have you visit my site!";
} 
else {
      document.getElementById('newGreeting').innerHTML = 
      "Greetings person who will not type their name!  I too am a lurker at times!";
    }
    
  }

  $(function() {
$('li').hover(function() {
	$(this).css("opacity", "0.25");
	},
	function() {
	$(this).css("opacity", "1.0");
	}
);
$('li a').click(function(){
	$(this).css("background-color", "#828489");
	$(this).html("Clicked!");
});

  });
