
//En este archivo estan realizados todos los metodos de logica y conexión del sistema CRUD
import {getConnection} from "./../database/database";

const getData = async(req,res)=>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM patient");
        res.status(200);
        res.json(result);

    }catch(error){
        res.status(400);
        res.send(error.message);

    }
}

const getUnique = async (req, res) => {
    try {
        const {document_number} = req.body;
        const connection = await getConnection();
        const result = await connection.query("SELECT name, last_name, age FROM patient WHERE document_number = ?", [parseInt(document_number)]);
    
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addData = async (req, res) => {
    try {
        const { name, last_name, document_type, document_number, birthdate, age, size, weight, imc } = req.body;
        console.log( name,last_name,document_type,document_number,birthdate,age,size,weight,imc )
        if (name === undefined || last_name === undefined || document_type === undefined || document_number === undefined || birthdate === undefined || age === undefined || size === undefined || weight === undefined || imc === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const data = {name, last_name, document_type, document_number, birthdate, age, size, weight, imc};
        const connection = await getConnection();
        await connection.query("INSERT INTO patient SET ?", data);
        res.json({ message: "data added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteData = async (req, res) => {
    try {
        const { document_number } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM patient WHERE document_number = ?", [document_number]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const updateData = async (req, res) => {
    try {
        const { name, last_name, document_type, document_number, birthdate, age, size, weight, imc } = req.body;
        console.log( name,last_name,document_type,document_number,birthdate,age,size,weight,imc )
        if (name === undefined || last_name === undefined || document_type === undefined || document_number === undefined || birthdate === undefined || age === undefined || size === undefined || weight === undefined || imc === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const data = {name, last_name, document_type, document_number, birthdate, age, size, weight, imc};
        const connection = await getConnection();
        await connection.query("UPDATE patient SET ?", [data]);
        res.json({ message: "data updated" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getData,
    getUnique,
    addData,
    deleteData,
    updateData
};