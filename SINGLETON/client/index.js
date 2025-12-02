const Principal=require("..principal/principal");
function suspend(studentName){
//     let principal=new Principal("Nitesh");
//     let principal2=new Principal("Ritik")
    let principal=Principal.getPrincipal();
    principal.suspend(studentName);
}
function notify(){
    // let principal=new Principal("Veer")
    // principal.notify("school bnd rhege abb nachooo")
}