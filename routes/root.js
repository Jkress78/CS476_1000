const express = require('express');
const router = express.Router();
const path = require('path');
const authController = require('../controllers/loginController');
const logoutController = require('../controllers/logoutControler');

/*

Template for adding new pages that are servable from the webserver

Replace the fileName with the name of your webpage without touching anything else

router.get('/fileName(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'fileName.html'));
});

*/



//Serve a page, lacking images and other files
//semesterView page and will be treated as index page
router.get('^/$|index(.html)?|semesterView(.html)', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

//monthView page
router.get('/monthView(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'monthView.html'));
});

//login page get html
router.get('/login(.html)?', (req, res) => {
    res.render(path.join(__dirname, '..', 'views', 'login.html'),{});
});

//login page post login
router.post('/login(.html)?', authController.handleLogin);

//logout
router.get('/logout', logoutController.handleLogout);


//delete page
router.get('/delete(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'delete.html'));
});

//deleteConfirm page
router.get('/confirm(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'confirm.html'));
});


//add page
router.get('/add(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add.html'));
});

//maintenance page
router.get('/maintenance(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'maintenance.html'));
});

//edit page
router.get('/edit(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'edit.html'));
});






module.exports = router;
