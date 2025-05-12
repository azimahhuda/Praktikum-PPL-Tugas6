// import type { HttpContext } from '@adonisjs/core/http'
// import Lagu from '#models/lagu'

export default class LagusController {
    // public async index({ view, session }: HttpContext) {
    //     const lagu = await Lagu.all()
    //     const flashMessages = session.flashMessages.all()

    //     return view.render('lagu/index', { lagu, flashMessages, })
    // }

    // public async create({ view }: HttpContext) {
    //     return view.render('lagu/create')
    // }

    // public async store({ request, response, session }: HttpContext) {
    //     const penyanyi = request.input('penyanyi')
    //     const judul_lagu = request.input('judul_lagu')
    //     const genre = request.input('genre')
    //     const nama_album = request.input('nama_album')
    //     const lirik = request.input('lirik')

    //     if (!penyanyi || !judul_lagu || !genre || !nama_album || !lirik) {
    //         session.flash('error', 'Songs are required')
    //         return response.redirect().back()
    //     }

    //     try {
    //         const lagu = await Lagu.create({ penyanyi, judul_lagu, genre, nama_album, lirik })

    //         session.flash('success', 'Song created successfully!')

    //         return response.redirect(`/lagu/${lagu.id}`)
    //     } catch (error) {
    //         session.flash('error', 'Failed to create song')
    //         return response.redirect().back()
    //     }
    // }

    // public async show({ params, view, response, session }: HttpContext) {
    //     const laguId = params.id
    //     const flashMessages = session.flashMessages.all()

    //     const lagu = await Lagu.find(laguId)

    //     if (!lagu) {
    //         return response.status(404).send('Lagu not found')
    //     }

    //     return view.render('lagu/show', { lagu, flashMessages })
    // }
}
