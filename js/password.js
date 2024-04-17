var pattern = {
  capital_letter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  small_letter: "abcdefghijklmnopqrstuvwxyz",
  digits: "0123456789",
  symbols: "!@#$%^&*_+{}[]/<>€~?",
};
$(document).ready(function () {
  function show(y) {
    return pattern[y][Math.floor(Math.random() * pattern[y].length)];
  }

  function generate(password = "") {
    var x = $(":checkbox");
    var input_length = $("#length").val();
    for (i = 0; i < $(":checkbox").length; i++) {
      if ($(x[i]).is(":checked")) {
        var z = $(x[i]).attr("class");
        password += show(z);
      }
    }
    if (password.length < input_length) {
      return generate(password);
    }
    var display_password = truncate_string(password, input_length);
    var screen_password = shuffle_password(display_password);
    $(".generated_password").val(screen_password);
  }
  $(".generate").click(function () {
    console.log(generate());
  });
  function truncate_string(str, num) {
    if (str.length > num) {
      let exact_password = str.substr(0, num);
      return exact_password;
    } else {
      return str;
    }
  }
  function shuffle_password(input_string) {
    const charArray = input_string.split("");
    for (let i = 0; i < charArray.length; i++) {
      const j = Math.floor(Math.random() * i);
      [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }

    const shuffled_string = charArray.join("");
    return shuffled_string;
  }

  $(".icon").click(function(){
    x = $(".generated_password");
    x.select();
    document.execCommand("copy");
    if(x.val()!=""){
      $(".copied_text").addClass("show")
      setTimeout(()=>{
       $(".copied_text").removeClass("show")
      }, 1000)
    }
  })
  
});
window.onbeforeunload = function(){
  return "Are you sure you want to reload the page"
}




