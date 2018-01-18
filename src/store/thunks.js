import path from 'ramda/src/path'
import debounce from 'p-debounce'

import request, { all } from '../helpers/request'
import fromBiopics from '../helpers/fromBiopics'

const dataPath = path(['data'])

export const getBiopics = (page = 1) => request.get(`/biopics?_page=${page}&_limit=50`).then(fromBiopics)
export const getBiopic = id => request.get(`/biopics/${id}`).then(dataPath)
export const getCountries = () => request.get(`/countries`).then(dataPath)
export const getTypes = () => request.get(`/types`).then(dataPath)

export const patchBiopic = biopic => request.patch(`/biopics/${biopic.id}`, biopic)
export const findBiopics = debounce(q => request.get(`/biopics?q=${q}`).then(dataPath), 200)
export const deleteBiopic = biopicId => request.delete(`/biopics/${biopicId}`)

export const getBiopicData = id => all([ getBiopic(id),  getCountries(), getTypes() ])
