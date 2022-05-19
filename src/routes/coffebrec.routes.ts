import { User } from "../model"
import { Router } from "express";
import { handleError } from "../util";
import coffebrecService from "../service/coffebrec.service";

const router = Router()

router.get('/', async (req, res) => {
  try {
    let users = await coffebrecService.findAll()
    res.json({
      message: 'Users retrived',
      users
    })
  }
  catch (err: any) {
    res.status(500).send(handleError(err))
  }
})

router.get('/:id', async (req, res) => {
  try{
    let user = coffebrecService.findOne(req.body.id, req.body.email)
    res.json({
      message: 'User find One',
      user
    })
  }
  catch (err: any) {
    res.status(500).send(handleError(err))
  }
})

router.post('/', async (req, res) => {
  let user: User = {
    id: 0,
    name:     req.body.name,
    surname:  req.body.surname,
    bothdey:  req.body.bothdey,
    email:    req.body.email,
    possword: req.body.possword,
    photo:    req.body.photo
  }

  coffebrecService.create(user)
    .then(user => res.send({ message: 'User Create.', user }))
    .catch(err => res.status(500).send(handleError(err)))
})

router.delete('/:id', async (req, res) => {
  coffebrecService.remove(+req.params.id)
    .then(user => res.send({ message: 'Users deleted.', user }))
    .catch(err => res.status(500).send(handleError(err)))
})

router.put('/:id', (req, res) => {
  let user: User = {
    id: 0,
    name:     req.body.name,
    surname:  req.body.surname,
    bothdey:  req.body.bothdey,
    email:    req.body.email,
    possword: req.body.possword,
    photo:    req.body.photo

  }

  coffebrecService.create(user)
    .then(user => res.send({ message: 'User Create.', user }))
    .catch(err => res.status(500).send(handleError(err)))
})


export default router