

function Student(name,age,lang){
    this.name=name;
    this.age=age;
    this.lang=lang;
    this.display = function(){
        document.write(this.name);
        document.write(this.age);
        document.write(this.lang);
    }
}

var student1 = new Student("mojaffor ", 29, [" Bangladesh ","India " ,"Pakistan ","Maldiv "]);
var student2 = new Student("Ripa ", 19, [" Bangladesh ","Srilanka " ,"Pakistan ","Maldiv "]);

student1.display();
student2.display();



