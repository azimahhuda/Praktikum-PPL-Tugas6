/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import LagusController from '#controllers/lagus_controller'

router.get('/', async ({ response }) => {
  return response.redirect('/lagu')
})

router.get('lagu', [LagusController, 'index'])
router.get('lagu/create', [LagusController, 'create'])
router.post('lagu', [LagusController, 'store'])
router.get('lagu/:id', [LagusController, 'show'])
