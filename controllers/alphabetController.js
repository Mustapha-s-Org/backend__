import asyncHandler from 'express-async-handler'

import Alphabet from '../models/Alphabet.js'
import { sortAlphabetically } from '../helpers/alphabetHelper.js'

// @desc    Fetch all alphabet 
// @route   GET /api/alphabet
// @access  Public 
const getAlphabet = asyncHandler(async (req, res) => {
    const alphabet = await Alphabet.find({}).select('name')
    alphabet.sort(function (a, b) {
        return sortAlphabetically(a.name, b.name)
    })
    res.json(alphabet)
})

// @desc    Get a letter by id  
// @route   GET /api/alphabet/:id
// @access  Public 
const getAlphabetById = asyncHandler(async (req, res) => {
    const letter = await Alphabet.findById(req.params.id)

    if (letter) res.json(letter)
    else {
        res.status(404)
        throw new Error('Letter not found')
    }
})



export { getAlphabet, getAlphabetById }