const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth-middleware.js');
const UserController = require('../controllers/user.controller.js');
const multerMiddleware = require('../middlewares/multer.js');
const multer = require('multer');

const userController = new UserController();

// 회원가입 인증 이메일 발송 기능
router.post('/mail', userController.userMail);

// 이메일 중복검사
router.get('/checkEmail', userController.checkEmail);

// 닉네임 중복검사
router.get('/checkNickname', userController.checkNickname);

// 회원가입
router.post('/signup', userController.signup);

// // 로그인
router.post('/login', userController.login);

// // 로그인 테스트
router.post('/login/test', authMiddleware, userController.authMiddlewareTest);

// // 로그아웃
router.post('/logout', userController.logout);

module.exports = router;
