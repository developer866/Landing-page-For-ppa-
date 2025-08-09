import express from 'express'
import {get,merge} from 'lodash'

import { getUserbySessionToken } from '../db/users'


export const ISauthenticated = async (req:express.Request,res:express.Response ){
    try{}
    catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}