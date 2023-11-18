import express from ('express');
import path from ('path');

const app = express()
const router = express.Router();

router.use(express.static(path.join(__dirname, '..', 'static')));

// route setting
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
})

// export router
export default router;