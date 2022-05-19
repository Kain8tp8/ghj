import { PrismaClient } from "@prisma/client";
import { User } from "../model"

const client = new PrismaClient()


async function findAll(): Promise<User[]> {
  return client.user.findMany()
}
//find user
async function findOne(idOne: number, email: User): Promise<User[]> {
  return client.user.find({
    data: { email: email },
    where: { id: idOne }
  })
}

async function create(user: User): Promise<User> {
  return client.user.create({
    data: {
      name:     user.name,
      surname:  user.surname,
      possword: user.possword,
      bothdey:  user.bothdey,
      email:    user.email,
      photo:    user.photo
    }
  })
}

async function remove(incomingid: number): Promise<User> {
  return client.user.delete({
    where: { id: incomingid }
  })
}

async function updata(incomingid: number, user: User): Promise<User> {
  return client.user.update({
    data: {
      name:     user.name,
      surname:  user.surname,
      possword: user.possword,
      bothdey:  user.bothdey,
      email:    user.email,
      photo:    user.photo
    },
    where: { id: incomingid }
  })
}


export default {
  findAll,
  create,
  remove,
  updata,
  findOne
}










