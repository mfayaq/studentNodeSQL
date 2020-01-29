'use strict';
const path = require("path");
// const url = require('url');
// const querystring = require('querystring');
var Student = require('../model/model');

exports.sendSearch = (req,res) => {
  // console.log(__dirname)
  res.sendFile(path.join(__dirname, "../search.html"));
} 

exports.sendHomepage = (req,res) => {
  // console.log(__dirname)
  res.sendFile(path.join(__dirname, "../index.html"));
} 

exports.list_all_Students = (req, res) => {
  
  console.log((req.query))  
  const params= req.query
  Student.getAllStudent((err, Student) => {
    // console.log('controller')
    if (err)
    res.send(err);
    // console.log('res', Student);
    res.send(Student);
  },params);
};



exports.create_a_Student = (req, res) => {
  // console.log(req.body)
  var new_Student = new Student(req.body);

  console.log(new_Student.name)

  //handles null error 
   if(!new_Student.name || !new_Student.class || !new_Student.mark || !new_Student.sex){

            res.status(400).send({ error:true, message: 'Please provide Student details' });

        }
else{
  
  Student.createStudent(new_Student, (err, Student) => {
    
    if (err)
      res.send(err);
    res.json(new_Student);
  });
}
};


exports.read_a_Student = (req, res) => {
// console.log(req.url);
  Student.getStudentById(req.params.StudentId, (err, Student) => {
    if (err)
      res.send(err);
    res.json(Student);
  });
};


exports.update_a_Student = (req, res) => {
  Student.updateById(req.params.StudentId, new Student(req.body), (err, Student) => {
    if (err)
      res.send(err);
    res.json(Student);
  });
};


exports.delete_a_Student = (req, res) => {


  Student.remove( req.params.StudentId, (err, Student) => {
    if (err)
      res.send(err);
    res.json({ message: 'Student successfully deleted' });
  });
};