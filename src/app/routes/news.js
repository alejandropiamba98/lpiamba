/*const dbConnection = require('../../config/dbConnection'); 

module.exports = app => { 

const connection = dbConnection(); 

//Consulta de Datos 
app.get('/', (req, res) => { 
    connection.query('SELECT * FROM news', (err, result) => { 
        console.log(result); 
        res.render('news', { 
            news: result 
            }); 
            }); 
            }); 
            //Insertar Datos 
            app.post('/news', (req, res) => { 
                const { title, news } = req.body; 
                connection.query('INSERT INTO news SET ? ', 
                { 
                    title, 
                    news 
                    } , (err, result) => { 
                        res.redirect('/'); 
                        }); 
                        }); 
};*/

                        const express = require ('express');
                        const router = express.Router();
                        const newsController= require('../controllers/newsController');


                        router.get('/news', newsController.list);
                        router.post('/news/add', newsController.add);
                        router.get('/news/delete/:id_news', newsController.delete);
                        
                        module.exports=router;