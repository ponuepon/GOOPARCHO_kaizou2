
// ここからグーーーーーーーーー●●
$("#gu_btn").on("click", function(){
    
    var random =Math.floor(Math.random()*3);
   
    
    if (random===0){
        console.log('グー');
        $("#pc_hands").text("グー");
        $("#judgment").text("あいこ！");
        // $("h1").css("color", "red");
    
    }
    
    else if(random===1){
        console.log('チョキ');
        $("#pc_hands").text("チョキ");
        $("#judgment").text("あなたの勝ち！");
    }
    
    else if(random===2){
        console.log('パー');
        $("#pc_hands").text("パー");
        $("#judgment").text("あなたの負け！");
    }
    
        
    })
// ここまでグーーーーーーーーー●●

    
// ここからちょきーーーーーーーーーーーーー●●
$("#cho_btn").on("click", function(){
    
        var random =Math.floor(Math.random()*3);
        console.log(random);
       
        
        if (random===0){
            console.log('グー');
            $("#pc_hands").text("グー");
            $("#judgment").text("あなたの負け！");
            // $("h1").css("color", "red");
        
        }
        
        else if(random===1){
            console.log('チョキ');
            $("#pc_hands").text("チョキ");
            $("#judgment").text("あいこ！");
        }
        
        else if(random===2){
            console.log('パー');
            $("#pc_hands").text("パー");
            $("#judgment").text("あなたの勝ち！");
        }
        
            
        })
// ここまでちょきーーーーーーーーーーーーー●●


// ここからパーーーーーーーーーーーーーー●●
        $("#par_btn").on("click", function(){
    
            var random =Math.floor(Math.random()*3);
            console.log(random);
           
            
            if (random===0){
                console.log('グー');
                $("#pc_hands").text("グー");
                $("#judgment").text("あなたの勝ち！");
                // $("h1").css("color", "red");
            
            }
            
            else if(random===1){
                console.log('チョキ');
                $("#pc_hands").text("チョキ");
                $("#judgment").text("あなたの負け！");
            }
            
            else if(random===2){
                console.log('パー');
                $("#pc_hands").text("パー");
                $("#judgment").text("あいこ！");
            }
            
                
            })

// ここまでパーーーーーーーーーーーーーー●●