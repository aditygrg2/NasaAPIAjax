var date = "none";
var photoArr = [];
$('#imgbtn').on('click',function(){
    if($('#date').val()===""){
        alert('Please enter date!');
    }
    else{
        $('#img-div').empty();
        date = $('#date').val();
        $.ajax({
            type: "GET",
            url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
            data: {
                api_key: "D9MESAn8QQeK7TgKcPrJRB2V6gV37iLF4q5MwpAQ",
                earth_date: date
            },
            success: function (data) {
                console.log(data);
                photoArr = data.photos;
                var newImg;
                if(photoArr.length===0){
                    $('#err').removeClass("hidden");
                }
                else{
                    $('#err').addClass("hidden");
                }
                for(let i=0;i<12;i++){
                    newImg = $('<img/>',{
                        src: photoArr[i].img_src,
                        alt: photoArr[i].id,
                        "class" : "w-full h-full"
                    })
                    $('#img-div').append(newImg);
                }
            }
        }).fail(function () { 
            console.log('Fetching Failed!');
         });
    }
})
