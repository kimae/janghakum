$(function(){

	//Enter key is pressed on keyword
	$("input").keypress(function(e) {
		if(e.which == 13) {
			$(".btn.login-btn").trigger("click");
		}
	});

	$(".btn_login").on("click", function() {
		var formdata = $(".form_login").serialize();
		$.ajax({
			type : 'POST',
			url : '/ajax/login_db.php',
			data : formdata
		})
		.success(function(data) {
			var result = jQuery.parseJSON(data);
			if(result['state']=='success' && !result.message) {
				console.log("로그인 완료");
				location.href='../main.php';
			}
			else if(result['state']=='success' && result.message)
				alert("아이디/비밀번호가 일치하지 않습니다.");
			else {
				alert("아이디/비밀번호를 입력해주세요.");
			}
		})
		.fail(function(xhr, status, error) {
			alert(xhr.responseText);
		});
	});




});