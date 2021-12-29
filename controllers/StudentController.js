//import model
const Student = require("../models/Student")

class StudentController {
    async index(req,res){
        const students = await Student.all()

        const data ={
            message : "Menampilkan data student",
            data : students,
        };
        res.status(200).json(data);
    }

    async store(req,res){
        const student = await Student.create(req.body)

        const data ={
            message : `Menambahkan data student:`,
            data : student,
        };
        res.json(data);
    }

    update(req,res){
        const {id} = req.params;
        const {nama} = req.body;

        student.splice(id,1,nama)
        const data = {
            message :`Mengedit data student id ${id}, nama ${nama}`,
            data : [student]
        }
        res.json(data);
    }

    destroy(req,res){
        const {id} = req.params;
        
        student.splice(id,1)
        const data = {
            message : `Menghapus data student id ${id}`,
            data : [student],
        }
        res.json(data);
    }
}

//membuat object controller
const object = new StudentController;

//export controller
module.exports = object;