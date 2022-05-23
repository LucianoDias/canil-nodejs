import  {Router} from 'express';
import * as PageController from '../controllers/home/pageController';
import * as SearchController from '../controllers/home/searchController';

const router = Router();

// Rotas 
router.get('/',       PageController.home);
router.get('/dogs',   PageController.dogs);
router.get('/cats',   PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', SearchController.search);


export default router;