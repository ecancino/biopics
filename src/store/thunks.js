import path from 'ramda/src/path'

import request, { all } from '../helpers/request'

const dataPath = path(['data'])

export const getUser = id => request.get(`/biopics/${id}`).then(dataPath)
export const getCountries = () => request.get(`/countries`).then(dataPath)
export const getTypes = () => request.get(`/types`).then(dataPath)

export const patchUser = user => request.patch(`/biopics/${user.id}`, user)
export const findBiopics = q => request.get(`/biopics?q=${q}`).then(dataPath)

export const getUserData = id => all([ getUser(id),  getCountries(), getTypes() ])
