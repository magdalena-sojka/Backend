import express from 'express';
import * as BookController from './../controllers/books.controller';

const router = express.Router();

router.route('/books').get(BookController.getAllBooks);

router.route('/books/:id').get(BookController.getBookById);

router.route('/books').post(BookController.createBook);

router.route('/books/:id').put(BookController.updateBook);

router.route('/books/:id').delete(BookController.deleteBook);

export default router;