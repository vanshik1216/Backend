class Principal{
    instance=null
    principal=null
    _constructor(name){
        this.principal=name
    }
    static getPrincipal(){
        if(!instance){
            let principal=new Principal()
            instance=principal
           
        }
        return instance
       
    }
    createCurriculam(){

    }
    resticateStudents(){

    }
    suspendStudent(days){

    }
    notify(message){

    }
}
module.exports=Principal;