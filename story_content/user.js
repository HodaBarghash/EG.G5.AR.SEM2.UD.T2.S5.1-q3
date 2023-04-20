function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5voEUZl2wKf":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwA_7DzUDnBtO7ieIdCdie5_m9yTa1Ws4woNi_OU9zXQvg2gE8FXjaO1uCQsweDHc94Sg/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

