import {Router} from 'express';
import { userRouter } from '../../modules/users/infra/router/userRouter';

const v1Router: Router = Router();


v1Router.get('/', (req, res) => {
	res.send({message: 'ok'});
});


v1Router.use('/auth.svc/user', userRouter);

export {v1Router};