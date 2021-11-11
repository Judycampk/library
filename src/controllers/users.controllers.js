const mysqlConnection = require('../config/db.config');


//crear usuario
const createUser = (req, res) => {

    let {email,password,nombre} = req.body;
       
    mysqlConnection.query('INSERT INTO `usuario`(`email`, `password`,`nombre`) VALUES (?,?,?)',[email,password,nombre], (err, rows) => {
        if(!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });  
  }

// modificar usuario

const modifyUser = (req, res) => {

  let {email,password,nombre,id} = req.body;

  mysqlConnection.query('UPDATE usuario SET email = ?, password = ?, nombre = ? WHERE id = ?',[email,password,nombre,id], (err, rows) => {
      if(!err) {
          // console.log(rows);
      res.json({"results":rows})
      } else {
        console.log(err);
      }
    });
}


// eliminar usuario


const deleteUser = (req, res) => {

  let {id} = req.body;

  mysqlConnection.query('DELETE FROM usuario WHERE id = ?',[id], (err, rows) => {
      if(!err) {
          // console.log(rows);
      res.json({"results":rows})
      } else {
        console.log(err);
      }
    });
}


//obtener datos
  const getData = (req, res) => {

    mysqlConnection.query('SELECT * FROM `usuario`', (err, rows) => {
        if(!err) {
            // console.log(rows);
        res.json({"results":rows})
        } else {
          console.log(err);
        }
      }); 
  }

  //exportando los controladores
  exports.createUser = createUser;
  exports.modifyUser = modifyUser;
  exports.deleteUser = deleteUser;
  exports.getData = getData;