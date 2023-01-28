//const express = require ('express') 

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import { Configuration, Configuration,OpenAIApi } from 'openai'

dotenv.config()

const Configuration = new Configuration({
    apikey:process.env.OPENAI_API_KEY
})
const app = express()

const openai = new OpenAIApi(Configuration)
app.use

app.listen(5000,console.log('connected on port 5000'))
