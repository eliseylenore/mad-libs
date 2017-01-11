$(document).ready(function(){
  $("#blanks form").submit(function(){
    var townInput = $("input#town").val();
    var person1Input = $("input#person1").val();
    var adjective1Input = $("input#adjective1").val();
    var noun1Input = $("input#noun1").val();
    var noun2Input = $("input#noun2").val();
    var person2Input = $("input#person2").val();
    var verb-ing1Input = $("input#verb-ing2").val();
    var noun3Input = $("input#noun3").val();
    var verb-ing2Input = $("input#verb-ing2").val();
    var noun4Input = $("input#noun4").val();

    $(".town").text(townInput);
    $(".person1").text(person1Input);
    $(".adjective1").text(adjective2Input);
    $(".noun1").text(noun1Input);
    $(".noun2").text(noun2Input);
    $(".person2").text(person2Input);
    $(".verb-ing1").(verb-ing1Input);
    $(".noun3").(noun3Input);
    $(".verb-ing2").(verb-ing2Input);
    $(".noun4").(noun4Input);

  })
})
