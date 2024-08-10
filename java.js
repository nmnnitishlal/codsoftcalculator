let input=document.getElementById("input");
document.addEventListener("onclick",()=>display(num))
document.addEventListener("onclick",()=>del)
document.addEventListener("onclick",()=>ans)
document.addEventListener("onclick",()=>clears)
        function display(num){
            input.value+=num       
        }
        function del(){
            input.value=input.value.slice(0,-1)
        }
        function ans(){
            try{
                input.value=eval(input.value)
                
            }
            catch(err){
                alert("Invalid")
                input.value=""
            }
            
        }
        function clears(){
            input.value=""
        }