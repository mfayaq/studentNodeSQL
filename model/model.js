'user strict';
var sql = require('./db');

//Task object constructor



var Student = function (student) {
    this.name = student.name;
    this.class = student.class;
    this.mark = student.mark;
    this.sex = student.sex;
};

Student.createStudent =  (newStudent, result) =>{    
        sql.query("INSERT INTO student set name=?, class=?, mark=?, sex=?", [newStudent.name,newStudent.class,newStudent.mark,newStudent.sex],  (err, res)=> {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Student.getStudentById =  (StudentId, result) => {
        sql.query("Select * from student where id = ? ", StudentId,  (err, res) =>{             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};


Student.getAllStudent =  (result, obj)=> {
    let cmd = "Select * from student"
    console.log(obj)
        if (Object.keys(obj).length>0) {
            cmd+=" where "
            // console.log(typeof obj)
            Object.entries(obj).forEach(([key,val])=>{
                // console.log(val,key)
                cmd+=`${key} Like '%${val}%' `
            })
        }
        sql.query(cmd,  (err, res) => {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                //   console.log('Student : ', res);  

                 result(null, res);
                }
            });   
};
Student.updateById = (id, Student, result) => {
  sql.query("UPDATE student SET name = ? WHERE id = ?", [Student.name, id],  (err, res) => {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Student.remove = (id, result)=>{
     sql.query("DELETE FROM student WHERE id = ?", [id],  (err, res)=> {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Student;