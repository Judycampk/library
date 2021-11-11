const mysqlConnection = require('../config/db.config');

//crear tarea
const createTask = (req, res) => {

    let {tarea,id_usuario,estado} = req.body;
       
    mysqlConnection.query('INSERT INTO `todos`(`tarea`, `id_usuario`,`estado`) VALUES (?,?,?)',[tarea,id_usuario,estado], (err, rows) => {
        if(!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });  
  }

// Modificar tarea
const modifyTask = (req, res) => {

    let {tarea,estado} = req.body;
    let {id} = req.params;
    // console.log(id);

    mysqlConnection.query('UPDATE `todos` SET `tarea`= ?,`estado`= ? WHERE `id_usuario` = ?',[tarea,estado,id], (err, rows) => {
        if(!err) {
            // console.log(rows);
        res.json({"results":rows})
        } else {
          console.log(err);
        }
      });
  }

// eliminar tarea
const deleteTask = (req, res) => {

    let {id} = req.params;

    mysqlConnection.query('DELETE FROM todos WHERE id_usuario = ?',[id], (err, rows) => {
        if(!err) {
            // console.log(rows);
        res.json({"results":rows})
        } else {
          console.log(err);
        }
      });
  }

  //obtener tarea
const getTask = (req, res) => {

    mysqlConnection.query('SELECT * FROM `todos`', (err, rows) => {
        if(!err) {
            // console.log(rows);
        res.json({"results":rows})
        } else {
          console.log(err);
        }
      }); 
  }

  exports.createTask = createTask;
  exports.getTask = getTask;
  exports.modifyTask = modifyTask;
  exports.deleteTask = deleteTask;