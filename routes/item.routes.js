const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');
const ItemController = require('../controllers/item.controller');
const itemController = new ItemController();
const multerMiddleware = require('../middlewares/multer');
const multer = require('multer');

// POST : 연습용 판매글 작성
// router.post('/post', authMiddleware, itemController.postItem);

// GET: 게시글 전체 조회
router.get('/', authMiddleware, itemController.getItems);

// GET: 게시글 상세 조회
router.get('/:item_id', authMiddleware, itemController.getItem);

// DELETE: 판매글 삭제
router.delete('/:item_id', authMiddleware, itemController.deleteItem);

// 판매글 생성
router.post(
  '/',
  authMiddleware,
  multerMiddleware.array('item_images', 10),
  itemController.setItem,
);

// 판매글 수정
router.put('/:item_id', authMiddleware, itemController.updateItem);

module.exports = router;
