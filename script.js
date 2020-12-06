var user = getCookie("user");
var header =
	`
	<style>
		#login {
			display:none;
			text-align:center;
		}
	
		#logbuttons {
			position:fixed;
			right:10px;
		}
	
		#ProfileMisc {
			/*display:block;*/
		}
		
		.headeracc {
			display:block;
		}
		
		#logbuttons>a {
			padding:15px 10px 10px 10px;
		}
	</style>
	<div class="header" onload="check()">
			<a href="http://host3958.itelit.pro/luctisity/"><img src="http://host3958.itelit.pro/luctisity/img/icon2.png" width="150px" class="icon"></img></a>
			<div class="searcharea">
				<input type="search" placeholder="Search" class="search">
				<img src="http://host3958.itelit.pro/luctisity/img/mag_glass.png" width="35px" class="searchbtn" onclick="reset()"></img>
			</div>
			<div class="headbuttons">
				<a class="buttonhead" href><b style="color:#ccccff;">Create</b></a>
				<a class="buttonhead" href><b style="color:#ccccff;">Explore</b></a>
				<a class="buttonhead" ><b style="color:#ccccff;">Ideas</b></a>
				<a class="buttonhead" href="http://host3958.itelit.pro/luctisity/credits.php"><b style="color:#ccccff;">About</b></a>
			</div>
			<div class="headbuttons" id="ProfileMisc" style="margin-top:17px;">
				<a class="headbuttonsother"><img src="http://host3958.itelit.pro/luctisity/img/nav-notifications.png" width="30px" style="padding-top:3px;"></a>
				<a class="headbuttonsother"><img src="http://host3958.itelit.pro/luctisity/img/mystuff.png" width="30px"></a>
				<a class="headbuttonsother"><img src="http://host3958.itelit.pro/luctisity/img/settings.png" width="30px" style="padding-bottom:6px;"></a>
			</div>
			<div id="headeracc">
				<!-- <li class="accountdrop"><a href="#"><img style="margin-bottom:-12px;" width="40px" src="img/defaultuser_60x60.png"> <label id="username"><b>demo_account</b></label></a>
					  <ul class="dropdown">
						<li id="accountdrop"><a href="">Профиль</a></li><br/>
						<li id="accountdrop"><a href="">Мои работы</a></li><br/>
						<li id="accountdrop"><a href="">Настройки учётной записи</a></li><br/>
						<li id="accountdrop"><a href="">Выйти</a></li><br/>
					  </ul>
				</li> -->
				<a href="http://host3958.itelit.pro/luctisity/users/`+getCookie("user")+`.php" id="MyProfileLink2"><img style="margin-bottom:-12px;" width="40px" height="40px" src="http://host3958.itelit.pro/luctisity/img/users/`+getCookie("user")+`.png"> <label id="username"><b style="color:#ccccff;">`+getCookie("user")+`</b></label></a>
			</div>
			<div id="logbuttons">
				<a class="buttonlog" onclick="qlog()" style="cursor:pointer;"><b style="color:#ccccff;">Log In</b></a>
			</div>
		</div>
		<br/><br/><br/><br/>
		
		<div id="login">
			<div class="whitecontainer whitewarn">
				<h1>Quick Log In</h1>
				<label>Username:</label><input type="text" id="name"><br/><br/>
				<button type="submit" onclick="submit()">Log in</button>
				<button type="submit" onclick="off2()">Cancel</button>
			</div>
		</div>`

document.write(header)
check()

function off() {
	document.getElementById("warning").style.display = "none";
}

function back() {
  window.history.back();
}

function off2() {
	document.getElementById("login").style.display = "none";
}

function qlog() {
	document.getElementById("login").style.display = "block";
}

function submit() {
	var input = document.getElementById("name").value;
	setCookie("user", input)
	check();
	location.reload();
}

function reset() {
	setCookie("user", "")
	location.reload();
}

function bruh() {
	alert(user);
	alert(getCookie("user"));
}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";"
}

function getCookie(cname) {
  var user = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(user) == 0) {
      return c.substring(user.length, c.length);
    }
  }
  return "";
}

function check() {
	if (user != "") {
		document.getElementById("ProfileMisc").style.display = "block";
		document.getElementById("headeracc").style.display = "block";
		document.getElementById("logbuttons").style.display = "none";
		document.getElementById("username").innerHTML = getCookie("user");
	} else {
		document.getElementById("ProfileMisc").style.display = "none";
		document.getElementById("headeracc").style.display = "none";
		document.getElementById("logbuttons").style.display = "block";
	}
}