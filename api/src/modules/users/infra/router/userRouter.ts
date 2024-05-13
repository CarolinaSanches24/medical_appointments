import { Router } from "express";

const userRouter: Router = Router();

userRouter.post('/create', (request, response) => createUserController.execute(request, response));

userRouter.post('/login', (request, response) => loginController.execute(request, response));

// userRouter.post('/checkPassword', [userMiddleware.ensureAuthenticated()], (request, response) => checkPasswordController.execute(request, response));

// userRouter.post('/emailExists', (request, response) => emailExistsController.execute(request, response));

// userRouter.get('/me', userMiddleware.ensureAuthenticated(), (request, response) => getMeController.execute(request, response));

// userRouter.post('/refreshToken', (request, response) => refreshTokenController.execute(request, response));

// userRouter.post('/generateChangePasswordToken', (request, response) => generateChangePasswordTokenController.execute(request, response));

// userRouter.post('/changePassword', (request, response) => changePasswordController.execute(request, response));

export {userRouter};