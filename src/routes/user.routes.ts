const userRouter = require("express").Router();
import { findAll, findById, updateUser, deleteObject } from '../controllers/user.controller';
import verifySignUp from '../middleware/auth.middleware';

userRouter.use(verifySignUp.verifyToken)
userRouter.get('/', verifySignUp.isModeratorOrAdmin, findAll)
userRouter.get('/:id', verifySignUp.isModeratorOrAdmin, findById)
userRouter.put('/:id', verifySignUp.isAdmin, updateUser)
userRouter.delete('/:id', verifySignUp.isAdmin, deleteObject)

export default userRouter;